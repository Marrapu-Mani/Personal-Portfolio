import { motion } from "framer-motion";
import { Mail, Linkedin } from "lucide-react";

export function Contact() {
    return (
        <section id="contact" className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                >
                    <h2 className="text-3xl font-bold tracking-tight mb-4">Get in Touch</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
                        Have a project in mind or want to discuss potential collaborations? I'd love to hear from you.
                    </p>

                    <div className="flex justify-center">
                        <div className="inline-flex flex-col md:flex-row items-center gap-6 md:gap-12 border-2 border-muted-foreground/20 rounded-3xl px-8 py-6 md:px-12 md:py-8 bg-background shadow-sm hover:shadow-md transition-shadow">
                            <a
                                href="mailto:marrapumani10@gmail.com"
                                className="flex items-center gap-3 text-lg md:text-xl font-medium hover:text-primary transition-colors group"
                            >
                                <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                    <Mail className="h-6 w-6" />
                                </div>
                                marrapumani10@gmail.com
                            </a>

                            <div className="hidden md:block w-px h-12 bg-border" />

                            <a
                                href="https://www.linkedin.com/in/marrapu-mani/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 text-lg md:text-xl font-medium hover:text-primary transition-colors group"
                            >
                                <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                    <Linkedin className="h-6 w-6" />
                                </div>
                                LinkedIn
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
