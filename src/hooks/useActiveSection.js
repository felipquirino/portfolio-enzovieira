import { useEffect, useState } from 'react'

// Retorna o id da seção que está no centro da tela, para destacar o item do menu
export function useActiveSection(ids) {
  const [active, setActive] = useState(null)

  useEffect(() => {
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean)
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) =>
          setActive((prev) => (e.isIntersecting ? e.target.id : prev === e.target.id ? null : prev)),
        ),
      { rootMargin: '-45% 0px -50% 0px' },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [ids.join(',')])

  return active
}
