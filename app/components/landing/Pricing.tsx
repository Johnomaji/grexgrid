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
  },
]

export default function Pricing() {
  return (
    <section
      id="pricing"
      style={{
        background: 'var(--parchment)',
        padding: '8rem 4rem',
        color: 'var(--night)',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div
        className="pricing-intro"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'end',
          marginBottom: 0,
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
                color: 'var(--stone)',
                marginBottom: '1.5rem',
              }}
            >
              Access
            </div>
          </RevealSection>
          <RevealSection delay={100}>
            <h2
              style={{
                fontFamily: 'var(--ff-display)',
                fontSize: 'clamp(36px, 5vw, 60px)',
                fontWeight: 300,
                lineHeight: 1.05,
                color: 'var(--night)',
              }}
            >
              Pay only for
              <br />
              what you use.
            </h2>
          </RevealSection>
        </div>
        <RevealSection delay={200}>
          <p
            style={{
              fontSize: 17,
              lineHeight: 1.75,
              color: 'var(--stone)',
              fontWeight: 300,
              maxWidth: 440,
            }}
          >
            No upfront infrastructure cost for communities. No hidden fees. No locked-in
            contracts. If GrēxGrid doesn&apos;t deliver value — the model breaks, and we know it.
          </p>
        </RevealSection>
      </div>

      <div
        className="pricing-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 2,
          marginTop: '4rem',
        }}
      >
        {plans.map(({ badge, name, amount, per, features, cta, featured }, i) => (
          <RevealSection key={name} delay={i * 100}>
            <div
              style={{
                background: featured ? 'var(--night)' : 'var(--white)',
                padding: '2.5rem 2rem',
                borderTop: `2px solid ${featured ? 'var(--solar)' : 'transparent'}`,
                transition: 'transform 0.3s',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
              }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)')}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.transform = 'translateY(0)')}
            >
              <div
                style={{
                  fontFamily: 'var(--ff-mono)',
                  fontSize: 9,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--solar)',
                  marginBottom: '1rem',
                }}
              >
                {badge}
              </div>
              <div
                style={{
                  fontFamily: 'var(--ff-display)',
                  fontSize: 26,
                  fontWeight: 400,
                  color: featured ? 'var(--white)' : 'var(--night)',
                  marginBottom: '0.25rem',
                }}
              >
                {name}
              </div>
              <div
                style={{
                  fontFamily: 'var(--ff-mono)',
                  fontSize: 44,
                  fontWeight: 500,
                  color: 'var(--solar)',
                  lineHeight: 1,
                  margin: '0.75rem 0 0.25rem',
                }}
              >
                {amount}
              </div>
              <div
                style={{
                  fontSize: 12,
                  color: 'var(--stone)',
                  marginBottom: '2rem',
                }}
              >
                {per}
              </div>
              <ul
                style={{
                  listStyle: 'none',
                  marginBottom: '2rem',
                  flex: 1,
                }}
              >
                {features.map(f => (
                  <li
                    key={f}
                    style={{
                      fontSize: 13,
                      color: featured ? 'var(--dust)' : 'var(--stone)',
                      padding: '0.5rem 0',
                      borderBottom: `0.5px solid ${featured ? 'var(--mid)' : 'var(--dust)'}`,
                      display: 'flex',
                      gap: '0.75rem',
                      alignItems: 'flex-start',
                    }}
                  >
                    <span
                      style={{
                        color: featured ? 'var(--solar)' : 'var(--grid)',
                        fontFamily: 'var(--ff-mono)',
                        fontSize: 11,
                        flexShrink: 0,
                        marginTop: 2,
                      }}
                    >
                      —
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#manifesto"
                style={{
                  display: 'block',
                  textAlign: 'center',
                  width: '100%',
                  padding: '0.875rem',
                  fontFamily: 'var(--ff-body)',
                  fontSize: 13,
                  fontWeight: 500,
                  letterSpacing: '0.06em',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  background: featured ? 'var(--solar)' : 'transparent',
                  color: featured ? 'var(--night)' : 'var(--stone)',
                  border: featured ? 'none' : '0.5px solid var(--dust)',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget
                  if (featured) {
                    el.style.background = 'var(--solar-lt)'
                  } else {
                    el.style.borderColor = 'var(--solar)'
                    el.style.color = 'var(--solar)'
                  }
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget
                  if (featured) {
                    el.style.background = 'var(--solar)'
                  } else {
                    el.style.borderColor = 'var(--dust)'
                    el.style.color = 'var(--stone)'
                  }
                }}
              >
                {cta}
              </a>
            </div>
          </RevealSection>
        ))}
      </div>

      <style>{`
        @media (max-width: 900px) {
          .pricing-intro { grid-template-columns: 1fr !important; }
          .pricing-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
