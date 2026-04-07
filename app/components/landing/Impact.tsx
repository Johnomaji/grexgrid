'use client'

import RevealSection from './RevealSection'
import CountUp from './CountUp'

const metrics = [
  { val: '847',   label: 'Households connected',    delta: '▲ +23 this month',      color: 'var(--solar)' },
  { val: '₦2.4M', label: 'Community trading income', delta: '▲ Growing monthly',     color: 'var(--solar-lt)' },
  { val: '94.2%', label: 'Network uptime',            delta: '▲ vs 3.8hr grid avg',  color: 'var(--live)' },
  { val: '142t',  label: 'CO₂ avoided',               delta: '▲ And counting',       color: 'var(--grid-lt)' },
]

const testimonials = [
  {
    quote: 'Before GrēxGrid, we spent ₦380,000 on diesel every year. In six months, we\'ve spent nothing on fuel and earned ₦240,000 from trading surplus. That money now goes to our school.',
    name: 'Adaeze Okonkwo',
    role: 'Community Energy Manager · Imo State',
    initials: 'AO',
    color: 'var(--solar)',
  },
  {
    quote: 'The USSD interface was the breakthrough. Our traders have feature phones. When they check energy credit the same way they check airtime, it becomes real — not technology, just life.',
    name: 'Babatunde Mustapha',
    role: 'Field Officer · Kogi State deployment',
    initials: 'BM',
    color: 'var(--grid-lt)',
  },
  {
    quote: 'GrēxSense predicted a fault in our inverter 52 hours before failure. We fixed it in the dry season — not during a storm. That alone saved us three weeks of downtime.',
    name: 'Chukwuemeka Nwosu',
    role: 'Technical Lead · Enugu node cluster',
    initials: 'CN',
    color: 'var(--live)',
  },
]

