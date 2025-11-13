import ContactFormSection from "components/ContactFormSection";
import Divider from "components/Divider";
import OfficeLocationSection from "components/OfficeLocationComponent";



export default function Page() {


  



  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      <main  >
        <div className="w-full max-w-7xl mx-auto px-6 py-0">


        <ContactFormSection></ContactFormSection>

        <Divider></Divider>

        <OfficeLocationSection></OfficeLocationSection>





    </div>
      </main>

    </div>
  );
}
