import { experience } from '@/data/about'

// Trilha vertical: cada parada é uma etapa da carreira
export default function Experience() {
  return (
    <div className="mt-20">
      <h3 data-reveal className="text-2xl font-semibold tracking-tight sm:text-3xl">Experiência</h3>
      <ol className="mt-10 space-y-12 border-l-2 border-dashed border-black/10 pl-10">
        {experience.map((e) => (
          <li key={e.role} data-reveal className="relative">
            <span
              className={`absolute -left-[53px] top-0.5 flex h-6 w-6 items-center justify-center rounded-full ${
                e.current ? 'bg-[#0071E3]' : 'bg-white ring-2 ring-[#0071E3]/40'
              }`}
            >
              {e.current && <span className="h-2 w-2 rounded-full bg-white" />}
            </span>
            <p className="text-sm font-medium text-[#0071E3]">
              {e.step}
              {e.current && <span className="ml-2 rounded-full bg-[#0071E3]/10 px-2 py-0.5 text-xs">Atual</span>}
            </p>
            <h4 className="mt-1 text-xl font-semibold tracking-tight">{e.role}</h4>
            <p className="mt-0.5 text-[15px] text-[#6B6B70]">{e.company}</p>
            <ul className="mt-3 space-y-2 text-[15px] leading-relaxed text-[#6B6B70]">
              {e.items.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0071E3]/60" />
                  {item}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </div>
  )
}
