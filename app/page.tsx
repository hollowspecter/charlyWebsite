import Link from "next/link";

export default function Page() {
  return (
    <main className="h-screen bg-[url('/mesh-gradient.png')] flex flex-col px-60 py-32 justify-between">
      {/* Header */}
      <div className="flex flex-col w-auto h-auto" >
        <h1 className="text-6xl font-bold text-white mb-6">
          Charly Krenn
        </h1>
        <p className="text-2xl font-semibold text-white">
          Sozialarbeiter*in
          <br />
          Autor*in
        </p>
      </div >
      {/* Links */}
      <div className="flex justify-between">
        <Link
          key="contact"
          href="/p/contact"
          className=""
        >
          <p className="text-2xl text-white font-bold">Kontakt</p>
        </Link>
        <Link
          key="work"
          href="/p/work"
          className=""
        >
          <p className="text-2xl text-white font-bold">Arbeit</p>
        </Link>
        <Link
          key="impress"
          href="/p/impress"
          className=""
        >
          <p className="text-2xl text-white font-bold">Impressum</p>
        </Link>
      </div >
    </main>
  )
}
