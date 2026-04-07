'use client'

import RevealSection from './RevealSection'

const members = [
  { initials: 'CO', role: 'Chief Technology Officer',   name: 'Chidubem Okafor',   desc: 'Architect of the GrēxGrid core platform. Former backend lead at a Lagos fintech unicorn, Chidubem designs the distributed systems that keep every node in sync — and every transaction on record.', color: 'var(--solar)' },
  { initials: 'FT', role: 'Head of Hardware Engineering', name: 'Femi Taiwo',         desc: 'Lead engineer behind GrēxBox — solar inverter systems that survive the harmattan, flooding season, and power surges. Femi has designed off-grid systems deployed across West Africa.', color: 'var(--grid-lt)' },
  { initials: 'AN', role: 'Head of AI & Data Science',  name: 'Adaora Nwachukwu',   desc: 'The intelligence behind GrēxSense. Adaora builds the forecasting models that predict faults, optimise trading windows, and learn from every watt generated across the network.', color: 'var(--live)' },
  { initials: 'EI', role: 'Head of Product Design',     name: 'Emeka Ikenna-Eze',   desc: 'Ensures that GrēxGrid works for the field engineer at 3am and the grandmother on a feature phone. Emeka designs for real contexts — not ideal users in ideal conditions.', color: 'var(--solar-lt)' },
  { initials: 'ZA', role: 'Head of Community Operations', name: 'Zainab Aliyu',      desc: 'GrēxGrid\'s bridge to the communities it serves. Zainab leads deployment readiness, local energy manager training, and the feedback loops that keep product and reality aligned.', color: 'var(--grid-lt)' },
  { initials: 'SO', role: 'Lead Full-Stack Engineer',   name: 'Segun Olawale',      desc: 'Builds the GrēxConnect API layer and developer portal. Segun makes GrēxGrid\'s data legible and composable — for governments, NGOs, and builders who want to plug into the network.', color: 'var(--solar)' },
]

