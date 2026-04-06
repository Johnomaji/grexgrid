'use client'

import RevealSection from './RevealSection'

const metrics = [
  { val: '847', label: 'Households connected', delta: '▲ +23 this month' },
  { val: '₦2.4M', label: 'Community trading income', delta: '▲ Growing monthly' },
  { val: '94.2%', label: 'Network uptime', delta: '▲ vs 3.8hr grid average' },
  { val: '142t', label: 'CO₂ avoided', delta: '▲ And counting' },
]

const testimonials = [
  {
    quote:
      '"Before GrēxGrid, we spent ₦380,000 on diesel every year. In six months, we\'ve spent nothing on fuel and earned ₦240,000 from trading surplus. That money now goes to our school."',
    name: 'Adaeze Okonkwo',
    role: 'Community Energy Manager · Imo State',
    initials: 'AO',
  },
  {
    quote:
      '"The USSD interface was the breakthrough. Our traders have feature phones. When they check energy credit the same way they check airtime, it becomes real — not technology, just life."',
    name: 'Babatunde Mustapha',
    role: 'Field Officer · Kogi State deployment',
    initials: 'BM',
  },
  {
    quote:
      '"GrēxSense predicted a fault in our inverter 52 hours before failure. We fixed it in the dry season — not during a storm. That alone saved us three weeks of downtime."',
    name: 'Chukwuemeka Nwosu',
    role: 'Technical Lead · Enugu node cluster',
    initials: 'CN',
  },
]

export default function Impact() {
  return (
    <section
      id="impact"
      style={{
        background: 'var(--solar)',
        padding: '8rem 4rem',
        position: 'relative',
        overflow: 'hidden',
        zIndex: 1,
      }}
    >
      {/* Grid pattern background */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `repeating-linear-gradient(0deg, transparent, transparent 79px, rgba(15,20,16,0.04) 80px),
            repeating-linear-gradient(90deg, transparent, transparent 79px, rgba(15,20,16,0.04) 80px)`,
          pointerEvents: 'none',
        }}
      />

      {/* Intro */}
      <RevealSection style={{ position: 'relative', maxWidth: 600, marginBottom: '5rem' }}>
        <div
          style={{
            fontFamily: 'var(--ff-mono)',
            fontSize: 10,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--solar-dk)',
            marginBottom: '1.5rem',
          }}
        >
          Live Impact
        </div>
        <h2
          style={{
            fontFamily: 'var(--ff-display)',
            fontSize: 'clamp(36px, 5vw, 60px)',
            fontWeight: 300,
            lineHeight: 1.05,
            color: 'var(--night)',
          }}
        >
          Trust, earned community
          <br />
          by community.
        </h2>
        <p
          style={{
            fontSize: 17,
            lineHeight: 1.75,
            color: 'var(--solar-dk)',
            fontWeight: 300,
            marginTop: '1.25rem',
          }}
        >
          These numbers are not projections. They are live, from communities currently
          running on GrēxGrid — across Lagos, Kogi, Imo, and Enugu.
        </p>
      </RevealSection>

      {/* Metrics */}
      <div
        className="metrics-row"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 2,
          marginBottom: '4rem',
          position: 'relative',
        }}
      >
        {metrics.map(({ val, label, delta }, i) => (
          <RevealSection key={val} delay={i * 100}>
            <div
              style={{
                background: 'var(--night)',
                padding: '2.5rem 2rem',
                height: '100%',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--ff-mono)',
                  fontSize: 48,
                  fontWeight: 500,
                  color: 'var(--solar)',
                  lineHeight: 1,
                  marginBottom: '0.5rem',
                }}
              >
                {val}
              </div>
              <div style={{ fontSize: 13, color: 'var(--stone)' }}>{label}</div>
              <div
                style={{
                  fontFamily: 'var(--ff-mono)',
                  fontSize: 10,
                  color: 'var(--live)',
                  marginTop: '0.5rem',
                  letterSpacing: '0.08em',
                }}
              >
                {delta}
              </div>
            </div>
          </RevealSection>
        ))}
      </div>

      {/* Testimonials */}
      <div
        className="testimonials-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 2,
          position: 'relative',
        }}
      >
        {testimonials.map(({ quote, name, role, initials }, i) => (
          <RevealSection key={name} delay={i * 100}>
            <div
              style={{
                background: 'var(--night)',
                padding: '2.5rem 2rem',
                height: '100%',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--ff-display)',
                  fontSize: 18,
                  fontWeight: 300,
                  fontStyle: 'italic',
                  color: 'var(--white)',
                  lineHeight: 1.65,
                  marginBottom: '2rem',
                }}
              >
                {quote}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: '50%',
                    background: 'var(--mid)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'var(--ff-mono)',
                    fontSize: 12,
                    color: 'var(--solar)',
                    fontWeight: 500,
                    flexShrink: 0,
                  }}
                >
                  {initials}
                </div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 500, color: 'var(--white)' }}>{name}</div>
                  <div style={{ fontSize: 11, color: 'var(--stone)', marginTop: 2 }}>{role}</div>
                </div>
              </div>
            </div>
          </RevealSection>
        ))}
      </div>

      <style>{`
        @media (max-width: 900px) {
          .metrics-row { grid-template-columns: 1fr 1fr !important; }
          .testimonials-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
