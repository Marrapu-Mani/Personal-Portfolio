import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Award, CheckCircle } from "lucide-react";

const achievements = [
    {
        title: "Developing Front-End Apps with React",
        issuer: "IBM (edX Verified Certificate)",
        year: "2023–24",
        description: "Mastered React fundamentals, components, hooks, and state management for building dynamic UIs.",
    },
    {
        title: "Back-end Application Development with Node.js and Express",
        issuer: "IBM (edX Verified Certificate)",
        year: "2023–24",
        description: "Gained expertise in building scalable backend services and APIs using Node.js and Express framework.",
    },
    {
        title: "MongoDB – The Complete Developer's Guide 2024",
        issuer: "Maximilian Schwarzmüller (Udemy)",
        year: "2024",
        description: "Comprehensive mastery of MongoDB, including CRUD operations, indexing, and aggregation framework.",
    },
];

export function Achievements() {
    return (
        <section id="achievements" className="py-20">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold tracking-tight mb-4">Achievements & Certifications</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Recognitions and certifications I've earned along the way.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {achievements.map((achievement, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="h-full hover:border-primary/50 transition-colors">
                                <CardHeader>
                                    <div className="w-10 h-10 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-600 mb-4">
                                        <Award className="h-5 w-5" />
                                    </div>
                                    <CardTitle className="text-lg leading-tight">{achievement.title}</CardTitle>
                                    <div className="flex flex-col gap-1 mt-2">
                                        <div className="text-sm font-medium text-muted-foreground">
                                            {achievement.issuer}
                                        </div>
                                        <div className="text-xs text-muted-foreground/80">
                                            {achievement.year}
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground flex items-start gap-2">
                                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                                        {achievement.description}
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
