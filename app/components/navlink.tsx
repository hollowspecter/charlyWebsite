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
                    width={80}
                    height={80}
                    alt="playful background doodles"
                    className="absolute transition-opacity bottom-0 opacity-0 group-hover:opacity-100 md:hidden"
                />
                <Image
                    src="/img/img_18.png"
                    width={140}
                    height={140}
                    alt="playful background doodles"
                    className="hidden md:block absolute transition-opacity -bottom-5 opacity-0 group-hover:opacity-100"
                />
                <p className="text-xl md:text-3xl text-white font-bold transition-all">{title}</p>
                <div className="w-24 h-5 md:w-32 relative">
                    <Image
                        src="/img/img_24.png"
                        fill={true}
                        alt="underline"
                        className={clsx(
                            "",
                            {
                                "hidden": pathname != href
                            }
                        )}
                    />
                </div>
            </Link>
        </div>
    )
}
