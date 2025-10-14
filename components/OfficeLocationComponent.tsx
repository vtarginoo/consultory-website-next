import Image from "next/image";
import MoreButton from "./MoreButton";

interface OfficeLocation {
  title: string;
  description: string;
  image: string;
  city: string;
  address: string;
  mapLink: string;
  iFrameLink: string; 
}

interface OfficeLocationSectionProps {
  locations?: OfficeLocation[];
}

export default function OfficeLocationSection({ locations }: OfficeLocationSectionProps) {
  const defaultLocations: OfficeLocation[] = [
    {
      title: "Conecte-se com a Arco",
      description: "Our headquarters in Tech City is a modern hub for innovation and collaboration, designed to bring cutting-edge ideas to life.",
      image: "/sections/office-rio.jpeg",
      city: "Rio de Janeiro, RJ",
      address: "Av. Mal. Câmara, 160, 17° andar (salas 1728 e 1729) - Centro",
      mapLink: "https://www.google.com/maps/search/?api=1&query=Av.+Mal.+Câmara+160+Centro+Rio+de+Janeiro",
      iFrameLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.2261749095854!2d-43.17639!3d-22.90278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997f5a0b5e0b5b%3A0x5b5b5b5b5b5b5b5b!2sAv.%20Mal.%20C%C3%A2mara%2C%20160%20-%20Centro%2C%20Rio%20de%20Janeiro!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
    },
    {
      title: "Vamos Conversar",
      description: "Located in the heart of MetroTown, our branch office is equipped to serve clients across the East Coast with efficiency and creativity.",
      image: "/sections/office-sp.jpeg",
      city: "São Paulo, SP",
      address: "R. Gomes de Carvalho, 1629, 1⁰ andar (sala 101) - Vila Olímpia",
      mapLink: "https://www.google.com/maps/place/R.+Gomes+de+Carvalho,+1629+-+Vila+Ol%C3%ADmpia,+S%C3%A3o+Paulo+-+SP,+04547-006/",
      iFrameLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.238572023946!2d-46.6885883!3d-23.595775399999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5748730ee8a9%3A0x4784fa2d951d9eb9!2sR.%20Gomes%20de%20Carvalho%2C%201629%20-%20Vila%20Ol%C3%ADmpia%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004547-006!5e0!3m2!1spt-BR!2sbr!4v1760479210568!5m2!1spt-BR!2sbr"
    }
  ];

   const officeLocations = locations || defaultLocations;

  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-16 lg:py-24">
      <div className="space-y-16 lg:space-y-20">
        {officeLocations.map((location, index) => (
          <div key={index}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Lado Esquerdo: Título, Descrição, Mapa, Endereço e Botão */}
              <div className="space-y-6">
                {/* Título e Descrição */}
                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    {location.title}
                  </h3>
                  <p className="text-sm lg:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                    {location.description}
                  </p>
                </div>

                {/* Mapa */}
                <div className="relative w-full h-[300px] lg:h-[350px] rounded-2xl overflow-hidden shadow-lg">
                  <iframe
                    src={location.iFrameLink}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0"
                    title={`Mapa de ${location.city}`}
                  />
                </div>

                {/* Endereço */}
                <div>
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {location.city}
                  </h3>
                  <p className="text-sm lg:text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    {location.address}
                  </p>
                  
                  {/* Botão centralizado */}
                  <div className="flex justify-center">
                    <MoreButton text="Obter direção" link={location.mapLink} />
                  </div>
                </div>
              </div>

              {/* Lado Direito: Imagem */}
              <div className="relative w-full h-[400px] lg:h-full lg:min-h-[500px] rounded-2xl overflow-hidden">
                <Image
                  src={location.image}
                  alt={location.city}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Linha divisória entre localizações */}
            {index < officeLocations.length - 1 && (
              <div className="mt-16 lg:mt-20 w-full h-px bg-gray-200 dark:bg-gray-800" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}