'use client'

import RevealSection from './RevealSection'

export default function Problem() {
  return (
    <section
      id="problem"
      style={{
        background: 'var(--dark)',
        padding: '8rem 4rem',
        position: 'relative',
        zIndex: 1,
        overflow: 'hidden',
      }}
    >
      {/* Subtle dot grid */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(46,52,47,0.7) 1px, transparent 0)`,
        backgroundSize: '40px 40px',
        pointerEvents: 'none',
      }} />

      {/* Section label */}
      <RevealSection style={{ position: 'relative', marginBottom: '3rem' }} variant="fade">
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
          background: 'rgba(122,80,16,0.15)',
          border: '1px solid rgba(200,132,26,0.2)',
          borderRadius: 'var(--radius-pill)',
          padding: '0.4rem 1rem',
        }}>
          <span style={{
            fontFamily: 'var(--ff-mono)', fontSize: 10,
            letterSpacing: '0.18em', textTransform: 'uppercase',
            color: 'var(--solar)',
          }}>The Problem</span>
        </div>
      </RevealSection>

      {/* Main grid */}
      <div className="problem-grid" style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '5rem',
        alignItems: 'start',
        position: 'relative',
      }}>
        {/* Left */}
        <div>
          <RevealSection delay={100} variant="left">
            <h2 style={{
              fontFamily: 'var(--ff-display)',
              fontSize: 'clamp(38px, 5.5vw, 72px)',
              fontWeight: 300, lineHeight: 1.0,
              color: 'var(--white)',
              marginBottom: '2rem', letterSpacing: '-0.02em',
            }}>
              Nigeria has electricity.
              <br />
              Most Nigerians{' '}
              <em style={{
                fontStyle: 'italic',
                color: 'transparent',
                backgroundImage: 'linear-gradient(135deg, var(--solar), var(--solar-lt))',
                WebkitBackgroundClip: 'text', backgroundClip: 'text',
              }}>don&apos;t</em>.
            </h2>
          </RevealSection>

          <RevealSection delay={200}>
            <p style={{
              fontSize: 17, lineHeight: 1.8,
              color: 'var(--stone)', maxWidth: 500,
              marginBottom: '2rem', fontWeight: 300,
            }}>
              The child who moves her homework to the window. The seller who loses stock
              to spoilage. The clinic that turns patients away after 6pm. This is not an
              energy crisis — it is a{' '}
              <strong style={{ color: 'var(--dust)', fontWeight: 500 }}>distribution crisis</strong>,
              and it has been managed, not solved, for sixty years.
            </p>
          </RevealSection>

          <RevealSection delay={300}>
            <div style={{
              borderLeft: '2px solid var(--solar)',
              paddingLeft: '1.5rem',
              marginBottom: '3rem',
            }}>
              <p style={{
                fontFamily: 'var(--ff-display)', fontSize: 21,
                fontStyle: 'italic', color: 'var(--solar-lt)', lineHeight: 1.5,
              }}>
                The grid was not designed to reach everyone. GrēxGrid was.
              </p>
            </div>
          </RevealSection>

          {/* Stats */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {[
              { num: '85M',   desc: 'Nigerians without reliable electricity — the largest energy-poor population on the continent.' },
              { num: '₦400k', desc: 'Average household spends on diesel generators every year — money that should stay in the community.' },
              { num: '3.8hrs',desc: 'Average daily grid supply in underserved areas — when it comes at all.' },
            ].map(({ num, desc }, i) => (
              <RevealSection key={num} delay={400 + i * 100}>
                <div
                  style={{
                    display: 'flex', alignItems: 'center', gap: '1.5rem',
                    background: 'rgba(15,20,16,0.5)',
                    border: '1px solid rgba(196,192,180,0.07)',
                    borderRadius: 'var(--radius-md)',
                    padding: '1.25rem 1.5rem',
                    transition: 'border-color 0.3s, transform 0.35s cubic-bezier(0.16,1,0.3,1)',
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement
                    el.style.borderColor = 'rgba(200,132,26,0.3)'
                    el.style.transform = 'translateX(6px)'
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement
                    el.style.borderColor = 'rgba(196,192,180,0.07)'
                    el.style.transform = 'translateX(0)'
                  }}
                >
                  <div style={{
                    fontFamily: 'var(--ff-mono)', fontSize: 34, fontWeight: 500,
                    color: 'var(--solar)', minWidth: 100, lineHeight: 1, flexShrink: 0,
                  }}>{num}</div>
                  <div style={{ fontSize: 13, color: 'var(--stone)', lineHeight: 1.65 }}>{desc}</div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>

        {/* Right — quotes */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
          {[
            {
              text: '"The grid was never designed to reach us. We have been waiting for infrastructure built for someone else."',
              source: 'Community leader, Kogi State',
              sub: 'GrēxGrid Field Survey 2024',
              accent: 'var(--stone)',
              accentBg: 'rgba(122,122,114,0.07)',
            },
            {
              text: '"When the light stays on, my children study past 9pm. That is not a feature. That is a different future."',
              source: 'GrēxGrid household',
              sub: 'Node IKJ-04',
              accent: 'var(--solar)',
              accentBg: 'rgba(200,132,26,0.06)',
            },
            {
              text: '"We generate more than we use. We should be selling power, not buying diesel. GrēxGrid made that real."',
              source: 'Community energy manager',
              sub: 'Imo State pilot',
              accent: 'var(--grid-lt)',
              accentBg: 'rgba(26,122,82,0.08)',
            },
          ].map(({ text, source, sub, accent, accentBg }, i) => (
            <RevealSection key={source} delay={200 + i * 150} variant="fade">
              <div
                style={{
                  background: accentBg,
                  border: `1px solid rgba(196,192,180,0.07)`,
                  borderLeft: `3px solid ${accent}`,
                  borderRadius: `0 ${16}px ${16}px 0`,
                  padding: '2rem',
                  transition: 'transform 0.35s cubic-bezier(0.16,1,0.3,1), box-shadow 0.35s',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.transform = 'translateX(6px)'
                  el.style.boxShadow = '0 8px 32px rgba(0,0,0,0.2)'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.transform = 'translateX(0)'
                  el.style.boxShadow = 'none'
                }}
              >
                <div style={{
                  fontFamily: 'var(--ff-display)', fontSize: 19,
                  fontWeight: 300, fontStyle: 'italic',
                  color: 'var(--white)', lineHeight: 1.6, marginBottom: '1.25rem',
                }}>{text}</div>
                <div style={{
                  fontFamily: 'var(--ff-mono)', fontSize: 11,
                  color: accent, letterSpacing: '0.06em', fontStyle: 'normal',
                }}>{source}</div>
                <div style={{
                  fontFamily: 'var(--ff-mono)', fontSize: 10,
                  color: 'var(--stone)', letterSpacing: '0.04em', marginTop: 2,
                }}>{sub}</div>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .problem-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
          #problem      { padding: 5rem 1.5rem !important; }
        }
        @media (max-width: 500px) {
          #problem { padding: 4rem 1.25rem !important; }
        }
      `}</style>
    </section>
  )
}
