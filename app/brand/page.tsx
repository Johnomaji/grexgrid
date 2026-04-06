'use client'

import { useState } from 'react'

/* ─── Logo SVG Mark ─────────────────────────────────────── */
function LogoMark({ size = 44, dark = false }: { size?: number; dark?: boolean }) {
  const solar = dark ? '#C8841A' : '#C8841A'
  const grid = dark ? '#2EC98A' : '#1A7A52'
  return (
    <svg width={size} height={size} viewBox="0 0 52 48" fill="none">
      <line x1="9" y1="26" x2="21" y2="14" stroke={solar} strokeWidth="1.2" opacity="0.5" />
      <line x1="21" y1="14" x2="36" y2="10" stroke={solar} strokeWidth="1.2" opacity="0.5" />
      <line x1="9" y1="26" x2="25" y2="30" stroke={grid} strokeWidth="1.2" opacity="0.5" />
      <line x1="21" y1="14" x2="25" y2="30" stroke={grid} strokeWidth="1.2" opacity="0.4" />
      <line x1="36" y1="10" x2="43" y2="30" stroke={solar} strokeWidth="1.2" opacity="0.4" />
      <line x1="25" y1="30" x2="43" y2="30" stroke={grid} strokeWidth="1.2" opacity="0.4" />
      <circle cx="9" cy="26" r="5" fill={grid} />
      <circle cx="21" cy="14" r="4" fill={solar} />
      <circle cx="36" cy="10" r="3" fill={solar} opacity="0.75" />
      <circle cx="25" cy="30" r="4.5" fill={grid} opacity="0.85" />
      <circle cx="43" cy="30" r="3.5" fill={solar} />
    </svg>
  )
}

/* ─── SideNav ────────────────────────────────────────────── */
const navItems = [
  { num: '01', label: 'Foundation', href: '#foundation' },
  { num: '02', label: 'Visual Metaphor', href: '#metaphor' },
  { num: '03', label: 'Logo System', href: '#logo' },
  { num: '04', label: 'Colour System', href: '#color' },
  { num: '05', label: 'Typography', href: '#typography' },
  { num: '06', label: 'Iconography', href: '#icons' },
  { num: '07', label: 'Design Tokens', href: '#tokens' },
  { num: '08', label: 'UI Components', href: '#components' },
  { num: '09', label: 'GrēxSense Dashboard', href: '#dashboard' },
  { num: '10', label: 'Landing Page Preview', href: '#landing' },
]

function SideNav() {
  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        height: '100vh',
        width: 220,
        background: 'var(--night)',
        padding: '2rem 1.5rem',
        display: 'flex',
        flexDirection: 'column',
        zIndex: 100,
        overflowY: 'auto',
      }}
    >
      <div
        style={{
          fontFamily: 'var(--ff-display)',
          fontSize: 18,
          fontWeight: 500,
          color: 'var(--solar)',
          letterSpacing: '0.02em',
          marginBottom: '2.5rem',
          display: 'flex',
          alignItems: 'center',
          gap: 10,
        }}
      >
        <svg viewBox="0 0 32 32" fill="none" width="28" height="28">
          <circle cx="7" cy="16" r="4.5" fill="#C8841A" />
          <circle cx="16" cy="9" r="3.5" fill="#1A7A52" />
          <circle cx="25" cy="13" r="3" fill="#C8841A" opacity="0.7" />
          <circle cx="20" cy="22" r="4" fill="#1A7A52" />
          <circle cx="11" cy="25" r="2.5" fill="#C8841A" opacity="0.5" />
          <line x1="7" y1="16" x2="16" y2="9" stroke="#C8841A" strokeWidth="1" opacity="0.5" />
          <line x1="16" y1="9" x2="25" y2="13" stroke="#C8841A" strokeWidth="1" opacity="0.5" />
          <line x1="16" y1="9" x2="20" y2="22" stroke="#1A7A52" strokeWidth="1" opacity="0.5" />
          <line x1="7" y1="16" x2="11" y2="25" stroke="#C8841A" strokeWidth="1" opacity="0.4" />
          <line x1="20" y1="22" x2="11" y2="25" stroke="#1A7A52" strokeWidth="1" opacity="0.4" />
        </svg>
        Grēx<strong>Grid</strong>
      </div>

      {navItems.map(({ num, label, href }, i) => (
        <div key={num} style={{ marginBottom: '0.25rem' }}>
          {i === 9 && (
            <div
              style={{
                height: 0.5,
                background: 'var(--mid)',
                margin: '1rem 0',
              }}
            />
          )}
          <a
            href={href}
            style={{
              display: 'block',
              fontSize: 11,
              fontWeight: 400,
              color: 'var(--stone)',
              textDecoration: 'none',
              padding: '0.35rem 0',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => ((e.target as HTMLElement).style.color = 'var(--solar)')}
            onMouseLeave={e => ((e.target as HTMLElement).style.color = 'var(--stone)')}
          >
            <span
              style={{
                fontFamily: 'var(--ff-mono)',
                fontSize: 10,
                color: 'var(--mid)',
                marginRight: 6,
              }}
            >
              {num}
            </span>
            {label}
          </a>
        </div>
      ))}

      <div
        style={{
          marginTop: 'auto',
          paddingTop: '2rem',
          fontFamily: 'var(--ff-mono)',
          fontSize: 9,
          color: 'var(--mid)',
          lineHeight: 1.8,
        }}
      >
        Brand Design System
        <br />
        Version 1.0
        <br />
        Lagos, Nigeria
        <br />
        2025
      </div>
    </nav>
  )
}

/* ─── Section wrapper ───────────────────────────────────── */
function Section({
  id,
  children,
  bg = 'var(--white)',
  style,
}: {
  id: string
  children: React.ReactNode
  bg?: string
  style?: React.CSSProperties
}) {
  return (
    <section
      id={id}
      style={{
        padding: '6rem 5rem',
        minHeight: '100vh',
        borderBottom: '0.5px solid var(--dust)',
        background: bg,
        ...style,
      }}
    >
      {children}
    </section>
  )
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        fontFamily: 'var(--ff-mono)',
        fontSize: 11,
        color: 'var(--solar)',
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        marginBottom: '1rem',
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
      }}
    >
      {children}
      <span
        style={{
          flex: 1,
          height: 0.5,
          background: 'var(--solar)',
          opacity: 0.3,
          display: 'block',
        }}
      />
    </div>
  )
}

function SectionTitle({ children, color = 'var(--night)' }: { children: React.ReactNode; color?: string }) {
  return (
    <h2
      style={{
        fontFamily: 'var(--ff-display)',
        fontSize: 52,
        fontWeight: 300,
        lineHeight: 1.05,
        color,
        marginBottom: '3rem',
      }}
    >
      {children}
    </h2>
  )
}

function SectionBody({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        fontSize: 17,
        lineHeight: 1.75,
        color: 'var(--mid)',
        maxWidth: 640,
        marginBottom: '3rem',
      }}
    >
      {children}
    </p>
  )
}

