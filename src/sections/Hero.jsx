import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import { Link } from "react-scroll";
import profileImage from "@/assets/profile-image1.png";
import resume from "@/assets/Mani Marrapu_Resume.pdf";

export function Hero() {
    return (
        <section
            id="hero"
            className="min-h-[calc(100vh-4rem)] flex items-center justify-center py-20 relative overflow-hidden"
        >
            {/* Background elements */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-background to-background opacity-50" />

            <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center gap-12">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex-1 text-center md:text-left"
                >
                    <h2 className="text-lg md:text-xl font-medium text-primary mb-4">
                        Hello, I'm
                    </h2>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
                        Marrapu Mani
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto md:mx-0">
                        Full Stack Developer (MERN) & Java Enthusiast building modern, responsive web applications.
                    </p>

                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                        <Button size="lg" asChild className="gap-2">
                            <Link to="projects" smooth={true} duration={500} className="cursor-pointer">
                                View Projects <ArrowRight className="h-4 w-4" />
                            </Link>
                        </Button>
                        <Button size="lg" variant="outline" asChild className="gap-2">
                            <a href={resume} download="Mani_Marrapu_Resume.pdf">
                                <Download className="h-4 w-4" /> Download Resume
                            </a>
                        </Button>
                        <Button size="lg" variant="ghost" asChild className="gap-2">
                            <Link to="contact" smooth={true} duration={500} className="cursor-pointer">
                                Contact Me <Mail className="h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="flex-1 flex justify-center md:justify-end"
                >
                    <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-primary to-secondary p-1 shadow-2xl">
                        <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden">
                            {/* Placeholder for profile image */}
                            <img src={profileImage} alt="Marrapu Mani" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
