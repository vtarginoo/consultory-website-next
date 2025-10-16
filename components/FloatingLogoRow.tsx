
import Image from 'next/image';

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
            
            // ESSENCIAL: Adicionamos 'position: relative' para o <Image /> com 'fill' funcionar
            position: 'relative', 
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          <div
            style={{
              // O contêiner recebe as regras de dimensão (clamp)
              width: 'clamp(60px, 10vw, 120px)',
              height: 'clamp(30px, 5vw, 60px)',
              
              // Essencial para o posicionamento do <Image /> com fill
              position: 'relative', 
            }}
          >
            <Image
              src={client.logoComum}
              alt={client.nome}
              
              // OBRIGATÓRIO: Faz a imagem preencher 100% do div pai
              layout="fill" // Use 'fill' para preencher o contêiner dimensionado
              
              // Simula o objectFit: 'contain'
              objectFit="contain"
              
              style={{
                pointerEvents: 'none',
                userSelect: 'none',
              }}
              // Se os logos estiverem na dobra principal, adicione 'priority'
              // priority
            />
          </div>
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