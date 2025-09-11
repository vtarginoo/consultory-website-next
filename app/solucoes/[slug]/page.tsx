
import Hero from '@/components/Hero';
import { solutionsCatalog } from '@/data/solutionsCatalog';
import { solutionsMarkdownComponents } from 'components/lib/markdownComponents';
import { notFound } from 'next/navigation';
import React from 'react';
import ReactMarkdown from 'react-markdown';

interface SolutionPageProps {
  params: {
    slug: string;
  };
}

export default function SolutionPage({ params }: SolutionPageProps) {
  const solution = solutionsCatalog.find(
    (sol) => sol.href === `/solucoes/${params.slug}`
  );

  if (!solution) {
    notFound();
  }

  

  return (
    <div className="bg-white text-arco-text min-h-screen">
      <Hero
        title={solution.title}
        subtitle={solution.description}
        imageSrc={solution.imagem}
      />

      <div className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
          {/* Coluna da esquerda para o texto principal */}
          <div className="w-full md:w-3/4">
            <h2 className="text-4xl font-bold mb-8 text-arco-blue-light">{solution.description}</h2>
            <div className="prose prose-lg">
              <ReactMarkdown components={solutionsMarkdownComponents}>
                {solution.content}
              </ReactMarkdown>
            </div>
          </div>

          {/* Coluna da direita para os Top Trends */}
          <div className="w-full md:w-1/4">
            {solution.topTrends && solution.topTrends.length > 0 && (
              <div className="bg-gray-50 border border-gray-200 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-arco-blue-light mb-4">
                  Top Trends
                </h3>
                <ul className="space-y-3">
                  {solution.topTrends.map((trend, index) => (
                    <li
                      key={index}
                      className="text-lg font-light text-arco-text border-b border-gray-200 pb-2 last:border-none"
                    >
                      {trend}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return solutionsCatalog.map((solution) => ({
    slug: solution.href.replace("/solucoes/", ""),
  }));
}