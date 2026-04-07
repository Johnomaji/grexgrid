'use client'

import { useEffect, useRef } from 'react'
import RevealSection from './RevealSection'

const steps = [
  {
    num: '01',
    title: 'Install GrēxBox',
    body: 'Our team installs the solar-plus-storage hardware at your community site. Setup completes in under 4 hours. No grid connection required. No construction permits needed.',
    color: 'var(--solar)',
    colorBg: 'rgba(200,132,26,0.08)',
  },
  {
    num: '02',
    title: 'Connect your households',
    body: 'Each household registers via the app or USSD — no smartphone required. Credit is loaded via mobile money: M-Pesa, Opay, PalmPay. Any phone. Any plan.',
    color: 'var(--solar-lt)',
    colorBg: 'rgba(245,212,154,0.07)',
  },
  {
    num: '03',
    title: 'Generate and use',
    body: 'Your community begins generating. GrēxSense AI optimises distribution in real time — balancing load, forecasting supply, and flagging faults before they happen.',
    color: 'var(--grid-lt)',
    colorBg: 'rgba(158,223,192,0.07)',
  },
  {
    num: '04',
    title: 'Trade and earn',
    body: 'Surplus energy is traded to neighbouring nodes via GrēxShare. Your community earns credit — reducing bills, building a shared energy fund, and growing the network.',
    color: 'var(--live)',
    colorBg: 'rgba(46,201,138,0.08)',
  },
]

function DrawLine() {
  const ref = useRef<HTMLDivElement>(null)
  const triggered = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !triggered.current) {
        triggered.current = true
        el.style.animation = 'draw-line 1.4s cubic-bezier(0.16,1,0.3,1) forwards'
        observer.disconnect()
      }
    }, { threshold: 0.5 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      className="steps-connector"
      style={{
        position: 'absolute',
        top: 44,
        left: '12.5%',
        right: '12.5%',
        height: 1,
        background: 'linear-gradient(to right, var(--solar), var(--solar-lt), var(--grid-lt), var(--live))',
        transformOrigin: 'left',
        transform: 'scaleX(0)',
        opacity: 0.45,
        zIndex: 0,
        pointerEvents: 'none',
      }}
      ref={ref}
    />
  )
}

export default function HowItWorks() {
  return (
    <section
      id="how"
      style={{
        background: 'var(--parchment)',
        padding: '8rem 4rem',
        position: 'relative',
        zIndex: 1,
        overflow: 'hidden',
      }}
    >
      {/* Faint grid texture */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(122,80,16,0.12) 1px, transparent 0)`,
        backgroundSize: '32px 32px',
        pointerEvents: 'none',
      }} />

      {/* Intro */}
      <div className="how-intro" style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '4rem',
        alignItems: 'end',
        marginBottom: '5rem',
        position: 'relative',
      }}>
        <div>
          <RevealSection variant="left">
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
              background: 'rgba(200,132,26,0.1)',
              border: '1px solid rgba(200,132,26,0.22)',
              borderRadius: 'var(--radius-pill)',
              padding: '0.4rem 1rem', marginBottom: '1.75rem',
            }}>
              <span style={{
                fontFamily: 'var(--ff-mono)', fontSize: 10,
                letterSpacing: '0.18em', textTransform: 'uppercase',
                color: 'var(--solar)',
              }}>How it Works</span>
            </div>
          </RevealSection>
          <RevealSection delay={100}>
            <h2 style={{
              fontFamily: 'var(--ff-display)',
              fontSize: 'clamp(34px, 5vw, 64px)',
              fontWeight: 300, lineHeight: 1.0,
              color: 'var(--night)', letterSpacing: '-0.02em',
            }}>
              Installation to income,
              <br />
              <em style={{ color: 'var(--solar)', fontStyle: 'italic' }}>in four steps</em>.
            </h2>
          </RevealSection>
        </div>
        <RevealSection delay={200} variant="fade">
          <p style={{
            fontSize: 16, lineHeight: 1.8,
            color: 'var(--stone)', fontWeight: 300, maxWidth: 440,
          }}>
            GrēxGrid is designed to be understood, owned, and operated by communities —
            not dependent on external technical staff or imported expertise. Every step is
            built for real conditions in Nigeria.
          </p>
        </RevealSection>
      </div>

      {/* Steps with draw-on connector */}
      <div className="steps-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '1rem',
        position: 'relative',
      }}>
        <DrawLine />

        {steps.map(({ num, title, body, color, colorBg }, i) => (
          <RevealSection key={num} delay={i * 130} variant="up">
            <div
              style={{
                background: 'var(--white)',
                border: '1px solid rgba(196,192,180,0.35)',
                borderRadius: 'var(--radius-lg)',
                padding: '2.5rem 2rem',
                position: 'relative',
                height: '100%',
                zIndex: 1,
                transition: 'transform 0.4s cubic-bezier(0.16,1,0.3,1), box-shadow 0.4s, border-color 0.3s, background 0.3s',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement
                el.style.transform = 'translateY(-8px)'
                el.style.boxShadow = '0 20px 60px rgba(15,20,16,0.14)'
                el.style.borderColor = color
                el.style.background = colorBg
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement
                el.style.transform = 'translateY(0)'
                el.style.boxShadow = 'none'
                el.style.borderColor = 'rgba(196,192,180,0.35)'
                el.style.background = 'var(--white)'
              }}
            >
              {/* Numbered badge */}
              <div style={{
                width: 48, height: 48,
                borderRadius: '50%',
                background: colorBg,
                border: `2px solid ${color}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '1.75rem',
              }}>
                <span style={{
                  fontFamily: 'var(--ff-mono)', fontSize: 13,
                  fontWeight: 500, color, lineHeight: 1,
                }}>{num}</span>
              </div>

              <div style={{
                fontFamily: 'var(--ff-display)', fontSize: 22,
                fontWeight: 400, color: 'var(--night)',
                marginBottom: '0.75rem', lineHeight: 1.2,
              }}>{title}</div>

              <div style={{ fontSize: 13, lineHeight: 1.8, color: 'var(--stone)' }}>{body}</div>

              {/* Bottom accent that grows on hover */}
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0, height: 3,
                borderRadius: '0 0 var(--radius-lg) var(--radius-lg)',
                background: `linear-gradient(to right, ${color}, transparent)`,
                opacity: 0,
                transition: 'opacity 0.4s',
              }} className={`step-bottom-${i}`} />
            </div>
          </RevealSection>
        ))}
      </div>

      <style>{`
        @media (max-width: 900px) {
          .how-intro  { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .steps-grid { grid-template-columns: 1fr 1fr !important; }
          .steps-connector { display: none !important; }
          #how        { padding: 5rem 1.5rem !important; }
        }
        @media (max-width: 500px) {
          .steps-grid { grid-template-columns: 1fr !important; }
          #how        { padding: 4rem 1.25rem !important; }
        }
      `}</style>
    </section>
  )
}
