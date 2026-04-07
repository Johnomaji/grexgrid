'use client'

import { useEffect, useRef, useState } from 'react'

interface Props {
  value: string        // e.g. "847", "₦2.4M", "94.2%", "142t"
  duration?: number
  style?: React.CSSProperties
  className?: string
}

export default function CountUp({ value, duration = 1800, style, className }: Props) {
  const ref = useRef<HTMLSpanElement>(null)
  const [display, setDisplay] = useState('–')
  const hasRun = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Parse: optional prefix (₦$€), numeric part, optional suffix (M t % + k)
    const match = value.match(/^([₦$€£]?)(\d+\.?\d*)([MmKkBbt%+]*)$/)
    if (!match) { setDisplay(value); return }

    const [, prefix, numStr, suffix] = match
    const num = parseFloat(numStr)
    const decimals = numStr.includes('.') ? numStr.split('.')[1].length : 0

    setDisplay(`${prefix}0${suffix}`)

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasRun.current) return
        hasRun.current = true
        observer.disconnect()

        let startTs: number | null = null
        const tick = (ts: number) => {
          if (!startTs) startTs = ts
          const elapsed = ts - startTs
          const progress = Math.min(elapsed / duration, 1)
          // Ease out cubic
          const eased = 1 - Math.pow(1 - progress, 3)
          const current = eased * num
          setDisplay(`${prefix}${current.toFixed(decimals)}${suffix}`)
          if (progress < 1) {
            requestAnimationFrame(tick)
          } else {
            setDisplay(value)
            // Brief flash on completion
            if (el) {
              el.style.animation = 'count-flash 0.4s ease'
              setTimeout(() => { if (el) el.style.animation = '' }, 400)
            }
          }
        }
        requestAnimationFrame(tick)
      },
      { threshold: 0.4 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [value, duration])

  return (
    <span ref={ref} style={style} className={className}>
      {display}
    </span>
  )
}
