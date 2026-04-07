'use client'

export default function Footer() {
  return (
    <footer
      style={{
        background: '#080C09',
        padding: '5rem 4rem 0',
        borderTop: '1px solid rgba(46,52,47,0.8)',
        position: 'relative',
        zIndex: 1,
      }}
    >
      {/* Top glow line */}
      <div style={{
        position: 'absolute', top: 0, left: '10%', right: '10%',
        height: 1,
        background: 'linear-gradient(to right, transparent, rgba(200,132,26,0.3), transparent)',
      }} />

      <div className="footer-grid" style={{
        display: 'grid',
        gridTemplateColumns: '2fr 1fr 1fr 1fr',
        gap: '4rem',
        marginBottom: '4rem',
      }}>
        {/* Brand */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: '1.25rem' }}>
            <span style={{
              position: 'relative', width: 8, height: 8,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <span style={{
                position: 'absolute', width: 8, height: 8, borderRadius: '50%',
                background: 'var(--solar)',
                animation: 'ripple 2s ease-out infinite',
              }} />
              <span style={{
                width: 6, height: 6, borderRadius: '50%', background: 'var(--solar)',
                display: 'block', position: 'relative', zIndex: 1,
              }} />
            </span>
            <span style={{
              fontFamily: 'var(--ff-display)', fontSize: 22, fontWeight: 400,
              color: 'var(--white)',
            }}>GrēxGrid</span>
          </div>

          <p style={{
            fontSize: 13, color: 'var(--stone)', lineHeight: 1.75,
            fontWeight: 300, marginBottom: '2rem', maxWidth: 300,
          }}>
            A clean-energy management platform merging solar micro-generation, smart grid
            connectivity, and AI-powered distribution. Built in Lagos. Built for Nigeria.
            Built for the world.
          </p>

          <div style={{
            fontFamily: 'var(--ff-mono)', fontSize: 10,
            color: 'rgba(122,122,114,0.65)', lineHeight: 2.2, letterSpacing: '0.04em',
          }}>
            No. 26 James George Close<br />
            Alagbo, Ikoyi · Lagos State, Nigeria<br />
            <br />
            +234 815 648 8474<br />
            <a
              href="mailto:hello@grexgrid.ng"
              style={{ color: 'rgba(200,132,26,0.65)', transition: 'color 0.2s' }}
              onMouseEnter={e => ((e.target as HTMLElement).style.color = 'var(--solar)')}
              onMouseLeave={e => ((e.target as HTMLElement).style.color = 'rgba(200,132,26,0.65)')}
            >hello@grexgrid.ng</a><br />
            <br />
            Director: Mercy Ogey Agbinya
          </div>
        </div>

        <FooterCol title="Products"   items={['GrēxBox', 'GrēxShare', 'GrēxPay', 'GrēxSense', 'GrēxConnect']} />
        <FooterCol title="Company"    items={['About', 'Impact Report', 'Careers', 'Press', 'Investors']} />
        <FooterCol title="Developers" items={['API Documentation', 'GrēxConnect Portal', 'Status Page', 'Community Forum', 'GitHub']} />
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom" style={{
        borderTop: '1px solid rgba(46,52,47,0.6)',
        padding: '1.75rem 0',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <div style={{
          fontFamily: 'var(--ff-mono)', fontSize: 10,
          color: 'rgba(122,122,114,0.45)', letterSpacing: '0.06em',
        }}>
          © 2025 GrēxGrid Technologies Ltd. All rights reserved. Registered in Nigeria.
        </div>
        <div style={{
          fontFamily: 'var(--ff-display)', fontSize: 14, fontStyle: 'italic',
          color: 'rgba(122,122,114,0.5)', letterSpacing: '0.01em',
        }}>
          Power belongs to the people it comes from.
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid   { grid-template-columns: 1fr 1fr !important; gap: 2.5rem !important; }
          .footer-bottom { flex-direction: column !important; gap: 0.75rem !important; text-align: center !important; }
          footer         { padding: 4rem 1.5rem 0 !important; }
        }
        @media (max-width: 560px) {
          .footer-grid   { grid-template-columns: 1fr !important; }
          footer         { padding: 3.5rem 1.25rem 0 !important; }
        }
      `}</style>
    </footer>
  )
}

function FooterCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <div style={{
        fontFamily: 'var(--ff-mono)', fontSize: 10,
        letterSpacing: '0.14em', textTransform: 'uppercase',
        color: 'var(--stone)', marginBottom: '1.25rem', opacity: 0.65,
      }}>{title}</div>
      <ul style={{ listStyle: 'none' }}>
        {items.map(item => (
          <li key={item} style={{ marginBottom: '0.6rem' }}>
            <a
              href="#"
              style={{
                fontSize: 13, color: 'rgba(122,122,114,0.55)',
                fontWeight: 300, transition: 'color 0.2s',
              }}
              onMouseEnter={e => ((e.target as HTMLElement).style.color = 'var(--dust)')}
              onMouseLeave={e => ((e.target as HTMLElement).style.color = 'rgba(122,122,114,0.55)')}
            >{item}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}
