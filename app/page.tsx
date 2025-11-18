
import { NumberedSection } from "components/NumberedSection";
import { DNASection } from "components/DNASection";
import { OurNumbersSection } from "components/OurNumbersSection";

import { ImpactCaseCarousel } from "components/ImpactCaseCarousel";
import { AllianceSection } from "components/AllianceSection";
import { AckSection } from "components/AckSection";
import { ClientsCTASection } from "components/ClientsCTASection";
import HeroVideoSkeleton from "components/skeletons/HeroVideoSkeleton";
import FloatingLogosWidget from "components/FloatingLogoWidget";
import { solutionsData } from "@/data/solutionsData";
import { ourNumbersData } from "@/data/ourNumbersdata";
import { SolutionsMenu } from "components/SolutionsMenu";


export default function Page() {

  const subtitle = "Um modelo inovador de consultoria, focado na otimização da cadeia de valor e geração de resultados por meio de Procurement e Supply Chain."

  const numberedItems = [
    {
      number: 1,
      title: 'Big Numbers',
      link: '#our-numbers'
    },
    {
      number: 2,
      title: 'Onde Geramos Valor',
      link: '#solutions'
    },
    {
      number: 3,
      title: 'Aliança Arco & Grant Thorton',
      link: '#alliance'
    },
    {
      number: 4,
      title: 'CIEC Academy',
      link: 'https://ciecacademy.com.br/'
    }]


  const nossoDna = `
  
O nome **Arco** ressalta nossos valores de flexibilidade e precisão.

Porque cada cliente é único.

E a **Arco** atua em sociedades de diversos segmentos. Uma empresa carioca com atuação em nível nacional. Orientação a resultados, desafio de status quo e transferência de conhecimento.

Somos a **Arco Consulting Partners**, um grupo de executivos reconhecidos no mercado por trazer resultados consistentes para os negócios.
`;





  // const caseData = {
  //   category: 'Oil & Gás',
  //   title: 'Aplicação do Diagnóstico Estratégico de Procurement e Strategic Sourcing em um líder global de Oil & Gas',
  //   description: 'Nas operações de FPSO, a área de procurement enfrentava baixa autonomia e pouco reconhecimento estratégico; o diagnóstico identificou mais de USD 100 milhões em oportunidades potenciais e gerou, já nos quick wins, mais de USD 20 milhões em reduções de custo incorporadas ao planejamento estratégico, tendo como motor a aplicação de alavancas de valor que aproximaram procurement das operações, ampliando sua visibilidade e posicionamento estratégico',
  //   highlightText: "A aplicação combinada das alavancas de procurement gerou reduções significativas, com as maiores oportunidades sendo capturadas quando múltiplas alavancas foram utilizadas em conjunto.",
  //   imageUrl: "/cases/oil-gas.webp",
  //   imageUrl2: "/cases/oil-gas2.avif",
  //   buttonLink: '/cases/oil-gas',
  // };

  const textAliancaGt = `
          A aliança entre a **Grant Thornton Brasil** e a **ARCO**\n
          **Consulting Partners** potencializa o compromisso de cada\n
          uma com a excelência na entrega de resultados.
`;

  const textContent = `
        <p>Somando <strong>experiências</strong> em áreas <strong>estratégicas</strong> de empresas diversas, temos a habilidade de <strong>detectar e implantar</strong> iniciativas de impacto positivo e sustentável.</p>
        <p>Utilizamos <strong>metodologia própria</strong> para desenvolver, de forma colaborativa, projetos que se encaixem nas demandas e momentos de cada um. Afinal, as necessidades dos nossos clientes estão em <strong>constante mudança</strong>.</p>
        <p>Nos dedicamos, lado a lado, a transformar <strong>estratégia em resultados</strong>, de forma <strong>transparente</strong>, <strong>rápida e inovadora</strong>. Assumimos integral ou parcialmente a gestão das iniciativas, com aporte de experiência e <strong>capacidade de rápida implementação</strong>.</p>
        <p>Nosso formato de trabalho se configura como <strong>assessoria estratégica</strong> e é <strong>totalmente pró-ativo</strong>.</p>
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
      <main>
        <HeroVideoSkeleton />
        <NumberedSection items={numberedItems} className="bg-gray-50" />
        <DNASection title="NOSSO" subtitle="DNA" align="left" children={nossoDna}></DNASection>

        <div id="our-numbers" className="scroll-mt-20"> 
          <OurNumbersSection stats={ourNumbersData} imageUrl={"sections/OurNumbers.avif"} buttonLink="/resultados"></OurNumbersSection>
        </div>

        <div id="solutions" className="scroll-mt-20"> 
          <SolutionsMenu solutions={solutionsData}></SolutionsMenu>
        </div>

        <div id="casos" className="scroll-mt-10"> 
        <ImpactCaseCarousel textContent={textContent} imageUrl1="/cases/case.avif" carouselImages={carouselImages} />
      </div>
        <div id="alliance" className="scroll-mt-60"> 
          <AllianceSection title="NOSSA **ALIANÇA** COM\n A **GRANT THORNTON**" description={textAliancaGt} imageSrc="/logo/big-logo-arco.avif" />
        </div>

        <AckSection title="FAZENDO A\n**DIFERENÇA**" description="**Reconhecimento**, **parcerias** e **alianças estratégicas** que refletem em nossos resultados" />
        <ClientsCTASection title="ORGANIZAÇÕES QUE JÁ **TRANSFORMARAM** SUA GESTÃO COM A **ARCO**" description={"Nosso trabalho já gera resultados reais em empresas líderes de mercado."}></ClientsCTASection>
        <FloatingLogosWidget></FloatingLogosWidget>
      </main>
    </div>
  );
}
