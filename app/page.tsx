
import { NumberedSection } from "components/NumberedSection";
import { DNASection } from "components/DNASection";
import { OurNumbersSection } from "components/OurNumbersSection";
import { SolutionsMenu } from "components/SolutionsMenu";
import {  ImpactCaseCarousel } from "components/ImpactCaseCarousel";
import { AllianceSection } from "components/AllianceSection";
import { AckSection } from "components/AckSection";
import { ClientsCTASection } from "components/ClientsCTASection";
import HeroVideoSkeleton from "components/skeletons/HeroVideoSkeleton";
import FloatingLogosWidget from "components/FloatingLogoWidget";

export default function Page() {

  const subtitle = "Um modelo inovador de consultoria, focado na otimização da cadeia de valor e geração de resultados por meio de Procurement e Supply Chain."

  const numberedItems = [
    {
      number: 1,
      title: 'Big Numbers',
      link: '/big-numbers'
    },
    {
      number: 2,
      title: 'Onde Geramos Valor',
      link: '/servicos'
    },
    {
      number: 3,
      title: 'Aliança Arco & Grant Thorton',
      link: '/arco-gt'
    },
    {
      number: 4,
      title: 'CIEC Academy', // Usado como alt text
      // image: '/logo/logo-ciec.avif',
      // onlyImage: true, // Mostra apenas a imagem, sem texto
      link: 'https://ciecacademy.com.br/'
    }
  ];



  const nossoDna = `
  
O nome **Arco** ressalta nossos valores de flexibilidade e precisão.

Porque cada cliente é único.

E a **Arco** atua em sociedades de diversos segmentos. Uma empresa carioca com atuação em nível nacional. Orientação a resultados, desafio de status quo e transferência de conhecimento.

Somos a **Arco Consulting Partners**, um grupo de executivos reconhecidos no mercado por trazer resultados consistentes para os negócios.
`;

  const nossosNumerosData = [
    { number: '+50', description: 'projetos entregues' },
    { number: '+2.5 BI', description: 'em redução de custos' },
    { number: '+1 BI', description: 'em geração de caixa no curto prazo' },
    { number: '+20 BI', description: 'em gastos negociados' },
  ];

  const solutionsData = [
    {
      id: 1,
      title: 'Value Chain Optimization',
      description: 'O Value Chain Optimization é a metodologia da ARCO que reconfigura a cadeia de valor como um sistema financeiro-operacional integrado, conectando Procurement, Operações e Finanças para reduzir custos, liberar caixa e aumentar o EBITDA com governança e captura comprovada de resultados.',
      imageNumber: 1,
      link: '/solucoes/value-chain',
    },
    {
      id: 2,
      title: 'Procurement Transformation',
      description: 'Otimizamos processos críticos, elevamos a maturidade organizacional e aceleramos resultados. Apoiamos a adoção de melhores práticas globais em compras e supply chain. Geramos eficiência, transparência e impacto estratégico mensurável. Implementamos soluções digitais para transformar a função de procurement, integrando marketplaces, IA e benchmarks proprietários.',
      imageNumber: 2,
      link: '/solucoes/procurement',
    },
    {
      id: 3,
      title: 'Spend Assessment & Strategic Sourcing',
      description: 'Identificar e executar iniciativas de redução de custos é essencial, mas os resultados tornam-se exponenciais quando as alavancas de valor são aplicadas de forma estratégica e combinada, com o engajamento de um time multifuncional e o sponsorship da alta gestão, garantindo a captura das oportunidades.',
      imageNumber: 3,
      link: '/solucoes/spend-assessment',
    },
    {
      id: 4,
      title: 'Risk Management',
      description: 'Proteja sua cadeia de suprimentos com inteligência e previsibilidade. A solução integra dados financeiros, jurídicos, reputacionais e ESG para identificar, quantificar e mitigar riscos de fornecedores em múltiplos níveis. Com base em informações exclusivas e análises preditivas, entregamos um rating consolidado por fornecedor, alertas antecipados e planos de mitigação que reduzem rupturas, inadimplência e riscos de imagem, fortalecendo decisões de sourcing e a governança de supply chain..',
      imageNumber: 4,
      link: '/solucoes/cost-management',
    },
    {
      id: 5,
      title: 'Capital Projects and Infrastructure (CP&I)',
      description: 'Nossa abordagem multidisplinar busca integrar diferentes disciplinas com o objetivo de  proteger o negócio e melhorar o desempenho dos projetos de investimento de forma que os direcionadores de sucesso do projeto (Custos, Prazo, Conformidade e Qualidade)  não sejam afetados.',
      imageNumber: 5,
      link: '/solucoes/capital-projects',
    },
    {
      id: 6,
      title: 'Supply Chain + S&OP',
      description: 'Apoiamos empresas a integrar e otimizar toda a cadeia de suprimentos — do planejamento ao fulfillment — por meio de modelos avançados de S&OP, gestão de demanda, planejamento logístico e estratégias de contratação que aumentam a eficiência operacional, reduzem custos e elevam o nível de serviço.',
      imageNumber: 6,
      link: '/solucoes/supply-chain-+-s&op',
    },
  ];

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

      <main>

        {/* <HeroCarousel/> */}

        {/* <HeroVideo /> */}

        <HeroVideoSkeleton/> 
        
        <NumberedSection items={numberedItems} className="bg-gray-50" />


        <DNASection title="NOSSO" subtitle="DNA" align="left" children={nossoDna}></DNASection>


        <OurNumbersSection stats={nossosNumerosData} imageUrl={"sections/OurNumbers.webp"}
          buttonLink="/resultados"></OurNumbersSection>


        <SolutionsMenu solutions={solutionsData}></SolutionsMenu>


        <ImpactCaseCarousel
            textContent={textContent}
            imageUrl1="/cases/Case-post.jpg"
            carouselImages={carouselImages}
        />

        <AllianceSection
          title="NOSSA **ALIANÇA** COM\n A **GRANT THORNTON**"
          description={textAliancaGt}
          imageSrc="/logo/big-logo-arco.avif"
        />

        <AckSection
          title="FAZENDO A\n**DIFERENÇA**"
          description="**Reconhecimento**, **parcerias** e **alianças estratégicas** que refletem em nossos resultados"
        />

        <ClientsCTASection
          title="ORGANIZAÇÕES QUE JÁ **TRANSFORMARAM** SUA GESTÃO COM A **ARCO**"
          description={"Nosso trabalho já gera resultados reais em empresas líderes de mercado."}>
        </ClientsCTASection>

        <FloatingLogosWidget></FloatingLogosWidget>



      </main>
    </div>
  );
}
