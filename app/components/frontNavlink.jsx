import Image from "next/image"
import Link from "next/link"

export function FrontNavLink({ keyRef, href, className, title, imgSrc }) {
    return (
        <div className="group">
            <Link
                key={keyRef}
                href={href}
                className={`${className} flex flex-col items-center`}
            >
                <Image
                    src={imgSrc}
                    width={100}
                    height={100}
                    alt="playful background doodles"
                    className="transition-all opacity-0 group-hover:opacity-100"
                />
                <p className="text-3xl text-white font-bold transition-all">{title}</p>
            </Link>
        </div>
    )
}
