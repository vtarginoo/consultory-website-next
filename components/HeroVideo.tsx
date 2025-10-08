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
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-12 lg:px-16">
        <div className="flex justify-between items-center gap-8">
          
          {/* Bloco da esquerda (título) */}
          <div className="flex-1 max-w-2xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-framer-title leading-tight">
              Transformando estratégia em resultados
            </h1>
          </div>

          {/* Bloco da direita (setores animados) */}
          <div className="flex flex-col items-start">
            <p className="text-lg md:text-xl text-white/60 mb-2">para</p>
            <div className="overflow-hidden h-12">
              <ul className="animate-slide text-3xl md:text-4xl lg:text-5xl font-framer-title">
                {/* Esse conteúdo animate-slide esta no global.css */}
                {setores.map((setor, index) => (
                  <li key={index} className="h-12 flex items-center">
                    {setor}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}