export default function Footer() {
  return (
    <footer className="mb-16 flex justify-between w-[800px]">
      <p className="mt-8 text-neutral-600 dark:text-neutral-300">
        © {new Date().getFullYear()} Charly Krenn. All rights reserved.
      </p>
      <a href="/p/impress" className="mt-8 text-neutral-600 dark:text-neutral-300">
        Impressum & Datenschutzerklärung
      </a>
    </footer>
  )
}
