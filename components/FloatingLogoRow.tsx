export default function FloatingLogoRow({ clients }) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 'clamp(6px, 2vw, 20px)',
        padding: '0 clamp(8px, 3vw, 40px)',
        flexShrink: 0,
        overflowX: 'auto',
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
      }}
      className="hide-scrollbar"
    >
      {clients.map((client, idx) => (
        <div
          key={idx}
          style={{
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)',
            borderRadius: 'clamp(8px, 1.5vw, 12px)',
            padding: 'clamp(8px, 2vw, 18px) clamp(10px, 2.5vw, 24px)',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
            border: '1px solid rgba(255, 255, 255, 0.4)',
            transition: 'transform 0.2s ease',
            flexShrink: 0,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          <img
            src={client.logoComum}
            alt={client.nome}
            style={{
              width: 'clamp(60px, 10vw, 120px)',
              height: 'clamp(30px, 5vw, 60px)',
              objectFit: 'contain',
              pointerEvents: 'none',
              userSelect: 'none',
            }}
          />
        </div>
      ))}
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}