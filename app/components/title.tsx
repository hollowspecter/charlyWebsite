import Image from "next/image";

export function Title({ className = "" }) {
    return (
        <a href="/" className={`${className} mb-8 text-7xl font-bold text-white tracking-wider relative max-w-fit`}>
            Charly Krenn
            {/* Decoration 1 */}
            <div className="absolute -top-5 -right-28">
                <Image
                    src="/img/img_03.png"
                    width={200}
                    height={200}
                    alt="playful background doodles"
                />
            </div>
            {/* Decoration 2 */}
            <div className="absolute -top-16 -right-0">
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
