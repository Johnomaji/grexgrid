'use client'

import { useEffect, useState } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 999,
        padding: '1.5rem 4rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        transition: 'background 0.4s, border-bottom 0.4s',
        background: scrolled ? 'rgba(15,20,16,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '0.5px solid var(--mid)' : '0.5px solid transparent',
      }}
    >
      <a
        href="#hero"
        style={{
          fontFamily: 'var(--ff-display)',
          fontSize: 22,
          fontWeight: 400,
          color: 'var(--white)',
          letterSpacing: '0.01em',
          display: 'flex',
          alignItems: 'center',
          gap: 10,
        }}
      >
        <div
          style={{
            width: 8,
            height: 8,
            borderRadius: '50%',
            background: 'var(--solar)',
            animation: 'pulse-dot 2.5s ease-in-out infinite',
          }}
        />
        GrēxGrid
      </a>

      <ul
        style={{
          display: 'flex',
          gap: '2.5rem',
          alignItems: 'center',
          listStyle: 'none',
        }}
        className="nav-links-list"
      >
        {['Problem', 'Platform', 'How it Works', 'Impact', 'Team', 'Pricing'].map((label, i) => {
          const hrefs = ['#problem', '#products', '#how', '#impact', '#team', '#pricing']
          return (
            <li key={label}>
              <a
                href={hrefs[i]}
                style={{
                  fontSize: 12,
                  fontWeight: 400,
                  color: 'var(--stone)',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => ((e.target as HTMLElement).style.color = 'var(--solar)')}
                onMouseLeave={e => ((e.target as HTMLElement).style.color = 'var(--stone)')}
              >
                {label}
              </a>
            </li>
          )
        })}
        <li>
          <a
            href="#manifesto"
            style={{
              background: 'var(--solar)',
              color: 'var(--night)',
              fontWeight: 500,
              padding: '0.6rem 1.5rem',
              fontSize: 12,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              transition: 'background 0.2s',
              display: 'inline-block',
            }}
            onMouseEnter={e => ((e.target as HTMLElement).style.background = 'var(--solar-lt)')}
            onMouseLeave={e => ((e.target as HTMLElement).style.background = 'var(--solar)')}
          >
            Get Started
          </a>
        </li>
      </ul>

      <style>{`
        @media (max-width: 900px) {
          .nav-links-list { display: none !important; }
          nav { padding: 1.25rem 1.5rem !important; }
        }
      `}</style>
    </nav>
  )
}
