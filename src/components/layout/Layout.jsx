import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function Layout({ children }) {
    return (
        <div className="min-h-screen flex flex-col bg-background text-foreground font-sans antialiased">
            <Navbar />
            <main className="flex-1 pt-16">
                {children}
            </main>
            <Footer />
        </div>
    );
}
