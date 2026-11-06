const steps = [
  { title: 'Entendimento do problema', text: 'Converso com você sobre a decisão que o painel precisa apoiar, os indicadores e quem vai usá-lo.' },
  { title: 'Levantamento de dados', text: 'Verifico as fontes disponíveis, a qualidade dos dados e o que ainda precisa ser coletado.' },
  { title: 'ETL e modelagem', text: 'Extraio, trato e modelo os dados com SQL e Python para que os números sejam consistentes.' },
  { title: 'Visualização', text: 'Construo o dashboard no Power BI, Tableau ou Looker Studio, com foco em leitura rápida.' },
  { title: 'Validação', text: 'Confiro os números com sua equipe, comparando com as fontes originais antes de liberar.' },
  { title: 'Entrega e treinamento', text: 'Publico o painel, documento as regras de negócio e explico como usar e atualizar.' },
]

export default function Process() {
  return (
    <section id="processo" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div data-reveal className="mb-12 max-w-xl">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Como trabalho</h2>
        <p className="mt-4 leading-relaxed text-[#6B6B70]">Do entendimento do problema até a entrega, cada etapa é transparente.</p>
      </div>

      <ol className="grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
        {steps.map((s, i) => (
          <li key={s.title} data-reveal>
            <span className="text-sm font-medium text-[#0071E3]">{String(i + 1).padStart(2, '0')}</span>
            <h3 className="mt-3 text-xl font-semibold tracking-tight">{s.title}</h3>
            <p className="mt-2 leading-relaxed text-[#6B6B70]">{s.text}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}
