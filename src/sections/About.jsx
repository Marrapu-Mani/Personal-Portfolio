import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { MapPin, Code, Database, Layout, Terminal } from "lucide-react";

const infoCards = [
    {
        icon: MapPin,
        title: "Location",
        description: "Andhra Pradesh, India",
    },
    {
        icon: Terminal,
        title: "Interests",
        description: "Full-Stack Dev, System Design, Problem Solving",
    },
    {
        icon: Code,
        title: "Tech Stack",
        description: "React, Node.js, Express, MongoDB, Java",
    },
];

const whatIDo = [
    {
        title: "Frontend Development",
        description: "Building responsive and interactive UIs with React, Tailwind CSS, and modern libraries.",
        icon: Layout,
    },
    {
        title: "Backend Development",
        description: "Creating robust APIs and server-side logic using Node.js and Express.",
        icon: Code,
    },
    {
        title: "Database Management",
        description: "Designing and managing data schemas with MongoDB and SQL databases.",
        icon: Database,
    },
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
};

export function About() {
    return (
        <section id="about" className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold tracking-tight mb-4">About Me</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        I am a passionate Full Stack Developer with a strong foundation in the MERN stack and Java.
                        I love building scalable web applications and solving complex problems through code.
                    </p>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
                >
                    {infoCards.map((card, index) => (
                        <motion.div key={index} variants={item}>
                            <Card className="h-full hover:shadow-lg transition-shadow">
                                <CardContent className="flex flex-col items-center text-center pt-6">
                                    <div className="p-3 rounded-full bg-primary/10 text-primary mb-4">
                                        <card.icon className="h-6 w-6" />
                                    </div>
                                    <h3 className="font-semibold mb-2">{card.title}</h3>
                                    <p className="text-sm text-muted-foreground">{card.description}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>

                <div className="space-y-8">
                    <h3 className="text-2xl font-bold text-center mb-8">What I Do</h3>
                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-6"
                    >
                        {whatIDo.map((card, index) => (
                            <motion.div key={index} variants={item}>
                                <Card className="h-full border-none shadow-md bg-card/50 backdrop-blur-sm hover:bg-card transition-colors">
                                    <CardHeader>
                                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                                            <card.icon className="h-6 w-6" />
                                        </div>
                                        <CardTitle>{card.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground">{card.description}</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
