import Footer from "app/components/footer";
import { Navbar } from "app/components/nav";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <main className="flex flex-col items-center">
            <Navbar />
            <article className="md:w-[800px] grow mx-6 md:mx-0">
                {children}
            </article>
            <Footer />
        </main>
    );
}