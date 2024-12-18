import Link from "next/link";
import { Navlink } from "./components/navlink";
import { FrontNavLink } from "./components/frontNavlink";
import { Title } from "./components/title";
import Image from "next/image";

export default function Page() {
  return (
    <main className="h-screen bg-[url('/mesh-gradient.png')] flex flex-col px-60 py-32 justify-between bg-cover">
      {/* Header */}
      <div className="flex flex-col w-auto h-auto" >
        <Title />
        <p className="text-3xl text-white mb-8">
          Sozialarbeiter*in
          <br />
          Autor*in
        </p>
        <Image
          src="/img/img_20.png"
          width={75}
          height={75}
          alt="playful background doodles"
          className="hover:animate-spin"
        />
      </div >
      {/* Links */}
      <div className="flex justify-between">
        <FrontNavLink
          keyRef="contact"
          href="/p/contact"
          className=""
          title="Kontakt"
          imgSrc="/img/img_06.png"
        />
        <FrontNavLink
          keyRef="work"
          href="/p/work"
          className=""
          title="Arbeit"
          imgSrc="/img/img_12.png"
        />
        <FrontNavLink
          keyRef="impress"
          href="/p/impress"
          className=""
          title="Impressum"
          imgSrc="/img/img_22.png"
        />
      </div >
    </main >
  )
}