export default function Team() {
  return (
    <section
      id="team"
      style={{
        background: 'var(--night)',
        padding: '8rem 4rem',
        position: 'relative',
        zIndex: 1,
        overflow: 'hidden',
      }}
    >
      {/* Ambient orb */}
      <div style={{
        position: 'absolute', bottom: '-15%', left: '-8%',
        width: 500, height: 500,
        background: 'radial-gradient(circle, rgba(200,132,26,0.06) 0%, transparent 70%)',
        borderRadius: '50%', pointerEvents: 'none',
        animation: 'orb-breathe-slow 14s ease-in-out infinite',
      }} />

      {/* Intro */}
      <div style={{ maxWidth: 560, marginBottom: '5rem', position: 'relative' }}>
        <RevealSection variant="left">
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
            background: 'rgba(200,132,26,0.1)',
            border: '1px solid rgba(200,132,26,0.2)',
            borderRadius: 'var(--radius-pill)',
            padding: '0.4rem 1rem', marginBottom: '1.75rem',
          }}>
            <span style={{
              fontFamily: 'var(--ff-mono)', fontSize: 10,
              letterSpacing: '0.18em', textTransform: 'uppercase',
              color: 'var(--solar)',
            }}>The Team</span>
          </div>
        </RevealSection>
        <RevealSection delay={100}>
          <h2 style={{
            fontFamily: 'var(--ff-display)',
            fontSize: 'clamp(34px, 5vw, 64px)',
            fontWeight: 300, lineHeight: 1.0,
            color: 'var(--white)', letterSpacing: '-0.02em',
          }}>
            Built by Nigerians.
            <br />
            <em style={{ color: 'var(--solar)', fontStyle: 'italic' }}>For Nigeria. And beyond.</em>
          </h2>
        </RevealSection>
        <RevealSection delay={200} variant="fade">
          <p style={{
            fontSize: 17, lineHeight: 1.8,
            color: 'var(--stone)', fontWeight: 300, marginTop: '1.25rem',
          }}>
            Seven builders who believe that the infrastructure Africa deserves does not
            require waiting — it requires building. Every discipline, every line of code,
            every community visit: grounded in the problem we are solving.
          </p>
        </RevealSection>
      </div>

      {/* Team grid */}
      <div className="team-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '1rem',
        position: 'relative',
      }}>
        {/* Founder — spans 2 cols */}
        <RevealSection style={{ gridColumn: 'span 2' }} variant="scale" className="founder-card">
          <div style={{
            background: 'linear-gradient(135deg, rgba(200,132,26,0.12) 0%, rgba(15,20,16,0.85) 65%)',
            border: '1px solid rgba(200,132,26,0.22)',
            borderRadius: 'var(--radius-xl)',
            padding: '3rem',
            display: 'grid',
            gridTemplateColumns: '1fr 1.3fr',
            gap: '2.5rem',
            alignItems: 'center',
            height: '100%',
            transition: 'box-shadow 0.4s',
          }}
            onMouseEnter={e => ((e.currentTarget as HTMLElement).style.boxShadow = '0 20px 60px rgba(200,132,26,0.12)')}
            onMouseLeave={e => ((e.currentTarget as HTMLElement).style.boxShadow = 'none')}
          >
            <div style={{
              width: '100%', aspectRatio: '1',
              borderRadius: 'var(--radius-xl)',
              background: 'radial-gradient(135deg, rgba(46,52,47,0.8) 0%, rgba(15,20,16,0.9) 100%)',
              border: '1px solid rgba(200,132,26,0.2)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <span style={{
                fontFamily: 'var(--ff-display)', fontSize: 64, fontWeight: 300,
                color: 'var(--solar)', letterSpacing: '-0.02em', lineHeight: 1,
              }}>MOA</span>
            </div>
            <div>
              <div style={{
                display: 'inline-flex', alignItems: 'center',
                background: 'rgba(200,132,26,0.12)',
                border: '1px solid rgba(200,132,26,0.2)',
                borderRadius: 'var(--radius-pill)',
                padding: '0.3rem 0.75rem', marginBottom: '1rem',
              }}>
                <span style={{
                  fontFamily: 'var(--ff-mono)', fontSize: 9,
                  letterSpacing: '0.14em', textTransform: 'uppercase',
                  color: 'var(--solar)',
                }}>Founder &amp; CEO</span>
              </div>
              <div style={{
                fontFamily: 'var(--ff-display)', fontSize: 28, fontWeight: 400,
                color: 'var(--white)', lineHeight: 1.1, marginBottom: '1rem',
              }}>Mercy Ogey Agbinya</div>
              <p style={{
                fontSize: 14, lineHeight: 1.75, color: 'var(--stone)',
                fontWeight: 300, marginBottom: '1.5rem',
              }}>
                Mercy founded GrēxGrid from a single conviction: that energy poverty is a
                solvable distribution problem, not a resource problem. A systems thinker
                with deep roots in community infrastructure, she leads strategy,
                partnerships, and the long view.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {['Strategy', 'Community Infrastructure', 'Energy Access', 'Partnerships'].map(t => (
                  <span key={t} style={{
                    fontFamily: 'var(--ff-mono)', fontSize: 9,
                    letterSpacing: '0.1em', textTransform: 'uppercase',
                    padding: '4px 10px',
                    background: 'rgba(200,132,26,0.08)',
                    border: '1px solid rgba(200,132,26,0.15)',
                    borderRadius: 'var(--radius-pill)',
                    color: 'var(--solar)',
                  }}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        </RevealSection>

        {/* Team members */}
        {members.map(({ initials, role, name, desc, color }, i) => (
          <RevealSection key={name} delay={(i + 1) * 80} variant="up">
            <div
              style={{
                background: 'rgba(26,31,27,0.85)',
                border: '1px solid rgba(196,192,180,0.07)',
                borderRadius: 'var(--radius-lg)',
                padding: '2rem 1.75rem',
                height: '100%',
                transition: 'transform 0.4s cubic-bezier(0.16,1,0.3,1), border-color 0.3s, background 0.3s, box-shadow 0.4s',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement
                el.style.transform = 'translateY(-6px)'
                el.style.borderColor = 'rgba(196,192,180,0.18)'
                el.style.background = 'rgba(46,52,47,0.5)'
                el.style.boxShadow = '0 16px 48px rgba(0,0,0,0.25)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement
                el.style.transform = 'translateY(0)'
                el.style.borderColor = 'rgba(196,192,180,0.07)'
                el.style.background = 'rgba(26,31,27,0.85)'
                el.style.boxShadow = 'none'
              }}
            >
              <div style={{
                width: 44, height: 44, borderRadius: '50%',
                background: 'rgba(46,52,47,0.6)',
                border: `2px solid ${color}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'var(--ff-mono)', fontSize: 13, color,
                marginBottom: '1.25rem', fontWeight: 500,
              }}>{initials}</div>
              <div style={{
                fontFamily: 'var(--ff-mono)', fontSize: 9,
                letterSpacing: '0.14em', textTransform: 'uppercase',
                color, marginBottom: '0.4rem', opacity: 0.85,
              }}>{role}</div>
              <div style={{
                fontFamily: 'var(--ff-display)', fontSize: 20,
                fontWeight: 400, color: 'var(--white)',
                lineHeight: 1.1, marginBottom: '0.75rem',
              }}>{name}</div>
              <p style={{ fontSize: 12, lineHeight: 1.75, color: 'var(--stone)' }}>{desc}</p>
            </div>
          </RevealSection>
        ))}
      </div>

      <style>{`
        @media (max-width: 900px) {
          .team-grid   { grid-template-columns: 1fr 1fr !important; }
          .founder-card { grid-column: span 2 !important; }
          .founder-card > div { grid-template-columns: 1fr !important; }
          #team        { padding: 5rem 1.5rem !important; }
        }
        @media (max-width: 560px) {
          .team-grid   { grid-template-columns: 1fr !important; }
          .founder-card { grid-column: span 1 !important; }
          #team        { padding: 4rem 1.25rem !important; }
        }
      `}</style>
    </section>
  )
}
