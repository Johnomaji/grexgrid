'use client'

import RevealSection from './RevealSection'

export default function Manifesto() {
  return (
    <section
      id="manifesto"
      style={{
        background: 'var(--night)',
        padding: '10rem 4rem',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        zIndex: 1,
      }}
    >
      {/* Glow */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 800,
          height: 400,
          background:
            'radial-gradient(ellipse, rgba(200,132,26,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

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
            justifyContent: 'center',
            alignItems: 'center',
            gap: '0.75rem',
          }}
        >
          The GrēxGrid Conviction
          <span style={{ flex: 1, maxWidth: 60, height: 0.5, background: 'var(--solar)', opacity: 0.4, display: 'block' }} />
        </div>
      </RevealSection>

      <RevealSection delay={100}>
        <h2
          style={{
            fontFamily: 'var(--ff-display)',
            fontSize: 'clamp(48px, 8vw, 96px)',
            fontWeight: 300,
            lineHeight: 1.05,
            color: 'var(--white)',
            letterSpacing: '-0.02em',
            marginBottom: '2rem',
          }}
        >
          Power belongs to the
          <br />
          people it{' '}
          <em style={{ color: 'var(--solar)', fontStyle: 'italic' }}>comes from</em>.
        </h2>
      </RevealSection>

      <RevealSection delay={200}>
        <p
          style={{
            fontSize: 18,
            color: 'var(--stone)',
            fontWeight: 300,
            lineHeight: 1.7,
            maxWidth: 560,
            margin: '0 auto 3.5rem',
          }}
        >
          GrēxGrid is building with communities in Lagos, Kogi, Imo, and Enugu. If your
          community is ready to own its energy future — we are ready to build it with you.
        </p>
      </RevealSection>

      <RevealSection delay={300}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            flexWrap: 'wrap',
            marginBottom: '3rem',
          }}
        >
          <a
            href="mailto:hello@grexgrid.ng"
            style={{
              background: 'var(--solar)',
              color: 'var(--night)',
              padding: '1.1rem 3rem',
              fontFamily: 'var(--ff-body)',
              fontSize: 15,
              fontWeight: 500,
              letterSpacing: '0.06em',
              display: 'inline-block',
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = 'var(--solar-lt)')}
            onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = 'var(--solar)')}
          >
            Apply for my community
          </a>
          <a
            href="#"
            style={{
              background: 'transparent',
              color: 'var(--dust)',
              padding: '1.1rem 3rem',
              fontFamily: 'var(--ff-mono)',
              fontSize: 12,
              letterSpacing: '0.1em',
              border: '0.5px solid var(--mid)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              transition: 'border-color 0.2s, color 0.2s',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget
              el.style.borderColor = 'var(--solar)'
              el.style.color = 'var(--solar)'
            }}
            onMouseLeave={e => {
              const el = e.currentTarget
              el.style.borderColor = 'var(--mid)'
              el.style.color = 'var(--dust)'
            }}
          >
            Download the pitch deck
          </a>
        </div>
      </RevealSection>

      <RevealSection delay={400}>
        <div
          style={{
            fontFamily: 'var(--ff-mono)',
            fontSize: 12,
            color: 'var(--stone)',
            letterSpacing: '0.08em',
          }}
        >
          No smartphone? No problem. Dial{' '}
          <strong style={{ color: 'var(--solar)', fontSize: 14 }}>*447#</strong> from any
          phone to get started.
        </div>
      </RevealSection>
    </section>
  )
}
