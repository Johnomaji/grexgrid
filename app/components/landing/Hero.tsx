'use client'

import { useEffect, useState } from 'react'
import CountUp from './CountUp'
import ScrambledText from './ScrambledText'

const BRAND_TEXT = 'GrexGrid by GREXA RENEWABLES LTD'

function TypewriterLabel() {
  const [displayed, setDisplayed] = useState('')
  const [done, setDone] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(true)
    let i = 0
    const tick = setInterval(() => {
      i++
      setDisplayed(BRAND_TEXT.slice(0, i))
      if (i >= BRAND_TEXT.length) {
        clearInterval(tick)
        setDone(true)
      }
    }, 55)
    return () => clearInterval(tick)
  }, [])

  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.75rem',
        marginBottom: '2.5rem',
        opacity: visible ? 1 : 0,
        transition: 'opacity 0.4s 0.1s',
      }}
    >
      {/* Accent bar */}
      <span style={{
        display: 'block',
        width: 2,
        height: 14,
        background: 'var(--solar)',
        borderRadius: 2,
        flexShrink: 0,
      }} />
      <span style={{
        fontFamily: 'var(--ff-mono)',
        fontSize: 11,
        letterSpacing: '0.2em',
        textTransform: 'uppercase',
        color: 'var(--solar)',
        whiteSpace: 'nowrap',
      }}>
        {displayed}
        {/* blinking cursor — hides when done typing */}
        <span style={{
          display: 'inline-block',
          width: 1.5,
          height: '0.9em',
          background: 'var(--solar)',
          marginLeft: 3,
          verticalAlign: 'text-bottom',
          animation: done ? 'none' : 'cursor-blink 0.8s step-end infinite',
          opacity: done ? 0 : 1,
          transition: 'opacity 0.4s 0.8s',
        }} />
      </span>
    </div>
  )
}

