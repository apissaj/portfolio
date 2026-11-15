import { LogosCarousel } from "@/registry/components/logos-carousel"

const LOGOS = ["Acme", "Globex", "Umbrella", "Initech", "Hooli", "Stark"]

export default function LogosCarouselDemo() {
  return (
    <LogosCarousel className="w-full py-4 text-foreground">
      {LOGOS.map((logo) => (
        <span
          key={logo}
          className="font-mono text-lg font-semibold tracking-tight"
        >
          {logo}
        </span>
      ))}
    </LogosCarousel>
  )
}
