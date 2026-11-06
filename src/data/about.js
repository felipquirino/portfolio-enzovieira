import { BarChart3, Database, Table2, Code2, PieChart, Workflow, LayoutDashboard } from 'lucide-react'

// Conteúdo fictício, usado apenas como demonstração.
export const about = {
  intro: 'Sou freelancer de dados. Ajudo pequenas e médias empresas a transformar planilhas e sistemas dispersos em dashboards e relatórios claros para decisões do dia a dia.',
  languages: [
    { name: 'Inglês', levels: ['Conversação: intermediário', 'Textos técnicos e escrita: avançado'] },
  ],
  skills: [
    { name: 'Power BI', icon: BarChart3 },
    { name: 'SQL', icon: Database },
    { name: 'Excel', icon: Table2 },
    { name: 'Python', icon: Code2 },
    { name: 'Tableau', icon: PieChart },
    { name: 'ETL', icon: Workflow },
    { name: 'Looker Studio', icon: LayoutDashboard },
  ],
}

// Trilha de experiência fictícia, em ordem cronológica.
export const experience = [
  {
    role: 'Analista de Dados Júnior',
    company: 'Comércio Atlas (empresa fictícia)',
    step: 'Etapa 1',
    current: false,
    items: [
      'Criação de relatórios de vendas e estoque em Excel e Power BI',
      'Consultas SQL para extração e conferência de dados',
      'Automação de atualizações mensais com Python',
    ],
  },
  {
    role: 'Freelancer de Dados',
    company: 'Independente',
    step: 'Etapa 2 · atual',
    current: true,
    items: [
      'Dashboards para pequenas empresas, com atualização automatizada',
      'Modelagem e tratamento de dados com ETL e SQL',
      'Treinamento de equipes para uso autônomo dos painéis',
    ],
  },
]
