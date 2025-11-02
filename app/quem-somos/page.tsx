import OurJourney from "components/OurJourney";
import OurValuesSection from "components/OurValuesSection";
import PartnersSection from "components/PartnersSection";
import QuemSomosVideoSection from "components/QuemSomosTitleSection";

export default function Page() {




  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      <main className="space-y-12"  >

        <QuemSomosVideoSection imageSrc={"/logo/quem-somos-logo.avif"} />

        <PartnersSection></PartnersSection>


        <OurJourney
          title="NOSSA **JORNADA** PELA\n**EXCELÊNCIA OPERACIONAL**"
          className="#FFFF"
        />

        <OurValuesSection
          backgroundColor="#1D2027"
          titleColor="#FFFF"
        ></OurValuesSection>

        {/* Iframe do vídeo - tamanho reduzido */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto"> {/* Limita a largura máxima */}
              <div className="relative w-full rounded-lg overflow-hidden" style={{ aspectRatio: '16/9' }}>
                <iframe
                  title="Youtube Video"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  src="https://www.youtube.com/embed/Nnr7BFMn7MQ?rel=0&modestbranding=1"
                  frameBorder="0"
                  className="absolute top-0 left-0 w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>



      </main>

    </div>
  );
}
