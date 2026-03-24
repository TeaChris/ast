'use client'

import { useEffect, useRef } from 'react'

export default function GrainOverlay() {
      const overlayRef = useRef<HTMLDivElement>(null)

      useEffect(() => {
            const el = overlayRef.current
            if (!el) return

            const handleMouseMove = (e: MouseEvent) => {
                  const cx = window.innerWidth / 2
                  const cy = window.innerHeight / 2
                  const dx = Math.abs(e.clientX - cx)
                  const dy = Math.abs(e.clientY - cy)
                  const dist = Math.sqrt(dx * dx + dy * dy)
                  const maxDist = Math.sqrt(cx * cx + cy * cy)
                  const proximity = 1 - dist / maxDist // 0 (corner) → 1 (center)
                  const baseOpacity = 0.025
                  const maxExtra = 0.055
                  el.style.opacity = String(baseOpacity + proximity * maxExtra)
            }

            window.addEventListener('mousemove', handleMouseMove)
            return () =>
                  window.removeEventListener('mousemove', handleMouseMove)
      }, [])

      return (
            <>
                  {/* SVG grain filter */}
                  <svg className="hidden">
                        <filter id="grain-filter">
                              <feTurbulence
                                    type="fractalNoise"
                                    baseFrequency="0.65"
                                    numOctaves="4"
                                    stitchTiles="stitch"
                              />
                              <feColorMatrix type="saturate" values="0" />
                        </filter>
                  </svg>

                  {/* Fixed grain overlay */}
                  <div
                        ref={overlayRef}
                        className="pointer-events-none fixed inset-0 z-9999"
                        style={{
                              opacity: 0.03,
                              animation: 'grain 0.8s steps(1) infinite',
                        }}
                  >
                        <div
                              style={{
                                    position: 'absolute',
                                    inset: '-50%',
                                    width: '200%',
                                    height: '200%',
                                    filter: 'url(#grain-filter)',
                                    backgroundColor: 'transparent',
                              }}
                        />
                  </div>
            </>
      )
}
