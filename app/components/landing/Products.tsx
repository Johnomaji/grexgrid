'use client'

import RevealSection from './RevealSection'

const products = [
  {
    tag: 'Hardware',
    name: 'GrēxBox',
    desc: 'Plug-and-play solar + battery storage. Installed in under 4 hours. No grid connection required. Owned by your community.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--solar)" strokeWidth="1.5" strokeLinecap="round">
        <rect x="3" y="6" width="18" height="12" rx="1" />
        <circle cx="8" cy="12" r="1.5" fill="var(--solar)" stroke="none" />
        <line x1="12" y1="9" x2="12" y2="15" />
        <line x1="15" y1="9" x2="15" y2="15" />
      </svg>
    ),
  },
  {
    tag: 'Trading',
    name: 'GrēxShare',
    desc: 'Peer-to-peer energy trading between nodes. Surplus power sold to neighbours. Your community earns from its grid.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--grid)" strokeWidth="1.5" strokeLinecap="round">
        <path d="M7 16H17M17 16L14 13M17 16L14 19" />
        <path d="M17 8H7M7 8L10 5M7 8L10 11" />
      </svg>
    ),
  },
  {
    tag: 'Payments',
    name: 'GrēxPay',
    desc: 'Mobile money + USSD pay-as-you-go. Works on any phone. M-Pesa, Opay, PalmPay. No smartphone required.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--solar)" strokeWidth="1.5" strokeLinecap="round">
        <rect x="5" y="3" width="14" height="18" rx="2" />
        <line x1="9" y1="8" x2="15" y2="8" />
        <circle cx="12" cy="14" r="2" />
      </svg>
    ),
  },
  {
    tag: 'Intelligence',
    name: 'GrēxSense',
    desc: 'AI-driven grid optimisation. Predicts faults 48+ hours early, maximises trading windows, tracks community impact in real time.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--grid)" strokeWidth="1.5" strokeLinecap="round">
        <circle cx="12" cy="12" r="8" />
        <path d="M8 12 Q10 8 12 12 Q14 16 16 12" />
      </svg>
    ),
  },
  {
    tag: 'Open API',
    name: 'GrēxConnect',
    desc: 'REST API for governments, NGOs, and deployers. Integrate live grid data, automate reporting, build on top of GrēxGrid.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--solar)" strokeWidth="1.5" strokeLinecap="round">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    ),
  },
]

export default function Products() {
  return (
    <section
      id="products"
      style={{
        background: 'var(--white)',
        padding: '8rem 4rem',
        color: 'var(--night)',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div
        className="products-intro"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'end',
          marginBottom: '4rem',
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
                color: 'var(--grid)',
                marginBottom: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
              }}
            >
              The Platform
              <span
                style={{
                  flex: 1,
                  maxWidth: 60,
                  height: 0.5,
                  background: 'var(--grid)',
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
                fontSize: 'clamp(36px, 5vw, 60px)',
                fontWeight: 300,
                lineHeight: 1.05,
                color: 'var(--night)',
                maxWidth: 400,
              }}
            >
              Five products.
              <br />
              One complete energy operating system.
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
            GrēxGrid is not a solar panel company. It is a complete community energy
            infrastructure — hardware, software, payments, and intelligence — designed
            to be understood, owned, and operated by the communities it serves.
          </p>
        </RevealSection>
      </div>

      <div
        className="products-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: 2,
        }}
      >
        {products.map(({ tag, name, desc, icon }, i) => (
          <RevealSection key={name} delay={i * 100}>
            <ProductCard tag={tag} name={name} desc={desc} icon={icon} />
          </RevealSection>
        ))}
      </div>

      <style>{`
        @media (max-width: 900px) {
          .products-intro { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .products-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  )
}

function ProductCard({
  tag,
  name,
  desc,
  icon,
}: {
  tag: string
  name: string
  desc: string
  icon: React.ReactNode
}) {
  return (
    <div
      style={{
        background: 'var(--parchment)',
        padding: '2.5rem 1.75rem',
        borderTop: '2px solid transparent',
        cursor: 'pointer',
        transition: 'border-color 0.25s, transform 0.25s',
        position: 'relative',
        height: '100%',
      }}
      onMouseEnter={e => {
        const el = e.currentTarget
        el.style.borderTopColor = 'var(--solar)'
        el.style.transform = 'translateY(-4px)'
      }}
      onMouseLeave={e => {
        const el = e.currentTarget
        el.style.borderTopColor = 'transparent'
        el.style.transform = 'translateY(0)'
      }}
    >
      <div style={{ marginBottom: '1.5rem' }}>{icon}</div>
      <div
        style={{
          fontFamily: 'var(--ff-mono)',
          fontSize: 9,
          color: 'var(--solar)',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          marginBottom: '0.75rem',
        }}
      >
        {tag}
      </div>
      <div
        style={{
          fontFamily: 'var(--ff-display)',
          fontSize: 20,
          fontWeight: 500,
          color: 'var(--night)',
          marginBottom: '0.5rem',
        }}
      >
        {name}
      </div>
      <div style={{ fontSize: 13, lineHeight: 1.65, color: 'var(--stone)' }}>{desc}</div>
    </div>
  )
}
