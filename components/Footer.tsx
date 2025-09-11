import Link from "next/link";
import Image from "next/image";
import { AiOutlineLinkedin, AiOutlineMail } from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="w-full bg-arco-blue text-white py-12 md:py-16">
      <div className="container mx-auto px-4">

        {/* --- Conteúdo Principal em 2 Colunas (Desktop) --- */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start md:text-left gap-12 md:gap-8 mb-12">
          
          {/* Coluna 1: Título, Botão de Contato e Endereço */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-2">
              Como podemos te ajudar?
            </h2>
            <p className="text-base md:text-lg mb-8">
              Entre em contato conosco e vamos conversar.
            </p>
            <Link
              href="/contato"
              className="inline-block py-3 px-8 text-white font-bold text-sm uppercase border border-white hover:bg-white hover:text-arco-blue transition-colors mb-8"
            >
              FALE CONOSCO
            </Link>
            
            {/* Informações de Contato e Sociais (agora na 1ª coluna) */}
            <div className="flex flex-col items-center md:items-start text-sm">
              <div className="flex gap-4 mb-2">
                <Link
                  href="https://linkedin.com"
                  aria-label="LinkedIn"
                  target="_blank"
                  className="hover:text-arco-detail transition-colors"
                >
                  <AiOutlineLinkedin className="text-2xl" />
                </Link>
                <Link
                  href="mailto:contato@arco.com.br"
                  aria-label="Email"
                  className="hover:text-arco-detail transition-colors"
                >
                  <AiOutlineMail className="text-2xl" />
                </Link>
              </div>
              <div className="text-center md:text-left">
                <p className="font-bold mb-1">Rio de Janeiro</p>
                <p>Av. Mal. Câmara, 160, 17º andar - Centro</p>
              </div>
            </div>
          </div>
          
          {/* Coluna 2: Vídeo (ajustado para não achatar) */}
          <div className="w-full md:w-1/2 flex justify-center items-start">
            
            <div className="w-full max-w-lg relative" style={{ paddingTop: '56.25%' }}> 
              <iframe
                src="https://www.youtube.com/embed/Nnr7BFMn7MQ?si=K6c2fegTHzwQg-Nt"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>

        {/* --- Linha Divisória --- */}
        <div className="w-full border-t border-white/50 mx-auto mb-6"></div>

        {/* --- Conteúdo Inferior: Selo e Logo --- */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <p className="mb-2">Uma empresa do Grupo Effectus</p>
            <div className="flex justify-center gap-4 text-sm">
              <Link href="#" className="hover:underline">Arco</Link>
              <span>|</span>
              <Link href="#" className="hover:underline">Effectus</Link>
              <span>|</span>
              <Link href="#" className="hover:underline">Health You</Link>
            </div>
          </div>
          
          <div className="flex items-center gap-4"> 
            <Image
              src="/logo-arco-header-200x85.png"
              alt="Logo da Arco Consulting Partners"
              width={150}
              height={64}
            />
            <Image
              src="/effectus-footer.png"
              alt="Logo da Effectus"
              width={150}
              height={64}
            />
            <Image
              src="/HealthU.png"
              alt="Logo da Health You"
              width={150}
              height={64}
            />
          </div>

        </div>
        
        {/* --- Direitos Autorais --- */}
        <div className="text-center text-xs mt-8 pt-4 border-t border-white/50">
          &copy; {new Date().getFullYear()} Arco Consulting Partners. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}