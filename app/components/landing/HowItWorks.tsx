'use client'

import RevealSection from './RevealSection'

const steps = [
  {
    num: '01',
    title: 'Install GrēxBox',
    body: 'Our team installs the solar-plus-storage hardware at your community site. Setup completes in under 4 hours. No grid connection required. No construction permits needed.',
  },
  {
    num: '02',
    title: 'Connect your households',
    body: 'Each household registers via the app or USSD — no smartphone required. Credit is loaded via mobile money: M-Pesa, Opay, PalmPay. Any phone. Any plan.',
  },
  {
    num: '03',
    title: 'Generate and use',
    body: 'Your community begins generating. GrēxSense AI optimises distribution in real time — balancing load, forecasting supply, and flagging faults before they happen.',
  },
  {
    num: '04',
    title: 'Trade and earn',
    body: 'Surplus energy is traded to neighbouring nodes via GrēxShare. Your community earns credit — reducing bills, building a shared energy fund, and growing the network.',
  },
]

export default function HowItWorks() {
  return (
    <section
      id="how"
      style={{
        background: 'var(--night)',
        padding: '8rem 4rem',
        position: 'relative',
        overflow: 'hidden',
        zIndex: 1,
      }}
    >
      {/* Background ambient text */}
      <div
        className="how-bg-text"
        style={{
          position: 'absolute',
          right: '-2rem',
          top: '50%',
          transform: 'translateY(-50%)',
          fontFamily: 'var(--ff-display)',
          fontSize: 280,
          fontWeight: 300,
          color: 'transparent',
          WebkitTextStroke: '0.5px rgba(196,192,180,0.04)',
          pointerEvents: 'none',
          whiteSpace: 'nowrap',
          userSelect: 'none',
        }}
      >
        Grid
      </div>

      {/* Intro */}
      <div
        className="how-intro"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'end',
          marginBottom: '4rem',
        }}
      >
        <div>
          <RevealSection>
            <div
              style={{
                fontFamily: 'var(--ff-mono)',
                fontSize: 10,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--solar)',
                marginBottom: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
              }}
            >
              How it Works
              <span
                style={{
                  flex: 1,
                  maxWidth: 60,
                  height: 0.5,
                  background: 'var(--solar)',
                  opacity: 0.4,
                  display: 'block',
                }}
              />
            </div>
          </RevealSection>
          <RevealSection delay={100}>
            <h2
              style={{
                fontFamily: 'var(--ff-display)',
                fontSize: 'clamp(36px, 5vw, 60px)',
                fontWeight: 300,
                lineHeight: 1.05,
                color: 'var(--white)',
              }}
            >
              Installation to income,
              <br />
              in four steps.
            </h2>
          </RevealSection>
        </div>
        <RevealSection delay={200}>
          <p
            style={{
              fontSize: 16,
              lineHeight: 1.75,
              color: 'var(--stone)',
              fontWeight: 300,
            }}
          >
            GrēxGrid is designed to be understood, owned, and operated by communities —
            not dependent on external technical staff or imported expertise. Every step is
            built for real conditions in Nigeria.
          </p>
        </RevealSection>
      </div>

      {/* Steps */}
      <div
        className="steps-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 2,
        }}
      >
        {steps.map(({ num, title, body }, i) => (
          <RevealSection key={num} delay={i * 100}>
            <StepCard num={num} title={title} body={body} />
          </RevealSection>
        ))}
      </div>

      <style>{`
        @media (max-width: 900px) {
          .how-intro { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .steps-grid { grid-template-columns: 1fr 1fr !important; }
          .how-bg-text { display: none !important; }
        }
      `}</style>
    </section>
  )
}

function StepCard({ num, title, body }: { num: string; title: string; body: string }) {
  return (
    <div
      style={{
        background: 'var(--dark)',
        padding: '2.5rem 2rem',
        position: 'relative',
        transition: 'background 0.3s',
        height: '100%',
      }}
      onMouseEnter={e => {
        const el = e.currentTarget
        el.style.background = '#222927'
        const accent = el.querySelector('.step-accent') as HTMLElement
        if (accent) accent.style.transform = 'scaleX(1)'
      }}
      onMouseLeave={e => {
        const el = e.currentTarget
        el.style.background = 'var(--dark)'
        const accent = el.querySelector('.step-accent') as HTMLElement
        if (accent) accent.style.transform = 'scaleX(0)'
      }}
    >
      <div
        style={{
          fontFamily: 'var(--ff-mono)',
          fontSize: 52,
          fontWeight: 300,
          color: 'rgba(196,192,180,0.1)',
          lineHeight: 1,
          marginBottom: '2rem',
        }}
      >
        {num}
      </div>
      <div
        style={{
          fontFamily: 'var(--ff-display)',
          fontSize: 22,
          fontWeight: 400,
          color: 'var(--white)',
          marginBottom: '0.75rem',
        }}
      >
        {title}
      </div>
      <div style={{ fontSize: 13, lineHeight: 1.7, color: 'var(--stone)' }}>{body}</div>
      <div
        className="step-accent"
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 2,
          background: 'var(--solar)',
          transform: 'scaleX(0)',
          transformOrigin: 'left',
          transition: 'transform 0.4s',
        }}
      />
    </div>
  )
}
