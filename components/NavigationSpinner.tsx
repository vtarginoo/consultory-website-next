'use client';

import { useEffect, useState, useTransition } from 'react';
import { usePathname } from 'next/navigation';
import { Spinner } from '@/components/ui/spinner';

export default function NavigationSpinner() {
  const [isLoading, setIsLoading] = useState(false);
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();

  useEffect(() => {
    // Intercepta cliques em links internos
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');

      if (link && link.href && link.href.startsWith(window.location.origin)) {
        const targetPath = new URL(link.href).pathname;
        if (targetPath !== pathname && !link.target) {
          setIsLoading(true);
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [pathname]);

  // Sempre que o pathname muda (inclui "voltar" ou "avançar"), desativa o spinner
  useEffect(() => {
    setIsLoading(false);
  }, [pathname]);

  // Caso o React esteja em transição (rota sendo carregada)
  useEffect(() => {
    if (isPending) setIsLoading(true);
  }, [isPending]);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-4">
        <Spinner />
        <p className="text-sm text-muted-foreground">Carregando...</p>
      </div>
    </div>
  );
}