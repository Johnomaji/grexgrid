'use client'

import RevealSection from './RevealSection'

const plans = [
  {
    badge: 'Household',
    name: 'Pay-As-You-Go',
    amount: '₦15',
    per: 'per kWh · via app or *447#',
    features: [
      'No minimum credit required',
      'USSD accessible — any phone',
      'Real-time usage tracking',
      'Trading credit earned automatically',
      'M-Pesa, Opay, PalmPay',
    ],
    cta: 'Get started',
    featured: false,
    accentColor: 'var(--grid)',
    accentBg: 'rgba(26,122,82,0.06)',
    checkColor: 'var(--grid)',
  },
  {
    badge: 'Most communities',
    name: 'Community Plan',
    amount: '₦1,200',
    per: 'per household monthly · all-inclusive',
    features: [
      'GrēxBox installation included',
      'Unlimited peer-to-peer trading',
      'GrēxSense AI monitoring 24/7',
      'Community energy manager training',
      '24-hour field support response',
      'Monthly impact reporting',
    ],
    cta: 'Talk to us about your community',
    featured: true,
    accentColor: 'var(--solar)',
    accentBg: 'rgba(200,132,26,0.08)',
    checkColor: 'var(--solar)',
  },
  {
    badge: 'Governments · NGOs · Developers',
    name: 'GrēxConnect API',
    amount: '₦0',
    per: 'to start · usage-based scaling',
    features: [
      'Full REST API access',
      'Real-time grid & trading data',
      'Custom dashboards & webhooks',
      'Dedicated integration support',
      'SLA-backed uptime guarantee',
    ],
    cta: 'Access developer portal',
    featured: false,
    accentColor: 'var(--grid-lt)',
    accentBg: 'rgba(26,122,82,0.06)',
    checkColor: 'var(--grid-lt)',
  },
]

