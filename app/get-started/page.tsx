'use client'

import { useState, FormEvent } from 'react'
import Nav from '../components/landing/Nav'
import Footer from '../components/landing/Footer'
import ScrambledText from '../components/landing/ScrambledText'
import GridCanvas from '../components/landing/GridCanvas'

/* ── Contact details ─────────────────────────────────── */
const EMAIL = 'mercy@grexgrid.net'
const PHONE = '+234 815 648 8474'
const WEBSITE = 'https://www.grexgrid.net'

/* ── Nigeria states (sample) ────────────────────────── */
const STATES = [
  'Abia','Adamawa','Akwa Ibom','Anambra','Bauchi','Bayelsa','Benue',
  'Borno','Cross River','Delta','Ebonyi','Edo','Ekiti','Enugu','FCT',
  'Gombe','Imo','Jigawa','Kaduna','Kano','Katsina','Kebbi','Kogi',
  'Kwara','Lagos','Nasarawa','Niger','Ogun','Ondo','Osun','Oyo',
  'Plateau','Rivers','Sokoto','Taraba','Yobe','Zamfara',
]

interface FormState {
  name: string
  email: string
  phone: string
  community: string
  state: string
  households: string
  message: string
}

const EMPTY: FormState = {
  name: '', email: '', phone: '',
  community: '', state: '', households: '', message: '',
}

