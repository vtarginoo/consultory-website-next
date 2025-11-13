import StatsSection from "components/ui/StatsSection";
import { formatText } from "components/lib/textFormatting";
import OurValuesSection from "components/OurValuesSection";
import Image from "next/image";
import { SolutionsMenu } from "components/SolutionsMenu";
import { solutionsData } from "@/data/solutionsData";
import { ImpactCaseCarousel } from "components/ImpactCaseCarousel";


export default function Page() {

const textContent = `
        <p>Somando <em><strong>experiências</strong></em> em áreas<em> <strong>estratégicas</strong></em> de empresas diversas, temos a habilidade de <em><strong>detectar e implantar</strong></em> iniciativas de impacto positivo e sustentável.</p>
        <p>Utilizamos <em><strong>metodologia própria</strong></em> para desenvolver, de forma colaborativa, projetos que se encaixem nas demandas e momentos de cada um. Afinal, as necessidades dos nossos clientes estão em <strong><em>constante mudança</em></strong>.</p>
        <p>Nos dedicamos, lado a lado, a transformar <strong><em>estratégia em resultados</em></strong>, de forma <strong><em>transparente</em></strong>, <strong><em>rápida e inovadora</em></strong>. Assumimos integral ou parcialmente a gestão das iniciativas, com aporte de experiência e <strong><em>capacidade de rápida implementação</em></strong>.</p>
        <p>Nosso formato de trabalho se configura como <strong><em>assessoria estratégica</em></strong> e é <strong><em>totalmente pró-ativo</em></strong>.</p>
    `;


    const carouselImages = [
        '/cases/case-1.png',
        '/cases/case-2.png',
        '/cases/case-3.png',
        '/cases/case-4.png',
        '/cases/case-5.png',
    ];




  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      <main  >
       


     <ImpactCaseCarousel
            textContent={textContent}
            imageUrl1="/cases/Case-post.jpg"
            carouselImages={carouselImages}
        />


        <OurValuesSection></OurValuesSection>





      </main>

    </div>
  );
}