const stats = [
  { val: '847',   label: 'Households connected',    color: 'var(--solar)',    floatAnim: 'float   5.5s ease-in-out infinite' },
  { val: '94.2%', label: 'Network uptime',           color: 'var(--live)',     floatAnim: 'float-2 6.2s ease-in-out infinite' },
  { val: '₦2.4M', label: 'Trading income generated', color: 'var(--solar-lt)', floatAnim: 'float-3 7.0s ease-in-out infinite' },
  { val: '142t',  label: 'CO₂ avoided',              color: 'var(--grid-lt)',  floatAnim: 'float-4 5.8s ease-in-out infinite' },
]

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '8rem 2rem 5rem',
        overflow: 'hidden',
        zIndex: 1,
      }}
    >
      {/* Gradient orbs */}
      <div style={{
        position: 'absolute', top: '-10%', right: '-5%',
        width: 700, height: 700,
        background: 'radial-gradient(circle, rgba(200,132,26,0.13) 0%, rgba(200,132,26,0.04) 45%, transparent 70%)',
        borderRadius: '50%',
        animation: 'orb-breathe 9s ease-in-out infinite',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '0%', left: '-5%',
        width: 550, height: 550,
        background: 'radial-gradient(circle, rgba(26,122,82,0.11) 0%, transparent 70%)',
        borderRadius: '50%',
        animation: 'orb-breathe-slow 12s ease-in-out infinite',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', top: '25%', left: '10%',
        width: 320, height: 320,
        background: 'radial-gradient(circle, rgba(200,132,26,0.05) 0%, transparent 70%)',
        borderRadius: '50%',
        animation: 'orb-breathe 15s ease-in-out infinite reverse',
        pointerEvents: 'none',
      }} />

      <TypewriterLabel />

      {/* Headline */}
      <h1
        style={{
          fontFamily: 'var(--ff-display)',
          fontSize: 'clamp(50px, 10vw, 120px)',
          fontWeight: 300,
          lineHeight: 0.95,
          color: 'var(--white)',
          letterSpacing: '-0.025em',
          marginBottom: '2.5rem',
          maxWidth: 1000,
          opacity: 0,
          animation: 'fade-up 0.9s 0.4s cubic-bezier(0.16,1,0.3,1) forwards',
        }}
      >
        <ScrambledText delay={500} duration={700} scrambleChars=".:#@!ABCDEFabcdef">Your community.</ScrambledText>
        <br />
        <ScrambledText delay={900} duration={600} scrambleChars=".:#@!ABCDEFabcdef">Your </ScrambledText>
        <em style={{
          fontStyle: 'italic',
          color: 'transparent',
          backgroundImage: 'linear-gradient(135deg, var(--solar) 0%, var(--solar-lt) 100%)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
        }}>
          <ScrambledText delay={1100} duration={500} scrambleChars=".:#@!ABCDEFabcdef">grid</ScrambledText>
        </em>
        <ScrambledText delay={1350} duration={200} scrambleChars=".:#@!">.</ScrambledText>
        <br />
        <span style={{
          color: 'transparent',
          backgroundImage: 'linear-gradient(135deg, var(--grid-lt) 0%, var(--live) 100%)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
        }}>
          <ScrambledText delay={1400} duration={700} scrambleChars=".:#@!ABCDEFabcdef">Your power.</ScrambledText>
        </span>
      </h1>

      {/* Subtitle */}
      <p
        style={{
          fontSize: 'clamp(15px, 2vw, 19px)',
          fontWeight: 300,
          color: 'var(--stone)',
          lineHeight: 1.75,
          maxWidth: 560,
          marginBottom: '3rem',
          opacity: 0,
          animation: 'fade-up 0.9s 0.6s cubic-bezier(0.16,1,0.3,1) forwards',
        }}
      >
        GrēxGrid gives communities the tools to generate, store, trade, and own
        their energy — no waiting for a national grid that was never designed to
        reach you.
      </p>

      {/* CTAs */}
      <div
        style={{
          display: 'flex',
          gap: '1rem',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap',
          marginBottom: '5rem',
          opacity: 0,
          animation: 'fade-up 0.9s 0.8s cubic-bezier(0.16,1,0.3,1) forwards',
        }}
      >
        <a
          href="/get-started"
          style={{
            background: 'var(--solar)',
            color: 'var(--night)',
            padding: '0.95rem 2.5rem',
            fontFamily: 'var(--ff-body)',
            fontSize: 14,
            fontWeight: 600,
            letterSpacing: '0.05em',
            borderRadius: 'var(--radius-pill)',
            display: 'inline-block',
            transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)',
            boxShadow: '0 4px 24px rgba(200,132,26,0.35)',
          }}
          onMouseEnter={e => {
            const el = e.currentTarget as HTMLElement
            el.style.background = 'var(--solar-lt)'
            el.style.transform = 'translateY(-3px) scale(1.02)'
            el.style.boxShadow = '0 10px 40px rgba(200,132,26,0.55)'
          }}
          onMouseLeave={e => {
            const el = e.currentTarget as HTMLElement
            el.style.background = 'var(--solar)'
            el.style.transform = 'translateY(0) scale(1)'
            el.style.boxShadow = '0 4px 24px rgba(200,132,26,0.35)'
          }}
        >
          Get GrēxBox for my community
        </a>
        <a
          href="#how"
          style={{
            background: 'transparent',
            color: 'var(--dust)',
            padding: '0.95rem 2.5rem',
            fontFamily: 'var(--ff-mono)',
            fontSize: 12,
            letterSpacing: '0.1em',
            borderRadius: 'var(--radius-pill)',
            border: '1px solid rgba(196,192,180,0.2)',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.75rem',
            transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)',
          }}
          onMouseEnter={e => {
            const el = e.currentTarget as HTMLElement
            el.style.borderColor = 'rgba(200,132,26,0.5)'
            el.style.color = 'var(--solar)'
            el.style.background = 'rgba(200,132,26,0.06)'
            el.style.transform = 'translateY(-2px)'
          }}
          onMouseLeave={e => {
            const el = e.currentTarget as HTMLElement
            el.style.borderColor = 'rgba(196,192,180,0.2)'
            el.style.color = 'var(--dust)'
            el.style.background = 'transparent'
            el.style.transform = 'translateY(0)'
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            <circle cx="12" cy="12" r="10" />
            <polyline points="10 8 14 12 10 16" />
          </svg>
          See how it works
        </a>
      </div>

      {/* Floating stat cards */}
      <div
        className="hero-stats"
        style={{
          display: 'flex',
          gap: '1rem',
          justifyContent: 'center',
          flexWrap: 'wrap',
          opacity: 0,
          animation: 'fade-up 0.9s 1s cubic-bezier(0.16,1,0.3,1) forwards',
        }}
      >
        {stats.map(({ val, label, color, floatAnim }, i) => (
          <div
            key={label}
            style={{
              background: 'rgba(46,52,47,0.45)',
              border: '1px solid rgba(196,192,180,0.1)',
              borderRadius: 'var(--radius-md)',
              padding: '1.1rem 1.75rem',
              backdropFilter: 'blur(12px)',
              textAlign: 'center',
              minWidth: 140,
              animation: floatAnim,
              animationDelay: `${i * 0.3}s`,
              transition: 'border-color 0.3s, transform 0.3s, box-shadow 0.3s',
              cursor: 'default',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement
              el.style.borderColor = 'rgba(200,132,26,0.4)'
              el.style.boxShadow = '0 8px 32px rgba(0,0,0,0.25)'
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement
              el.style.borderColor = 'rgba(196,192,180,0.1)'
              el.style.boxShadow = 'none'
            }}
          >
            <CountUp
              value={val}
              duration={1600}
              style={{
                fontFamily: 'var(--ff-mono)',
                fontSize: 28,
                fontWeight: 500,
                color,
                lineHeight: 1,
                display: 'block',
                marginBottom: '0.3rem',
                letterSpacing: '-0.01em',
              }}
            />
            <div style={{ fontSize: 11, color: 'var(--stone)', fontWeight: 300 }}>
              {label}
            </div>
          </div>
        ))}
      </div>

      {/* Scroll hint */}
      <div
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.2rem',
          opacity: 0,
          animation: 'fade-in 1s 1.6s forwards',
        }}
      >
        <span style={{
          fontFamily: 'var(--ff-mono)',
          fontSize: 9,
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: 'var(--stone)',
        }}>Scroll to explore</span>
        <div style={{
          width: 1,
          height: 36,
          background: 'linear-gradient(to bottom, var(--stone), transparent)',
          animation: 'float 2s ease-in-out infinite',
        }} />
      </div>

      <style>{`
        @keyframes cursor-blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
        @media (max-width: 600px) {
          #hero { padding: 6rem 1.25rem 4rem !important; }
          .hero-stats { gap: 0.75rem !important; }
          .hero-stats > div { min-width: calc(50% - 0.5rem) !important; flex: 1 1 calc(50% - 0.5rem) !important; }
        }
        @media (max-width: 380px) {
          .hero-stats > div { min-width: 100% !important; flex: 1 1 100% !important; }
        }
      `}</style>
    </section>
  )
}
