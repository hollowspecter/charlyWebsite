import Footer from "app/components/footer";
import { Navbar } from "app/components/nav";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <main className="flex flex-col items-center">
            <Navbar />
            <article className="w-[800px] grow">
                {children}
            </article>
            <Footer />
        </main>
    );
}