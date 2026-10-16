"use client"

import { useEffect, useId, useRef } from "react"
import type { Transition } from "motion/react"
import {
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react"

const transition: Transition = {
  type: "spring",
  mass: 0.5,
  damping: 18,
  stiffness: 200,
}

export function SpotlightLogo() {
  const id = useId()
  const ids = {
    facePattern: `spotlight-logo-face-pattern-${id}`,
    faceFill: `spotlight-logo-face-fill-${id}`,
    stroke: `spotlight-logo-stroke-${id}`,
    radialGradient: `spotlight-logo-radial-gradient-${id}`,
  }

  const ref = useRef<SVGSVGElement>(null)

  const shouldReduceMotion = useReducedMotion()
  const isInView = useInView(ref, { margin: "80px" })

  const mouseX = useMotionValue(0.5)
  const mouseY = useMotionValue(0.5)

  const cx = useSpring(useTransform(mouseX, [0, 1], [0, 556]), {
    stiffness: 300,
    damping: 30,
    mass: 0.1,
  })

  const cy = useSpring(useTransform(mouseY, [0, 1], [0, 354]), {
    stiffness: 300,
    damping: 30,
    mass: 0.1,
  })

  useEffect(() => {
    if (shouldReduceMotion || !isInView) return
    if (window.matchMedia("(hover: none)").matches) return

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth)
      mouseY.set(e.clientY / window.innerHeight)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [shouldReduceMotion, isInView, mouseX, mouseY])

  return (
    <motion.svg
      ref={ref}
      className="h-auto w-full touch-manipulation [--pattern:color-mix(in_oklab,var(--foreground)_12%,var(--background))] [--stroke:color-mix(in_oklab,var(--foreground)_16%,var(--background))]"
      viewBox="0 0 556 354"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      initial="normal"
      whileTap="pressed"
    >
      <defs>
        <pattern
          id={ids.facePattern}
          x="0"
          y="0"
          width="10"
          height="10"
          patternUnits="userSpaceOnUse"
        >
          <path d="M-1 1l2 -2M0 10l10 -10M9 11l2 -2" stroke="var(--pattern)" strokeWidth="1" />
        </pattern>

        {/* H and M isometric top faces (fill) */}
        <motion.g
          id={ids.faceFill}
          variants={{
            normal: { transform: "translate(0px, 0px)" },
            pressed: { transform: "translate(0px, 16px)" },
          }}
          transition={transition}
        >
          {/* H Left Column Top */}
          <path d="M120 180 L60 215 L0 180 L60 145 Z" />
          {/* H Right Column Top */}
          <path d="M240 110 L180 145 L120 110 L180 75 Z" />
          {/* H Crossbar Top */}
          <path d="M180 145 L120 180 L60 145 L120 110 Z" />

          {/* M Left Column Top */}
          <path d="M400 180 L340 215 L280 180 L340 145 Z" />
          {/* M Middle Column Top */}
          <path d="M460 145 L400 180 L340 145 L400 110 Z" />
          {/* M Right Column Top */}
          <path d="M520 110 L460 145 L400 110 L460 75 Z" />
        </motion.g>

        {/* H and M isometric side/bottom stroke lines */}
        <motion.path
          id={ids.stroke}
          variants={{
            normal: {
              d: [
                // H
                "M0 180 L60 215 L120 180 L180 145 L240 110",
                "M60 215 V285 L120 250 V180",
                "M180 145 V215 L240 180 V110",
                "M0 180 V250 L60 285",
                "M120 110 V180",
                "M120 250 L180 215",
                // M
                "M280 180 L340 215 L400 180 L460 145 L520 110",
                "M280 180 V250 L340 285 V215",
                "M340 285 L400 250 V180",
                "M460 145 V215 L520 180 V110",
                "M400 250 L460 215",
                "M340 145 V215",
                "M400 110 V180",
              ].join(" "),
            },
            pressed: {
              d: [
                // H pressed (Y + 16)
                "M0 196 L60 231 L120 196 L180 161 L240 126",
                "M60 231 V285 L120 250 V196",
                "M180 161 V215 L240 180 V126",
                "M0 196 V250 L60 285",
                "M120 126 V196",
                "M120 250 L180 215",
                // M pressed (Y + 16)
                "M280 196 L340 231 L400 196 L460 161 L520 126",
                "M280 196 V250 L340 285 V231",
                "M340 285 L400 250 V196",
                "M460 161 V215 L520 180 V126",
                "M400 250 L460 215",
                "M340 161 V215",
                "M400 126 V196",
              ].join(" "),
            },
          }}
          transition={transition}
        />

        <motion.radialGradient
          id={ids.radialGradient}
          cx={cx}
          cy={cy}
          r="200"
          gradientUnits="userSpaceOnUse"
        >
          <stop className="dark:[stop-color:#fff]" stopColor="var(--color-zinc-700)" />
          <stop className="dark:[stop-color:var(--color-zinc-600)]" offset="1" stopColor="var(--color-zinc-400)" stopOpacity="0" />
        </motion.radialGradient>
      </defs>

      {/* Shadow / Base */}
      <g className="fill-background" fillRule="evenodd" clipRule="evenodd">
        {/* H shadow */}
        <motion.path
          variants={{
            normal: { d: "M0 180 L60 215 V285 L0 250 Z" },
            pressed: { d: "M0 196 L60 231 V285 L0 250 Z" },
          }}
          transition={transition}
        />
        <motion.path
          variants={{
            normal: { d: "M120 180 L180 145 V215 L120 250 Z" },
            pressed: { d: "M120 196 L180 161 V215 L120 250 Z" },
          }}
          transition={transition}
        />
        {/* M shadow */}
        <motion.path
          variants={{
            normal: { d: "M280 180 L340 215 V285 L280 250 Z" },
            pressed: { d: "M280 196 L340 231 V285 L280 250 Z" },
          }}
          transition={transition}
        />
        <motion.path
          variants={{
            normal: { d: "M400 180 L460 145 V215 L400 250 Z" },
            pressed: { d: "M400 196 L460 161 V215 L400 250 Z" },
          }}
          transition={transition}
        />
      </g>

      {/* Use layers */}
      <use href={`#${ids.faceFill}`} className="fill-background" />
      <use href={`#${ids.faceFill}`} fill={`url(#${ids.facePattern})`} />
      <use href={`#${ids.stroke}`} stroke="var(--stroke)" strokeWidth="2" strokeLinejoin="round" />
      <use href={`#${ids.stroke}`} stroke={`url(#${ids.radialGradient})`} strokeWidth="2" strokeLinejoin="round" />
    </motion.svg>
  )
}
