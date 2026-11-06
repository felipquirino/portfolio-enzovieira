import { Button } from '@/components/ui/button'
import { emailLink } from '@/lib/email'
import { site } from '@/config/site'

export default function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-20 pt-12 md:grid-cols-[1fr_auto] md:pb-28 md:pt-24">
      <div>
        <p data-reveal className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#0071E3]/10 px-3 py-1 text-sm font-medium text-[#0071E3]">
          <span className="h-2 w-2 rounded-full bg-[#0071E3]" />
          Aceitando novos projetos
        </p>
        <h1
          data-reveal
          className="max-w-3xl text-[clamp(2.25rem,7vw,5.5rem)] font-semibold leading-[1.02] tracking-[-0.035em]"
        >
          Dados claros para
          <span className="text-[#6B6B70]"> decisões mais rápidas.</span>
        </h1>
        <p data-reveal className="mt-6 max-w-xl text-lg leading-relaxed text-[#6B6B70]">
          Transformo dados brutos em dashboards, relatórios e automações que ajudam sua equipe a acompanhar resultados e agir com segurança.
        </p>
        <div data-reveal className="mt-10 flex flex-wrap gap-3">
          <Button asChild size="lg">
            <a href="#projetos">Ver Projetos</a>
          </Button>
          <Button asChild variant="ghost" size="lg">
            <a href={emailLink('Solicitação de orçamento')}>Solicitar orçamento</a>
          </Button>
        </div>
      </div>
      <img
        data-reveal
        src="/felipe-quirino.png"
        alt={site.name}
        className="mx-auto h-auto w-56 rounded-[32px] object-cover sm:w-72 md:w-64 lg:w-80"
      />
    </section>
  )
}
