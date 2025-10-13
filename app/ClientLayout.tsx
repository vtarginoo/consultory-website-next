'use client';

import { usePathname } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { DynamicBreadcrumb } from 'components/DynamicBreadcrumb';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  const segments = pathname.split("/").filter(Boolean)

  // De-para: nome legível para cada rota
  const routeMap: Record<string, string> = {
    insights: "Insights",
    "quem-somos": "Quem Somos",
    contato: "Contato",
  }

  // Página atual é a última parte da URL
  const currentSegment = segments[segments.length - 1]
  const pageLabel = routeMap[currentSegment] || currentSegment

  // Só mostra o breadcrumb se não for a home
  const showBreadcrumb = pathname !== "/"

  return (
    <>
      <Header isHomePage={pathname === "/"} />

      {/* Padding para compensar o header fixo */}
      <div className={pathname !== "/" ? "pt-16 md:pt-20 lg:pt-24" : ""}>
        {showBreadcrumb && (
           <div className="w-full max-w-7xl  px-24 pt-12 pb-4" >
            <DynamicBreadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: pageLabel },
              ]}
            />
          </div>
        )}

        {children}
      </div>

      <Footer />
    </>
  )
}