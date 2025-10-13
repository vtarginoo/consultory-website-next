import Image from "next/image";
import Link from "next/link";
import { IInsight } from "@/types/IInsight";
import { Card, CardContent, CardDescription, CardTitle } from "components/ui/card";



interface SmallInsightCardProps {
  insight: IInsight;
}

export default function SmallInsightCard({ insight }: SmallInsightCardProps) {
  const formattedDate = new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  }).format(insight.date);

  return (
    <Link href={insight.link} className="block group">
      <Card className="w-full rounded-lg overflow-hidden border-none transition-transform duration-300 hover:scale-105">
        
        {/* Imagem em cima */}
        <div className="relative w-full aspect-[16/9]">
          <Image
            src={insight.image}
            alt={insight.title}
            fill
            className="object-cover object-center"
          />
        </div>

        {/* Texto embaixo */}
        <div className="p-3 flex flex-col">
          <p className="text-xs text-gray-500 mb-1">{formattedDate}</p>
          <CardTitle className="font-bold text-md leading-tight line-clamp-2">
            {insight.title}
          </CardTitle>
          <CardDescription className="mt-1 text-sm text-gray-600 line-clamp-3">
            {insight.description}
          </CardDescription>
        </div>
      </Card>
    </Link>
  );
}