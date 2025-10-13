
import ContactForm from "./ContactForm";

export default function ContactFormSection() {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-16 lg:py-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Seção de Detalhes */}
        <div className="flex flex-col justify-start">
            
          {/* Título */}
          <h1 className="mb-6 leading-tight"
           style={{
                            fontFamily: '"Instrument Sans", "Instrument Sans Placeholder", sans-serif',
                            fontSize: "clamp(2.25rem, 4vw + 1rem, 4rem)",
                            fontWeight: 500,
                            letterSpacing: '0em',
                            color: 'rgb(0, 0, 0)',
                            textAlign: 'left',
                            WebkitTextStroke: '0,5px currentColor',
                        }}
          >
            Nossa equipe terá prazer em conversar com você.
          </h1>

          {/* Descrição */}
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Estamos prontos para ouvir seus desafios e <br className="hidden sm:block" />
            encontrar soluções sob medida para <br className="hidden sm:block" />
            o seu negócio.
          </p>
        </div>

        {/* Formulário */}
        <div className="flex flex-col justify-center">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}