export default function Impact() {
  return (
    <section
      id="impact"
      style={{
        background: 'var(--dark)',
        padding: '8rem 4rem',
        position: 'relative',
        overflow: 'hidden',
        zIndex: 1,
      }}
    >
      {/* Background orbs */}
      <div style={{
        position: 'absolute', top: '-20%', right: '-10%',
        width: 600, height: 600,
        background: 'radial-gradient(circle, rgba(26,122,82,0.1) 0%, transparent 70%)',
        borderRadius: '50%', pointerEvents: 'none',
        animation: 'orb-breathe 10s ease-in-out infinite',
      }} />
      <div style={{
        position: 'absolute', bottom: '-15%', left: '-8%',
        width: 400, height: 400,
        background: 'radial-gradient(circle, rgba(200,132,26,0.07) 0%, transparent 70%)',
        borderRadius: '50%', pointerEvents: 'none',
        animation: 'orb-breathe-slow 13s ease-in-out infinite',
      }} />

      {/* Intro */}
      <div className="impact-intro" style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '4rem',
        alignItems: 'end',
        marginBottom: '4rem',
        position: 'relative',
      }}>
        <div>
          <RevealSection variant="left">
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.75rem',
              background: 'rgba(46,201,138,0.1)',
              border: '1px solid rgba(46,201,138,0.2)',
              borderRadius: 'var(--radius-pill)',
              padding: '0.4rem 1rem',
              marginBottom: '1.75rem',
            }}>
              {/* Ripple live dot */}
              <span style={{ position: 'relative', width: 8, height: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{
                  position: 'absolute',
                  width: 8, height: 8, borderRadius: '50%',
                  background: 'var(--live)',
                  animation: 'ripple 1.8s ease-out infinite',
                }} />
                <span style={{
                  width: 6, height: 6, borderRadius: '50%',
                  background: 'var(--live)', display: 'block', position: 'relative', zIndex: 1,
                }} />
              </span>
              <span style={{
                fontFamily: 'var(--ff-mono)', fontSize: 10,
                letterSpacing: '0.18em', textTransform: 'uppercase',
                color: 'var(--live)',
              }}>Live Impact</span>
            </div>
          </RevealSection>

          <RevealSection delay={100}>
            <h2 style={{
              fontFamily: 'var(--ff-display)',
              fontSize: 'clamp(34px, 5vw, 64px)',
              fontWeight: 300, lineHeight: 1.0,
              color: 'var(--white)', letterSpacing: '-0.02em',
            }}>
              Trust, earned community
              <br />
              <em style={{ color: 'var(--grid-lt)', fontStyle: 'italic' }}>by community</em>.
            </h2>
          </RevealSection>
        </div>

        <RevealSection delay={200} variant="fade">
          <p style={{
            fontSize: 17, lineHeight: 1.8,
            color: 'var(--stone)', fontWeight: 300, maxWidth: 440,
          }}>
            These numbers are not projections. They are live, from communities currently
            running on GrēxGrid — across Lagos, Kogi, Imo, and Enugu.
          </p>
        </RevealSection>
      </div>

      {/* Metrics */}
      <div className="metrics-row" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '1rem',
        marginBottom: '3rem',
        position: 'relative',
      }}>
        {metrics.map(({ val, label, delta, color }, i) => (
          <RevealSection key={val} delay={i * 110} variant="scale">
            <div
              style={{
                background: 'rgba(15,20,16,0.7)',
                border: '1px solid rgba(196,192,180,0.08)',
                borderRadius: 'var(--radius-lg)',
                padding: '2.5rem 2rem',
                height: '100%',
                transition: 'transform 0.35s cubic-bezier(0.16,1,0.3,1), border-color 0.3s, box-shadow 0.35s',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement
                el.style.transform = 'translateY(-6px)'
                el.style.borderColor = 'rgba(46,201,138,0.3)'
                el.style.boxShadow = '0 16px 48px rgba(0,0,0,0.3)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement
                el.style.transform = 'translateY(0)'
                el.style.borderColor = 'rgba(196,192,180,0.08)'
                el.style.boxShadow = 'none'
              }}
            >
              <CountUp
                value={val}
                duration={1800}
                style={{
                  fontFamily: 'var(--ff-mono)',
                  fontSize: 'clamp(36px, 4vw, 52px)',
                  fontWeight: 500,
                  color,
                  lineHeight: 1,
                  display: 'block',
                  marginBottom: '0.5rem',
                  letterSpacing: '-0.02em',
                }}
              />
              <div style={{ fontSize: 13, color: 'var(--stone)', marginBottom: '0.75rem' }}>{label}</div>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                background: 'rgba(46,201,138,0.08)',
                borderRadius: 'var(--radius-pill)',
                padding: '0.3rem 0.75rem',
              }}>
                <span style={{
                  fontFamily: 'var(--ff-mono)', fontSize: 10,
                  color: 'var(--live)', letterSpacing: '0.06em',
                }}>{delta}</span>
              </div>
            </div>
          </RevealSection>
        ))}
      </div>

      {/* Testimonials */}
      <div className="testimonials-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '1rem',
        position: 'relative',
      }}>
        {testimonials.map(({ quote, name, role, initials, color }, i) => (
          <RevealSection key={name} delay={i * 130} variant="up">
            <div
              style={{
                background: 'rgba(15,20,16,0.6)',
                border: '1px solid rgba(196,192,180,0.08)',
                borderRadius: 'var(--radius-lg)',
                padding: '2.5rem 2rem',
                height: '100%',
                display: 'flex', flexDirection: 'column',
                transition: 'transform 0.35s cubic-bezier(0.16,1,0.3,1), border-color 0.3s, box-shadow 0.35s',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement
                el.style.transform = 'translateY(-6px)'
                el.style.borderColor = 'rgba(196,192,180,0.22)'
                el.style.boxShadow = '0 16px 48px rgba(0,0,0,0.3)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement
                el.style.transform = 'translateY(0)'
                el.style.borderColor = 'rgba(196,192,180,0.08)'
                el.style.boxShadow = 'none'
              }}
            >
              <div style={{
                fontFamily: 'var(--ff-display)',
                fontSize: 56, color, lineHeight: 1,
                marginBottom: '0.25rem', opacity: 0.45,
              }}>"</div>
              <div style={{
                fontFamily: 'var(--ff-display)',
                fontSize: 17, fontWeight: 300, fontStyle: 'italic',
                color: 'var(--white)', lineHeight: 1.65,
                flex: 1, marginBottom: '2rem',
              }}>
                {quote}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{
                  width: 44, height: 44, borderRadius: '50%',
                  background: 'linear-gradient(135deg, var(--mid), var(--dark))',
                  border: `2px solid ${color}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'var(--ff-mono)', fontSize: 12, color,
                  fontWeight: 500, flexShrink: 0,
                }}>{initials}</div>
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
          .impact-intro       { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .metrics-row        { grid-template-columns: 1fr 1fr !important; }
          .testimonials-grid  { grid-template-columns: 1fr 1fr !important; }
          #impact             { padding: 5rem 1.5rem !important; }
        }
        @media (max-width: 600px) {
          .metrics-row        { grid-template-columns: 1fr 1fr !important; }
          .testimonials-grid  { grid-template-columns: 1fr !important; }
          #impact             { padding: 4rem 1.25rem !important; }
        }
        @media (max-width: 420px) {
          .metrics-row        { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
