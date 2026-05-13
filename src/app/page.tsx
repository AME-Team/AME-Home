import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import ITSection from '@/components/sections/IT'
import MusicSection from '@/components/sections/Music'
import WorksSection from '@/components/sections/Works'
import AboutSection from '@/components/sections/About'
import ContactSection from '@/components/sections/Contact'

export default function Home(): React.ReactNode {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <ITSection />
        <MusicSection />
        <WorksSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
