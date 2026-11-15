// Generates PWA/app icons from the avatar photo into src/app.
// Run: bun run ./src/scripts/build-pwa-icons.mts

import { promises as fs } from "node:fs"
import path from "node:path"
import sharp from "sharp"

const APP_DIR = path.join(process.cwd(), "src/app")
const PUBLIC_DIR = path.join(process.cwd(), "public")
const AVATAR_PATH = path.join(
  process.cwd(),
  "public/images/avatar-hafizh-ref5.png"
)

async function main() {
  const source = sharp(AVATAR_PATH)

  // Sample the corner pixel before resizing: the avatar has semi-transparent
  // edges, so every JPEG output must be flattened onto this colour to avoid
  // sharp's default black flatten.
  const { data: corner } = await source
    .clone()
    .resize(1, 1, { fit: "cover" })
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true })
  const bg = { r: corner[0], g: corner[1], b: corner[2] }

  // Square icons for manifest "any" purpose: center-crop, full bleed.
  // JPEG keeps photo icons small; PNG of a photo is ~440 KB at this size.
  const squareJpeg = await source
    .clone()
    .resize(512, 512, { fit: "cover", position: "centre" })
    .flatten({ background: bg })
    .jpeg({ quality: 86, mozjpeg: true })
    .toBuffer()

  const toJpeg = (input: Buffer, size: number) =>
    sharp(input)
      .resize(size, size)
      .jpeg({ quality: 86, mozjpeg: true })
      .toBuffer()

  // Manifest icons live in public/ and are referenced by exact path from
  // manifest.webmanifest (Next auto-routes only favicon/apple conventions).
  // Real JPEGs so the extension matches the content type.
  await fs.writeFile(
    path.join(PUBLIC_DIR, "icon-192.jpg"),
    await toJpeg(squareJpeg, 192)
  )
  await fs.writeFile(
    path.join(PUBLIC_DIR, "icon-512.jpg"),
    await toJpeg(squareJpeg, 512)
  )

  const inner = Math.round(512 * 0.8)
  const content = await source
    .clone()
    .resize(inner, inner, { fit: "cover", position: "centre" })
    .flatten({ background: bg })
    .jpeg({ quality: 86, mozjpeg: true })
    .toBuffer()

  const maskable = await sharp({
    create: {
      width: 512,
      height: 512,
      channels: 3,
      background: bg,
    },
  })
    .composite([
      {
        input: content,
        left: Math.round((512 - inner) / 2),
        top: Math.round((512 - inner) / 2),
      },
    ])
    .flatten({ background: bg })
    .jpeg({ quality: 86, mozjpeg: true })
    .toBuffer()

  await fs.writeFile(
    path.join(PUBLIC_DIR, "icon-maskable-512.jpg"),
    maskable
  )

  // Apple touch icon: iOS ignores SVG favicons, needs a bitmap.
  await fs.writeFile(
    path.join(APP_DIR, "apple-icon.jpg"),
    await toJpeg(squareJpeg, 180)
  )

  // favicon.ico: PNG-in-ICO container (Vista+ format), no extra dependency.
  // Next's image optimizer requires each embedded PNG to be RGBA, so decode
  // the flattened JPEG and re-encode as PNG with alpha channel present.
  const sizes = [16, 32, 48]
  const entries: Buffer[] = []
  for (const size of sizes) {
    entries.push(
      await sharp(squareJpeg)
        .resize(size, size)
        .ensureAlpha()
        .png()
        .toBuffer()
    )
  }

  const header = Buffer.alloc(6)
  header.writeUInt16LE(0, 0) // reserved
  header.writeUInt16LE(1, 2) // type: icon
  header.writeUInt16LE(entries.length, 4)

  const dir = Buffer.alloc(16 * entries.length)
  let offset = header.length + dir.length
  entries.forEach((entry, i) => {
    const size = sizes[i]
    dir.writeUInt8(size === 256 ? 0 : size, i * 16) // width
    dir.writeUInt8(size === 256 ? 0 : size, i * 16 + 1) // height
    dir.writeUInt8(0, i * 16 + 2) // palette
    dir.writeUInt8(0, i * 16 + 3) // reserved
    dir.writeUInt16LE(1, i * 16 + 4) // planes
    dir.writeUInt16LE(32, i * 16 + 6) // bit depth
    dir.writeUInt32LE(entry.length, i * 16 + 8)
    dir.writeUInt32LE(offset, i * 16 + 12)
    offset += entry.length
  })

  await fs.writeFile(
    path.join(APP_DIR, "favicon.ico"),
    Buffer.concat([header, dir, ...entries])
  )

  console.log("Icons written to src/app (favicon, apple) and public (manifest)")
}

main()
