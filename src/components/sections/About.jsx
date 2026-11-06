import { about } from '@/data/about'
import Experience from '@/components/sections/Experience'

export default function About() {
  return (
    <section id="sobre" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="grid gap-10 md:grid-cols-2">
        <div data-reveal>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Sobre mim</h2>
          <p className="mt-4 text-lg leading-relaxed text-[#6B6B70]">{about.intro}</p>
        </div>
        <div data-reveal className="rounded-[28px] bg-[#F5F5F7] p-8">
          <p className="mb-5 text-sm font-medium text-[#6B6B70]">Habilidades</p>
          <ul className="grid grid-cols-2 gap-3">
            {about.skills.map(({ name, icon: Icon }) => (
              <li key={name} className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 ring-1 ring-black/5">
                <Icon className="h-5 w-5 shrink-0 text-[#0071E3]" />
                <span className="text-sm font-medium">{name}</span>
              </li>
            ))}
          </ul>
            </div>
          ))}
        </div>
      </div>
      <Experience />
    </section>
  )
}
