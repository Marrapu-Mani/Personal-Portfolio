import { Github, Linkedin, ArrowUp, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { animateScroll as scroll } from "react-scroll";

export function Footer() {
    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    return (
        <footer className="bg-muted/50 border-t py-12 mt-20">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                    <h3 className="font-bold text-lg">Marrapu Mani</h3>
                    <p className="text-muted-foreground text-sm">
                        Full Stack Developer (MERN) & Java Enthusiast
                    </p>
                </div>

                <div className="flex items-center gap-4">
                    <Button variant="ghost" size="icon" asChild>
                        <a href="mailto:marrapumani10@gmail.com" aria-label="Email Me">
                            <Mail className="h-5 w-5" />
                            <span className="sr-only">Email</span>
                        </a>
                    </Button>
                    <Button variant="ghost" size="icon" asChild>
                        <a href="https://github.com/Marrapu-Mani" target="_blank" rel="noopener noreferrer">
                            <Github className="h-5 w-5" />
                            <span className="sr-only">GitHub</span>
                        </a>
                    </Button>
                    <Button variant="ghost" size="icon" asChild>
                        <a href="https://www.linkedin.com/in/marrapu-mani/" target="_blank" rel="noopener noreferrer">
                            <Linkedin className="h-5 w-5" />
                            <span className="sr-only">LinkedIn</span>
                        </a>
                    </Button>
                </div>

                <div className="text-center md:text-right flex flex-col items-center md:items-end gap-2">
                    <p className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} Marrapu Mani. All rights reserved.
                    </p>
                    <Button variant="ghost" size="sm" onClick={scrollToTop} className="gap-2">
                        Back to top <ArrowUp className="h-4 w-4" />
                    </Button>
                </div>
            </div>
        </footer>
    );
}
