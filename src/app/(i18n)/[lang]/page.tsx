import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import MusicSection from '@/components/sections/Music'
import SoftwareSection from '@/components/sections/Software'
import WritingSection from '@/components/sections/Writing'
import AboutSection from '@/components/sections/About'
import ContactSection from '@/components/sections/Contact'
import { getDictionary, type Locale } from '@/dictionaries'

export default async function Home({
  params,
}: {
  params: Promise<{ lang: Locale }>
}): Promise<React.ReactNode> {
  const { lang } = await params
  const dict = await getDictionary(lang)

  return (
    <>
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-primary"
      >
        {dict.nav.skip}
      </a>
      <Header lang={lang} dict={dict} />
      <main id="content" className="flex-1">
        <Hero lang={lang} dict={dict} />
        <MusicSection lang={lang} dict={dict.music} />
        <SoftwareSection lang={lang} dict={dict.software} />
        <WritingSection lang={lang} dict={dict.writing} />
        <AboutSection dict={dict.about} />
        <ContactSection dict={dict.contact} />
      </main>
      <Footer lang={lang} dict={dict} />
    </>
  )
}
