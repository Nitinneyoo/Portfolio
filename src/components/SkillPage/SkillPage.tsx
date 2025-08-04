import { Cpu, Code, Database, Wrench } from 'lucide-react';

const skillCategories = [
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



// --- Main Skill Page Component ---
const SkillPageScreen = () => {
  return (
    <div className="bg-[#0a0a0a] text-white font-sans min-h-screen">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        {/* Background Gradient */}
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1)_0%,_rgba(255,255,255,0)_70%)]"></div>
        </div>

        {/* --- Header --- */}
        <div className="relative z-10 text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Technologies & Skills
          </h1>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg">
            A collection of the primary tools, languages, and frameworks I utilize for building modern web applications.
          </p>
        </div>

        {/* --- Skills Grid --- */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-cyan-400/50 transition-colors duration-300"
            >
              <div className="flex items-center mb-4">
                {category.icon}
                <h2 className="text-2xl font-bold ml-3">{category.title}</h2>
              </div>
              <ul className="space-y-3">
                {category.skills.map((skill) => (
                  <li
                    key={skill.name}
                    className="text-gray-300 flex items-center group"
                  >
                    <span className="text-cyan-400 mr-3 transition-transform duration-300 group-hover:translate-x-1">→</span>
                    <span>{skill.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillPageScreen;