import { IInsight } from "@/types/IInsight";
import { employeesData } from "./employeeData"; // Importe o novo array de dados
import { contentId1, contentId2, contentId3, contentId4, contentId5, contentId6, contentId7 } from "./insightContent";

export const insightsData: IInsight[] = [
  {
    id: 1,
    title: "Antecipação de Recebíveis: Uma abordagem da gestão de fornecedores com foco no fortalecimento do caixa",
    shortTitle: "Antecipação de Recebíveis",
    description: "Conheça as metodologias ágeis que levam a sua empresa ao próximo nível de eficiência e inovação.",
    image: "/posts/post-1.png",
    link: "/insights/antecipacao-recebiveis",
    date: new Date("2025-09-10"),
    author: [employeesData[0]], // Vinícius Aquino
    content: contentId1
  },
  {
    id: 2,
    title: "Geração de Caixa: Três hacks que todo gestor deveria avaliar",
    shortTitle: "Geração de Caixa",
    description: "Nossas projeções para os próximos 5 anos no mercado de TI e as tendências que você não pode ignorar.",
    image: "/posts/post-2.webp",
    link: "/insights/geracao-de-caixa",
    date: new Date("2025-09-05"),
    author: [employeesData[0]], // Vinícius Aquino
    content: contentId2
  },
  {
    id: 3,
    title: "Gestão de saúde corporativa: Uma relação direta entre pessoas e tecnologia",
    shortTitle: "Gestão de saúde corporativa",
    description: "Um guia prático para pequenas e médias empresas sobre como fortalecer suas defesas contra ataques cibernéticos.",
    image: "/posts/post-3.jpg",
    link: "/insights/gestao-saude-corporativa",
    date: new Date("2025-08-28"),
    author: [employeesData[0], employeesData[1]], // Vinícius Aquino, Rodrigo Saraiva
    content: contentId3
  },
  {
    id: 4,
    title: "Procurement no Agro: A importante sinergia entre avanço tecnológico e o fortalecimento das relações",
    shortTitle: "Procurement no Agro",
    description: "Explore como a tecnologia e as relações humanas podem impulsionar o setor do agronegócio.",
    image: "/posts/post-4.jpg",
    link: "/insights/procurement-agro",
    date: new Date("2025-09-8"),
    author: [employeesData[0], employeesData[1]], // Vinícius Aquino, Rodrigo Saraiva
    content: contentId4
  },
  {
    id: 5,
    title: "Análise de Dados: O Motor da Gestão Eficiente",
    shortTitle: "Análise de Dados",
    description: "Descubra como a análise de dados pode transformar a tomada de decisões e otimizar operações na sua empresa.",
    image: "/posts/post-5.jpg",
    link: "/insights/analise-de-dados",
    date: new Date("2025-08-15"),
    author: [employeesData[2]], // Marcos Saraiva
    content: contentId5
  },
  {
    id: 6,
    title: "ESG: O Futuro da Sustentabilidade Corporativa",
    shortTitle: "ESG",
    description: "Entenda por que os critérios ESG são essenciais para o sucesso e a longevidade de qualquer negócio.",
    image: "/posts/post-6.webp",
    link: "/insights/esg-futuro-sustentabilidade",
    date: new Date("2025-09-9"),
    author: [employeesData[2]], // Marcos Saraiva
    content: contentId6
  },
  {
    id: 7,
    title: "O Impacto da IA no Ambiente de Trabalho",
    shortTitle: "O Impacto da IA",
    description: "Saiba como a inteligência artificial e a automação estão moldando o futuro das profissões e dos negócios.",
    image: "/posts/post-7.jpg",
    link: "/insights/ia-e-o-futuro-do-trabalho",
    date: new Date("2025-08-05"),
    author: [employeesData[0]], // Vinícius Aquino
    content: contentId7
  },
];