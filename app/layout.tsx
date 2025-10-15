import type { Metadata } from "next";

import "styles/globals.css";
import ClientLayout from "./ClientLayout";

export const metadata: Metadata = {
  title: "Arco Consulting Partners",
  description: "A Arco Consulting Partners é uma empresa de consultoria com foco em gerar resultados através da redução de custos e ganhos em eficiência.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/tab-icon.avif" type="image/svg+xml" />
        {/* Preconnect para fontes */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Fontes com display=swap para evitar FOIT */}
        <link 
          href="https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@100..900&family=DM+Sans:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" 
          rel="stylesheet" 
        />
        
        {/* Preload do vídeo - CRÍTICO */}
        <link
          rel="preload"
          href="/videos/video-home.mp4"
          as="video"
          type="video/mp4"
        />

        {/* Preload da imagem do avatar*/}
        <link
          rel="preload"
          href="/avatar-image.avif"
          as="image"
          type="image/avif"
        />

      </head>
      <body className="bg-white dark:bg-black min-h-screen">
        <ClientLayout>
          {children}

        </ClientLayout>

      </body>
    </html>
  );
}
