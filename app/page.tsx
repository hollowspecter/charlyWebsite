import Link from "next/link";
import { Navlink } from "./components/navlink";
import { Title } from "./components/title";

export default function Page() {
  return (
    <main className="h-screen bg-[url('/mesh-gradient.png')] flex flex-col px-60 py-32 justify-between bg-cover">
      {/* Header */}
      <div className="flex flex-col w-auto h-auto" >
        <Title />
        <p className="text-3xl text-white">
          Sozialarbeiter*in
          <br />
          Autor*in
        </p>
      </div >
      {/* Links */}
      <div className="flex justify-between">
        <Navlink
          key="contact"
          href="/p/contact"
          className=""
          title="Kontakt"
        />
        <Navlink
          key="work"
          href="/p/work"
          className=""
          title="Arbeit"
        />
        <Navlink
          key="impress"
          href="/p/impress"
          className=""
          title="Impressum"
        />
      </div >
    </main >
  )
}
