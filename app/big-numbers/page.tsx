import { clientsData } from "@/data/clientsData";
import { ourNumbersData } from "@/data/ourNumbersdata";
import { ClientsCTASection } from "components/ClientsCTASection";
import ContactFormSection from "components/ContactFormSection";
import LogosGrid from "components/LogosGrid";
import { OurNumbersSection } from "components/OurNumbersSection";


export default function Page() {

  const featuredClients = [
    'Vale', 'Petrobras', 'Rumo', 'Shell', 
    'Suzano', 'Manserv', 'Mosaic', 'Veolia',
    'ArcelorMittal', 'VLI', 'BH Airport', 'Coca-Cola',
    'Sabesp', 'Raizen', 'CSN'
  ];




  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      <main  >
        <div className="w-full max-w-7xl mx-auto px-6 py-0">


          <OurNumbersSection
            title={{ first: 'NOSSOS', second: 'RESULTADOS' }}
            stats={ourNumbersData}
            imageUrl={"/sections/resultados.jpg"}>
          </OurNumbersSection>

          <ClientsCTASection
            title="ORGANIZAÇÕES QUE JÁ **TRANSFORMARAM** SUA GESTÃO COM A **ARCO**"
            description={"Nosso trabalho já gera resultados reais em empresas líderes de mercado."}>
          </ClientsCTASection>

           <LogosGrid 
            clients={clientsData} 
            featuredLogos={featuredClients} 
          />
          
         


          <ContactFormSection></ContactFormSection>

          







        </div>
      </main>

    </div>
  );
}
