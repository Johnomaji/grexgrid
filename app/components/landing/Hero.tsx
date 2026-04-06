'use client'

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: '0 4rem 6rem',
        overflow: 'hidden',
        zIndex: 1,
      }}
    >
      {/* Orbs */}
      <div
        style={{
          position: 'absolute',
          top: '-20%',
          right: '-10%',
          width: 700,
          height: 700,
          background:
            'radial-gradient(circle, rgba(200,132,26,0.12) 0%, rgba(200,132,26,0.04) 40%, transparent 70%)',
          borderRadius: '50%',
          animation: 'orb-breathe 8s ease-in-out infinite',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-15%',
          left: '10%',
          width: 500,
          height: 500,
          background:
            'radial-gradient(circle, rgba(26,122,82,0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'orb-breathe 10s ease-in-out infinite reverse',
          pointerEvents: 'none',
        }}
      />

      {/* Ambient GG */}
      <div
        className="hero-ambient"
        style={{
          position: 'absolute',
          right: '4rem',
          top: '50%',
          transform: 'translateY(-50%)',
          fontFamily: 'var(--ff-display)',
          fontSize: 240,
          fontWeight: 300,
          color: 'transparent',
          WebkitTextStroke: '0.5px rgba(196,192,180,0.06)',
          lineHeight: 1,
          pointerEvents: 'none',
          letterSpacing: '-0.04em',
          userSelect: 'none',
        }}
      >
        GG
      </div>

      {/* Tag */}
      <div
        style={{
          fontFamily: 'var(--ff-mono)',
          fontSize: 10,
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: 'var(--solar)',
          marginBottom: '2.5rem',
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          opacity: 0,
          animation: 'fade-up 0.8s 0.3s forwards',
        }}
      >
        <span
          style={{
            display: 'block',
            width: 32,
            height: 0.5,
            background: 'var(--solar)',
          }}
        />
        Lagos, Nigeria · Clean Energy · AI · Community
      </div>

      {/* Headline */}
      <h1
        style={{
          fontFamily: 'var(--ff-display)',
          fontSize: 'clamp(56px, 9vw, 112px)',
          fontWeight: 300,
          lineHeight: 0.95,
          color: 'var(--white)',
          letterSpacing: '-0.02em',
          marginBottom: '2.5rem',
          maxWidth: 900,
          opacity: 0,
          animation: 'fade-up 0.9s 0.5s forwards',
        }}
      >
        Your community.
        <br />
        Your{' '}
        <em style={{ fontStyle: 'italic', color: 'var(--solar)' }}>grid</em>.
        <br />
        <span style={{ color: 'var(--grid-lt)' }}>Your power.</span>
      </h1>

      {/* Sub */}
      <p
        style={{
          fontSize: 18,
          fontWeight: 300,
          color: 'var(--dust)',
          lineHeight: 1.7,
          maxWidth: 560,
          marginBottom: '3rem',
          opacity: 0,
          animation: 'fade-up 0.9s 0.7s forwards',
        }}
      >
        GrēxGrid gives communities the tools to generate, store, trade, and own
        their energy — no waiting for a national grid that was never designed to
        reach you.
      </p>

      {/* Actions */}
      <div
        style={{
          display: 'flex',
          gap: '1rem',
          alignItems: 'center',
          flexWrap: 'wrap',
          marginBottom: '5rem',
          opacity: 0,
          animation: 'fade-up 0.9s 0.9s forwards',
        }}
      >
        <a
          href="#manifesto"
          style={{
            background: 'var(--solar)',
            color: 'var(--night)',
            padding: '1rem 2.5rem',
            fontFamily: 'var(--ff-body)',
            fontSize: 14,
            fontWeight: 500,
            letterSpacing: '0.06em',
            border: 'none',
            cursor: 'pointer',
            display: 'inline-block',
            transition: 'background 0.2s, transform 0.2s',
          }}
          onMouseEnter={e => {
            const el = e.currentTarget
            el.style.background = 'var(--solar-lt)'
            el.style.transform = 'translateY(-2px)'
          }}
          onMouseLeave={e => {
            const el = e.currentTarget
            el.style.background = 'var(--solar)'
            el.style.transform = 'translateY(0)'
          }}
        >
          Get GrēxBox for my community
        </a>
        <a
          href="#how"
          style={{
            background: 'transparent',
            color: 'var(--dust)',
            padding: '1rem 2.5rem',
            fontFamily: 'var(--ff-mono)',
            fontSize: 12,
            letterSpacing: '0.1em',
            border: '0.5px solid var(--mid)',
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.75rem',
            transition: 'border-color 0.2s, color 0.2s',
          }}
          onMouseEnter={e => {
            const el = e.currentTarget
            el.style.borderColor = 'var(--solar)'
            el.style.color = 'var(--solar)'
          }}
          onMouseLeave={e => {
            const el = e.currentTarget
            el.style.borderColor = 'var(--mid)'
            el.style.color = 'var(--dust)'
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="16" />
            <line x1="8" y1="12" x2="16" y2="12" />
          </svg>
          See how it works
        </a>
      </div>

      {/* Stats */}
      <div
        style={{
          display: 'flex',
          gap: '4rem',
          paddingTop: '2.5rem',
          borderTop: '0.5px solid rgba(196,192,180,0.15)',
          opacity: 0,
          animation: 'fade-up 0.9s 1.1s forwards',
          flexWrap: 'wrap',
        }}
      >
        {[
          { val: '847', label: 'Households connected' },
          { val: '94.2%', label: 'Network uptime' },
          { val: '₦2.4M', label: 'Trading income generated' },
          { val: '142t', label: 'CO₂ avoided' },
        ].map(({ val, label }) => (
          <div key={label}>
            <div
              style={{
                fontFamily: 'var(--ff-mono)',
                fontSize: 32,
                fontWeight: 500,
                color: 'var(--solar)',
                lineHeight: 1,
                marginBottom: '0.3rem',
              }}
            >
              {val}
            </div>
            <div style={{ fontSize: 12, color: 'var(--stone)', fontWeight: 300 }}>
              {label}
            </div>
          </div>
        ))}
      </div>

      {/* Scroll hint */}
      <div
        style={{
          position: 'absolute',
          bottom: '2.5rem',
          right: '4rem',
          fontFamily: 'var(--ff-mono)',
          fontSize: 9,
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: 'var(--stone)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          opacity: 0,
          animation: 'fade-up 1s 1.4s forwards',
        }}
      >
        Scroll to explore
        <span
          style={{
            display: 'block',
            width: 1,
            height: 40,
            background: 'linear-gradient(to bottom, var(--stone), transparent)',
          }}
        />
      </div>

      <style>{`
        @media (max-width: 900px) {
          #hero { padding: 0 1.5rem 5rem !important; }
          .hero-ambient { display: none !important; }
        }
      `}</style>
    </section>
  )
}
