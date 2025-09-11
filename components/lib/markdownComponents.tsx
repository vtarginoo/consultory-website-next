
  export const solutionsMarkdownComponents = {
    // Título do subtítulo "Como ajudamos..."
    h3: ({ node, ...props }: any) => (
      <h3 {...props} className="text-3xl font-bold mt-16 mb-8 text-arco-blue" />
    ),
    // Parágrafos do conteúdo principal
    p: ({ node, ...props }: any) => (
      <p {...props} className="text-xl font-light leading-relaxed text-arco-text font-body mt-6 first:mt-0" />
    ),
    // Lista de "Como ajudamos..."
    ul: ({ node, ...props }: any) => (
      <ul {...props} className="list-disc list-inside space-y-3 mt-6" />
    ),
    // Itens da lista
    li: ({ node, ...props }: any) => (
      <li {...props} className="text-lg text-arco-text" />
    ),
    // Palavras em negrito dentro do texto
    strong: ({ node, ...props }: any) => (
      <strong {...props} className="font-bold" />
    ),
  };