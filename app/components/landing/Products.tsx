'use client'

import { useState } from 'react'
import RevealSection from './RevealSection'
import TiltCard from './TiltCard'

const products = [
  {
    tag: 'Hardware',
    name: 'GrēxBox',
    desc: 'Plug-and-play solar + battery storage. Installed in under 4 hours. No grid connection required. Owned by your community.',
    color: 'var(--solar)',
    colorBg: 'rgba(200,132,26,0.07)',
    featured: true,
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
        <rect x="3" y="6" width="18" height="12" rx="2" />
        <circle cx="8" cy="12" r="1.5" fill="currentColor" stroke="none" />
        <line x1="12" y1="9" x2="12" y2="15" />
        <line x1="15" y1="9" x2="15" y2="15" />
      </svg>
    ),
  },
  {
    tag: 'Trading',
    name: 'GrēxShare',
    desc: 'Peer-to-peer energy trading between nodes. Surplus power sold to neighbours. Your community earns from its grid.',
    color: 'var(--grid-lt)',
    colorBg: 'rgba(26,122,82,0.07)',
    featured: false,
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
        <path d="M7 16H17M17 16L14 13M17 16L14 19" />
        <path d="M17 8H7M7 8L10 5M7 8L10 11" />
      </svg>
    ),
  },
  {
    tag: 'Payments',
    name: 'GrēxPay',
    desc: 'Mobile money + USSD pay-as-you-go. Works on any phone. M-Pesa, Opay, PalmPay. No smartphone required.',
    color: 'var(--solar)',
    colorBg: 'rgba(200,132,26,0.06)',
    featured: false,
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
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
    color: 'var(--grid-lt)',
    colorBg: 'rgba(26,122,82,0.09)',
    featured: false,
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
        <circle cx="12" cy="12" r="8" />
        <path d="M8 12 Q10 8 12 12 Q14 16 16 12" />
      </svg>
    ),
  },
  {
    tag: 'Open API',
    name: 'GrēxConnect',
    desc: 'REST API for governments, NGOs, and deployers. Integrate live grid data, automate reporting, build on top of GrēxGrid.',
    color: 'var(--solar)',
    colorBg: 'rgba(200,132,26,0.06)',
    featured: false,
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
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
        background: 'var(--night)',
        padding: '8rem 4rem',
        position: 'relative',
        zIndex: 1,
      }}
    >
      {/* Intro */}
      <div className="products-intro" style={{
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
              background: 'rgba(26,122,82,0.12)',
              border: '1px solid rgba(26,122,82,0.25)',
              borderRadius: 'var(--radius-pill)',
              padding: '0.4rem 1rem', marginBottom: '1.75rem',
            }}>
              <span style={{
                fontFamily: 'var(--ff-mono)', fontSize: 10,
                letterSpacing: '0.18em', textTransform: 'uppercase',
                color: 'var(--grid-lt)',
              }}>The Platform</span>
            </div>
          </RevealSection>
          <RevealSection delay={100}>
            <h2 style={{
              fontFamily: 'var(--ff-display)',
              fontSize: 'clamp(34px, 5vw, 64px)',
              fontWeight: 300, lineHeight: 1.0,
              color: 'var(--white)', letterSpacing: '-0.02em', maxWidth: 440,
            }}>
              Five products.
              <br />
              One complete energy
              <br />
              <em style={{ color: 'var(--grid-lt)', fontStyle: 'italic' }}>operating system</em>.
            </h2>
          </RevealSection>
        </div>
        <RevealSection delay={200} variant="fade">
          <p style={{
            fontSize: 17, lineHeight: 1.8,
            color: 'var(--stone)', fontWeight: 300, maxWidth: 440,
          }}>
            GrēxGrid is not a solar panel company. It is a complete community energy
            infrastructure — hardware, software, payments, and intelligence — designed
            to be understood, owned, and operated by the communities it serves.
          </p>
        </RevealSection>
      </div>

      {/* Bento grid */}
      <div className="products-bento" style={{
        display: 'grid',
        gridTemplateColumns: '2fr 1fr 1fr',
        gridTemplateRows: 'auto auto',
        gap: '1rem',
      }}>
        {/* GrēxBox — featured 2-row */}
        <RevealSection delay={0} variant="scale" style={{ gridRow: 'span 2' }} className="bento-featured">
          <BentoCard {...products[0]} />
        </RevealSection>
        {/* GrēxShare */}
        <RevealSection delay={100} variant="up">
          <BentoCard {...products[1]} />
        </RevealSection>
        {/* GrēxPay */}
        <RevealSection delay={150} variant="up">
          <BentoCard {...products[2]} />
        </RevealSection>
        {/* GrēxSense */}
        <RevealSection delay={200} variant="up">
          <BentoCard {...products[3]} />
        </RevealSection>
        {/* GrēxConnect */}
        <RevealSection delay={250} variant="up">
          <BentoCard {...products[4]} />
        </RevealSection>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .products-intro  { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .products-bento  { grid-template-columns: 1fr 1fr !important; grid-template-rows: auto !important; }
          .bento-featured  { grid-row: span 1 !important; }
          #products        { padding: 5rem 1.5rem !important; }
        }
        @media (max-width: 560px) {
          .products-bento  { grid-template-columns: 1fr !important; }
          #products        { padding: 4rem 1.25rem !important; }
        }
      `}</style>
    </section>
  )
}

function BentoCard({
  tag, name, desc, icon, color, colorBg, featured,
}: {
  tag: string; name: string; desc: string; icon: React.ReactNode;
  color: string; colorBg: string; featured: boolean;
}) {
  const [hovered, setHovered] = useState(false)
  // Derive RGB for TiltCard glowColor from the card's accent
  const rgb = color === 'var(--solar)' ? '200,132,26' : '26,122,82'

  return (
    <TiltCard
      glowColor={rgb}
      particleCount={featured ? 12 : 8}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      style={{
        background: hovered ? colorBg : 'rgba(26,31,27,0.85)',
        border: `1px solid rgba(196,192,180,0.07)`,
        borderTop: `2px solid ${color}`,
        borderRadius: 'var(--radius-lg)',
        padding: featured ? '3rem' : '2rem',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: featured ? '1.5rem' : '1rem',
        boxShadow: hovered ? '0 24px 64px rgba(0,0,0,0.35)' : 'none',
        cursor: 'pointer',
        minHeight: featured ? 380 : undefined,
        transition: 'background 0.3s, box-shadow 0.4s',
      }}
    >
      <div style={{ color, opacity: 0.9 }}>{icon}</div>
      <div>
        <div style={{
          fontFamily: 'var(--ff-mono)', fontSize: 9, color,
          letterSpacing: '0.14em', textTransform: 'uppercase',
          marginBottom: '0.4rem', opacity: 0.8,
        }}>{tag}</div>
        <div style={{
          fontFamily: 'var(--ff-display)',
          fontSize: featured ? 32 : 22,
          fontWeight: 400, color: 'var(--white)',
          lineHeight: 1.1, marginBottom: '0.5rem',
        }}>{name}</div>
        <div style={{
          fontSize: featured ? 15 : 13,
          lineHeight: 1.75, color: 'var(--stone)', fontWeight: 300,
        }}>{desc}</div>
      </div>
      {featured && (
        <div style={{
          marginTop: 'auto',
          display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
          color, fontFamily: 'var(--ff-mono)', fontSize: 11,
          letterSpacing: '0.08em', textTransform: 'uppercase',
        }}>
          Learn more
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>
      )}
    </TiltCard>
  )
}
