import { Button } from "./ui/button";

interface HeroVideoProps {
  videoSrc: string;
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
}

export default function HeroVideo() {
    const setores = [
    "Indústria",
    "Energia",
    "Saneamento",
    "Oil",
    "Gás",
    "Infraestrutura",
    "Agro",
    "Siderúrgica",
    "Serviços",
    "Bens e Consumo",
    "Esportes",
  ];

   return (
    <section className="hero-video relative w-full h-screen flex flex-col justify-center items-center text-white overflow-hidden">
      {/* Vídeo de fundo */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/video-home.mp4" type="video/mp4" />
      </video>

      {/* Camada de escurecimento */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Conteúdo principal */}
      <div className="relative z-10 w-full max-w-7xl px-20 flex justify-between items-center">
        {/* Bloco da esquerda (título e subtítulo) */}
        <div className="max-w-[600px]">
          <h1 className="font-framer-title text-4xl md:text-6xl font-bold leading-tight">
            Transformando estratégia em resultados
          </h1>
        </div>

        {/* Bloco da direita (setores animados) */}
        <div className="overflow-hidden h-10">
            <h6 className="text-lg text-white/70 ">para</h6>
          <ul className="animate-slide text-2xl font-semibold space-y-2">
            {setores.map((setor, index) => (
              <li key={index}>{setor}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}