import StatsSection from "components/ui/StatsSection";
import { formatText } from "components/lib/textFormatting";
import OurValuesSection from "components/OurValuesSection";
import Image from "next/image";
import { SolutionsMenu } from "components/SolutionsMenu";
import { solutionsData } from "@/data/solutionsData";


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
       
      
      <SolutionsMenu title="OBTENHA" subtitle="A SOLUÇÃO DE NOSSOS SERVIÇOS" solutions={solutionsData}></SolutionsMenu>


        {/* <div className="relative w-full mt-32 mb-6" style={{ aspectRatio: '16/9' }}>
          <Image
            src="/sections/insights.avif"
            alt="Insights"
            fill
            style={{ objectFit: 'cover' }} 
          />
        </div> */}


        <OurValuesSection></OurValuesSection>





      </main>

    </div>
  );
}
