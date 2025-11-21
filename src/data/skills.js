import {
    Code,
    Server,
    Database,
    Terminal,
    Globe,
    Cpu
} from "lucide-react";

export const skills = [
    {
        category: "Frontend",
        icon: Globe,
        items: ["HTML", "CSS", "JavaScript", "React", "React Native", "Tailwind CSS", "shadcn/ui"]
    },
    {
        category: "Backend",
        icon: Server,
        items: ["Node.js", "Express.js"]
    },
    {
        category: "Databases",
        icon: Database,
        items: ["MongoDB", "SQL (PostgreSQL/MySQL)"]
    },
    {
        category: "Languages",
        icon: Code,
        items: ["Java", "JavaScript"]
    },
    {
        category: "Tools & Others",
        icon: Terminal,
        items: ["Git", "GitHub", "VS Code", "Linux", "Postman", "n8n"]
    }
];
