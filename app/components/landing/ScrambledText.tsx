'use client'

import { useEffect, useRef, useState } from 'react'

interface ScrambledTextProps {
  children: string
  delay?: number       // ms before animation begins
  duration?: number    // ms over which all characters reveal
  scrambleChars?: string
  style?: React.CSSProperties
  className?: string
}

const DEFAULT_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*:.,'

export default function ScrambledText({
  children,
  delay = 0,
  duration = 900,
  scrambleChars = DEFAULT_CHARS,
  style,
  className,
}: ScrambledTextProps) {
  const [chars, setChars] = useState<string[]>(() => children.split(''))
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    const text = children
    const N = text.length
    let startTime: number | null = null

    const tick = (now: number) => {
      if (startTime === null) startTime = now
      const elapsed = now - startTime

      const updated = text.split('').map((target, i) => {
        if (target === ' ') return ' '
        const revealAt = delay + (i / N) * duration
        if (elapsed >= revealAt) return target
        return scrambleChars[Math.floor(Math.random() * scrambleChars.length)]
      })

      setChars(updated)

      if (elapsed < delay + duration) {
        rafRef.current = requestAnimationFrame(tick)
      } else {
        setChars(text.split(''))
      }
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)
    }
  }, [children, delay, duration, scrambleChars])

  return (
    <span className={className} style={style}>
      {chars.map((char, i) => (
        <span key={i} style={{ display: 'inline' }}>{char}</span>
      ))}
    </span>
  )
}
