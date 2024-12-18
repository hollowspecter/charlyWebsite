import { Title } from './title'
import { Navlink } from './navlink'

const navItems = {
  '/': {
    name: 'home',
  },
  '/blog': {
    name: 'blog',
  },
  'https://vercel.com/templates/next.js/portfolio-starter-kit': {
    name: 'deploy',
  },
}

export function Navbar() {
  return (
    <nav className="flex justify-evenly h-64 bg-[url('/mesh-gradient.png')] bg-cover py-16 w-full">
      <Title
        className="self-center mr-10" />
      <Navlink
        key="work"
        href="/p/work"
        className="self-center"
        title="Arbeit"
      />
      <Navlink
        key="contact"
        href="/p/contact"
        className="self-center"
        title="Kontakt"
      />
    </nav >
  )
}
