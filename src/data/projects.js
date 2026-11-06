// Projetos fictícios, usados apenas como demonstração.
// image: caminho em public/ (ex.: '/projetos/vendas.png'). Se vazio, usa a pré-visualização em blocos.
// url: link do painel publicado. Se vazio, o botão não aparece.
export const projects = [
  {
    name: 'Painel de vendas',
    kind: 'Power BI',
    result: 'Receita mensal, metas e desempenho por região em uma única tela',
    tags: ['Power BI', 'DAX', 'SQL'],
    palette: ['#E9EFE8', '#2E5E4E', '#C9A77C'],
    layout: 'hero-split',
    image: '/projetos/dashboard.png',
    url: '',
  },
  {
    name: 'Relatório financeiro',
    kind: 'Excel e Python',
    result: 'Fechamento mensal automatizado, com conciliação entre fontes',
    tags: ['Python', 'Excel', 'ETL'],
    palette: ['#F4EEE9', '#3A2E2A', '#D9826B'],
    layout: 'gallery',
    image: '/projetos/dashboard.png',
    url: '',
  },
  {
    name: 'Monitor de operações',
    kind: 'Looker Studio',
    result: 'Indicadores de atendimento atualizados diariamente',
    tags: ['Looker Studio', 'BigQuery', 'Automação'],
    palette: ['#0E1116', '#1F2A3A', '#5B8CFF'],
    layout: 'stats',
    image: '/projetos/dashboard.png',
    url: '',
  },
]
