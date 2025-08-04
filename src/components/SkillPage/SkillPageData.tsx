import { Code, Cpu, Database, Wrench } from "lucide-react";

export const skillCategories = [
  {
    title: "Frontend Development",
    icon: <Code className="w-6 h-6 text-cyan-400" />,
    skills: [
      { name: "React & Next.js" },
      { name: "TypeScript" },
      { name: "JavaScript (ES6+)" },
      { name: "Tailwind CSS" },
      { name: "Framer Motion" },
      { name: "HTML5 & CSS3" },
    ],
  },
  {
    title: "Backend Development",
    icon: <Database className="w-6 h-6 text-green-400" />,
    skills: [
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "MongoDB & Mongoose" },
      { name: "RESTful APIs" },
      { name: "Authentication (JWT)" },
    ],
  },
  {
    title: "Core Concepts & Languages",
    icon: <Cpu className="w-6 h-6 text-yellow-400" />,
    skills: [
      { name: "Data Structures" },
      { name: "Algorithms" },
      { name: "Object-Oriented Programming" },
      { name: "C++" },
      { name: "Python" },
    ],
  },
  {
    title: "Tools & Platforms",
    icon: <Wrench className="w-6 h-6 text-red-400" />,
    skills: [
      { name: "Git & GitHub" },
      { name: "VS Code" },
      { name: "Vercel & Netlify" },
      { name: "Postman" },
      { name: "Docker (Basic)" },
      { name: "Linux/Unix CLI" },
    ],
  },
];
