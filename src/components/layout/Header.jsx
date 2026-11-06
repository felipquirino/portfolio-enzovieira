import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { site } from '@/config/site'
import { cn } from '@/lib/utils'
import { useActiveSection } from '@/hooks/useActiveSection'
import SocialLinks from '@/components/SocialLinks'

const links = [
  { id: 'sobre', label: 'Sobre' },
  { id: 'processo', label: 'Processo' },
  { id: 'projetos', label: 'Projetos' },
]

// Item selecionado: azul Apple translúcido, no estilo do tvOS
const itemClass = (isActive) =>
  cn(
    'block rounded-full px-4 py-1.5 text-sm font-medium transition-colors duration-300',
    isActive ? 'bg-[#0071E3]/15 text-[#0071E3]' : 'text-[#424245] hover:text-[#151517]',
  )

export default function Header() {
  const active = useActiveSection(links.map((l) => l.id))
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-black/5 bg-white/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="font-semibold tracking-tight">{site.name}</a>

        <ul className="hidden items-center gap-1 rounded-full bg-black/5 p-1 md:flex">
          {links.map((l) => (
            <li key={l.id}>
              <a href={`#${l.id}`} aria-current={active === l.id ? 'true' : undefined} className={itemClass(active === l.id)}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1">
          <SocialLinks />
          <button
            type="button"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-black/5 md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-black/5 bg-white/95 px-6 py-3 backdrop-blur-xl md:hidden">
          <ul className="flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  onClick={() => setOpen(false)}
                  aria-current={active === l.id ? 'true' : undefined}
                  className={cn(itemClass(active === l.id), 'py-3 text-base')}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <SocialLinks className="mt-3 px-1" />
        </div>
      )}
    </header>
  )
}
