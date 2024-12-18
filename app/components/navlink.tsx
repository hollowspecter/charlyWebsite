'use client';

import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

export function Navlink({ key, href, className, title }) {
    const pathname = usePathname();

    return (
        <div className="relative min-w-[180px]">
            <Link
                key={key}
                href={href}
                className={`${className} flex flex-col items-center group`}
            >
                <Image
                    src="/img/img_18.png"
                    width={120}
                    height={120}
                    alt="playful background doodles"
                    className="absolute transition-opacity w-full h-full bottom-10 opacity-0 group-hover:opacity-100"
                />
                <p className="text-3xl text-white font-bold transition-all">{title}</p>
                <Image
                    src="/img/img_24.png"
                    width={120}
                    height={120}
                    alt="underline"
                    className={clsx(
                        "absolute w-full inset-y-10",
                        {
                            "hidden": pathname != href
                        }
                    )}
                />
            </Link>
        </div>
    )
}
