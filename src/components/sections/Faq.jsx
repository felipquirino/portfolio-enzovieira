import { Plus } from 'lucide-react'
import { faq } from '@/data/faq'

export default function Faq() {
  return (
    <section id="faq" className="mx-auto max-w-3xl px-6 py-20 md:py-28">
      <h2 data-reveal className="mb-10 text-3xl font-semibold tracking-tight sm:text-4xl">Perguntas frequentes</h2>
      <div className="divide-y divide-black/10 border-y border-black/10">
        {faq.map((item) => (
          <details key={item.q} data-reveal className="group py-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left text-lg font-medium focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0071E3] [&::-webkit-details-marker]:hidden">
              {item.q}
              <Plus className="h-5 w-5 shrink-0 text-[#6B6B70] transition-transform duration-300 group-open:rotate-45" />
            </summary>
            <p className="pt-3 pr-10 leading-relaxed text-[#6B6B70]">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
