import { useRef, useState, useEffect } from 'react'
import { ArrowUpRight, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import ProjectPreview from '@/components/sections/ProjectPreview'
import { projects } from '@/data/projects'
import { cn } from '@/lib/utils'

export default function Projects() {
  const trackRef = useRef(null)
  const drag = useRef({ active: false, startX: 0, startScroll: 0, moved: false })
  const [dragging, setDragging] = useState(false)
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(true)

  const updateEdges = () => {
    const el = trackRef.current
    if (!el) return
    setCanPrev(el.scrollLeft > 4)
    setCanNext(el.scrollLeft < el.scrollWidth - el.clientWidth - 4)
  }

  useEffect(() => {
    updateEdges()
    window.addEventListener('resize', updateEdges)
    return () => window.removeEventListener('resize', updateEdges)
  }, [])

  const scrollByCard = (dir) => {
    const el = trackRef.current
    const card = el.firstElementChild
    const step = card.offsetWidth + 24 // largura do card + gap-6
    el.scrollBy({ left: dir * step, behavior: 'smooth' })
  }

  // Arrastar com o mouse (toque continua nativo)
  const onPointerDown = (e) => {
    if (e.pointerType !== 'mouse' || e.button !== 0) return
    drag.current = { active: true, startX: e.clientX, startScroll: trackRef.current.scrollLeft, moved: false }
  }
  const onPointerMove = (e) => {
    const d = drag.current
    if (!d.active) return
    const dx = e.clientX - d.startX
    if (Math.abs(dx) > 5 && !d.moved) {
      d.moved = true
      setDragging(true)
    }
    if (d.moved) trackRef.current.scrollLeft = d.startScroll - dx
  }
  const endDrag = () => {
    if (!drag.current.active) return
    drag.current.active = false
    setDragging(false)
    updateEdges()
  }
  // Evita que soltar o arrasto abra o card
  const onClickCapture = (e) => {
    if (drag.current.moved) {
      e.stopPropagation()
      e.preventDefault()
      drag.current.moved = false
    }
  }

  const arrowClass =
    'flex h-10 w-10 items-center justify-center rounded-full bg-black/5 text-[#151517] transition-colors hover:bg-black/10 disabled:opacity-30 disabled:hover:bg-black/5'

  return (
    <section id="projetos" className="py-20 md:py-28">
      <div className="mx-auto mb-10 flex max-w-6xl items-end justify-between gap-6 px-6">
        <div data-reveal>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Projetos</h2>
          <p className="mt-3 hidden text-sm text-[#6B6B70] sm:block">Arraste ou use as setas. Toque em um projeto para ver os detalhes.</p>
        </div>
        <div className="flex shrink-0 gap-2">
          <button type="button" aria-label="Projeto anterior" onClick={() => scrollByCard(-1)} disabled={!canPrev} className={arrowClass}>
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button type="button" aria-label="Próximo projeto" onClick={() => scrollByCard(1)} disabled={!canNext} className={arrowClass}>
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        onScroll={updateEdges}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
        onPointerCancel={endDrag}
        onClickCapture={onClickCapture}
        className={cn(
          'flex gap-6 overflow-x-auto px-6 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:px-[max(1.5rem,calc((100vw-72rem)/2+1.5rem))]',
          dragging ? 'cursor-grabbing select-none snap-none' : 'cursor-grab snap-x snap-mandatory scroll-smooth',
        )}
      >
        {projects.map((project, i) => (
          <ProjectCard key={project.name} project={project} delay={i * 80} />
        ))}
      </div>
    </section>
  )
}

function ProjectCard({ project, delay }) {
  const [open, setOpen] = useState(false)

  return (
    <article
      data-reveal
      style={{ transitionDelay: `${delay}ms` }}
      onClick={() => setOpen((v) => !v)}
      className="group w-[300px] shrink-0 snap-start cursor-pointer rounded-[28px] bg-white p-3 shadow-[0_1px_0_rgba(0,0,0,0.04)] ring-1 ring-black/5 transition-transform duration-500 sm:w-[360px] md:w-[400px]"
    >
      <div className="aspect-[4/3] overflow-hidden rounded-[22px]">
        <div className="h-full w-full transition-transform duration-[800ms] group-hover:scale-[1.015]">
          {project.image ? (
            <img src={project.image} alt={`Captura de tela do projeto ${project.name}`} loading="lazy" draggable={false} className="h-full w-full object-cover object-top" />
          ) : (
            <ProjectPreview project={project} />
          )}
        </div>
      </div>

      <div className="flex items-start justify-between gap-4 px-3 pb-3 pt-5">
        <div>
          <p className="text-sm text-[#6B6B70]">{project.kind}</p>
          <h3 className="text-xl font-semibold tracking-tight">{project.name}</h3>
        </div>
        <ArrowUpRight className="mt-1 h-5 w-5 text-[#6B6B70] transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </div>

      <div
        className="grid px-3 transition-[grid-template-rows,opacity] duration-500 ease-out"
        style={{ gridTemplateRows: open ? '1fr' : '0fr', opacity: open ? 1 : 0 }}
      >
        <div className="overflow-hidden">
          <p className="pb-3 text-[15px]">{project.result}</p>
          <div className="flex flex-wrap gap-2 pb-4">
            {project.tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="mb-5 inline-flex items-center gap-1.5 text-sm font-medium text-[#0071E3] hover:underline"
            >
              Ver site ao vivo <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
