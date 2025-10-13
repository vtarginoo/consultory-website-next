
import HeroVideo from "components/HeroVideo";
import { NumberedSection } from "components/NumberedSection";
import { DNASection } from "components/DNASection";
import { OurNumbersSection } from "components/OurNumbersSection";
import { SolutionsMenu } from "components/SolutionsMenu";
import { ImpactCase } from "components/ImpactCase";
import { AllianceSection } from "components/AllianceSection";
import { AckSection } from "components/AckSection";
import { ClientsCTASection } from "components/ClientsCTASection";
import HeroVideoSkeleton from "components/skeletons/HeroVideoSkeleton";

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
      title: 'Logo CIEC', // Usado como alt text
      image: '/logo/logo-ciec.avif',
      onlyImage: true, // Mostra apenas a imagem, sem texto
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
      description: 'Otimizamos toda a cadeia de valor da sua empresa, identificando oportunidades de melhoria e implementando soluções eficientes.',
      imageNumber: 1,
      link: '/solucoes/value-chain',
    },
    {
      id: 2,
      title: 'Procurement Transformation',
      description: 'Transformamos a área de compras com processos modernos, tecnologia e melhores práticas do mercado.',
      imageNumber: 2,
      link: '/solucoes/procurement',
    },
    {
      id: 3,
      title: 'Spend Assessment & Strategic Sourcing',
      description: 'Apoiamos empresas a identificar e capturar reduções de custos sustentáveis ao estruturar estratégias de categorias, conduzir negociações complexas, utilizando alavancas de valor e gerar resultados de curto prazo.',
      imageNumber: 3,
      link: '/solucoes/spend-assessment',
    },
    {
      id: 4,
      title: 'Cost Management',
      description: 'Gerenciamento estratégico de custos com foco em resultados sustentáveis e crescimento do negócio.',
      imageNumber: 4,
      link: '/solucoes/cost-management',
    },
    {
      id: 5,
      title: 'Capital Projects and Infrastructure (CP&I)',
      description: 'Gestão especializada de projetos de capital e infraestrutura, garantindo execução eficiente e controle de custos.',
      imageNumber: 5,
      link: '/solucoes/capital-projects',
    },
  ];

  const caseData = {
    category: 'Oil & Gás',
    title: 'Aplicação do Diagnóstico Estratégico de Procurement e Strategic Sourcing em um líder global de Oil & Gas',
    description: 'Nas operações de FPSO, a área de procurement enfrentava baixa autonomia e pouco reconhecimento estratégico; o diagnóstico identificou mais de USD 100 milhões em oportunidades potenciais e gerou, já nos quick wins, mais de USD 20 milhões em reduções de custo incorporadas ao planejamento estratégico, tendo como motor a aplicação de alavancas de valor que aproximaram procurement das operações, ampliando sua visibilidade e posicionamento estratégico',
    highlightText: "A aplicação combinada das alavancas de procurement gerou reduções significativas, com as maiores oportunidades sendo capturadas quando múltiplas alavancas foram utilizadas em conjunto.",
    imageUrl: "/cases/oil-gas.webp",
    imageUrl2: "/cases/oil-gas2.avif",
    buttonLink: '/cases/oil-gas',
  };

  const textAliancaGt = `
          A aliança entre a **Grant Thornton Brasil** e a **ARCO**\n
          **Consulting Partners** potencializa o compromisso de cada\n
          uma com a excelência na entrega de resultados.
`;




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


        <ImpactCase {...caseData} />

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



      </main>
    </div>
  );
}
