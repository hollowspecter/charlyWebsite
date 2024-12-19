import Link from "next/link";
import { Navlink } from "./components/navlink";
import { FrontNavLink } from "./components/frontNavlink";
import { Title } from "./components/title";
import Image from "next/image";

export default function Page() {
  return (
    <main className={`h-screen bg-[url('/mesh-gradient.jpg')]
      md:bg-[url('/mesh-gradient_desktop.jpg')] flex flex-col bg-cover
      lg:px-60 md:py-32 md:justify-between justify-center
      `}>
      {/* Header */}
      <div className="flex flex-col w-auto h-auto items-center md:items-start" >
        <Title />
        <p className="text-2xl md:text-3xl text-white mb-2 md:mb-8">
          Sozialarbeiter*in
          <br />
          Autor*in
        </p>
        <div className="w-20 h-20 relative">
          <Image
            src="/img/img_20.png"
            fill={true}
            alt="playful background doodles"
            className="hover:animate-spin static"
          />
        </div>
      </div >
      {/* Links */}
      <div className="flex justify-around md:justify-between">
        <FrontNavLink
          keyRef="work"
          href="/p/work"
          title="Arbeit"
          imgSrc="/img/img_12.png"
        />
        <FrontNavLink
          keyRef="contact"
          href="/p/contact"
          title="Kontakt"
          imgSrc="/img/img_06.png"
        />
        <FrontNavLink
          keyRef="impress"
          href="/p/impress"
          groupClassName="hidden md:block"
          title="Impressum"
          imgSrc="/img/img_22.png"
        />
      </div >
      {/* Impress at bottom */}
      <Link
        href={"/p/impress"}
        className="absolute bottom-5 right-5 text-white md:hidden">
        Impressum
      </Link>
    </main >
  )
}
