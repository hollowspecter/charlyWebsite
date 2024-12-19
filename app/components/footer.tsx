export default function Footer() {
  return (
    <footer className="mb-16 flex flex-col md:flex-row md:justify-between md:w-[800px] items-center mt-8">
      <p className="text-neutral-600">
        © {new Date().getFullYear()} Charly Krenn. All rights reserved.
      </p>
      <a href="/p/impress" className="text-neutral-600">
        Impressum & Datenschutzerklärung
      </a>
    </footer>
  )
}
