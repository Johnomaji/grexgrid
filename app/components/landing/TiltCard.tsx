'use client'

import { useRef, useEffect, ReactNode, CSSProperties } from 'react'

// Inject keyframes once into document head
function ensureKeyframes() {
  if (typeof document === 'undefined') return
  if (document.getElementById('tilt-card-keyframes')) return
  const style = document.createElement('style')
  style.id = 'tilt-card-keyframes'
  style.textContent = `
    @keyframes tc-particle {
      0%   { transform: translate(0, 0) scale(1); opacity: 1; }
      100% { transform: translate(var(--tx), var(--ty)) scale(0); opacity: 0; }
    }
    @keyframes tc-ripple {
      0%   { transform: scale(0); opacity: 1; }
      100% { transform: scale(1); opacity: 0; }
    }
  `
  document.head.appendChild(style)
}

function spawnParticles(container: HTMLElement, color: string, count: number) {
  ensureKeyframes()
  const { offsetWidth: w, offsetHeight: h } = container
  for (let i = 0; i < count; i++) {
    setTimeout(() => {
      const p = document.createElement('div')
      const size = 3 + Math.random() * 3
      const tx = (Math.random() - 0.5) * 140
      const ty = (Math.random() - 0.5) * 140
      const dur = 1.1 + Math.random() * 0.8
      Object.assign(p.style, {
        position: 'absolute',
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: '50%',
        background: `rgba(${color}, 0.9)`,
        boxShadow: `0 0 6px rgba(${color}, 0.5)`,
        left: `${Math.random() * w}px`,
        top: `${Math.random() * h}px`,
        pointerEvents: 'none',
        zIndex: '10',
        animation: `tc-particle ${dur}s ease-out forwards`,
        '--tx': `${tx}px`,
        '--ty': `${ty}px`,
      } as CSSProperties & Record<string, string>)
      container.appendChild(p)
      setTimeout(() => p.remove(), dur * 1000 + 100)
    }, i * 70)
  }
}

function spawnRipple(container: HTMLElement, x: number, y: number, color: string) {
  ensureKeyframes()
  const { offsetWidth: w, offsetHeight: h } = container
  const maxDist = Math.max(
    Math.hypot(x, y),
    Math.hypot(x - w, y),
    Math.hypot(x, y - h),
    Math.hypot(x - w, y - h),
  )
  const size = maxDist * 2
  const ripple = document.createElement('div')
  Object.assign(ripple.style, {
    position: 'absolute',
    width: `${size}px`,
    height: `${size}px`,
    borderRadius: '50%',
    background: `radial-gradient(circle, rgba(${color},0.35) 0%, rgba(${color},0.1) 40%, transparent 70%)`,
    left: `${x - maxDist}px`,
    top: `${y - maxDist}px`,
    pointerEvents: 'none',
    zIndex: '10',
    animation: 'tc-ripple 0.75s ease-out forwards',
  })
  container.appendChild(ripple)
  setTimeout(() => ripple.remove(), 800)
}

interface TiltCardProps {
  children: ReactNode
  style?: CSSProperties
  className?: string
  /** RGB triplet e.g. '200,132,26' */
  glowColor?: string
  tiltMax?: number
  enableParticles?: boolean
  particleCount?: number
  onHoverStart?: () => void
  onHoverEnd?: () => void
}

export default function TiltCard({
  children,
  style,
  className,
  glowColor = '200,132,26',
  tiltMax = 8,
  enableParticles = true,
  particleCount = 9,
  onHoverStart,
  onHoverEnd,
}: TiltCardProps) {
  const rootRef = useRef<HTMLDivElement>(null)
  const spotRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number | null>(null)
  const hovered = useRef(false)
  const tilt = useRef({ x: 0, y: 0 })
  const targetTilt = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const el = rootRef.current
    const spot = spotRef.current
    if (!el || !spot) return

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t

    const tick = () => {
      if (!hovered.current) return
      tilt.current.x = lerp(tilt.current.x, targetTilt.current.x, 0.14)
      tilt.current.y = lerp(tilt.current.y, targetTilt.current.y, 0.14)
      el.style.transform = `perspective(900px) rotateX(${tilt.current.x}deg) rotateY(${tilt.current.y}deg) translateY(-6px)`
      rafRef.current = requestAnimationFrame(tick)
    }

    const onEnter = () => {
      hovered.current = true
      el.style.transition = 'box-shadow 0.4s'
      spot.style.opacity = '1'
      rafRef.current = requestAnimationFrame(tick)
      if (enableParticles) spawnParticles(el, glowColor, particleCount)
      onHoverStart?.()
    }

    const onLeave = () => {
      hovered.current = false
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      targetTilt.current = { x: 0, y: 0 }
      tilt.current = { x: 0, y: 0 }
      el.style.transition = 'transform 0.6s cubic-bezier(0.16,1,0.3,1), box-shadow 0.4s'
      el.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0)'
      spot.style.opacity = '0'
      onHoverEnd?.()
    }

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const cx = rect.width / 2
      const cy = rect.height / 2
      targetTilt.current.x = ((y - cy) / cy) * -tiltMax
      targetTilt.current.y = ((x - cx) / cx) * tiltMax
      // Spotlight position
      spot.style.background = `radial-gradient(circle at ${(x / rect.width) * 100}% ${(y / rect.height) * 100}%, rgba(${glowColor},0.14) 0%, transparent 60%)`
    }

    const onClick = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      spawnRipple(el, e.clientX - rect.left, e.clientY - rect.top, glowColor)
    }

    el.addEventListener('mouseenter', onEnter)
    el.addEventListener('mouseleave', onLeave)
    el.addEventListener('mousemove', onMove)
    el.addEventListener('click', onClick)

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      el.removeEventListener('mouseenter', onEnter)
      el.removeEventListener('mouseleave', onLeave)
      el.removeEventListener('mousemove', onMove)
      el.removeEventListener('click', onClick)
    }
  }, [glowColor, tiltMax, enableParticles, particleCount, onHoverStart, onHoverEnd])

  return (
    <div
      ref={rootRef}
      className={className}
      style={{
        ...style,
        position: 'relative',
        overflow: 'hidden',
        willChange: 'transform',
        transformStyle: 'preserve-3d',
      }}
    >
      {/* Mouse-tracking spotlight overlay */}
      <div
        ref={spotRef}
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: 'inherit',
          pointerEvents: 'none',
          opacity: 0,
          transition: 'opacity 0.3s',
          zIndex: 0,
        }}
      />
      {/* Content sits above spotlight */}
      <div style={{ position: 'relative', zIndex: 1, height: '100%', display: 'flex', flexDirection: 'column' }}>
        {children}
      </div>
    </div>
  )
}
