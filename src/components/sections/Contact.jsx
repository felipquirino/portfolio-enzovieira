import { Button } from '@/components/ui/button'
import Footer from '@/components/layout/Footer'
import { emailLink } from '@/lib/email'

// Bloco preto sobreposto à seção branca, com o rodapé dentro dele
export default function Contact() {
  return (
    <section className="relative z-10 rounded-t-[40px] bg-black text-white shadow-[0_-24px_60px_rgba(0,0,0,0.18)]">
      <div className="mx-auto max-w-6xl px-6 py-20 text-center md:py-32">
        <h2 data-reveal className="text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
          Vamos conversar?
        </h2>
        <p data-reveal className="mt-4 text-lg text-white/60">
          Fale sobre a vaga ou o projeto que você tem em mente. Respondo em até um dia útil.
        </p>
        <div data-reveal className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Button asChild size="lg" className="px-8">
            <a href={emailLink('Conversa sobre projeto de dados')}>Falar comigo</a>
          </Button>
          <Button asChild size="lg" className="px-8">
            <a href={emailLink('Orçamento de site')}>Enviar email</a>
          </Button>
        </div>
      </div>
      <Footer />
    </section>
  )
}
