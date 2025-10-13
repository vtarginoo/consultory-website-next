import Image from "next/image";
import Link from "next/link";
import { IInsight } from "@/types/IInsight";
import { Card, CardContent, CardDescription, CardTitle } from "components/ui/card";

interface InsightCardProps {
  insight: IInsight;
}

export default function InsightCard({ insight }: InsightCardProps) {
  // Formata a data para um formato mais amigável (ex: 10 de Setembro de 2025)
  const formattedDate = new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  }).format(insight.date);

  return (
    <Link href={insight.link} className="block group">
      <Card className="relative flex h-[250px] w-full rounded-lg overflow-hidden border-none transition-transform duration-300 hover:scale-105">
        
        {/* Lado esquerdo: Imagem com proporção fixa */}
        <div className="w-1/2 aspect-[16/9] relative flex-shrink-0">
        <Image
            src={insight.image}
            alt={insight.title}
            fill
            className="object-cover object-center"
        />
        </div>
        
        {/* Lado direito: Conteúdo do Texto */}
        <div className="w-3/4 p-4 flex flex-col justify-center">
          {/* Adicionando a data formatada aqui */}
          <p className="text-xs text-gray-500 mb-1">{formattedDate}</p>

          <CardTitle className="font-bold text-lg leading-tight line-clamp-3">
            {insight.title}
          </CardTitle>
          <CardDescription className="mt-2 text-sm text-gray-600 line-clamp-3">
            {insight.description}
          </CardDescription>
        </div>
      </Card>
    </Link>
  );
}