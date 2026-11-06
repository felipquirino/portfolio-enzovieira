// Pré-visualização feita de blocos, sem imagens externas
export default function ProjectPreview({ project }) {
  const [bg, ink, accent] = project.palette
  const bar = { background: ink, opacity: 0.85 }

  return (
    <div className="flex h-full w-full flex-col gap-3 p-5" style={{ background: bg }}>
      <div className="flex gap-1.5">
        {[0, 1, 2].map((i) => (
          <span key={i} className="h-2 w-2 rounded-full" style={{ background: ink, opacity: 0.25 }} />
        ))}
      </div>

      {project.layout === 'hero-split' && (
        <div className="grid flex-1 grid-cols-2 items-center gap-4">
          <div className="space-y-2">
            <div className="h-4 w-4/5 rounded" style={bar} />
            <div className="h-4 w-3/5 rounded" style={bar} />
            <div className="mt-3 h-2 w-full rounded" style={{ background: ink, opacity: 0.2 }} />
            <div className="mt-3 h-7 w-24 rounded-full" style={{ background: accent }} />
          </div>
          <div className="h-full rounded-xl" style={{ background: accent, opacity: 0.8 }} />
        </div>
      )}

      {project.layout === 'gallery' && (
        <div className="grid flex-1 grid-cols-3 gap-2">
          <div className="col-span-2 rounded-xl" style={{ background: accent }} />
          <div className="rounded-xl" style={{ background: ink, opacity: 0.7 }} />
          <div className="rounded-xl" style={{ background: ink, opacity: 0.3 }} />
          <div className="col-span-2 rounded-xl" style={{ background: ink, opacity: 0.15 }} />
        </div>
      )}

      {project.layout === 'stats' && (
        <div className="flex flex-1 flex-col gap-3">
          <div className="h-3 w-2/5 rounded" style={{ background: ink, opacity: 0.9 }} />
          <div className="grid flex-1 grid-cols-3 gap-2">
            {[0.9, 0.6, 0.4].map((h, i) => (
              <div key={i} className="flex items-end rounded-xl p-2" style={{ background: ink, opacity: 0.12 + i * 0.08 }}>
                <div className="w-full rounded" style={{ height: `${h * 60}%`, background: accent }} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
