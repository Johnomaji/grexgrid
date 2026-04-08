'use client'

import { useEffect, useState } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = ['Problem', 'Platform', 'How it Works', 'Impact', 'Team', 'Pricing']
  const hrefs = ['#problem', '#products', '#how', '#impact', '#team', '#pricing']

  return (
    <>
      <nav
        className="main-nav"
        style={{
          position: 'fixed',
          top: 20,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 999,
          display: 'flex',
          alignItems: 'center',
          gap: '0.25rem',
          padding: '0.6rem 0.6rem 0.6rem 1.5rem',
          borderRadius: 'var(--radius-pill)',
          background: scrolled
            ? 'rgba(15,20,16,0.95)'
            : 'rgba(15,20,16,0.65)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: `1px solid ${scrolled ? 'rgba(200,132,26,0.25)' : 'rgba(196,192,180,0.1)'}`,
          boxShadow: scrolled ? '0 8px 32px rgba(0,0,0,0.4)' : 'none',
          transition: 'all 0.4s ease',
          whiteSpace: 'nowrap',
        }}
      >
        {/* Logo */}
        <a
          href="#hero"
          style={{
            fontFamily: 'var(--ff-display)',
            fontSize: 20,
            fontWeight: 400,
            color: 'var(--white)',
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            marginRight: '0.75rem',
          }}
        >
          <span
            style={{
              width: 7,
              height: 7,
              borderRadius: '50%',
              background: 'var(--solar)',
              display: 'block',
              flexShrink: 0,
              animation: 'pulse-dot 2.5s ease-in-out infinite',
            }}
          />
          GrēxGrid
        </a>

        {/* Divider */}
        <span
          className="nav-divider"
          style={{
            display: 'block',
            width: 1,
            height: 14,
            background: 'rgba(196,192,180,0.2)',
            margin: '0 0.75rem',
          }}
        />

        {/* Links */}
        <ul
          className="nav-links-list"
          style={{
            display: 'flex',
            gap: '0.125rem',
            listStyle: 'none',
            alignItems: 'center',
          }}
        >
          {links.map((label, i) => (
            <li key={label}>
              <a
                href={hrefs[i]}
                style={{
                  fontSize: 11,
                  fontWeight: 400,
                  color: 'var(--stone)',
                  letterSpacing: '0.07em',
                  textTransform: 'uppercase',
                  padding: '0.4rem 0.75rem',
                  borderRadius: 'var(--radius-pill)',
                  display: 'block',
                  transition: 'color 0.2s, background 0.2s',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget
                  el.style.color = 'var(--white)'
                  el.style.background = 'rgba(196,192,180,0.08)'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget
                  el.style.color = 'var(--stone)'
                  el.style.background = 'transparent'
                }}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Divider */}
        <span
          className="nav-divider"
          style={{
            display: 'block',
            width: 1,
            height: 14,
            background: 'rgba(196,192,180,0.2)',
            margin: '0 0.5rem',
          }}
        />

        {/* CTA */}
        <a
          href="/get-started"
          className="nav-desktop-cta"
          style={{
            background: 'var(--solar)',
            color: 'var(--night)',
            fontFamily: 'var(--ff-body)',
            fontWeight: 600,
            padding: '0.55rem 1.25rem',
            fontSize: 11,
            letterSpacing: '0.07em',
            textTransform: 'uppercase',
            borderRadius: 'var(--radius-pill)',
            display: 'inline-block',
            transition: 'all 0.2s',
          }}
          onMouseEnter={e => {
            const el = e.currentTarget
            el.style.background = 'var(--solar-lt)'
            el.style.transform = 'scale(1.04)'
          }}
          onMouseLeave={e => {
            const el = e.currentTarget
            el.style.background = 'var(--solar)'
            el.style.transform = 'scale(1)'
          }}
        >
          Get Started
        </a>

        {/* Mobile hamburger */}
        <button
          className="nav-hamburger"
          onClick={() => setMobileOpen(v => !v)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            color: 'var(--white)',
            cursor: 'pointer',
            padding: '0.4rem',
            marginLeft: '10rem',
          }}
          aria-label="Toggle menu"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            {mobileOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="7" x2="21" y2="7" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="17" x2="21" y2="17" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          style={{
            position: 'fixed',
            top: 76,
            left: 16,
            right: 16,
            zIndex: 998,
            background: 'rgba(15,20,16,0.97)',
            backdropFilter: 'blur(20px)',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid rgba(196,192,180,0.12)',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.25rem',
          }}
        >
          {links.map((label, i) => (
            <a
              key={label}
              href={hrefs[i]}
              onClick={() => setMobileOpen(false)}
              style={{
                fontSize: 13,
                fontWeight: 400,
                color: 'var(--dust)',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                padding: '0.75rem 1rem',
                borderRadius: 'var(--radius-md)',
                display: 'block',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget
                el.style.color = 'var(--white)'
                el.style.background = 'rgba(196,192,180,0.06)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget
                el.style.color = 'var(--dust)'
                el.style.background = 'transparent'
              }}
            >
              {label}
            </a>
          ))}
          <a
            href="/get-started"
            onClick={() => setMobileOpen(false)}
            style={{
              background: 'var(--solar)',
              color: 'var(--night)',
              padding: '0.85rem 1rem',
              textAlign: 'center',
              fontWeight: 600,
              fontSize: 12,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              borderRadius: 'var(--radius-md)',
              marginTop: '0.5rem',
              display: 'block',
            }}
          >
            Get Started
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .nav-links-list { display: none !important; }
          .nav-divider { display: none !important; }
          .nav-hamburger { display: block !important; }
          .nav-desktop-cta { display: none !important; }
          .main-nav { left: 16px !important; right: 16px !important; transform: none !important; padding: 0.6rem 0.6rem 0.6rem 1.25rem !important; }
        }
      `}</style>
    </>
  )
}
