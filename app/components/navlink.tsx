import Link from "next/link";

export function Navlink({ key, href, className, title }) {
    return (
        <Link
            key={key}
            href={href}
            className={className}
        >
            <p className="text-3xl text-white font-bold transition-all">{title}</p>
        </Link>
    )
}
