import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { experience } from "@/data/experience";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export function Experience() {
    return (
        <section id="experience" className="py-20">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold tracking-tight mb-4">Work Experience</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        My professional journey and internships.
                    </p>
                </motion.div>

                <div className="relative max-w-3xl mx-auto">
                    {/* Vertical line */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 hidden md:block" />

                    <div className="space-y-12">
                        {experience.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                    }`}
                            >
                                {/* Timeline dot */}
                                <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 rounded-full bg-primary border-4 border-background -translate-x-[5px] md:-translate-x-1/2 mt-1.5 z-10 hidden md:block" />

                                <div className="flex-1">
                                    <Card className="h-full">
                                        <CardHeader>
                                            <CardTitle className="text-lg font-bold flex items-center gap-2">
                                                <Briefcase className="h-4 w-4 text-primary" />
                                                {exp.role}
                                            </CardTitle>
                                            <div className="text-sm font-medium text-muted-foreground">
                                                {exp.company}
                                            </div>
                                            <div className="flex flex-wrap gap-4 text-xs text-muted-foreground mt-2">
                                                <span className="flex items-center gap-1">
                                                    <Calendar className="h-3 w-3" /> {exp.period}
                                                </span>
                                                {exp.location && (
                                                    <span className="flex items-center gap-1">
                                                        <MapPin className="h-3 w-3" /> {exp.location}
                                                    </span>
                                                )}
                                            </div>
                                        </CardHeader>
                                        <CardContent>
                                            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                                                {exp.description.map((desc, idx) => (
                                                    <li key={idx}>{desc}</li>
                                                ))}
                                            </ul>
                                        </CardContent>
                                    </Card>
                                </div>

                                {/* Empty space for the other side of the timeline */}
                                <div className="flex-1 hidden md:block" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
