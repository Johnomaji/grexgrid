'use client'

import RevealSection from './RevealSection'

export default function Problem() {
  return (
    <section
      id="problem"
      style={{
        background: 'var(--parchment)',
        padding: '8rem 4rem',
        color: 'var(--night)',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '7rem',
          alignItems: 'start',
        }}
        className="problem-grid"
      >
        <div>
          <RevealSection>
            <div
              style={{
                fontFamily: 'var(--ff-mono)',
                fontSize: 10,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--stone)',
                marginBottom: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
              }}
            >
              The Problem
              <span
                style={{
                  flex: 1,
                  maxWidth: 60,
                  height: 0.5,
                  background: 'var(--stone)',
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
                fontSize: 'clamp(40px, 5vw, 64px)',
                fontWeight: 300,
                lineHeight: 1.0,
                color: 'var(--night)',
                marginBottom: '2rem',
              }}
            >
              Nigeria has electricity.
              <br />
              Most Nigerians{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--solar)' }}>don&apos;t</em>.
            </h2>
          </RevealSection>

          <RevealSection delay={200}>
            <p
              style={{
                fontSize: 17,
                lineHeight: 1.8,
                color: 'var(--stone)',
                maxWidth: 480,
                marginBottom: '2rem',
                fontWeight: 300,
              }}
            >
              The child who moves her homework to the window. The seller who loses stock
              to spoilage. The clinic that turns patients away after 6pm. This is not an
              energy crisis — it is a <strong>distribution crisis</strong>, and it has
              been managed, not solved, for sixty years.
            </p>
            <p
              style={{
                fontFamily: 'var(--ff-display)',
                fontSize: 19,
                fontStyle: 'italic',
                color: 'var(--solar)',
                lineHeight: 1.5,
                marginBottom: '2rem',
              }}
            >
              The grid was not designed to reach everyone. GrēxGrid was.
            </p>
          </RevealSection>

          <div style={{ marginTop: '2rem' }}>
            {[
              { num: '85M', desc: 'Nigerians without reliable electricity — the largest energy-poor population on the continent.' },
              { num: '₦400k', desc: 'Average household spends on diesel generators every year — money that should stay in the community.' },
              { num: '3.8hrs', desc: 'Average daily grid supply in underserved areas — when it comes at all.' },
            ].map(({ num, desc }, i) => (
              <RevealSection key={num} delay={300 + i * 100}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    gap: '2rem',
                    padding: '1.5rem 0',
                    borderBottom: '0.5px solid var(--dust)',
                    borderTop: i === 0 ? '0.5px solid var(--dust)' : undefined,
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--ff-mono)',
                      fontSize: 40,
                      fontWeight: 500,
                      color: 'var(--night)',
                      minWidth: 110,
                      lineHeight: 1,
                    }}
                  >
                    {num}
                  </div>
                  <div style={{ fontSize: 14, color: 'var(--stone)', lineHeight: 1.5 }}>
                    {desc}
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>

        {/* Quote stack */}
        <RevealSection delay={200}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            {[
              {
                text: '"The grid was never designed to reach us. We have been waiting for infrastructure built for someone else."',
                source: 'Community leader, Kogi State · GrēxGrid Field Survey 2024',
                accent: 'var(--stone)',
              },
              {
                text: '"When the light stays on, my children study past 9pm. That is not a feature. That is a different future."',
                source: 'GrēxGrid household · Node IKJ-04',
                accent: 'var(--solar)',
              },
              {
                text: '"We generate more than we use. We should be selling power, not buying diesel. GrēxGrid made that real."',
                source: 'Community energy manager · Imo State pilot',
                accent: 'var(--grid)',
              },
            ].map(({ text, source, accent }) => (
              <div
                key={source}
                style={{
                  background: 'var(--night)',
                  padding: '2rem 2rem 2rem 2.5rem',
                  position: 'relative',
                  borderLeft: `3px solid ${accent}`,
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--ff-display)',
                    fontSize: 20,
                    fontWeight: 300,
                    fontStyle: 'italic',
                    color: 'var(--white)',
                    lineHeight: 1.5,
                    marginBottom: '1rem',
                  }}
                >
                  {text}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--ff-mono)',
                    fontSize: 10,
                    color: 'var(--stone)',
                    letterSpacing: '0.08em',
                  }}
                >
                  {source}
                </div>
              </div>
            ))}
          </div>
        </RevealSection>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .problem-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </section>
  )
}