/* ─── 01 FOUNDATION ─────────────────────────────────────── */
function Foundation() {
  return (
    <Section
      id="foundation"
      bg="var(--night)"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Gradient orbs */}
      <div
        style={{
          position: 'absolute',
          top: -200,
          right: -200,
          width: 600,
          height: 600,
          background: 'radial-gradient(circle, rgba(200,132,26,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: -150,
          left: 100,
          width: 400,
          height: 400,
          background: 'radial-gradient(circle, rgba(26,122,82,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Background constellation */}
      <div
        style={{
          position: 'absolute',
          right: '5rem',
          top: '50%',
          transform: 'translateY(-50%)',
          opacity: 0.15,
        }}
      >
        <svg width="400" height="400" viewBox="0 0 400 400" fill="none">
          <circle cx="40" cy="60" r="3" fill="#C8841A" opacity="0.4" />
          <circle cx="120" cy="30" r="2" fill="#1A7A52" opacity="0.3" />
          <circle cx="200" cy="80" r="4" fill="#C8841A" opacity="0.5" />
          <circle cx="290" cy="40" r="2.5" fill="#1A7A52" opacity="0.4" />
          <circle cx="360" cy="90" r="3" fill="#C8841A" opacity="0.3" />
          <circle cx="60" cy="150" r="2" fill="#1A7A52" opacity="0.3" />
          <circle cx="160" cy="160" r="5" fill="#C8841A" opacity="0.6" />
          <circle cx="250" cy="130" r="3" fill="#1A7A52" opacity="0.5" />
          <circle cx="340" cy="170" r="2.5" fill="#C8841A" opacity="0.3" />
          <circle cx="100" cy="240" r="3.5" fill="#C8841A" opacity="0.4" />
          <circle cx="200" cy="220" r="2" fill="#1A7A52" opacity="0.4" />
          <circle cx="300" cy="260" r="4" fill="#C8841A" opacity="0.5" />
          <circle cx="380" cy="240" r="2" fill="#1A7A52" opacity="0.3" />
          <circle cx="50" cy="320" r="2.5" fill="#C8841A" opacity="0.3" />
          <circle cx="150" cy="340" r="3" fill="#1A7A52" opacity="0.4" />
          <circle cx="240" cy="360" r="2" fill="#C8841A" opacity="0.3" />
          <circle cx="340" cy="330" r="3.5" fill="#1A7A52" opacity="0.4" />
          <line x1="40" y1="60" x2="120" y2="30" stroke="#C8841A" strokeWidth="0.5" opacity="0.2" />
          <line x1="120" y1="30" x2="200" y2="80" stroke="#1A7A52" strokeWidth="0.5" opacity="0.2" />
          <line x1="200" y1="80" x2="290" y2="40" stroke="#C8841A" strokeWidth="0.5" opacity="0.2" />
          <line x1="40" y1="60" x2="60" y2="150" stroke="#1A7A52" strokeWidth="0.5" opacity="0.15" />
          <line x1="160" y1="160" x2="200" y2="80" stroke="#C8841A" strokeWidth="0.5" opacity="0.2" />
          <line x1="160" y1="160" x2="250" y2="130" stroke="#1A7A52" strokeWidth="0.5" opacity="0.2" />
          <line x1="160" y1="160" x2="100" y2="240" stroke="#C8841A" strokeWidth="0.5" opacity="0.2" />
          <line x1="250" y1="130" x2="300" y2="260" stroke="#1A7A52" strokeWidth="0.5" opacity="0.15" />
          <line x1="100" y1="240" x2="150" y2="340" stroke="#C8841A" strokeWidth="0.5" opacity="0.15" />
          <line x1="300" y1="260" x2="340" y2="330" stroke="#1A7A52" strokeWidth="0.5" opacity="0.15" />
          <line x1="200" y1="220" x2="240" y2="360" stroke="#C8841A" strokeWidth="0.5" opacity="0.15" />
        </svg>
      </div>

      <div
        style={{
          fontFamily: 'var(--ff-mono)',
          fontSize: 11,
          color: 'var(--solar)',
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          marginBottom: '2.5rem',
        }}
      >
        GrēxGrid — Brand Design System — v1.0
      </div>
      <h1
        style={{
          fontFamily: 'var(--ff-display)',
          fontSize: 88,
          fontWeight: 300,
          color: 'var(--white)',
          letterSpacing: '-0.02em',
          lineHeight: 1,
          marginBottom: '1rem',
        }}
      >
        Grēx<span style={{ color: 'var(--solar)' }}>Grid</span>
      </h1>
      <p
        style={{
          fontFamily: 'var(--ff-display)',
          fontSize: 26,
          fontWeight: 300,
          fontStyle: 'italic',
          color: 'var(--grid-lt)',
          marginBottom: '3rem',
          maxWidth: 500,
          lineHeight: 1.4,
        }}
      >
        &ldquo;Power belongs to the people it comes from.&rdquo;
      </p>
      <div
        style={{
          display: 'flex',
          gap: '3rem',
          fontFamily: 'var(--ff-mono)',
          fontSize: 11,
          color: 'var(--stone)',
          letterSpacing: '0.06em',
        }}
      >
        {[
          { label: 'Sector', val: 'Clean Energy · AI · Fintech' },
          { label: 'HQ', val: 'Ikoyi, Lagos, Nigeria' },
          { label: 'Director', val: 'Agbinya Mercy Ogeyi' },
          { label: 'Document', val: 'Brand Genesis v1.0' },
        ].map(({ label, val }) => (
          <div key={label}>
            <strong style={{ display: 'block', color: 'var(--dust)', marginBottom: '0.25rem' }}>
              {label}
            </strong>
            {val}
          </div>
        ))}
      </div>
    </Section>
  )
}

/* ─── 02 VISUAL METAPHOR ────────────────────────────────── */
function Metaphor() {
  const options = [
    { name: 'The Circuit', body: 'Precision, flow, interconnection. Too generic — could be any fintech or tech company. Reads as cold, mechanical. Does not carry the human warmth GrēxGrid requires in its last-mile communities.', chosen: false },
    { name: 'The Cell', body: 'Organic, self-replicating, alive. Strong for the biological dimension but lacks the network and community trading dimension. Too micro — GrēxGrid operates at community scale.', chosen: false },
    { name: 'The Murmuration', body: 'A flock moving as one — distributed intelligence, no central controller, emergent behaviour. "Grex" is Latin for flock. Each community is a node. The whole system moves as one. Intelligence is distributed. The pattern is ancient (African constellations, navigation) and modern (network topology). This generates every visual element from the same DNA.', chosen: true },
    { name: 'The Market', body: 'Exchange, human density, value creation. Strong for the trading dimension (GrēxShare) but chaotic as a master metaphor. Markets have noise — GrēxGrid has intelligence.', chosen: false },
    { name: 'The Root System', body: 'Underground, invisible infrastructure, feeding everything above. Beautiful as a secondary metaphor. Communicates permanence but can read as hidden — GrēxGrid needs to be visible and legible to communities.', chosen: false },
  ]
  return (
    <Section id="metaphor">
      <Eyebrow>02 — Visual Metaphor</Eyebrow>
      <SectionTitle>The governing idea</SectionTitle>
      <SectionBody>
        Every design decision — logo, grid, icon, motion, pattern — is generated from one master
        metaphor. Five candidates were interrogated. One was chosen by reason, not preference.
      </SectionBody>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '3rem',
          marginBottom: '4rem',
        }}
      >
        {options.map(({ name, body, chosen }) => (
          <div
            key={name}
            style={{
              padding: '2rem',
              border: `0.5px solid ${chosen ? 'var(--solar)' : 'var(--dust)'}`,
              background: chosen ? 'var(--solar-pale)' : 'transparent',
              position: 'relative',
            }}
          >
            {chosen && (
              <div
                style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  background: 'var(--solar)',
                  color: 'var(--white)',
                  fontFamily: 'var(--ff-mono)',
                  fontSize: 10,
                  padding: '3px 10px',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}
              >
                Chosen
              </div>
            )}
            <div
              style={{
                fontFamily: 'var(--ff-display)',
                fontSize: 24,
                fontWeight: 500,
                color: chosen ? 'var(--solar-dk)' : 'var(--night)',
                marginBottom: '0.5rem',
              }}
            >
              {name}
            </div>
            <p style={{ fontSize: 14, color: chosen ? 'var(--mid)' : 'var(--stone)', lineHeight: 1.6 }}>
              {body}
            </p>
          </div>
        ))}
      </div>
      <SectionBody>
        The murmuration generates: the <strong>logo form</strong> (nodes in formation), the{' '}
        <strong>grid system</strong> (organic spacing, not rigid), the <strong>icon set</strong>{' '}
        (built from the same stroke and node vocabulary), the <strong>pattern language</strong>{' '}
        (flowing node constellations), and the <strong>motion principles</strong> (responsive,
        fluid, never mechanical).
      </SectionBody>
    </Section>
  )
}

