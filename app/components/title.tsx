import Image from "next/image";
import clsx from "clsx";

export function Title({ className = "",
    omitTopDecoration = false,
    omitBottomDecoration = false }) {
    return (
        <a href="/" className={`${className} mb-8 text-5xl md:text-7xl font-bold
            text-white tracking-wider relative max-w-fit`}>
            Charly Krenn
            {/* Decoration 1 */}
            <div className={clsx(
                `absolute -top-0 md:-top-50 -right-10 md:-right-28
                w-24 md:w-48 h-24 md:h-48`,
                { "hidden": omitBottomDecoration })}>
                <Image
                    src="/img/img_03.png"
                    fill={true}
                    alt="playful background doodles"
                />
            </div>
            {/* Decoration 2 */}
            <div className={clsx(
                "absolute -top-16 -right-0",
                { "hidden": omitTopDecoration })}>
                <Image
                    src="/img/img_09.png"
                    width={75}
                    height={75}
                    alt="playful background doodles"
                />
            </div>
        </a>
    )
}
