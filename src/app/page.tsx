import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Impact } from '@/components/sections/Impact'
import { Skills } from '@/components/sections/Skills'
import { Experience } from '@/components/sections/Experience'
import { Projects } from '@/components/sections/Projects'
import { AiEngineering } from '@/components/sections/AiEngineering'
import { Education } from '@/components/sections/Education'
import { Contact } from '@/components/sections/Contact'

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Impact />
      <Skills />
      <Experience />
      <Projects />
      <AiEngineering />
      <Education />
      <Contact />
    </>
  )
}
