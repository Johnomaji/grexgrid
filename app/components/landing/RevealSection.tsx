'use client'

import { useEffect, useRef, ReactNode } from 'react'

type Variant = 'up' | 'left' | 'scale' | 'fade'

interface Props {
  children: ReactNode
  delay?: number
  className?: string
  style?: React.CSSProperties
  variant?: Variant
  duration?: number
}

export default function RevealSection({
  children,
  delay = 0,
  className = '',
  style,
  variant = 'up',
  duration = 700,
}: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add('reveal-visible'), delay)
          observer.unobserve(el)
        }
      },
      { threshold: 0.08 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  return (
    <div
      ref={ref}
      className={`reveal-item reveal-${variant} ${className}`}
      style={{ '--reveal-duration': `${duration}ms`, ...style } as React.CSSProperties}
    >
      {children}
      <style>{`
        .reveal-item {
          transition-property: opacity, transform;
          transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
          transition-duration: var(--reveal-duration, 700ms);
        }

        /* up */
        .reveal-up {
          opacity: 0;
          transform: translateY(40px);
        }
        .reveal-up.reveal-visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* left */
        .reveal-left {
          opacity: 0;
          transform: translateX(-40px);
        }
        .reveal-left.reveal-visible {
          opacity: 1;
          transform: translateX(0);
        }

        /* scale */
        .reveal-scale {
          opacity: 0;
          transform: scale(0.88);
        }
        .reveal-scale.reveal-visible {
          opacity: 1;
          transform: scale(1);
        }

        /* fade */
        .reveal-fade {
          opacity: 0;
        }
        .reveal-fade.reveal-visible {
          opacity: 1;
        }
      `}</style>
    </div>
  )
}
