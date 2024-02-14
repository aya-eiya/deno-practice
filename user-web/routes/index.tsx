import { FreshContext } from '$fresh/server.ts'
import About from '../components/pages/About.tsx'
import Contact from '../components/pages/Contact.tsx'
import Features from '../components/pages/Features.tsx'
import HomePage from '../components/pages/Home.tsx'
import News from '../components/pages/News.tsx'
import Projects from '../components/pages/Projects.tsx'
import AppHR from '../components/static/AppHR.tsx'

export const handler = {
  async GET(_req: Request, ctx: FreshContext) {
    const resp = await ctx.render()
    resp.headers.set('X-Custom-Header', 'Hello')
    return resp
  },
}

export default function Home() {
  return (
    <div className={'w-full flex flex-col'}>
      <HomePage />
      <About />
      <AppHR />
      <Features />
      <Projects />
      <News />
      <Contact />
    </div>
  )
}
