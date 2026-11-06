import { testimonials } from '@/data/testimonials'

export default function Testimonials() {
  if (!testimonials.length) return null

  return (
    <section id="depoimentos" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <h2 data-reveal className="mb-10 text-3xl font-semibold tracking-tight sm:text-4xl">Depoimentos</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {testimonials.map((t, i) => (
          <figure key={i} data-reveal className="rounded-[28px] bg-[#F5F5F7] p-8">
            <blockquote className="text-lg leading-relaxed text-[#151517]">“{t.quote}”</blockquote>
            <figcaption className="mt-6 text-sm">
              <span className="font-medium">{t.name}</span>
              <span className="text-[#6B6B70]"> · {t.role}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