/* ─── 03 LOGO SYSTEM ────────────────────────────────────── */
function LogoSystem() {
  return (
    <Section id="logo">
      <Eyebrow>03 — Logo System</Eyebrow>
      <SectionTitle>The mark, earned</SectionTitle>
      <SectionBody>
        The logomark is a murmuration of five nodes — three generators (Solar Gold), two sustainers
        (Grid Green) — connected by a partial grid of relationships. The formation flows from
        lower-left to upper-right: energy moving forward. No two nodes are the same size.
        Communities are not uniform. The whole moves as one.
      </SectionBody>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 2,
          marginBottom: '3rem',
        }}
      >
        {/* Primary Light */}
        <LogoCell bg="var(--parchment)" label="Primary — Light">
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <LogoMark size={44} />
            <div
              style={{
                fontFamily: 'var(--ff-display)',
                fontSize: 26,
                fontWeight: 400,
                color: 'var(--night)',
                letterSpacing: '0.01em',
              }}
            >
              Grē<span style={{ color: 'var(--solar)' }}>x</span>Grid
            </div>
          </div>
        </LogoCell>

        {/* Primary Dark */}
        <LogoCell bg="var(--night)" label="Primary — Dark" labelColor="var(--mid)">
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <LogoMark size={44} dark />
            <div
              style={{
                fontFamily: 'var(--ff-display)',
                fontSize: 26,
                fontWeight: 400,
                color: '#FAFAF6',
                letterSpacing: '0.01em',
              }}
            >
              Grē<span style={{ color: '#C8841A' }}>x</span>Grid
            </div>
          </div>
        </LogoCell>

        {/* Isolation Mark */}
        <LogoCell bg="var(--grid-pale)" label="Isolation Mark">
          <svg width="80" height="80" viewBox="0 0 52 48" fill="none">
            <line x1="9" y1="26" x2="21" y2="14" stroke="#1A7A52" strokeWidth="1.5" opacity="0.6" />
            <line x1="21" y1="14" x2="36" y2="10" stroke="#C8841A" strokeWidth="1.5" opacity="0.6" />
            <line x1="9" y1="26" x2="25" y2="30" stroke="#1A7A52" strokeWidth="1.5" opacity="0.6" />
            <line x1="21" y1="14" x2="25" y2="30" stroke="#1A7A52" strokeWidth="1.5" opacity="0.5" />
            <line x1="36" y1="10" x2="43" y2="30" stroke="#C8841A" strokeWidth="1.5" opacity="0.5" />
            <line x1="25" y1="30" x2="43" y2="30" stroke="#1A7A52" strokeWidth="1.5" opacity="0.5" />
            <circle cx="9" cy="26" r="5" fill="#1A7A52" />
            <circle cx="21" cy="14" r="4" fill="#C8841A" />
            <circle cx="36" cy="10" r="3" fill="#C8841A" opacity="0.75" />
            <circle cx="25" cy="30" r="4.5" fill="#1A7A52" opacity="0.85" />
            <circle cx="43" cy="30" r="3.5" fill="#C8841A" />
          </svg>
        </LogoCell>

        {/* Solar bg */}
        <LogoCell bg="var(--solar)" label="On Solar" labelColor="rgba(15,20,16,0.5)">
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <svg width="36" height="36" viewBox="0 0 52 48" fill="none">
              <line x1="9" y1="26" x2="21" y2="14" stroke="#0F1410" strokeWidth="1.2" opacity="0.4" />
              <line x1="21" y1="14" x2="36" y2="10" stroke="#0F1410" strokeWidth="1.2" opacity="0.4" />
              <line x1="9" y1="26" x2="25" y2="30" stroke="#0F1410" strokeWidth="1.2" opacity="0.3" />
              <line x1="21" y1="14" x2="25" y2="30" stroke="#0F1410" strokeWidth="1.2" opacity="0.3" />
              <line x1="36" y1="10" x2="43" y2="30" stroke="#0F1410" strokeWidth="1.2" opacity="0.3" />
              <line x1="25" y1="30" x2="43" y2="30" stroke="#0F1410" strokeWidth="1.2" opacity="0.3" />
              <circle cx="9" cy="26" r="5" fill="#0F1410" />
              <circle cx="21" cy="14" r="4" fill="#0F1410" opacity="0.85" />
              <circle cx="36" cy="10" r="3" fill="#0F1410" opacity="0.65" />
              <circle cx="25" cy="30" r="4.5" fill="#0F1410" opacity="0.75" />
              <circle cx="43" cy="30" r="3.5" fill="#0F1410" opacity="0.85" />
            </svg>
            <div
              style={{
                fontFamily: 'var(--ff-display)',
                fontSize: 22,
                fontWeight: 400,
                color: 'var(--night)',
                letterSpacing: '0.01em',
              }}
            >
              GrēxGrid
            </div>
          </div>
        </LogoCell>

        {/* Stacked mark dark */}
        <LogoCell bg="var(--dark)" label="Stacked — Dark" labelColor="var(--mid)">
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
            <svg width="52" height="48" viewBox="0 0 52 48" fill="none">
              <line x1="9" y1="26" x2="21" y2="14" stroke="#C8841A" strokeWidth="1.2" opacity="0.4" />
              <line x1="21" y1="14" x2="36" y2="10" stroke="#C8841A" strokeWidth="1.2" opacity="0.4" />
              <line x1="9" y1="26" x2="25" y2="30" stroke="#2EC98A" strokeWidth="1.2" opacity="0.4" />
              <line x1="21" y1="14" x2="25" y2="30" stroke="#2EC98A" strokeWidth="1.2" opacity="0.3" />
              <line x1="36" y1="10" x2="43" y2="30" stroke="#C8841A" strokeWidth="1.2" opacity="0.4" />
              <line x1="25" y1="30" x2="43" y2="30" stroke="#2EC98A" strokeWidth="1.2" opacity="0.4" />
              <circle cx="9" cy="26" r="5" fill="#2EC98A" />
              <circle cx="21" cy="14" r="4" fill="#C8841A" />
              <circle cx="36" cy="10" r="3" fill="#C8841A" opacity="0.75" />
              <circle cx="25" cy="30" r="4.5" fill="#2EC98A" opacity="0.85" />
              <circle cx="43" cy="30" r="3.5" fill="#C8841A" />
            </svg>
            <div
              style={{
                fontFamily: 'var(--ff-display)',
                fontSize: 20,
                fontWeight: 400,
                color: '#FAFAF6',
                letterSpacing: '0.08em',
                textAlign: 'center',
              }}
            >
              GrēxGrid
            </div>
          </div>
        </LogoCell>

        {/* Exclusion rules */}
        <LogoCell bg="var(--night)" label="Never do this" labelColor="var(--fault)">
          <div
            style={{
              fontFamily: 'var(--ff-mono)',
              fontSize: 11,
              color: 'var(--stone)',
              lineHeight: 1.9,
            }}
          >
            — Do not rotate the mark<br />
            — Do not stretch or squish<br />
            — Do not change node colours individually<br />
            — Do not use on busy photo backgrounds<br />
            — Do not add drop shadows<br />
            — Do not outline the wordmark<br />
            — Do not use the wordmark without the mark<br />
            — Do not place below 24px height<br />
            — Do not alter the macron on ē
          </div>
        </LogoCell>
      </div>

      <SectionBody>
        The macron (ē) in GrēxGrid is not an accent. It is a design element. The long vowel
        communicates <em>continuity</em> — the sustained, uninterrupted delivery of power.
      </SectionBody>
    </Section>
  )
}

function LogoCell({
  bg,
  label,
  labelColor = 'var(--stone)',
  children,
}: {
  bg: string
  label: string
  labelColor?: string
  children: React.ReactNode
}) {
  return (
    <div
      style={{
        background: bg,
        padding: '3rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1.5rem',
        minHeight: 220,
      }}
    >
      {children}
      <div
        style={{
          fontFamily: 'var(--ff-mono)',
          fontSize: 10,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: labelColor,
        }}
      >
        {label}
      </div>
    </div>
  )
}

