import { Github, Linkedin } from 'lucide-react'
import { site } from '@/config/site'

const links = [
  { href: site.githubUrl, label: 'GitHub', Icon: Github },
  { href: site.linkedinUrl, label: 'LinkedIn', Icon: Linkedin },
]

// Sem URL preenchida, o ícone aparece desabilitado (para ver o layout antes dos links)
export default function SocialLinks({ className = '' }) {
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      {links.map(({ href, label, Icon }) => {
        const base = 'flex h-10 w-10 items-center justify-center rounded-full text-[#424245] transition-colors'
        if (!href) {
          return (
            <span key={label} aria-label={`${label} (link não configurado)`} title="Link não configurado" className={`${base} cursor-default opacity-35`}>
              <Icon className="h-5 w-5" />
            </span>
          )
        }
        return (
          <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className={`${base} hover:bg-black/5 hover:text-[#151517]`}>
            <Icon className="h-5 w-5" />
          </a>
        )
      })}
    </div>
  )
}
