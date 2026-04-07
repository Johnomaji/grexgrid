'use client'

import RevealSection from './RevealSection'

export default function Manifesto() {
  return (
    <section
      id="manifesto"
      style={{
        background: 'var(--night)',
        padding: '10rem 4rem',
        position: 'relative',
        overflow: 'hidden',
        zIndex: 1,
      }}
    >
      {/* Gradient mesh */}
      <div style={{
        position: 'absolute', inset: 0,
        background: `
          radial-gradient(ellipse 60% 50% at 20% 50%, rgba(200,132,26,0.07) 0%, transparent 70%),
          radial-gradient(ellipse 50% 60% at 80% 50%, rgba(26,122,82,0.06) 0%, transparent 70%)
        `,
        pointerEvents: 'none',
      }} />
      {/* Dot grid */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(46,52,47,0.6) 1px, transparent 0)`,
        backgroundSize: '36px 36px',
        pointerEvents: 'none', opacity: 0.5,
      }} />

      <div style={{ position: 'relative', maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
        <RevealSection variant="fade">
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
            background: 'rgba(200,132,26,0.1)',
            border: '1px solid rgba(200,132,26,0.2)',
            borderRadius: 'var(--radius-pill)',
            padding: '0.4rem 1rem', marginBottom: '2.5rem',
            animation: 'bounce-in 0.5s 0.1s both',
          }}>
            <span style={{
              fontFamily: 'var(--ff-mono)', fontSize: 10,
              letterSpacing: '0.18em', textTransform: 'uppercase',
              color: 'var(--solar)',
            }}>The GrēxGrid Conviction</span>
          </div>
        </RevealSection>

        <RevealSection delay={100} variant="up">
          <h2 style={{
            fontFamily: 'var(--ff-display)',
            fontSize: 'clamp(44px, 9vw, 104px)',
            fontWeight: 300, lineHeight: 0.97,
            color: 'var(--white)', letterSpacing: '-0.025em',
            marginBottom: '2.5rem',
          }}>
            Power belongs to the
            <br />
            people it{' '}
            <em style={{
              fontStyle: 'italic',
              color: 'transparent',
              backgroundImage: 'linear-gradient(135deg, var(--solar) 0%, var(--solar-lt) 100%)',
              WebkitBackgroundClip: 'text', backgroundClip: 'text',
            }}>comes from</em>.
          </h2>
        </RevealSection>

        <RevealSection delay={200} variant="fade">
          <p style={{
            fontSize: 18, color: 'var(--stone)',
            fontWeight: 300, lineHeight: 1.8,
            marginBottom: '3.5rem',
          }}>
            GrēxGrid is building with communities in Lagos, Kogi, Imo, and Enugu. If your
            community is ready to own its energy future — we are ready to build it with you.
          </p>
        </RevealSection>

        <RevealSection delay={300}>
          <div className="manifesto-ctas" style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            flexWrap: 'wrap',
            marginBottom: '3.5rem',
          }}>
            <a
              href="mailto:hello@grexgrid.ng"
              style={{
                background: 'var(--solar)',
                color: 'var(--night)',
                padding: '1.1rem 3rem',
                fontFamily: 'var(--ff-body)',
                fontSize: 15, fontWeight: 600,
                letterSpacing: '0.05em',
                display: 'inline-block',
                borderRadius: 'var(--radius-pill)',
                transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)',
                boxShadow: '0 4px 24px rgba(200,132,26,0.35)',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement
                el.style.background = 'var(--solar-lt)'
                el.style.transform = 'translateY(-3px) scale(1.02)'
                el.style.boxShadow = '0 12px 40px rgba(200,132,26,0.55)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement
                el.style.background = 'var(--solar)'
                el.style.transform = 'translateY(0) scale(1)'
                el.style.boxShadow = '0 4px 24px rgba(200,132,26,0.35)'
              }}
            >
              Apply for my community
            </a>
            <a
              href="#"
              style={{
                background: 'transparent', color: 'var(--dust)',
                padding: '1.1rem 3rem',
                fontFamily: 'var(--ff-mono)', fontSize: 12,
                letterSpacing: '0.1em',
                borderRadius: 'var(--radius-pill)',
                border: '1px solid rgba(196,192,180,0.2)',
                display: 'inline-flex', alignItems: 'center', gap: '0.75rem',
                transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = 'rgba(200,132,26,0.45)'
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
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
              </svg>
              Download the pitch deck
            </a>
          </div>
        </RevealSection>

        <RevealSection delay={400} variant="scale">
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '1rem',
            background: 'rgba(46,52,47,0.5)',
            border: '1px solid rgba(196,192,180,0.1)',
            borderRadius: 'var(--radius-lg)',
            padding: '1rem 1.75rem',
            backdropFilter: 'blur(8px)',
          }}>
            <span style={{ fontSize: 20 }}>📱</span>
            <span style={{
              fontFamily: 'var(--ff-mono)', fontSize: 12,
              color: 'var(--stone)', letterSpacing: '0.06em',
            }}>
              No smartphone? No problem. Dial{' '}
              <strong style={{ color: 'var(--solar)', fontSize: 15 }}>*447#</strong>{' '}
              from any phone to get started.
            </span>
          </div>
        </RevealSection>
      </div>

      <style>{`
        @media (max-width: 700px) {
          #manifesto          { padding: 6rem 1.5rem !important; }
          .manifesto-ctas a   { padding: 1rem 2rem !important; font-size: 13px !important; }
        }
        @media (max-width: 420px) {
          #manifesto { padding: 5rem 1.25rem !important; }
          .manifesto-ctas { flex-direction: column !important; align-items: center !important; }
          .manifesto-ctas a { width: 100% !important; justify-content: center !important; }
        }
      `}</style>
    </section>
  )
}