/* ─── 04 COLOUR SYSTEM ──────────────────────────────────── */
function ColorSystem() {
  const primarySwatches = [
    { bg: '#C8841A', fg: '#fff', name: 'Solar Gold', hex: '#C8841A', semantic: 'The Harmattan sun. Generation.' },
    { bg: '#F5D49A', fg: '#7A5010', name: 'Solar Light', hex: '#F5D49A', semantic: 'Backgrounds, hover' },
    { bg: '#7A5010', fg: '#F5D49A', name: 'Solar Deep', hex: '#7A5010', semantic: 'Text on light solar' },
    { bg: '#1A7A52', fg: '#fff', name: 'Grid Green', hex: '#1A7A52', semantic: 'Active. Alive. Growing.' },
    { bg: '#9EDFC0', fg: '#0C4430', name: 'Grid Light', hex: '#9EDFC0', semantic: 'Backgrounds, tints' },
    { bg: '#0C4430', fg: '#9EDFC0', name: 'Grid Deep', hex: '#0C4430', semantic: 'Text on light grid' },
  ]
  const neutralSwatches = [
    { bg: '#0F1410', fg: '#7A7A72', name: 'Night', hex: '#0F1410', semantic: '3am sky. Depth.' },
    { bg: '#1A1F1B', fg: '#7A7A72', name: 'Dark', hex: '#1A1F1B', semantic: 'Dark surfaces' },
    { bg: '#2E342F', fg: '#C4C0B4', name: 'Mid', hex: '#2E342F', semantic: 'Secondary surfaces' },
    { bg: '#7A7A72', fg: '#fff', name: 'Stone', hex: '#7A7A72', semantic: 'Muted text' },
    { bg: '#F0EBE0', fg: '#2E342F', name: 'Parchment', hex: '#F0EBE0', semantic: 'Wall in afternoon sun' },
    { bg: '#FAFAF6', fg: '#2E342F', name: 'White', hex: '#FAFAF6', semantic: 'Warm surface' },
  ]
  const stateSwatches = [
    { bg: '#2EC98A', fg: '#0C4430', name: 'Live Grid', hex: '#2EC98A' },
    { bg: '#E8A030', fg: '#7A5010', name: 'Trading', hex: '#E8A030' },
    { bg: '#C94040', fg: '#fff', name: 'Fault', hex: '#C94040' },
    { bg: '#7A7870', fg: '#fff', name: 'Offline', hex: '#7A7870' },
    { bg: '#D4701A', fg: '#fff', name: 'Credit Low', hex: '#D4701A' },
  ]

  return (
    <Section id="color">
      <Eyebrow>04 — Colour System</Eyebrow>
      <SectionTitle>Built on truth</SectionTitle>
      <SectionBody>
        Every colour is assigned semantically — mapped to a natural or operational truth in
        GrēxGrid&apos;s world. No colour was chosen aesthetically. Each has a reason that survives
        the removal of its label.
      </SectionBody>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {/* Primary */}
        <div>
          <div style={{ fontFamily: 'var(--ff-mono)', fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--stone)', marginBottom: '0.75rem' }}>
            Primary Palette
          </div>
          <div style={{ display: 'flex', gap: 2 }}>
            {primarySwatches.map(s => (
              <ColorSwatch key={s.name} {...s} />
            ))}
          </div>
        </div>

        {/* Neutrals */}
        <div>
          <div style={{ fontFamily: 'var(--ff-mono)', fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--stone)', marginBottom: '0.75rem' }}>
            Neutral Foundation
          </div>
          <div style={{ display: 'flex', gap: 2 }}>
            {neutralSwatches.map(s => (
              <ColorSwatch key={s.name} {...s} />
            ))}
          </div>
        </div>

        {/* State */}
        <div>
          <div style={{ fontFamily: 'var(--ff-mono)', fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--stone)', marginBottom: '0.75rem' }}>
            System State Colours — each state has a reason
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 2, marginTop: '0.5rem' }}>
            {stateSwatches.map(s => (
              <div
                key={s.name}
                style={{
                  height: 72,
                  borderRadius: 2,
                  background: s.bg,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  padding: '0.5rem',
                }}
              >
                <div style={{ fontFamily: 'var(--ff-mono)', fontSize: 10, color: s.fg, textAlign: 'center' }}>
                  <div style={{ fontWeight: 500 }}>{s.name}</div>
                  <div>{s.hex}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}

function ColorSwatch({ bg, fg, name, hex, semantic }: { bg: string; fg: string; name: string; hex: string; semantic?: string }) {
  return (
    <div
      style={{
        flex: 1,
        height: 120,
        background: bg,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: '0.75rem',
      }}
    >
      <div style={{ fontFamily: 'var(--ff-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '0.04em', color: fg }}>
        {name}
      </div>
      <div style={{ fontFamily: 'var(--ff-mono)', fontSize: 10, opacity: 0.6, color: fg }}>{hex}</div>
      {semantic && <div style={{ fontSize: 11, fontWeight: 400, marginTop: 3, opacity: 0.8, color: fg }}>{semantic}</div>}
    </div>
  )
}

/* ─── 05 TYPOGRAPHY ─────────────────────────────────────── */
function Typography() {
  const levels = [
    {
      label: 'Display',
      specs: 'Cormorant Garamond\nWeight 300\n72–120px\nLH 1.0\nLS –0.02em\nManifesto, hero text',
      sample: (
        <div style={{ fontFamily: 'var(--ff-display)', fontSize: 72, fontWeight: 300, lineHeight: 1, color: 'var(--night)' }}>
          Power is not a privilege. It is infrastructure.
        </div>
      ),
    },
    {
      label: 'Heading 1',
      specs: 'Cormorant Garamond\nWeight 400\n36–56px\nLH 1.1\nSection titles',
      sample: (
        <div style={{ fontFamily: 'var(--ff-display)', fontSize: 48, fontWeight: 400, lineHeight: 1.1, color: 'var(--night)' }}>
          Community energy sovereignty
        </div>
      ),
    },
    {
      label: 'Heading 2',
      specs: 'Cormorant Garamond\nWeight 400\n24–36px\nLH 1.2\nSub-sections',
      sample: (
        <div style={{ fontFamily: 'var(--ff-display)', fontSize: 32, fontWeight: 400, lineHeight: 1.2, color: 'var(--night)' }}>
          The GrēxSense intelligence layer
        </div>
      ),
    },
    {
      label: 'Body',
      specs: 'DM Sans\nWeight 400\n15–17px\nLH 1.75\nLong-form, all reading',
      sample: (
        <div style={{ fontFamily: 'var(--ff-body)', fontSize: 17, fontWeight: 400, lineHeight: 1.75, color: 'var(--mid)', maxWidth: 600 }}>
          GrēxGrid is a clean-energy management platform merging solar micro-generation, smart grid connectivity, and AI-powered distribution. Households and communities generate, store, and trade solar energy — paying only for what they use via mobile app or USSD.
        </div>
      ),
    },
    {
      label: 'Data',
      specs: 'IBM Plex Mono\nWeight 500\n14–40px\nLH 1.0\nMetrics, amounts, readings',
      sample: (
        <div style={{ fontFamily: 'var(--ff-mono)', fontSize: 28, fontWeight: 500, color: 'var(--night)' }}>
          4.82 kWh · ₦1,240 · 94% uptime
        </div>
      ),
    },
    {
      label: 'Label / UI',
      specs: 'DM Sans\nWeight 500\n10–12px\nLS 0.1em\nAll caps, UI labels',
      sample: (
        <div style={{ fontFamily: 'var(--ff-body)', fontSize: 11, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--stone)' }}>
          Grid status · Node ID · Energy credit · Last sync
        </div>
      ),
    },
    {
      label: 'Legal',
      specs: 'DM Sans\nWeight 300\n10–11px\nLH 1.6\nDisclaimers, footnotes',
      sample: (
        <div style={{ fontFamily: 'var(--ff-body)', fontSize: 11, fontWeight: 300, color: 'var(--stone)', lineHeight: 1.6, maxWidth: 500 }}>
          GrēxGrid is registered in Nigeria. Energy credits are denominated in NGN and are non-refundable after use. Trading is subject to community agreement and grid availability.
        </div>
      ),
    },
  ]

  return (
    <Section id="typography">
      <Eyebrow>05 — Typography</Eyebrow>
      <SectionTitle>A dual-world system</SectionTitle>
      <SectionBody>
        GrēxGrid lives in two type worlds simultaneously. World 1: digital — from 11px on a
        low-resolution Android screen to Retina in a Geneva boardroom. World 2: physical —
        stamped on hardware, printed on community flyers, embossed on letterheads.
      </SectionBody>

      <div>
        {levels.map(({ label, specs, sample }) => (
          <div
            key={label}
            style={{
              display: 'grid',
              gridTemplateColumns: '180px 1fr',
              gap: '3rem',
              padding: '2.5rem 0',
              borderBottom: '0.5px solid var(--dust)',
              alignItems: 'start',
            }}
          >
            <div style={{ paddingTop: 4 }}>
              <div style={{ fontFamily: 'var(--ff-mono)', fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--solar)', marginBottom: '0.5rem' }}>
                {label}
              </div>
              <div style={{ fontFamily: 'var(--ff-mono)', fontSize: 11, color: 'var(--stone)', lineHeight: 1.8, whiteSpace: 'pre-line' }}>
                {specs}
              </div>
            </div>
            {sample}
          </div>
        ))}
      </div>
    </Section>
  )
}

/* ─── 06 ICONOGRAPHY ────────────────────────────────────── */
function Iconography() {
  const icons = [
    { name: 'solar', el: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C8841A" strokeWidth="1.5" strokeLinecap="round"><circle cx="12" cy="12" r="4"/><line x1="12" y1="2" x2="12" y2="5"/><line x1="12" y1="19" x2="12" y2="22"/><line x1="2" y1="12" x2="5" y2="12"/><line x1="19" y1="12" x2="22" y2="12"/><line x1="4.93" y1="4.93" x2="7.05" y2="7.05"/><line x1="16.95" y1="16.95" x2="19.07" y2="19.07"/><line x1="4.93" y1="19.07" x2="7.05" y2="16.95"/><line x1="16.95" y1="7.05" x2="19.07" y2="4.93"/></svg> },
    { name: 'storage', el: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1A7A52" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="18" height="10" rx="2"/><line x1="20" y1="10" x2="22" y2="10"/><line x1="20" y1="14" x2="22" y2="14"/><rect x="4" y="9" width="7" height="6" rx="1" fill="#1A7A52" stroke="none"/></svg> },
    { name: 'grid-node', el: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--night)" strokeWidth="1.5" strokeLinecap="round"><circle cx="5" cy="12" r="2"/><circle cx="19" cy="5" r="2"/><circle cx="19" cy="19" r="2"/><circle cx="12" cy="12" r="2"/><line x1="7" y1="12" x2="10" y2="12"/><line x1="13.4" y1="10.6" x2="17.1" y2="6.8"/><line x1="13.4" y1="13.4" x2="17.1" y2="17.2"/></svg> },
    { name: 'trade', el: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C8841A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 16H17M17 16L14 13M17 16L14 19"/><path d="M17 8H7M7 8L10 5M7 8L10 11"/></svg> },
    { name: 'mobile-pay', el: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1A7A52" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="3" width="14" height="18" rx="2"/><line x1="9" y1="8" x2="15" y2="8"/><circle cx="12" cy="14" r="2"/></svg> },
    { name: 'ussd', el: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--night)" strokeWidth="1.5" strokeLinecap="round"><rect x="5" y="3" width="14" height="18" rx="2"/><line x1="9" y1="7" x2="15" y2="7"/><line x1="8" y1="11" x2="10" y2="11"/><line x1="12" y1="11" x2="14" y2="11"/><line x1="8" y1="14" x2="10" y2="14"/><line x1="12" y1="14" x2="14" y2="14"/><line x1="12" y1="17" x2="14" y2="17"/></svg> },
    { name: 'ai-sense', el: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C8841A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C7 2 4 5.5 4 9c0 2.5 1.5 4.5 3.5 5.5V17h9v-2.5C18.5 13.5 20 11.5 20 9c0-3.5-3-7-8-7z"/><line x1="9" y1="17" x2="9" y2="20"/><line x1="15" y1="17" x2="15" y2="20"/><line x1="9" y1="20" x2="15" y2="20"/><circle cx="9" cy="9" r="1" fill="#C8841A" stroke="none"/><circle cx="15" cy="9" r="1" fill="#C8841A" stroke="none"/><path d="M9 12 Q12 14 15 12" strokeWidth="1.5"/></svg> },
    { name: 'community', el: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1A7A52" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="8" r="3"/><circle cx="17" cy="10" r="2.5"/><path d="M3 20c0-3 2.7-5 6-5s6 2 6 5"/><path d="M17 15c1.5 0 4 1 4 4"/></svg> },
    { name: 'fault', el: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C94040" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10.3 3.4L2.5 17c-.7 1.2.2 2.8 1.7 2.8h15.6c1.5 0 2.4-1.6 1.7-2.8L13.7 3.4c-.7-1.3-2.7-1.3-3.4 0z"/><line x1="12" y1="9" x2="12" y2="13"/><circle cx="12" cy="16" r="0.8" fill="#C94040" stroke="none"/></svg> },
    { name: 'credit-low', el: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D4701A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="18" height="10" rx="2"/><line x1="20" y1="10" x2="22" y2="10"/><line x1="20" y1="14" x2="22" y2="14"/><rect x="4" y="9" width="2" height="6" rx="0.5" fill="#D4701A" stroke="none"/></svg> },
    { name: 'settings', el: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--night)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg> },
    { name: 'location', el: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1A7A52" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg> },
    { name: 'analytics', el: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--night)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 20V10"/><path d="M12 20V4"/><path d="M6 20v-6"/></svg> },
    { name: 'energy-flow', el: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C8841A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg> },
    { name: 'connect', el: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1A7A52" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg> },
    { name: 'history', el: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--night)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="12 8 12 12 14 14"/><path d="M3.05 11a9 9 0 1 1 .5 4"/><polyline points="3 16 3.05 11 8 11"/></svg> },
    { name: 'notify', el: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--night)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg> },
    { name: 'export', el: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C8841A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg> },
    { name: 'offline', el: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--offline)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/><line x1="2" y1="2" x2="22" y2="22" stroke="#C94040" strokeWidth="1.5"/></svg> },
    { name: 'household', el: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1A7A52" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg> },
    { name: 'grexbox', el: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--night)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="6" width="16" height="12" rx="1"/><circle cx="8" cy="12" r="1.5" fill="var(--night)" stroke="none"/><line x1="11" y1="9" x2="11" y2="15"/><line x1="14" y1="9" x2="14" y2="15"/><line x1="11" y1="12" x2="14" y2="12"/></svg> },
    { name: 'impact', el: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1A7A52" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> },
    { name: 'support', el: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--night)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg> },
    { name: 'statement', el: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C8841A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="8" y1="13" x2="16" y2="13"/><line x1="8" y1="17" x2="12" y2="17"/></svg> },
  ]

  return (
    <Section id="icons">
      <Eyebrow>06 — Iconography</Eyebrow>
      <SectionTitle>A lexicon, not a set</SectionTitle>
      <SectionBody>
        All icons are built on a 24px grid, 1.5px stroke, 2px corner radius. The stroke style is
        consistent with the logomark&apos;s node connections. Icons never use filled areas — only strokes
        — so they read at any scale and any background.
      </SectionBody>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(8, 1fr)', gap: 2 }}>
        {icons.map(({ name, el }) => (
          <div
            key={name}
            style={{
              aspectRatio: '1',
              background: 'var(--parchment)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              padding: '1rem 0.5rem',
              cursor: 'default',
              transition: 'background 0.15s',
            }}
            onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = 'var(--grid-pale)')}
            onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = 'var(--parchment)')}
          >
            {el}
            <div style={{ fontFamily: 'var(--ff-mono)', fontSize: 9, color: 'var(--stone)', textAlign: 'center', letterSpacing: '0.04em' }}>
              {name}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

/* ─── 07 DESIGN TOKENS ──────────────────────────────────── */
function DesignTokens() {
  return (
    <Section id="tokens">
      <Eyebrow>07 — Design Tokens</Eyebrow>
      <SectionTitle>The underlying rules</SectionTitle>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
        <div>
          {/* Spacing */}
          <TokenBlock title="Spacing Scale — 4px base unit">
            {[
              { w: 4, label: '4px — xs · hairline separation' },
              { w: 8, label: '8px — sm · inline gaps' },
              { w: 12, label: '12px — md · component padding' },
              { w: 16, label: '16px — lg · card padding' },
              { w: 24, label: '24px — xl · section gaps' },
              { w: 40, label: '40px — 2xl · layout breathing' },
              { w: 64, label: '64px — 3xl · section headers' },
              { w: 96, label: '96px — 4xl · hero sections' },
            ].map(({ w, label }) => (
              <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '0.75rem' }}>
                <div style={{ background: 'var(--grid)', height: 4, borderRadius: 2, width: w }} />
                <div style={{ fontFamily: 'var(--ff-mono)', fontSize: 11, color: 'var(--stone)' }}>{label}</div>
              </div>
            ))}
          </TokenBlock>

          {/* Radius */}
          <TokenBlock title="Radius System">
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              {[
                { r: 0, label: '0px\nSharp\nData, grids' },
                { r: 2, label: '2px\nMinimal\nUI cards' },
                { r: 8, label: '8px\nSoft\nInteractive' },
                { r: 30, label: '30px\nPill\nStatus badges' },
              ].map(({ r, label }) => (
                <div key={r} style={{ textAlign: 'center' }}>
                  <div
                    style={{
                      background: 'var(--parchment)',
                      border: '0.5px solid var(--dust)',
                      width: 60,
                      height: 60,
                      borderRadius: r,
                    }}
                  />
                  <div style={{ fontFamily: 'var(--ff-mono)', fontSize: 10, color: 'var(--stone)', marginTop: '0.5rem', textAlign: 'center', whiteSpace: 'pre-line' }}>
                    {label}
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: '1rem', fontSize: 13, color: 'var(--stone)', lineHeight: 1.6 }}>
              Sharp (0) for data and structural elements. Minimal (2px) for content cards. Soft (8px) for interactive elements. Pill for status indicators only.
            </div>
          </TokenBlock>
        </div>

        <div>
          {/* Motion */}
          <TokenBlock title="Motion Tokens">
            {[
              { label: 'Instant', d: 'M10 30 L110 10', color: '#C8841A', meta: '0ms · State changes' },
              { label: 'Swift', d: 'M10 30 Q 30 10 110 10', color: '#C8841A', meta: '150ms ease-out · UI feedback' },
              { label: 'Flow', d: 'M10 30 Q 60 30 90 10 Q 105 4 110 10', color: '#1A7A52', meta: '300ms ease-in-out · Page transitions' },
              { label: 'Settle', d: 'M10 30 Q 20 5 60 10 Q 90 14 100 11 Q 107 9 110 10', color: '#1A7A52', meta: '500ms spring · Data loading' },
            ].map(({ label, d, color, meta }) => (
              <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', padding: '0.75rem 0', borderBottom: '0.5px solid var(--dust)' }}>
                <div style={{ fontFamily: 'var(--ff-mono)', fontSize: 11, color: 'var(--stone)', width: 100 }}>{label}</div>
                <svg style={{ flex: 1, height: 40 }} viewBox="0 0 120 40">
                  <path d={d} stroke={color} strokeWidth="1.5" fill="none" />
                </svg>
                <div style={{ fontFamily: 'var(--ff-mono)', fontSize: 10, color: 'var(--stone)', textAlign: 'right', width: 120 }}>{meta}</div>
              </div>
            ))}
          </TokenBlock>

          {/* Elevation */}
          <TokenBlock title="Elevation">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { bg: 'var(--parchment)', border: '0.5px solid var(--dust)', label: 'Level 0 — No elevation. Content on surface. Data tables, grids.' },
                { bg: 'var(--white)', border: '0.5px solid var(--dust)', label: 'Level 1 — Cards, panels. Background shifts from parchment to white.' },
                { bg: 'var(--white)', border: '1px solid var(--dust)', label: 'Level 2 — Active/focused cards. Border weight increases.' },
                { bg: 'var(--night)', border: '0.5px solid var(--mid)', label: 'Level 3 — Modals, overlays. Night background. Highest priority.' },
              ].map(({ bg, border, label }) => (
                <div key={label} style={{ padding: '1rem', background: bg, border, fontSize: 13, color: 'var(--stone)' }}>
                  {label}
                </div>
              ))}
            </div>
            <div style={{ marginTop: '0.75rem', fontSize: 12, color: 'var(--stone)', lineHeight: 1.7 }}>
              GrēxGrid uses no drop shadows. Elevation is communicated through background value and border weight.
            </div>
          </TokenBlock>
        </div>
      </div>
    </Section>
  )
}

function TokenBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: '2.5rem' }}>
      <div
        style={{
          fontFamily: 'var(--ff-mono)',
          fontSize: 10,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: 'var(--solar)',
          marginBottom: '1.25rem',
          paddingBottom: '0.75rem',
          borderBottom: '0.5px solid var(--dust)',
        }}
      >
        {title}
      </div>
      {children}
    </div>
  )
}

/* ─── 08 UI COMPONENTS ──────────────────────────────────── */
function UIComponents() {
  return (
    <Section id="components">
      <Eyebrow>08 — UI Components</Eyebrow>
      <SectionTitle>Core components</SectionTitle>
      <SectionBody>
        Each component is designed for the tension it must hold: global-grade precision and
        last-mile readability. Every component has a purpose, defined states, an accessibility
        requirement, and one rule that makes it unmistakably GrēxGrid.
      </SectionBody>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', marginBottom: '4rem' }}>
        {/* Energy Credit Card */}
        <ComponentArea label="Energy Credit Display">
          <div style={{ background: 'var(--night)', borderRadius: 2, padding: '1.5rem', color: 'var(--white)', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: -40, right: -40, width: 120, height: 120, background: 'radial-gradient(circle, rgba(200,132,26,0.2) 0%, transparent 70%)' }} />
            <div style={{ fontFamily: 'var(--ff-mono)', fontSize: 9, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--stone)', marginBottom: '0.75rem' }}>Available Credit</div>
            <div style={{ fontFamily: 'var(--ff-mono)', fontSize: 40, fontWeight: 500, color: 'var(--solar)', lineHeight: 1, marginBottom: '0.5rem' }}>₦1,840</div>
            <div style={{ fontSize: 13, color: 'var(--dust)', marginBottom: '1.5rem' }}>≈ 6.2 kWh remaining · Resets in 4 days</div>
            <div style={{ height: 3, background: 'var(--mid)', borderRadius: 2, marginBottom: '0.5rem' }}>
              <div style={{ height: '100%', borderRadius: 2, background: 'linear-gradient(90deg, var(--grid), var(--live))', width: '68%' }} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--ff-mono)', fontSize: 10, color: 'var(--stone)' }}>
              <span>68% credit used</span>
              <span>Node: IKJ-04</span>
            </div>
          </div>
        </ComponentArea>

        {/* Node Status */}
        <ComponentArea label="Grid Node Status">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {[
              { dot: 'var(--live)', name: 'Alagbo-East Node', detail: 'IKJ-04 · 14 households · Trading active', val: '4.8 kWh', valColor: 'var(--night)' },
              { dot: 'var(--trading)', name: 'Surulere-Central Node', detail: 'SRL-12 · 9 households · Peak demand', val: '2.1 kWh', valColor: 'var(--night)' },
              { dot: 'var(--offline)', name: 'Ketu-West Node', detail: 'KTW-07 · Offline since 14:30', val: '—', valColor: 'var(--offline)' },
              { dot: 'var(--fault)', name: 'Apapa Node', detail: 'APP-02 · Fault: Inverter overload', val: '!', valColor: 'var(--fault)' },
            ].map(({ dot, name, detail, val, valColor }) => (
              <div key={name} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', background: 'var(--white)', padding: '0.75rem 1rem', border: '0.5px solid var(--dust)' }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: dot }} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 500, color: 'var(--night)' }}>{name}</div>
                  <div style={{ fontFamily: 'var(--ff-mono)', fontSize: 10, color: 'var(--stone)' }}>{detail}</div>
                </div>
                <div style={{ fontFamily: 'var(--ff-mono)', fontSize: 12, fontWeight: 500, color: valColor }}>{val}</div>
              </div>
            ))}
          </div>
        </ComponentArea>

        {/* USSD */}
        <ComponentArea label="USSD Transaction — Street Register" dark>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ background: 'var(--night)', borderRadius: 16, padding: '1.5rem', maxWidth: 260, border: '2px solid var(--mid)' }}>
              <div style={{ background: '#000', borderRadius: 4, padding: '1rem', minHeight: 200, fontFamily: 'var(--ff-mono)', fontSize: 12, color: '#ccc', lineHeight: 1.8, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ color: 'var(--solar)', fontSize: 11, fontWeight: 500, marginBottom: '0.75rem', paddingBottom: '0.75rem', borderBottom: '0.5px solid #222' }}>
                    GrēxGrid *447#
                  </div>
                  {['1. Check my units', '2. Buy more credit', '3. Trade my surplus', '4. My account', '0. Talk to us'].map(o => (
                    <div key={o} style={{ color: '#9ef', display: 'block' }}>{o}</div>
                  ))}
                </div>
                <div style={{ marginTop: '1rem', borderTop: '0.5px solid #222', paddingTop: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ color: 'var(--stone)', fontSize: 10 }}>Enter:</span>
                  <span>1<span style={{ display: 'inline-block', width: 1, height: 12, background: '#ccc', animation: 'blink 1s infinite' }} /></span>
                </div>
              </div>
            </div>
          </div>
        </ComponentArea>

        {/* AI Insight Cards */}
        <ComponentArea label="GrēxSense AI Insight">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <InsightCard
              dotColor="var(--live)"
              borderColor="var(--grid)"
              labelColor="var(--grid-lt)"
              label="GrēxSense · Predictive Insight"
              body={<><strong>Peak surplus window detected.</strong> Node IKJ-04 will generate ~2.4 kWh excess between 11:00–14:00 tomorrow based on weather forecast.</>}
              action="→ Schedule trade for tomorrow · 9 minutes to confirm"
              actionColor="var(--solar)"
            />
            <InsightCard
              dotColor="var(--fault)"
              borderColor="var(--fault)"
              labelColor="#F09595"
              label="GrēxSense · Fault Prediction"
              body={<><strong>Inverter stress detected.</strong> APP-02 showing thermal signature associated with failure in 48–72hrs. Recommend field check.</>}
              action="→ Dispatch field engineer"
              actionColor="var(--fault)"
            />
          </div>
        </ComponentArea>

        {/* Flow diagram */}
        <div style={{ gridColumn: '1 / -1' }}>
          <ComponentArea label="Community Energy Flow">
            <div style={{ background: 'var(--parchment)', padding: '2.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 0, position: 'relative' }}>
                {[
                  { label: 'Generate\nGrēxBox', bg: 'var(--solar)', color: 'var(--night)', icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0F1410" strokeWidth="1.5" strokeLinecap="round"><circle cx="12" cy="12" r="4"/><line x1="12" y1="2" x2="12" y2="5"/><line x1="12" y1="19" x2="12" y2="22"/><line x1="2" y1="12" x2="5" y2="12"/><line x1="19" y1="12" x2="22" y2="12"/></svg> },
                  { label: 'Store\nGrēxBox', bg: 'var(--grid)', color: '#fff', icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"><rect x="2" y="7" width="18" height="10" rx="2"/><line x1="20" y1="10" x2="22" y2="10"/><line x1="20" y1="14" x2="22" y2="14"/></svg> },
                  { label: 'Trade\nGrēxShare', bg: 'var(--night)', color: 'var(--solar)', icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C8841A" strokeWidth="1.5" strokeLinecap="round"><path d="M7 16H17M17 16L14 13M17 16L14 19"/><path d="M17 8H7M7 8L10 5M7 8L10 11"/></svg> },
                  { label: 'Pay\nGrēxPay', bg: 'var(--parchment)', color: 'var(--night)', border: '1.5px solid var(--dust)', icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--night)" strokeWidth="1.5" strokeLinecap="round"><rect x="5" y="3" width="14" height="18" rx="2"/><line x1="9" y1="8" x2="15" y2="8"/></svg> },
                ].map(({ label, bg, color, border, icon }, i, arr) => (
                  <div key={label} style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      <div style={{ width: 64, height: 64, borderRadius: '50%', background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center', border }}>
                        {icon}
                      </div>
                      <div style={{ fontFamily: 'var(--ff-mono)', fontSize: 10, color: 'var(--stone)', marginTop: '0.75rem', letterSpacing: '0.08em', textTransform: 'uppercase', textAlign: 'center', whiteSpace: 'pre-line' }}>
                        {label}
                      </div>
                    </div>
                    {i < arr.length - 1 && (
                      <div style={{ width: 40, height: 2, background: 'var(--dust)', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', marginBottom: 24, flexShrink: 0 }}>
                        <div style={{ borderTop: '4px solid transparent', borderBottom: '4px solid transparent', borderLeft: '6px solid var(--dust)' }} />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </ComponentArea>
        </div>

        {/* Billing */}
        <ComponentArea label="Billing Statement">
          <div style={{ background: 'var(--white)', border: '0.5px solid var(--dust)', padding: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '0.5px solid var(--dust)' }}>
              <div>
                <div style={{ fontFamily: 'var(--ff-display)', fontSize: 18, fontWeight: 400 }}>April 2025 Statement</div>
                <div style={{ fontFamily: 'var(--ff-mono)', fontSize: 10, color: 'var(--stone)', marginTop: 4 }}>Node IKJ-04 · Alagbo-East</div>
              </div>
              <span style={{ display: 'inline-block', fontFamily: 'var(--ff-mono)', fontSize: 9, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '3px 10px', background: 'var(--grid-pale)', color: 'var(--grid-dk)' }}>Paid</span>
            </div>
            {[
              { label: 'Energy consumed', val: '18.4 kWh', color: undefined },
              { label: 'Energy generated', val: '24.1 kWh', color: undefined },
              { label: 'Energy traded (sold)', val: '5.7 kWh → +₦342', color: 'var(--grid)' },
              { label: 'Base subscription', val: '₦1,200', color: undefined },
              { label: 'Trading credit', val: '–₦342', color: 'var(--grid)' },
            ].map(({ label, val, color }) => (
              <div key={label} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, padding: '0.4rem 0', borderBottom: '0.5px solid var(--parchment)' }}>
                <div style={{ color: 'var(--stone)' }}>{label}</div>
                <div style={{ fontFamily: 'var(--ff-mono)', fontSize: 12, color: color ?? 'var(--night)', fontWeight: 500 }}>{val}</div>
              </div>
            ))}
            <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid var(--night)', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <div style={{ fontSize: 13, fontWeight: 500 }}>Total due</div>
              <div style={{ fontFamily: 'var(--ff-mono)', fontSize: 22, fontWeight: 500, color: 'var(--grid)' }}>₦858</div>
            </div>
          </div>
        </ComponentArea>

        {/* Buttons */}
        <ComponentArea label="Buttons & Actions">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <button style={{ width: '100%', background: 'var(--solar)', color: 'var(--night)', padding: '0.875rem 2rem', fontFamily: 'var(--ff-body)', fontSize: 14, fontWeight: 500, letterSpacing: '0.04em', border: 'none', cursor: 'pointer', transition: 'background 0.15s' }}>
              Activate my GrēxBox
            </button>
            <button style={{ width: '100%', background: 'transparent', color: 'var(--mid)', padding: '0.875rem 2rem', fontFamily: 'var(--ff-body)', fontSize: 14, fontWeight: 400, border: '0.5px solid var(--dust)', cursor: 'pointer', letterSpacing: '0.04em' }}>
              View my usage history
            </button>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              <span style={{ display: 'inline-block', fontFamily: 'var(--ff-mono)', fontSize: 9, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '3px 10px', background: 'var(--solar-pale)', color: 'var(--solar-dk)' }}>Live</span>
              <span style={{ display: 'inline-block', fontFamily: 'var(--ff-mono)', fontSize: 9, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '3px 10px', background: 'var(--grid-pale)', color: 'var(--grid-dk)' }}>Trading</span>
              <span style={{ display: 'inline-block', fontFamily: 'var(--ff-mono)', fontSize: 9, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '3px 10px', background: 'var(--night)', color: 'var(--solar)' }}>Fault</span>
              <span style={{ display: 'inline-block', fontFamily: 'var(--ff-mono)', fontSize: 9, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '3px 10px', background: 'var(--fault)', color: '#fff' }}>Offline</span>
            </div>
            <div style={{ padding: '1rem', background: 'var(--grid)', cursor: 'pointer' }}>
              <div style={{ fontFamily: 'var(--ff-mono)', fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#fff', marginBottom: 4 }}>Dial to get started</div>
              <div style={{ fontFamily: 'var(--ff-mono)', fontSize: 24, fontWeight: 500, color: 'var(--solar)' }}>*447#</div>
            </div>
          </div>
        </ComponentArea>
      </div>
    </Section>
  )
}

function ComponentArea({ label, dark = false, children }: { label: string; dark?: boolean; children: React.ReactNode }) {
  return (
    <div style={{ background: dark ? 'var(--dark)' : 'var(--parchment)', padding: '2.5rem' }}>
      <div style={{ fontFamily: 'var(--ff-mono)', fontSize: 9, letterSpacing: '0.12em', textTransform: 'uppercase', color: dark ? 'var(--mid)' : 'var(--stone)', marginBottom: '1.5rem' }}>
        {label}
      </div>
      {children}
    </div>
  )
}

function InsightCard({ dotColor, borderColor, labelColor, label, body, action, actionColor }: {
  dotColor: string; borderColor: string; labelColor: string; label: string; body: React.ReactNode; action: string; actionColor: string
}) {
  return (
    <div style={{ background: 'var(--night)', borderRadius: 2, padding: '1.25rem', borderLeft: `3px solid ${borderColor}`, color: 'var(--white)' }}>
      <div style={{ fontFamily: 'var(--ff-mono)', fontSize: 9, letterSpacing: '0.12em', textTransform: 'uppercase', color: labelColor, marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <svg width="12" height="12" viewBox="0 0 12 12" fill={dotColor}><circle cx="6" cy="6" r="3" /></svg>
        {label}
      </div>
      <div style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--dust)', marginBottom: '1rem' }}>{body}</div>
      <div style={{ fontFamily: 'var(--ff-mono)', fontSize: 10, color: actionColor, letterSpacing: '0.08em', cursor: 'pointer' }}>{action}</div>
    </div>
  )
}

/* ─── 09 GREXSENSE DASHBOARD ────────────────────────────── */
function Dashboard() {
  return (
    <Section id="dashboard" bg="var(--night)" style={{ borderBottom: 'none' }}>
      <Eyebrow>09 — GrēxSense Dashboard</Eyebrow>
      <SectionTitle color="var(--white)">A living control room</SectionTitle>
      <p style={{ fontSize: 17, lineHeight: 1.75, color: 'var(--stone)', maxWidth: 640, marginBottom: '3rem' }}>
        Not a data dashboard. A control room for a living organism. Designed for 3am fault
        detection by a tired field engineer in Kano. Urgent information is bright. Ambient
        information is dim.
      </p>

      <div style={{ marginTop: '1rem' }}>
        {/* Status row */}
        <div style={{ display: 'flex', gap: 2, marginBottom: 2 }}>
          {[
            { dot: 'var(--live)', label: 'Network live', val: '94.2% uptime' },
            { dot: 'var(--trading)', label: 'Trading active', val: '12 active trades' },
            { dot: 'var(--fault)', label: '2 faults detected', val: 'Action required' },
            { dot: undefined, label: 'Last sync: 03:42:18', val: 'Auto-refresh 30s' },
          ].map(({ dot, label, val }) => (
            <div key={label} style={{ flex: 1, background: 'var(--dark)', padding: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              {dot ? <div style={{ width: 8, height: 8, borderRadius: '50%', background: dot, flexShrink: 0 }} /> : (
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--live)' }} />
                </div>
              )}
              <div style={{ fontSize: 12, color: 'var(--dust)' }}>{label}</div>
              <div style={{ marginLeft: 'auto', fontFamily: 'var(--ff-mono)', fontSize: 11, color: 'var(--stone)' }}>{val}</div>
            </div>
          ))}
        </div>

        {/* Main grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr 280px', gap: 2, marginBottom: 2 }}>
          {/* Left metrics */}
          <div style={{ background: 'var(--dark)', padding: '1.5rem' }}>
            {[
              { label: 'Network Generation', val: '142', unit: 'kWh', color: 'var(--solar)', delta: '+18% vs yesterday', up: true },
              { label: 'Revenue Today', val: '₦84k', unit: '', color: 'var(--live)', delta: '+₦12k trading income', up: true },
              { label: 'Households Served', val: '847', unit: '', color: 'var(--white)', delta: '+34 this month', up: true },
            ].map(({ label, val, unit, color, delta, up }, i) => (
              <div key={label}>
                {i > 0 && <div style={{ height: 1, background: 'var(--mid)', margin: '1.5rem 0' }} />}
                <div style={{ fontFamily: 'var(--ff-mono)', fontSize: 9, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--stone)', marginBottom: '1rem' }}>{label}</div>
                <div style={{ fontFamily: 'var(--ff-mono)', fontSize: 36, fontWeight: 500, lineHeight: 1, color }}>
                  {val}<span style={{ fontSize: 14, color: 'var(--stone)', marginLeft: 4 }}>{unit}</span>
                </div>
                <div style={{ fontFamily: 'var(--ff-mono)', fontSize: 11, marginTop: '0.4rem', color: up ? 'var(--live)' : 'var(--fault)' }}>{delta}</div>
              </div>
            ))}
          </div>

          {/* Center chart */}
          <div style={{ background: 'var(--dark)', padding: '1.5rem' }}>
            <div style={{ fontFamily: 'var(--ff-mono)', fontSize: 9, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--stone)', marginBottom: '1rem' }}>
              Generation Over 24hrs — kWh
            </div>
            <div style={{ height: 120, position: 'relative', marginTop: '0.5rem' }}>
              <svg viewBox="0 0 500 120" style={{ width: '100%', height: '100%' }} preserveAspectRatio="none">
                <line x1="0" y1="30" x2="500" y2="30" stroke="#2E342F" strokeWidth="0.5" />
                <line x1="0" y1="60" x2="500" y2="60" stroke="#2E342F" strokeWidth="0.5" />
                <line x1="0" y1="90" x2="500" y2="90" stroke="#2E342F" strokeWidth="0.5" />
                <path d="M0 110 L0 100 Q30 100 40 95 Q60 85 80 75 Q100 60 120 45 Q140 28 160 20 Q180 14 200 16 Q220 18 240 22 Q260 25 280 30 Q300 38 320 42 Q340 48 360 52 Q380 55 400 50 Q430 43 460 38 Q480 32 500 28 L500 110 Z" fill="rgba(200,132,26,0.12)" />
                <path d="M0 100 Q30 100 40 95 Q60 85 80 75 Q100 60 120 45 Q140 28 160 20 Q180 14 200 16 Q220 18 240 22 Q260 25 280 30 Q300 38 320 42 Q340 48 360 52 Q380 55 400 50 Q430 43 460 38 Q480 32 500 28" fill="none" stroke="#C8841A" strokeWidth="1.5" />
                <path d="M200 100 Q220 95 240 88 Q260 78 280 68 Q300 58 320 52 Q340 46 360 44 Q380 42 400 40 L400 110 L200 110 Z" fill="rgba(26,122,82,0.15)" />
                <path d="M200 100 Q220 95 240 88 Q260 78 280 68 Q300 58 320 52 Q340 46 360 44 Q380 42 400 40" fill="none" stroke="#1A7A52" strokeWidth="1" strokeDasharray="4,3" />
                <text x="0" y="118" fill="#7A7A72" fontSize="9" fontFamily="IBM Plex Mono">00:00</text>
                <text x="115" y="118" fill="#7A7A72" fontSize="9" fontFamily="IBM Plex Mono">06:00</text>
                <text x="235" y="118" fill="#7A7A72" fontSize="9" fontFamily="IBM Plex Mono">12:00</text>
                <text x="355" y="118" fill="#7A7A72" fontSize="9" fontFamily="IBM Plex Mono">18:00</text>
                <text x="460" y="118" fill="#7A7A72" fontSize="9" fontFamily="IBM Plex Mono">Now</text>
                <line x1="490" y1="0" x2="490" y2="110" stroke="rgba(200,132,26,0.4)" strokeWidth="1" strokeDasharray="2,2" />
              </svg>
            </div>
            <div style={{ display: 'flex', gap: '2rem', marginTop: '0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{ width: 16, height: 2, background: 'var(--solar)' }} />
                <span style={{ fontFamily: 'var(--ff-mono)', fontSize: 10, color: 'var(--stone)' }}>Generation</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{ width: 16, height: 1, background: 'var(--grid)', borderTop: '1px dashed var(--grid)' }} />
                <span style={{ fontFamily: 'var(--ff-mono)', fontSize: 10, color: 'var(--stone)' }}>Trading surplus</span>
              </div>
            </div>

            <div style={{ height: 1, background: 'var(--mid)', margin: '1.5rem 0' }} />
            <div style={{ fontFamily: 'var(--ff-mono)', fontSize: 9, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--stone)', marginBottom: '0.5rem' }}>
              Node Network — Lagos Cluster
            </div>
            <div style={{ position: 'relative', height: 160, background: 'var(--mid)', padding: '1rem', marginTop: '0.5rem', overflow: 'hidden' }}>
              <svg width="100%" height="100%" viewBox="0 0 400 140">
                <line x1="80" y1="70" x2="160" y2="45" stroke="#1A7A52" strokeWidth="0.8" opacity="0.5" />
                <line x1="160" y1="45" x2="240" y2="60" stroke="#C8841A" strokeWidth="0.8" opacity="0.5" />
                <line x1="240" y1="60" x2="310" y2="40" stroke="#1A7A52" strokeWidth="0.8" opacity="0.5" />
                <line x1="80" y1="70" x2="120" y2="100" stroke="#1A7A52" strokeWidth="0.8" opacity="0.5" />
                <line x1="120" y1="100" x2="200" y2="110" stroke="#C8841A" strokeWidth="0.8" opacity="0.5" />
                <line x1="200" y1="110" x2="280" y2="95" stroke="#1A7A52" strokeWidth="0.8" opacity="0.5" />
                <line x1="280" y1="95" x2="350" y2="80" stroke="#1A7A52" strokeWidth="0.8" opacity="0.4" />
                <circle cx="80" cy="70" r="6" fill="#2EC98A" />
                <circle cx="160" cy="45" r="5" fill="#C8841A" />
                <circle cx="240" cy="60" r="5" fill="#2EC98A" />
                <circle cx="310" cy="40" r="4" fill="#C8841A" opacity="0.8" />
                <circle cx="120" cy="100" r="4" fill="#2EC98A" opacity="0.8" />
                <circle cx="200" cy="110" r="5" fill="#E8A030" />
                <circle cx="280" cy="95" r="3" fill="#7A7870" />
                <circle cx="350" cy="80" r="4" fill="#C94040" />
                <text x="80" y="85" fill="#7A7A72" fontSize="8" fontFamily="IBM Plex Mono" textAnchor="middle">IKJ-04</text>
                <text x="160" y="38" fill="#7A7A72" fontSize="8" fontFamily="IBM Plex Mono" textAnchor="middle">SRL-12</text>
                <text x="350" y="95" fill="#C94040" fontSize="8" fontFamily="IBM Plex Mono" textAnchor="middle">APP-02</text>
                <text x="280" y="110" fill="#7A7870" fontSize="8" fontFamily="IBM Plex Mono" textAnchor="middle">KTW-07</text>
              </svg>
            </div>
          </div>

          {/* Right panel */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <div style={{ background: 'var(--dark)', padding: '1.5rem' }}>
              <div style={{ fontFamily: 'var(--ff-mono)', fontSize: 9, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--stone)', marginBottom: '1rem' }}>Active Nodes</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {[
                  { dot: 'var(--live)', name: 'IKJ-04 Alagbo-East', kw: '14.8 kWh', kwColor: 'var(--stone)' },
                  { dot: 'var(--live)', name: 'SRL-12 Surulere-Central', kw: '9.2 kWh', kwColor: 'var(--stone)' },
                  { dot: 'var(--live)', name: 'VIC-03 Victoria Island', kw: '22.1 kWh', kwColor: 'var(--stone)' },
                  { dot: 'var(--trading)', name: 'MDG-08 Maryland', kw: '6.4 kWh', kwColor: 'var(--stone)' },
                  { dot: 'var(--trading)', name: 'OJD-01 Ojodu', kw: '11.9 kWh', kwColor: 'var(--stone)' },
                  { dot: 'var(--offline)', name: 'KTW-07 Ketu-West', kw: 'offline', kwColor: 'var(--offline)' },
                  { dot: 'var(--fault)', name: 'APP-02 Apapa', kw: 'fault', kwColor: 'var(--fault)' },
                ].map(({ dot, name, kw, kwColor }) => (
                  <div key={name} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', background: 'var(--mid)', padding: '0.6rem 0.75rem' }}>
                    <div style={{ width: 6, height: 6, borderRadius: '50%', background: dot, flexShrink: 0 }} />
                    <div style={{ flex: 1, fontSize: 12, color: 'var(--dust)' }}>{name}</div>
                    <div style={{ fontFamily: 'var(--ff-mono)', fontSize: 11, color: kwColor }}>{kw}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: 'var(--dark)', padding: '1.5rem', flex: 1 }}>
              <div style={{ fontFamily: 'var(--ff-mono)', fontSize: 9, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--stone)', marginBottom: '1rem' }}>
                GrēxSense AI · 03:42
              </div>
              <div style={{ background: 'var(--mid)', padding: '1rem', marginBottom: 2, borderLeft: '2px solid var(--grid)' }}>
                <div style={{ fontFamily: 'var(--ff-mono)', fontSize: 9, color: 'var(--grid-lt)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Fault · Priority High</div>
                <div style={{ fontSize: 13, color: 'var(--dust)', lineHeight: 1.55 }}>APP-02 inverter overload. Predicted failure within 48hrs. Thermal signature matches APR-2024 Agege event. Recommend field dispatch before 08:00.</div>
              </div>
              <div style={{ background: 'var(--mid)', padding: '1rem', marginTop: 2, borderLeft: '2px solid var(--trading)' }}>
                <div style={{ fontFamily: 'var(--ff-mono)', fontSize: 9, color: 'var(--trading)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Trade Opportunity</div>
                <div style={{ fontSize: 13, color: 'var(--dust)', lineHeight: 1.55 }}>IKJ-04 surplus (2.4 kWh) matches MDG-08 deficit window 11:00–14:00 tomorrow. Auto-schedule?</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

/* ─── 10 LANDING PAGE PREVIEW ───────────────────────────── */
function LandingPreview() {
  return (
    <section id="landing" style={{ padding: 0, borderBottom: 'none' }}>
      <div style={{ padding: '2rem 5rem 0', borderTop: '0.5px solid var(--dust)' }}>
        <Eyebrow>10 — Landing Page Preview</Eyebrow>
      </div>

      {/* Hero preview */}
      <div style={{ background: 'var(--night)', minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', overflow: 'hidden', padding: '6rem 5rem' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(200,132,26,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ fontFamily: 'var(--ff-mono)', fontSize: 11, color: 'var(--solar)', letterSpacing: '0.16em', textTransform: 'uppercase', marginBottom: '2.5rem' }}>
          Lagos, Nigeria · Clean Energy · AI · Community
        </div>
        <h1 style={{ fontFamily: 'var(--ff-display)', fontSize: 80, fontWeight: 300, color: 'var(--white)', lineHeight: 0.95, letterSpacing: '-0.02em', maxWidth: 820, marginBottom: '2rem' }}>
          Your community.<br />
          Your <span style={{ color: 'var(--solar)', fontStyle: 'normal' }}>grid</span>.<br />
          Your power.
        </h1>
        <p style={{ fontSize: 18, color: 'var(--dust)', maxWidth: 520, lineHeight: 1.7, marginBottom: '3rem' }}>
          GrēxGrid gives communities the tools to generate, store, trade, and own their energy.
        </p>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <span style={{ background: 'var(--solar)', color: 'var(--night)', padding: '0.875rem 2rem', fontFamily: 'var(--ff-body)', fontSize: 14, fontWeight: 500, letterSpacing: '0.04em', display: 'inline-block' }}>
            Get GrēxBox for my community
          </span>
          <span style={{ background: 'transparent', color: 'var(--dust)', padding: '0.875rem 2rem', fontFamily: 'var(--ff-body)', fontSize: 14, fontWeight: 400, border: '0.5px solid var(--mid)', display: 'inline-block', letterSpacing: '0.04em' }}>
            Dial *447# to start now
          </span>
        </div>
        <div style={{ display: 'flex', gap: '4rem', marginTop: '5rem', paddingTop: '3rem', borderTop: '0.5px solid var(--mid)' }}>
          {[['847', 'Households connected'], ['94.2%', 'Network uptime'], ['₦2.4M', 'Trading income generated'], ['142 t', 'CO₂ avoided']].map(([val, label]) => (
            <div key={label}>
              <div style={{ fontFamily: 'var(--ff-mono)', fontSize: 32, fontWeight: 500, color: 'var(--solar)', lineHeight: 1, marginBottom: '0.25rem' }}>{val}</div>
              <div style={{ fontSize: 13, color: 'var(--stone)' }}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Problem preview */}
      <div style={{ background: 'var(--parchment)', padding: '6rem 5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'start' }}>
          <div>
            <div style={{ fontFamily: 'var(--ff-mono)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--stone)', marginBottom: '1.5rem' }}>The problem</div>
            <h2 style={{ fontFamily: 'var(--ff-display)', fontSize: 44, fontWeight: 300, lineHeight: 1.1, color: 'var(--night)', marginBottom: '1.5rem' }}>
              Nigeria has electricity.<br />Most Nigerians <em style={{ color: 'var(--solar)' }}>don&apos;t</em>.
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0, marginTop: '3rem' }}>
              {[['85M', 'Nigerians without reliable electricity'], ['₦400k', 'Average diesel spend per year'], ['3.8hrs', 'Average daily grid supply']].map(([num, desc], i) => (
                <div key={num} style={{ padding: '1.5rem 0', borderBottom: '0.5px solid var(--dust)', borderTop: i === 0 ? '0.5px solid var(--dust)' : undefined, display: 'flex', alignItems: 'baseline', gap: '1.5rem' }}>
                  <div style={{ fontFamily: 'var(--ff-mono)', fontSize: 36, fontWeight: 500, color: 'var(--night)', minWidth: 80 }}>{num}</div>
                  <div style={{ fontSize: 14, color: 'var(--stone)', lineHeight: 1.5 }}>{desc}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ paddingTop: '3rem' }}>
            {['"The grid was never designed to reach us."', '"When the light stays on, my children study past 9pm."', '"We generate more than we use. GrēxGrid made trading real."'].map((q, i) => (
              <div key={i} style={{ background: 'var(--night)', padding: '2rem', marginBottom: 2 }}>
                <div style={{ fontFamily: 'var(--ff-display)', fontSize: 22, fontWeight: 300, fontStyle: 'italic', color: 'var(--white)', lineHeight: 1.5 }}>{q}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA preview */}
      <div style={{ background: 'var(--solar)', textAlign: 'center', padding: '7rem 5rem' }}>
        <h2 style={{ fontFamily: 'var(--ff-display)', fontSize: 64, fontWeight: 300, color: 'var(--night)', marginBottom: '1rem', lineHeight: 1.05 }}>
          Power belongs to the people it comes from.
        </h2>
        <p style={{ fontSize: 18, color: 'var(--solar-dk)', marginBottom: '3rem' }}>
          GrēxGrid is building with communities across Nigeria.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <span style={{ background: 'var(--night)', color: 'var(--white)', padding: '1rem 3rem', fontFamily: 'var(--ff-body)', fontSize: 15, fontWeight: 500, display: 'inline-block' }}>
            Apply for my community
          </span>
          <span style={{ background: 'transparent', color: 'var(--night)', padding: '1rem 3rem', fontFamily: 'var(--ff-body)', fontSize: 15, fontWeight: 400, border: '1.5px solid var(--solar-dk)', display: 'inline-block' }}>
            Download pitch deck
          </span>
        </div>
        <div style={{ marginTop: '2rem', fontFamily: 'var(--ff-mono)', fontSize: 13, color: 'var(--solar-dk)' }}>
          No smartphone? Dial <strong style={{ color: 'var(--night)' }}>*447#</strong>
        </div>
      </div>
    </section>
  )
}

/* ─── MAIN PAGE ─────────────────────────────────────────── */
export default function BrandPage() {
  return (
    <div style={{ background: 'var(--white)', color: 'var(--night)', fontFamily: 'var(--ff-body)' }}>
      <SideNav />
      <main style={{ marginLeft: 220 }}>
        <Foundation />
        <Metaphor />
        <LogoSystem />
        <ColorSystem />
        <Typography />
        <Iconography />
        <DesignTokens />
        <UIComponents />
        <Dashboard />
        <LandingPreview />
      </main>

      <style>{`
        @media print {
          nav { display: none; }
          main { margin-left: 0; }
          section { page-break-after: always; }
        }
      `}</style>
    </div>
  )
}
