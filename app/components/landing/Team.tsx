'use client'

import RevealSection from './RevealSection'

const members = [
  { initials: 'CO', role: 'Chief Technology Officer', name: 'Chidubem Okafor', desc: 'Architect of the GrēxGrid core platform. Former backend lead at a Lagos fintech unicorn, Chidubem designs the distributed systems that keep every node in sync — and every transaction on record.' },
  { initials: 'FT', role: 'Head of Hardware Engineering', name: 'Femi Taiwo', desc: 'Lead engineer behind GrēxBox — solar inverter systems that survive the harmattan, flooding season, and power surges. Femi has designed off-grid systems deployed across West Africa.' },
  { initials: 'AN', role: 'Head of AI & Data Science', name: 'Adaora Nwachukwu', desc: 'The intelligence behind GrēxSense. Adaora builds the forecasting models that predict faults, optimise trading windows, and learn from every watt generated across the network.' },
  { initials: 'EI', role: 'Head of Product Design', name: 'Emeka Ikenna-Eze', desc: 'Ensures that GrēxGrid works for the field engineer at 3am and the grandmother on a feature phone. Emeka designs for real contexts — not ideal users in ideal conditions.' },
  { initials: 'ZA', role: 'Head of Community Operations', name: 'Zainab Aliyu', desc: 'GrēxGrid\'s bridge to the communities it serves. Zainab leads deployment readiness, local energy manager training, and the feedback loops that keep product and reality aligned.' },
  { initials: 'SO', role: 'Lead Full-Stack Engineer', name: 'Segun Olawale', desc: 'Builds the GrēxConnect API layer and developer portal. Segun makes GrēxGrid\'s data legible and composable — for governments, NGOs, and builders who want to plug into the network.' },
]

export default function Team() {
  return (
    <section
      id="team"
      style={{
        background: 'var(--dark)',
        padding: '8rem 4rem',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div style={{ maxWidth: 560, marginBottom: '5rem' }}>
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
            The Team
            <span style={{ flex: 1, maxWidth: 60, height: 0.5, background: 'var(--solar)', opacity: 0.4, display: 'block' }} />
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
            Built by Nigerians.
            <br />
            For Nigeria. And beyond.
          </h2>
        </RevealSection>
        <RevealSection delay={200}>
          <p
            style={{
              fontSize: 17,
              lineHeight: 1.75,
              color: 'var(--stone)',
              fontWeight: 300,
              marginTop: '1.25rem',
            }}
          >
            Seven builders who believe that the infrastructure Africa deserves does not
            require waiting — it requires building. Every discipline, every line of code,
            every community visit: grounded in the problem we are solving.
          </p>
        </RevealSection>
      </div>

      <div
        className="team-grid"
        style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2 }}
      >
        {/* Founder card — spans 2 cols */}
        <RevealSection
          style={{
            gridColumn: 'span 2',
            background: 'var(--night)',
            padding: '3rem',
            borderTop: '2px solid var(--solar)',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '3rem',
            alignItems: 'center',
          }}
          className="founder-card"
        >
          <div
            style={{
              width: '100%',
              aspectRatio: '1',
              background: 'radial-gradient(135deg, var(--mid) 0%, var(--night) 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--ff-display)',
                fontSize: 80,
                fontWeight: 300,
                color: 'var(--solar)',
                letterSpacing: '-0.02em',
                lineHeight: 1,
              }}
            >
              MOA
            </span>
          </div>
          <div>
            <div
              style={{
                fontFamily: 'var(--ff-mono)',
                fontSize: 9,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--solar)',
                marginBottom: '0.75rem',
              }}
            >
              Founder &amp; CEO
            </div>
            <div
              style={{
                fontFamily: 'var(--ff-display)',
                fontSize: 32,
                fontWeight: 400,
                color: 'var(--white)',
                lineHeight: 1.1,
                marginBottom: '1rem',
              }}
            >
              Mercy Ogey
              <br />
              Agbinya
            </div>
            <p
              style={{
                fontSize: 14,
                lineHeight: 1.7,
                color: 'var(--stone)',
                fontWeight: 300,
                marginBottom: '1.5rem',
              }}
            >
              Mercy founded GrēxGrid from a single conviction: that energy poverty is a
              solvable distribution problem, not a resource problem. A systems thinker
              with deep roots in community infrastructure, she leads strategy,
              partnerships, and the long view.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {['Strategy', 'Community Infrastructure', 'Energy Access', 'Partnerships'].map(t => (
                <span
                  key={t}
                  style={{
                    fontFamily: 'var(--ff-mono)',
                    fontSize: 9,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    padding: '4px 10px',
                    background: 'var(--mid)',
                    color: 'var(--dust)',
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </RevealSection>

        {/* Member cards */}
        {members.map(({ initials, role, name, desc }, i) => (
          <RevealSection key={name} delay={(i + 1) * 100}>
            <div
              style={{
                background: 'var(--night)',
                padding: '2.5rem 2rem',
                borderTop: '2px solid var(--mid)',
                transition: 'border-top-color 0.3s',
                height: '100%',
              }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.borderTopColor = 'var(--grid-lt)')}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.borderTopColor = 'var(--mid)')}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  background: 'var(--mid)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--ff-mono)',
                  fontSize: 14,
                  color: 'var(--grid-lt)',
                  marginBottom: '1.5rem',
                  fontWeight: 500,
                }}
              >
                {initials}
              </div>
              <div
                style={{
                  fontFamily: 'var(--ff-mono)',
                  fontSize: 9,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'var(--grid-lt)',
                  marginBottom: '0.5rem',
                }}
              >
                {role}
              </div>
              <div
                style={{
                  fontFamily: 'var(--ff-display)',
                  fontSize: 22,
                  fontWeight: 400,
                  color: 'var(--white)',
                  lineHeight: 1.1,
                  marginBottom: '0.75rem',
                }}
              >
                {name}
              </div>
              <p style={{ fontSize: 12, lineHeight: 1.65, color: 'var(--stone)' }}>{desc}</p>
            </div>
          </RevealSection>
        ))}
      </div>

      <style>{`
        @media (max-width: 900px) {
          .team-grid { grid-template-columns: 1fr 1fr !important; }
          .founder-card { grid-column: span 2 !important; grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </section>
  )
}
