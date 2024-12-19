import { Title } from './title'
import { Navlink } from './navlink'

export function Navbar() {
  return (
    <nav className={`flex flex-col md:flex-row md:justify-center gap-4 md:gap-20
      md:h-64 bg-[url('/mesh-gradient_desktop.jpg')]
      bg-cover pt-5 pb-2 md:py-16 w-full`}>
      <Title
        className="self-center md:mr-10"
        omitTopDecoration={true} />
      <div className={`flex justify-between self-center`}>
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
      </div>
    </nav >
  )
}
