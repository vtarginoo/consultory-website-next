import StatsSection from "components/ui/StatsSection";
import { formatText } from "components/lib/textFormatting";
import OurValuesSection from "components/OurValuesSection";
import Image from "next/image";


export default function Page() {


  const textResult = `
          Entregamos resultados reais, 
          implementados junto com sua equipe 
          para gerar impacto duradouro.
`;

  const textFormatted = formatText(textResult)



  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      <main  >
        <div className="w-full max-w-7xl mx-auto px-6 py-0">

          <StatsSection
            title={textFormatted}
            stats={[
              { value: "+50", description: "projetos entregues" },
              { value: "+2,5 BI", description: "em redução de custos" },
              { value: "+1 BI", description: "em geração de caixa no curto prazo" },
              { value: "+10 BI", description: "em gastos negociados" },
            ]}
          />


        </div>

        <div className="relative w-full mt-32 mb-6" style={{ aspectRatio: '16/9' }}>
          <Image
            src="/sections/insights.avif"
            alt="Insights"
            fill
            style={{ objectFit: 'cover' }} // mantém proporção
          />
        </div>


        <OurValuesSection></OurValuesSection>





      </main>

    </div>
  );
}