export default function GetStartedPage() {
  const [form, setForm] = useState<FormState>(EMPTY)
  const [submitted, setSubmitted] = useState(false)
  const [focused, setFocused] = useState<string | null>(null)

  const set = (k: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm(prev => ({ ...prev, [k]: e.target.value }))

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Community / Estate: ${form.community}`,
      `State: ${form.state}`,
      `Estimated Households: ${form.households}`,
      ``,
      `Message:`,
      form.message,
    ].join('\n')

    const subject = encodeURIComponent(`GrēxBox Inquiry — ${form.community || form.name}`)
    const bodyEnc = encodeURIComponent(body)
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${bodyEnc}`
    setSubmitted(true)
  }

  return (
    <>
      <GridCanvas />
      <Nav />

      <main>
        {/* ── Hero ──────────────────────────────────────── */}
        <section
          style={{
            position: 'relative',
            minHeight: '52vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            padding: '10rem 2rem 5rem',
            overflow: 'hidden',
            zIndex: 1,
          }}
        >
          {/* Orbs */}
          <div style={{
            position: 'absolute', top: '-10%', right: '-5%',
            width: 600, height: 600,
            background: 'radial-gradient(circle, rgba(200,132,26,0.11) 0%, transparent 70%)',
            borderRadius: '50%',
            animation: 'orb-breathe 9s ease-in-out infinite',
            pointerEvents: 'none',
          }} />
          <div style={{
            position: 'absolute', bottom: '-5%', left: '-5%',
            width: 450, height: 450,
            background: 'radial-gradient(circle, rgba(26,122,82,0.09) 0%, transparent 70%)',
            borderRadius: '50%',
            animation: 'orb-breathe-slow 12s ease-in-out infinite',
            pointerEvents: 'none',
          }} />

          {/* Badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
            background: 'rgba(200,132,26,0.1)',
            border: '1px solid rgba(200,132,26,0.25)',
            borderRadius: 'var(--radius-pill)',
            padding: '0.4rem 1.1rem',
            marginBottom: '2rem',
            opacity: 0,
            animation: 'bounce-in 0.6s 0.2s cubic-bezier(0.16,1,0.3,1) forwards',
          }}>
            <span style={{ position: 'relative', width: 8, height: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <span style={{ position: 'absolute', width: 8, height: 8, borderRadius: '50%', background: 'var(--solar)', animation: 'ripple 1.6s ease-out infinite' }} />
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--solar)', display: 'block', position: 'relative', zIndex: 1 }} />
            </span>
            <span style={{ fontFamily: 'var(--ff-mono)', fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--solar)' }}>
              Now accepting community applications
            </span>
          </div>

          {/* Headline with scramble */}
          <h1 style={{
            fontFamily: 'var(--ff-display)',
            fontSize: 'clamp(42px, 8vw, 100px)',
            fontWeight: 300,
            lineHeight: 0.97,
            color: 'var(--white)',
            letterSpacing: '-0.025em',
            marginBottom: '1.75rem',
            maxWidth: 900,
            opacity: 0,
            animation: 'fade-up 0.9s 0.4s cubic-bezier(0.16,1,0.3,1) forwards',
          }}>
            <ScrambledText delay={500} duration={700} scrambleChars=".:#@!ABCDEFabcdef">
              Bring GrēxGrid
            </ScrambledText>
            <br />
            <span style={{
              color: 'transparent',
              backgroundImage: 'linear-gradient(135deg, var(--solar) 0%, var(--solar-lt) 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
            }}>
              <ScrambledText delay={900} duration={700} scrambleChars=".:#@!ABCDEFabcdef">
                to your community.
              </ScrambledText>
            </span>
          </h1>

          <p style={{
            fontSize: 'clamp(14px, 1.8vw, 18px)',
            fontWeight: 300,
            color: 'var(--stone)',
            lineHeight: 1.75,
            maxWidth: 520,
            opacity: 0,
            animation: 'fade-up 0.9s 0.7s cubic-bezier(0.16,1,0.3,1) forwards',
          }}>
            Tell us about your community. We'll reach out within 48 hours to
            discuss installation, pricing, and a timeline that works for you.
          </p>
        </section>

        {/* ── Form + Info ───────────────────────────────── */}
        <section style={{
          background: 'var(--night)',
          padding: '0 4rem 8rem',
          position: 'relative',
          zIndex: 1,
        }}>
          <div className="gs-grid" style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.6fr',
            gap: '5rem',
            maxWidth: 1100,
            margin: '0 auto',
          }}>

            {/* ── Left: contact info ─── */}
            <div style={{ paddingTop: '1rem' }}>
              <div style={{
                fontFamily: 'var(--ff-mono)', fontSize: 10,
                letterSpacing: '0.18em', textTransform: 'uppercase',
                color: 'var(--solar)', marginBottom: '1.5rem', opacity: 0.8,
              }}>Contact</div>

              <h2 style={{
                fontFamily: 'var(--ff-display)',
                fontSize: 'clamp(28px, 3.5vw, 48px)',
                fontWeight: 300, lineHeight: 1.1,
                color: 'var(--white)', letterSpacing: '-0.02em',
                marginBottom: '2rem',
              }}>
                Let's build your grid together.
              </h2>

              <p style={{
                fontSize: 14, color: 'var(--stone)', lineHeight: 1.8,
                fontWeight: 300, marginBottom: '2.5rem',
              }}>
                Whether you're a community leader, estate manager, cooperative,
                or local government — we'll design a GrēxGrid solution that fits
                your needs and your budget.
              </p>

              {/* Contact cards */}
              {[
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  ),
                  label: 'Email us',
                  value: EMAIL,
                  href: `mailto:${EMAIL}`,
                },
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.77 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.78a16 16 0 0 0 6.29 6.29l1.06-1.06a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  ),
                  label: 'Call / WhatsApp',
                  value: PHONE,
                  href: `tel:${PHONE.replace(/\s/g, '')}`,
                },
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                      <circle cx="12" cy="12" r="10"/>
                      <line x1="2" y1="12" x2="22" y2="12"/>
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                    </svg>
                  ),
                  label: 'Website',
                  value: 'www.grexgrid.net',
                  href: WEBSITE,
                },
              ].map(({ icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="gs-contact-card"
                  style={{
                    display: 'flex', alignItems: 'center', gap: '1rem',
                    background: 'rgba(46,52,47,0.35)',
                    border: '1px solid rgba(196,192,180,0.08)',
                    borderRadius: 'var(--radius-md)',
                    padding: '1rem 1.25rem',
                    marginBottom: '0.75rem',
                    transition: 'border-color 0.2s, background 0.2s',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement
                    el.style.borderColor = 'rgba(200,132,26,0.3)'
                    el.style.background = 'rgba(200,132,26,0.06)'
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement
                    el.style.borderColor = 'rgba(196,192,180,0.08)'
                    el.style.background = 'rgba(46,52,47,0.35)'
                  }}
                >
                  <span style={{ color: 'var(--solar)', flexShrink: 0 }}>{icon}</span>
                  <div>
                    <div style={{ fontFamily: 'var(--ff-mono)', fontSize: 9, color: 'var(--stone)', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '0.2rem' }}>{label}</div>
                    <div style={{ fontSize: 13, color: 'var(--dust)', fontWeight: 300 }}>{value}</div>
                  </div>
                </a>
              ))}

              {/* Address */}
              <div style={{
                marginTop: '2rem',
                fontFamily: 'var(--ff-mono)', fontSize: 11,
                color: 'rgba(122,122,114,0.55)', lineHeight: 2, letterSpacing: '0.04em',
              }}>
                No. 26 James George Close<br />
                Alagbo, Ikoyi · Lagos State, Nigeria<br />
                Director: Mercy Ogey Agbinya
              </div>
            </div>

            {/* ── Right: form ─── */}
            <div>
              {submitted ? (
                <div style={{
                  background: 'rgba(26,122,82,0.08)',
                  border: '1px solid rgba(26,122,82,0.25)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '4rem 3rem',
                  textAlign: 'center',
                }}>
                  <div style={{ fontSize: 40, marginBottom: '1.5rem' }}>⚡</div>
                  <h3 style={{
                    fontFamily: 'var(--ff-display)', fontSize: 32,
                    fontWeight: 300, color: 'var(--white)',
                    marginBottom: '1rem', lineHeight: 1.2,
                  }}>Your message is on its way.</h3>
                  <p style={{ fontSize: 14, color: 'var(--stone)', lineHeight: 1.8, marginBottom: '2rem' }}>
                    Your email client should have opened with the details pre-filled.
                    If it didn't, reach us directly at{' '}
                    <a href={`mailto:${EMAIL}`} style={{ color: 'var(--solar)' }}>{EMAIL}</a>.
                  </p>
                  <button
                    onClick={() => { setForm(EMPTY); setSubmitted(false) }}
                    style={{
                      background: 'transparent', border: '1px solid rgba(196,192,180,0.2)',
                      color: 'var(--dust)', borderRadius: 'var(--radius-pill)',
                      padding: '0.75rem 2rem', fontFamily: 'var(--ff-mono)',
                      fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase',
                      cursor: 'pointer', transition: 'all 0.2s',
                    }}
                    onMouseEnter={e => {
                      const el = e.currentTarget
                      el.style.borderColor = 'rgba(200,132,26,0.4)'
                      el.style.color = 'var(--solar)'
                    }}
                    onMouseLeave={e => {
                      const el = e.currentTarget
                      el.style.borderColor = 'rgba(196,192,180,0.2)'
                      el.style.color = 'var(--dust)'
                    }}
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  style={{
                    background: 'rgba(26,31,27,0.7)',
                    border: '1px solid rgba(196,192,180,0.08)',
                    borderRadius: 'var(--radius-lg)',
                    padding: '2.5rem',
                    backdropFilter: 'blur(12px)',
                  }}
                >
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                    <Field label="Full name" required>
                      <input
                        required
                        value={form.name}
                        onChange={set('name')}
                        placeholder="e.g. Chidi Okafor"
                        onFocus={() => setFocused('name')}
                        onBlur={() => setFocused(null)}
                        style={inputStyle(focused === 'name')}
                      />
                    </Field>
                    <Field label="Email address" required>
                      <input
                        required type="email"
                        value={form.email}
                        onChange={set('email')}
                        placeholder="you@example.com"
                        onFocus={() => setFocused('email')}
                        onBlur={() => setFocused(null)}
                        style={inputStyle(focused === 'email')}
                      />
                    </Field>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                    <Field label="Phone / WhatsApp" required>
                      <input
                        required type="tel"
                        value={form.phone}
                        onChange={set('phone')}
                        placeholder="+234 800 000 0000"
                        onFocus={() => setFocused('phone')}
                        onBlur={() => setFocused(null)}
                        style={inputStyle(focused === 'phone')}
                      />
                    </Field>
                    <Field label="State" required>
                      <select
                        required
                        value={form.state}
                        onChange={set('state')}
                        onFocus={() => setFocused('state')}
                        onBlur={() => setFocused(null)}
                        style={{ ...inputStyle(focused === 'state'), appearance: 'none' as const }}
                      >
                        <option value="">Select state…</option>
                        {STATES.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </Field>
                  </div>

                  <div style={{ marginBottom: '1rem' }}>
                    <Field label="Community / Estate name" required>
                      <input
                        required
                        value={form.community}
                        onChange={set('community')}
                        placeholder="e.g. Lekki Phase 1 Residents Association"
                        onFocus={() => setFocused('community')}
                        onBlur={() => setFocused(null)}
                        style={inputStyle(focused === 'community')}
                      />
                    </Field>
                  </div>

                  <div style={{ marginBottom: '1rem' }}>
                    <Field label="Estimated number of households">
                      <input
                        type="number" min="1"
                        value={form.households}
                        onChange={set('households')}
                        placeholder="e.g. 120"
                        onFocus={() => setFocused('households')}
                        onBlur={() => setFocused(null)}
                        style={inputStyle(focused === 'households')}
                      />
                    </Field>
                  </div>

                  <div style={{ marginBottom: '2rem' }}>
                    <Field label="Tell us about your community's energy situation">
                      <textarea
                        rows={5}
                        value={form.message}
                        onChange={set('message')}
                        placeholder="How often do you experience power cuts? Do you currently have any solar or generator setups? What's your biggest energy challenge?"
                        onFocus={() => setFocused('message')}
                        onBlur={() => setFocused(null)}
                        style={{ ...inputStyle(focused === 'message'), resize: 'vertical' as const }}
                      />
                    </Field>
                  </div>

                  <button
                    type="submit"
                    style={{
                      width: '100%',
                      background: 'var(--solar)',
                      color: 'var(--night)',
                      padding: '1.05rem 2rem',
                      fontFamily: 'var(--ff-body)',
                      fontSize: 14, fontWeight: 600,
                      letterSpacing: '0.05em',
                      border: 'none',
                      borderRadius: 'var(--radius-pill)',
                      cursor: 'pointer',
                      transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)',
                      boxShadow: '0 4px 24px rgba(200,132,26,0.3)',
                    }}
                    onMouseEnter={e => {
                      const el = e.currentTarget
                      el.style.background = 'var(--solar-lt)'
                      el.style.transform = 'translateY(-2px)'
                      el.style.boxShadow = '0 10px 40px rgba(200,132,26,0.5)'
                    }}
                    onMouseLeave={e => {
                      const el = e.currentTarget
                      el.style.background = 'var(--solar)'
                      el.style.transform = 'translateY(0)'
                      el.style.boxShadow = '0 4px 24px rgba(200,132,26,0.3)'
                    }}
                  >
                    Send my application →
                  </button>

                  <p style={{
                    marginTop: '1rem', textAlign: 'center',
                    fontFamily: 'var(--ff-mono)', fontSize: 10,
                    color: 'var(--stone)', letterSpacing: '0.06em',
                  }}>
                    We respond to all inquiries within 48 hours.
                  </p>
                </form>
              )}
            </div>
          </div>

          <style>{`
            .gs-grid { max-width: 1100px; }
            @media (max-width: 900px) {
              .gs-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
              section[style] { padding-left: 1.5rem !important; padding-right: 1.5rem !important; }
            }
            @media (max-width: 560px) {
              .gs-form-row { grid-template-columns: 1fr !important; }
              section[style] { padding-left: 1.25rem !important; padding-right: 1.25rem !important; }
            }
            input::placeholder, textarea::placeholder, select option[value=""] {
              color: rgba(122,122,114,0.45);
            }
            select option { background: #1A1F1B; color: #C4C0B4; }
          `}</style>
        </section>
      </main>

      <Footer />
    </>
  )
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <span style={{
        fontFamily: 'var(--ff-mono)', fontSize: 10,
        letterSpacing: '0.14em', textTransform: 'uppercase',
        color: 'var(--stone)',
      }}>
        {label}{required && <span style={{ color: 'var(--solar)', marginLeft: 3 }}>*</span>}
      </span>
      {children}
    </label>
  )
}

function inputStyle(focused: boolean): React.CSSProperties {
  return {
    background: 'rgba(15,20,16,0.6)',
    border: `1px solid ${focused ? 'rgba(200,132,26,0.5)' : 'rgba(196,192,180,0.12)'}`,
    borderRadius: 'var(--radius-md)',
    padding: '0.75rem 1rem',
    color: 'var(--white)',
    fontSize: 14,
    fontFamily: 'var(--ff-body)',
    fontWeight: 300,
    width: '100%',
    outline: 'none',
    transition: 'border-color 0.2s',
    boxSizing: 'border-box',
    boxShadow: focused ? '0 0 0 3px rgba(200,132,26,0.08)' : 'none',
  }
}
