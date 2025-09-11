import { IInsight } from "@/types/IInsight";
import InsightCard from "./InsightCard";
import SmallInsightCard from "./SmallInsightCard";

interface InsightsMuralProps {
  insights: IInsight[];
}

export default function InsightsMural({ insights }: InsightsMuralProps) {
  if (!insights || insights.length === 0) return null;

  const sortedInsights = [...insights].sort((a, b) => b.date.getTime() - a.date.getTime());
  const [first, second, third, fourth, fifth, sixth, seventh, ...rest] = sortedInsights;

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-12 text-center">
          Insights Recents
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card destaque (grande) - Ocupa as 4 colunas em telas grandes */}
          {first && (
            <div className="col-span-1 md:col-span-2 lg:col-span-4">
              <InsightCard insight={first}  />
            </div>
          )}

          {/* Dois cards médios - Ocupam 2 colunas cada em telas grandes */}
          {second && (
            <div className="col-span-1 md:col-span-2">
              <InsightCard insight={second}  />
            </div>
          )}
          {third && (
            <div className="col-span-1 md:col-span-2">
              <InsightCard insight={third}  />
            </div>
          )}

          {/* Quatro cards pequenos - Ocupam 1 coluna cada em telas grandes */}
          {fourth && (
            <div className="col-span-1">
              <InsightCard insight={fourth}  />
            </div>
          )}
          {fifth && (
            <div className="col-span-1">
              <SmallInsightCard insight={fifth}  />
            </div>
          )}
          {sixth && (
            <div className="col-span-1">
              <SmallInsightCard insight={sixth}  />
            </div>
          )}
          {seventh && (
            <div className="col-span-1">
              <SmallInsightCard insight={seventh}  />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}