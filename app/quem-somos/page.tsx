import OurJourney from "components/OurJourney";
import OurValuesSection from "components/OurValuesSection";
import PartnersSection from "components/PartnersSection";
import QuemSomosVideoSection from "components/QuemSomosVideoSection";

export default function Page() {




  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      <main className="space-y-12"  >

        <QuemSomosVideoSection videoId={"Nnr7BFMn7MQ"} />

        <OurJourney
          title="NOSSA **JORNADA** PELA\n**EXCELÊNCIA OPERACIONAL**"
          className="#FFFF"
        />

        <OurValuesSection
          backgroundColor="#1D2027"
          titleColor="#FFFF"
        ></OurValuesSection>

      <PartnersSection></PartnersSection>



      </main>

    </div>
  );
}
