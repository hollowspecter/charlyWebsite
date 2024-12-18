export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <main className="h-screen bg-[url('/mesh-gradient.png')] flex flex-col px-32 py-32 justify-between">
            {children}
        </main>
    );
}