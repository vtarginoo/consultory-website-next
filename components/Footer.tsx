



import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1B1D1F] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About Section */}
          <div className="space-y-6">
            <div className="w-[200px] aspect-[1.10648/1] relative -ml-4">
              <Image
                src="/logo/logo-footer.avif"
                alt="ARCO Logo"
                fill
                className="object-cover"
              />
            </div>

            {/* Decorative line SVG */}
            <div className="w-14 h-[2px] bg-[#CE9C5D]"></div>

            {/* Rio de Janeiro Location */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#CE9C5D]" strokeWidth={2} />
                <p className="text-[15px]">RIO DE JANEIRO</p>
              </div>
              <button className="bg-[#EEEEEE] text-black px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-300 transition-colors">
                ver mais
              </button>
            </div>

            {/* São Paulo Location */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#CE9C5D]" strokeWidth={2} />
                <p className="text-[15px]">SÃO PAULO</p>
              </div>
              <button className="bg-[#EEEEEE] text-black px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-300 transition-colors">
                ver mais
              </button>
            </div>

            {/* Email */}
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-[#CE9C5D]" strokeWidth={2} />
              <a href="mailto:arco@arcocp.com" className="text-[15px] hover:text-[#CE9C5D] transition-colors">
                arco@arcocp.com
              </a>
            </div>
          </div>

          {/* Main Solutions */}
          <div className="space-y-4">
            <div className="mb-6">
              <h3 className="text-[#CE9C5D] font-bold text-sm tracking-[0.02em] uppercase mb-2">
                Principais Soluções
              </h3>
              {/* Decorative line SVG */}
              <div className="w-8 h-[2px] bg-[#CE9C5D]"></div>
            </div>

            <nav className="flex flex-col gap-4">
              <Link
                href="/solucoes"
                className="group inline-block w-fit"
              >
                <p className="text-sm font-medium tracking-[0.02em] uppercase text-white group-hover:text-[#CE9C5D] transition-colors mb-1">
                  Soluções
                </p>
                <div className="h-[1px] bg-[#1B1D1F] group-hover:bg-[#CE9C5D] transition-colors"></div>
              </Link>

              <Link
                href="/cases"
                className="group inline-block w-fit"
              >
                <p className="text-sm font-medium tracking-[0.02em] uppercase text-white group-hover:text-[#CE9C5D] transition-colors mb-1">
                  Cases
                </p>
                <div className="h-[1px] bg-[#1B1D1F] group-hover:bg-[#CE9C5D] transition-colors"></div>
              </Link>

              <Link
                href="/sobre"
                className="group inline-block w-fit"
              >
                <p className="text-sm font-medium tracking-[0.02em] uppercase text-white group-hover:text-[#CE9C5D] transition-colors mb-1">
                  Sobre Nós
                </p>
                <div className="h-[1px] bg-[#1B1D1F] group-hover:bg-[#CE9C5D] transition-colors"></div>
              </Link>

              <Link
                href="/downloads"
                className="group inline-block w-fit"
              >
                <p className="text-sm font-medium tracking-[0.02em] uppercase text-white group-hover:text-[#CE9C5D] transition-colors mb-1">
                  Downloads
                </p>
                <div className="h-[1px] bg-[#1B1D1F] group-hover:bg-[#CE9C5D] transition-colors"></div>
              </Link>
            </nav>
          </div>

          {/* About */}
          <div className="space-y-4">
            <div className="mb-6">
              <h3 className="text-[#CE9C5D] font-bold text-sm tracking-[0.02em] uppercase mb-2">
                Sobre
              </h3>
              {/* Decorative line SVG */}
              <div className="w-8 h-[2px] bg-[#CE9C5D]"></div>
            </div>

            <nav className="flex flex-col gap-4">
              <Link
                href="/lgpd"
                className="group inline-block w-fit"
              >
                <p className="text-sm font-medium tracking-[0.02em] uppercase text-white group-hover:text-[#CE9C5D] transition-colors mb-1">
                  LGPD
                </p>
                <div className="h-[1px] bg-[#1B1D1F] group-hover:bg-[#CE9C5D] transition-colors"></div>
              </Link>

              <Link
                href="/privacidade"
                className="group inline-block w-fit"
              >
                <p className="text-sm font-medium tracking-[0.02em] uppercase text-white group-hover:text-[#CE9C5D] transition-colors mb-1">
                  Política de Privacidade
                </p>
                <div className="h-[1px] bg-[#1B1D1F] group-hover:bg-[#CE9C5D] transition-colors"></div>
              </Link>

              <Link
                href="/governanca"
                className="group inline-block w-fit"
              >
                <p className="text-sm font-medium tracking-[0.02em] uppercase text-white group-hover:text-[#CE9C5D] transition-colors mb-1">
                  Governança
                </p>
                <div className="h-[1px] bg-[-#1B1D1F] group-hover:bg-[#CE9C5D] transition-colors"></div>
              </Link>

              <Link
                href="/etica"
                className="group inline-block w-fit"
              >
                <p className="text-sm font-medium tracking-[0.02em] uppercase text-white group-hover:text-[#CE9C5D] transition-colors mb-1">
                  Ética
                </p>
                <div className="h-[1px] bg-[#1B1D1F] group-hover:bg-[#CE9C5D] transition-colors"></div>
              </Link>

              <Link
                href="/contato"
                className="group inline-block w-fit"
              >
                <p className="text-sm font-medium tracking-[0.02em] uppercase text-white group-hover:text-[#CE9C5D] transition-colors mb-1">
                  Contato
                </p>
                <div className="h-[1px] bg-[#1B1D1F] group-hover:bg-[#CE9C5D] transition-colors"></div>
              </Link>
            </nav>
          </div>
        </div>

        {/* Copyright & Social */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[13px] font-medium tracking-[0.04em] uppercase leading-tight text-center md:text-left">
            Copyright © 2025 // ARCO - Consulting Partners // All rights reserved.
          </p>

          <div className="flex gap-4">
            <Link 
              href="https://linkedin.com" 
              target="_blank" 
              className="w-10 h-10 rounded-full bg-gray-800 hover:bg-[#CE9C5D] transition-all duration-300 flex items-center justify-center overflow-hidden"
            >
              <Image src="/contact/linkedin.png" alt="LinkedIn" width={20} height={20} className="rounded-full" />
            </Link>
            <Link 
              href="https://instagram.com" 
              target="_blank" 
              className="w-10 h-10 rounded-full bg-gray-800 hover:bg-[#CE9C5D] transition-all duration-300 flex items-center justify-center overflow-hidden"
            >
              <Image src="/contact/instagram.png" alt="Instagram" width={20} height={20} className="rounded-full" />
            </Link>
            <Link 
              href="https://whatsapp.com" 
              target="_blank" 
              className="w-10 h-10 rounded-full bg-gray-800 hover:bg-[#CE9C5D] transition-all duration-300 flex items-center justify-center overflow-hidden"
            >
              <Image src="/contact/whatsapp.png" alt="WhatsApp" width={20} height={20} className="rounded-full" />
            </Link>
            <Link 
              href="https://youtube.com" 
              target="_blank" 
              className="w-10 h-10 rounded-full bg-gray-800 hover:bg-[#CE9C5D] transition-all duration-300 flex items-center justify-center overflow-hidden"
            >
              <Image src="/contact/youtube.png" alt="YouTube" width={20} height={20} className="rounded-full" />
            </Link>
            <Link 
              href="https://facebook.com" 
              target="_blank" 
              className="w-10 h-10 rounded-full bg-gray-800 hover:bg-[#CE9C5D] transition-all duration-300 flex items-center justify-center overflow-hidden"
            >
              <Image src="/contact/facebook.png" alt="Facebook" width={20} height={20} className="rounded-full" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}