export default function Pricing() {
  return (
    <section
      id="pricing"
      style={{
        background: 'var(--white)',
        padding: '8rem 4rem',
        color: 'var(--night)',
        position: 'relative',
        zIndex: 1,
      }}
    >
      {/* Intro */}
      <div className="pricing-intro" style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '4rem',
        alignItems: 'end',
        marginBottom: '4rem',
      }}>
        <div>
          <RevealSection variant="left">
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
              background: 'rgba(122,80,16,0.08)',
              border: '1px solid rgba(122,80,16,0.15)',
              borderRadius: 'var(--radius-pill)',
              padding: '0.4rem 1rem', marginBottom: '1.75rem',
            }}>
              <span style={{
                fontFamily: 'var(--ff-mono)', fontSize: 10,
                letterSpacing: '0.18em', textTransform: 'uppercase',
                color: 'var(--solar-dk)',
              }}>Access</span>
            </div>
          </RevealSection>
          <RevealSection delay={100}>
            <h2 style={{
              fontFamily: 'var(--ff-display)',
              fontSize: 'clamp(34px, 5vw, 64px)',
              fontWeight: 300, lineHeight: 1.0,
              color: 'var(--night)', letterSpacing: '-0.02em',
            }}>
              Pay only for
              <br />
              <em style={{ color: 'var(--solar)', fontStyle: 'italic' }}>what you use</em>.
            </h2>
          </RevealSection>
        </div>
        <RevealSection delay={200} variant="fade">
          <p style={{
            fontSize: 17, lineHeight: 1.8,
            color: 'var(--stone)', fontWeight: 300, maxWidth: 440,
          }}>
            No upfront infrastructure cost for communities. No hidden fees. No locked-in
            contracts. If GrēxGrid doesn&apos;t deliver value — the model breaks, and we know it.
          </p>
        </RevealSection>
      </div>

      {/* Cards */}
      <div className="pricing-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '1.25rem',
        alignItems: 'start',
      }}>
        {plans.map(({ badge, name, amount, per, features, cta, featured, accentColor, accentBg, checkColor }, i) => (
          <RevealSection key={name} delay={i * 120} variant={i === 1 ? 'scale' : 'up'}>
            <div
              className={featured ? 'shimmer-border' : ''}
              style={{
                background: featured ? 'var(--night)' : 'var(--parchment)',
                border: featured ? undefined : '1px solid rgba(196,192,180,0.4)',
                borderRadius: 'var(--radius-xl)',
                padding: featured ? '2.75rem 2.25rem' : '2.5rem 2.25rem',
                display: 'flex', flexDirection: 'column',
                height: '100%',
                transition: 'transform 0.4s cubic-bezier(0.16,1,0.3,1), box-shadow 0.4s',
                boxShadow: featured ? '0 0 60px rgba(200,132,26,0.15)' : 'none',
                position: 'relative', overflow: 'hidden',
                marginTop: featured ? '-1rem' : undefined,
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement
                el.style.transform = 'translateY(-8px)'
                el.style.boxShadow = featured
                  ? '0 24px 64px rgba(200,132,26,0.25)'
                  : '0 20px 60px rgba(15,20,16,0.12)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement
                el.style.transform = 'translateY(0)'
                el.style.boxShadow = featured ? '0 0 60px rgba(200,132,26,0.15)' : 'none'
              }}
            >
              {/* "Popular" label for featured */}
              {featured && (
                <div style={{
                  position: 'absolute', top: 20, right: 20,
                  background: 'var(--solar)',
                  color: 'var(--night)',
                  fontFamily: 'var(--ff-mono)', fontSize: 9,
                  letterSpacing: '0.12em', textTransform: 'uppercase',
                  padding: '4px 10px',
                  borderRadius: 'var(--radius-pill)',
                  fontWeight: 600,
                }}>Popular</div>
              )}

              {/* Badge */}
              <div style={{ display: 'inline-flex', marginBottom: '1.25rem' }}>
                <span style={{
                  fontFamily: 'var(--ff-mono)', fontSize: 9,
                  letterSpacing: '0.12em', textTransform: 'uppercase',
                  color: accentColor,
                  background: featured ? 'rgba(200,132,26,0.12)' : accentBg,
                  border: `1px solid ${featured ? 'rgba(200,132,26,0.2)' : 'rgba(26,122,82,0.2)'}`,
                  borderRadius: 'var(--radius-pill)',
                  padding: '4px 10px',
                }}>{badge}</span>
              </div>

              <div style={{
                fontFamily: 'var(--ff-display)', fontSize: 28, fontWeight: 400,
                color: featured ? 'var(--white)' : 'var(--night)',
                marginBottom: '0.5rem',
              }}>{name}</div>

              <div style={{
                display: 'flex', alignItems: 'baseline', gap: '0.25rem',
                margin: '1rem 0 0.25rem',
              }}>
                <span style={{
                  fontFamily: 'var(--ff-mono)', fontSize: 52, fontWeight: 500,
                  color: accentColor, lineHeight: 1, letterSpacing: '-0.02em',
                }}>{amount}</span>
              </div>

              <div style={{
                fontSize: 12, color: 'var(--stone)', marginBottom: '2rem',
                fontFamily: 'var(--ff-mono)',
              }}>{per}</div>

              {/* Divider */}
              <div style={{
                height: 1,
                background: featured
                  ? 'rgba(196,192,180,0.1)'
                  : 'rgba(122,122,114,0.2)',
                marginBottom: '1.5rem',
              }} />

              {/* Features */}
              <ul style={{ listStyle: 'none', marginBottom: '2rem', flex: 1 }}>
                {features.map(f => (
                  <li key={f} style={{
                    fontSize: 13,
                    color: featured ? 'var(--dust)' : 'var(--stone)',
                    padding: '0.55rem 0',
                    borderBottom: `1px solid ${featured ? 'rgba(196,192,180,0.07)' : 'rgba(196,192,180,0.22)'}`,
                    display: 'flex', gap: '0.75rem', alignItems: 'flex-start',
                  }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                      stroke={checkColor} strokeWidth="2.5" strokeLinecap="round"
                      style={{ flexShrink: 0, marginTop: 2 }}>
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#manifesto"
                style={{
                  display: 'block', textAlign: 'center',
                  padding: '0.9rem 1.5rem',
                  fontFamily: 'var(--ff-body)', fontSize: 13, fontWeight: 600,
                  letterSpacing: '0.05em',
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)',
                  borderRadius: 'var(--radius-pill)',
                  background: featured ? 'var(--solar)' : 'transparent',
                  color: featured ? 'var(--night)' : accentColor,
                  border: featured ? 'none' : `1px solid ${accentColor}`,
                  boxShadow: featured ? '0 4px 16px rgba(200,132,26,0.3)' : 'none',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLAnchorElement
                  el.style.transform = 'translateY(-2px)'
                  if (featured) {
                    el.style.background = 'var(--solar-lt)'
                    el.style.boxShadow = '0 8px 28px rgba(200,132,26,0.45)'
                  } else {
                    el.style.background = accentBg
                    el.style.boxShadow = '0 4px 16px rgba(0,0,0,0.08)'
                  }
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLAnchorElement
                  el.style.transform = 'translateY(0)'
                  el.style.background = featured ? 'var(--solar)' : 'transparent'
                  el.style.boxShadow = featured ? '0 4px 16px rgba(200,132,26,0.3)' : 'none'
                }}
              >{cta}</a>
            </div>
          </RevealSection>
        ))}
      </div>

      <style>{`
        @media (max-width: 900px) {
          .pricing-intro { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .pricing-grid  { grid-template-columns: 1fr !important; }
          .pricing-grid > div { margin-top: 0 !important; }
          #pricing       { padding: 5rem 1.5rem !important; }
        }
        @media (max-width: 500px) {
          #pricing { padding: 4rem 1.25rem !important; }
        }
      `}</style>
    </section>
  )
}
