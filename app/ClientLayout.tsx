'use client';

import { usePathname } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <>
      <Header isHomePage={isHomePage} />
      
      {/* Padding responsivo para compensar o header */}
      <div className={!isHomePage ? 'pt-16 md:pt-20 lg:pt-24' : ''}>
        {children}
      </div>
      
      <Footer />
    </>
  );
}