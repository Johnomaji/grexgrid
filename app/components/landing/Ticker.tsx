const items = [
  'GrēxBox · Solar + Storage',
  'GrēxShare · Peer-to-Peer Energy Trading',
  'GrēxPay · USSD & Mobile Money',
  'GrēxSense · AI Grid Optimisation',
  'GrēxConnect · Open API Layer',
  'Dial *447# from any phone',
  'Built in Lagos · Built for Nigeria · Built for the World',
]

export default function Ticker() {
  return (
    <div
      aria-hidden="true"
      style={{
        background: 'var(--grid)',
        overflow: 'hidden',
        padding: '0.8rem 0',
        position: 'relative',
        zIndex: 2,
      }}
    >
      <div
        style={{
          display: 'flex',
          gap: 0,
          animation: 'ticker 35s linear infinite',
          width: 'max-content',
        }}
      >
        {[...items, ...items].map((item, i) => (
          <div
            key={i}
            style={{
              fontFamily: 'var(--ff-mono)',
              fontSize: 11,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--grid-pale)',
              whiteSpace: 'nowrap',
              padding: '0 3rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
            }}
          >
            <span style={{ fontSize: 6, opacity: 0.6, color: 'var(--grid-lt)' }}>◆</span>
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}
