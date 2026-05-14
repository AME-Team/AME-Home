import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import ITSection from '@/components/sections/IT'
import MusicSection from '@/components/sections/Music'
import WorksSection from '@/components/sections/Works'
import AboutSection from '@/components/sections/About'
import ContactSection from '@/components/sections/Contact'
import { getDictionary, Locale } from '@/dictionaries'

export default async function Home({
  params,
}: {
  params: Promise<{ lang: Locale }>
}): Promise<React.ReactNode> {
  const { lang } = await params
  const dict = await getDictionary(lang)

  return (
    <>
      <Header lang={lang} />
      <main className="flex-1">
        <Hero locale={lang} />
        <ITSection dict={dict.it} />
        <MusicSection dict={dict.music} />
        <WorksSection dict={dict.works} />
        <AboutSection dict={dict.about} />
        <ContactSection dict={dict.contact} />
      </main>
      <Footer />
    </>
  )
}
