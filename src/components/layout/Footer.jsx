import { emailLink } from '@/lib/email'
import { site } from '@/config/site'
import SocialLinks from '@/components/SocialLinks'

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-6 text-center text-sm text-white/60 sm:flex-row sm:justify-between sm:py-4 sm:text-left">
        <span>© {new Date().getFullYear()} {site.name}</span>
        <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-4">
          <a href={emailLink()} className="text-[#2997FF] transition-colors hover:text-white">{site.email}</a>
          <SocialLinks className="text-white/60 [&_a]:text-white/60 [&_a:hover]:text-white [&_a:hover]:bg-white/10" />
        </div>
      </div>
    </footer>
  )
}
