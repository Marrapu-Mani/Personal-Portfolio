import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";

const education = [
    {
        degree: "Bachelor of Technology in Computer Science",
        institution: "Rajiv Gandhi University of Knowledge Technologies, Srikakulam",
        period: "2022 – 2026",
        description: "Focused on Data Structures, Algorithms, Web Development, and Database Management Systems.",
    },
    {
        degree: "Pre-University Course",
        institution: "Rajiv Gandhi University of Knowledge Technologies, Srikakulam",
        period: "2020 – 2022",
        description: "Completed with distinction, majoring in Mathematics, Physics, and Chemistry.",
    },
];

export function Education() {
    return (
        <section id="education" className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold tracking-tight mb-4">Education</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        My academic background and qualifications.
                    </p>
                </motion.div>

                <div className="max-w-3xl mx-auto space-y-6">
                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="hover:shadow-md transition-shadow">
                                <CardHeader>
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                                        <CardTitle className="text-lg font-bold flex items-center gap-2">
                                            <GraduationCap className="h-5 w-5 text-primary" />
                                            {edu.degree}
                                        </CardTitle>
                                        <span className="text-sm text-muted-foreground flex items-center gap-1">
                                            <Calendar className="h-4 w-4" /> {edu.period}
                                        </span>
                                    </div>
                                    <div className="text-base font-medium text-primary/80">
                                        {edu.institution}
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground">{edu.description}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
