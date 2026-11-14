"use client"

import { copyText } from "@/utils/copy"
import { useTiks } from "@rexa-developer/tiks/react"
import { Download, SquareDashed, Type } from "lucide-react"
import { toast } from "sonner"

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@/components/base/ui/context-menu"

import { getMarkSVG, HafizhMark } from "./hafizh-mark"
import { getWordmarkSVG } from "./hafizh-wordmark"

export function BrandContextMenu({ children }: { children: React.ReactNode }) {
  const { success } = useTiks()

  return (
    <ContextMenu>
      <ContextMenuTrigger>{children}</ContextMenuTrigger>

      <ContextMenuContent className="w-fit">
        <ContextMenuItem
          onClick={() => {
            copyText(getMarkSVG())
            toast.success("Mark as SVG copied")
            success()
          }}
        >
          <HafizhMark />
          Copy Mark as SVG
        </ContextMenuItem>

        <ContextMenuItem
          onClick={() => {
            copyText(getWordmarkSVG())
            toast.success("Logotype as SVG copied")
            success()
          }}
        >
          <Type />
          Copy Logotype as SVG
        </ContextMenuItem>

        <ContextMenuSeparator />

        <ContextMenuItem
          render={
            <a
              href="https://chanhdai.com/blog/chanhdai-brand"
              target="_blank"
              rel="noopener"
            >
              <SquareDashed />
              Brand Guidelines
            </a>
          }
        />

        <ContextMenuItem
          render={
            <a href="https://assets.chanhdai.com/chanhdai-brand.zip" download>
              <Download />
              Download Brand Assets
            </a>
          }
        />
      </ContextMenuContent>
    </ContextMenu>
  )
}

export default BrandContextMenu
