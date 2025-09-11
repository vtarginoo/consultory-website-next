import type { Metadata } from "next";
import Header from "components/Header";
import Footer from "components/Footer";


import "styles/globals.css";

export const metadata: Metadata = {
  title: "Arco Consulting Partners",
  description: "A Arco Consulting Partners é uma empresa de consultoria com foco em gerar resultados através da redução de custos e ganhos em eficiência.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/tab-icon.png" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Inter+Tight:ital,wght@0,100..900;1,100..900&family=Merriweather+Sans:ital,wght@0,300..800;1,300..800&family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white dark:bg-black min-h-screen">
        <Header />
          {children}
          <Footer />

      </body>
    </html>
  );
}
