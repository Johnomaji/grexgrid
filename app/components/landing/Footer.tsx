'use client'

export default function Footer() {
  return (
    <footer
      style={{
        background: '#080C09',
        padding: '5rem 4rem 0',
        borderTop: '0.5px solid var(--mid)',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div
        className="footer-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr 1fr',
          gap: '4rem',
          marginBottom: '4rem',
        }}
      >
        {/* Brand */}
        <div>
          <div
            style={{
              fontFamily: 'var(--ff-display)',
              fontSize: 24,
              fontWeight: 400,
              color: 'var(--white)',
              marginBottom: '1rem',
            }}
          >
            GrēxGrid
          </div>
          <p
            style={{
              fontSize: 13,
              color: 'var(--stone)',
              lineHeight: 1.7,
              fontWeight: 300,
              marginBottom: '2rem',
              maxWidth: 320,
            }}
          >
            A clean-energy management platform merging solar micro-generation, smart grid
            connectivity, and AI-powered distribution. Built in Lagos. Built for Nigeria.
            Built for the world.
          </p>
          <div
            style={{
              fontFamily: 'var(--ff-mono)',
              fontSize: 10,
              color: 'var(--mid)',
              lineHeight: 2,
              letterSpacing: '0.04em',
            }}
          >
            No. 26 James George Close
            <br />
            Alagbo, Ikoyi · Lagos State, Nigeria
            <br />
            <br />
            +234 815 648 8474
            <br />
            hello@grexgrid.ng
            <br />
            <br />
            Director: Mercy Ogey Agbinya
          </div>
        </div>

        {/* Products */}
        <div>
          <div
            style={{
              fontFamily: 'var(--ff-mono)',
              fontSize: 10,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--stone)',
              marginBottom: '1.25rem',
            }}
          >
            Products
          </div>
          <ul style={{ listStyle: 'none' }}>
            {['GrēxBox', 'GrēxShare', 'GrēxPay', 'GrēxSense', 'GrēxConnect'].map(item => (
              <li key={item} style={{ marginBottom: '0.6rem' }}>
                <FooterLink href="#">{item}</FooterLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <div
            style={{
              fontFamily: 'var(--ff-mono)',
              fontSize: 10,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--stone)',
              marginBottom: '1.25rem',
            }}
          >
            Company
          </div>
          <ul style={{ listStyle: 'none' }}>
            {['About', 'Impact Report', 'Careers', 'Press', 'Investors'].map(item => (
              <li key={item} style={{ marginBottom: '0.6rem' }}>
                <FooterLink href="#">{item}</FooterLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Developers */}
        <div>
          <div
            style={{
              fontFamily: 'var(--ff-mono)',
              fontSize: 10,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--stone)',
              marginBottom: '1.25rem',
            }}
          >
            Developers
          </div>
          <ul style={{ listStyle: 'none' }}>
            {['API Documentation', 'GrēxConnect Portal', 'Status Page', 'Community Forum', 'GitHub'].map(item => (
              <li key={item} style={{ marginBottom: '0.6rem' }}>
                <FooterLink href="#">{item}</FooterLink>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="footer-bottom"
        style={{
          borderTop: '0.5px solid var(--mid)',
          padding: '1.75rem 0',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            fontFamily: 'var(--ff-mono)',
            fontSize: 10,
            color: 'var(--mid)',
            letterSpacing: '0.06em',
          }}
        >
          © 2025 GrēxGrid Technologies Ltd. All rights reserved. Registered in Nigeria.
        </div>
        <div
          style={{
            fontFamily: 'var(--ff-display)',
            fontSize: 14,
            fontStyle: 'italic',
            color: 'var(--stone)',
            letterSpacing: '0.01em',
          }}
        >
          Power belongs to the people it comes from.
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 2rem !important; }
          .footer-bottom { flex-direction: column !important; gap: 0.75rem !important; text-align: center !important; }
        }
      `}</style>
    </footer>
  )
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      style={{
        fontSize: 13,
        color: 'var(--mid)',
        fontWeight: 300,
        transition: 'color 0.2s',
      }}
      onMouseEnter={e => ((e.target as HTMLElement).style.color = 'var(--solar)')}
      onMouseLeave={e => ((e.target as HTMLElement).style.color = 'var(--mid)')}
    >
      {children}
    </a>
  )
}
