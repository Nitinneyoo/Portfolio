import {
  Briefcase,
  Code,
  Database,
  Github,
  Linkedin,
  Settings,
  Twitter,
} from "lucide-react";
import { useState } from "react"; // Import useState

interface Experience {
  href: string;
  icon: React.ElementType;
  label: string;
}

// Reusable SocialLink component with hover animation
const SocialLink = ({ href, icon: Icon, label }: Experience) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="text-gray-400 hover:text-cyan-400 transform hover:scale-110 transition-all duration-300"
  >
    <Icon className="w-6 h-6" />
  </a>
);

// Reusable SkillTag component with fade-in animation
const SkillTag = ({ skill }: { skill: string }) => (
  <div className="bg-gray-800/70 border border-gray-700/50 rounded-md px-3 py-1 text-sm text-gray-300 animate-fade-in">
    {skill}
  </div>
);

// BioSection component with slide-in animation
const BioSection = () => (
  <div className="flex flex-col gap-6 animate-slide-in-left">
    <h2 className="text-4xl md:text-5xl font-bold text-white">About Me</h2>
    <p className="text-gray-300 leading-relaxed">
      I'm a Front-End developer based in Bangalore, India, with over 2 years of
      experience crafting scalable web applications. My passion lies in
      leveraging the MERN stack (MongoDB, React, Node.js,Typescript,Tailwind
      Css) to build intuitive and performant digital solutions. I specialize in
      creating pixel-perfect UI with modern frameworks and optimizing backend
      systems for efficiency.
    </p>
    <p className="text-gray-300 leading-relaxed">
      Beyond coding, I contribute to open-source projects on GitHub, mentor
      aspiring developers, and stay updated with trends like AI-driven
      development and Web3. In my free time, I enjoy reading sci-fi novels,
      experimenting with new tech stacks, and hiking in the Western Ghats.
    </p>
    <div className="flex items-center gap-4 mt-4">
      <span className="font-semibold text-white">Connect with me:</span>
      <div className="flex items-center gap-4">
        {[
          {
            href: "https://github.com/Nitinneyoo",
            icon: Github,
            label: "GitHub",
          },
          {
            href: "https://www.linkedin.com/in/nitinneyoo/",
            icon: Linkedin,
            label: "LinkedIn",
          },
          {
            href: "https://twitter.com/singhnitin2705",
            icon: Twitter,
            label: "Twitter",
          },
        ].map((link) => (
          <SocialLink
            key={link.label}
            href={link.href}
            icon={link.icon}
            label={link.label}
          />
        ))}
      </div>
    </div>
  </div>
);

// SkillsSection component with categorized skills and animation
const SkillsSection = () => {
  const skills = {
    frontend: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "HTML5 & CSS3",
    ],
    backend: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Firebase",
      "REST & GraphQL APIs",
    ],
    tools: ["Git & GitHub", "Webpack", "Docker", "Figma", "VS Code"],
    others: ["Agile Methodologies", "CI/CD", "AWS Basics", "Web Accessibility"],
  };

  return (
    <div className="flex flex-col gap-8 p-8 bg-gray-800/30 border border-gray-700/50 rounded-xl animate-slide-in-right">
      {[
        { title: "Frontend", icon: Code, skills: skills.frontend },
        { title: "Backend", icon: Database, skills: skills.backend },
        { title: "Tools & Methods", icon: Settings, skills: skills.tools },
        { title: "Others", icon: Briefcase, skills: skills.others },
      ].map((category, index) => (
        <div key={category.title} className={`animate-delay-${index * 100}`}>
          <h3 className="flex items-center gap-3 text-xl font-bold mb-4 text-slate-200">
            <category.icon className="text-cyan-400 w-6 h-6" />
            {category.title}
          </h3>
          <div className="flex flex-wrap gap-2 ">
            {category.skills.map((skill) => (
              <SkillTag key={skill} skill={skill} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

// ExperienceSection component with timeline layout
const ExperienceSection = () => (
  <div className="flex flex-col gap-6 mt-12 animate-fade-in">
    <h2 className="text-3xl md:text-4xl font-bold text-white">Experience</h2>
    <div className="relative border-l-2 border-cyan-400 pl-6">
      {[
        {
          role: "Frontend Developer",
          company: "Anscer Robotics",
          period: "2025 - present",
          description:
            "Built responsive UI with React and Tailwind CSS, reducing page load times by 25%.",
        },
        {
          role: "Technical Engineer",
          company: "Acer India",
          period: "2024-2025",
          description:
            "Worked on various projects, enhancing technical skills and gaining hands-on experience in the tech industry.",
        },
        {
          role: "Graduate Engineer Trainee",
          company: "Bharat Heavy Electrical Limited (BHEL)",
          period: "2023-2024",
          description:
            "Gained foundational engineering skills and practical experience in a leading manufacturing company.",
        },
      ].map((exp, index) => (
        <div key={index} className="mb-8 animate-slide-in-left">
          <div className="absolute w-4 h-4 bg-cyan-400 rounded-full -left-2 mt-1.5" />
          <h4 className="text-xl font-semibold text-white">{exp.role}</h4>
          <p className="text-gray-400">
            {exp.company} | {exp.period}
          </p>
          <p className="text-gray-300 mt-2">{exp.description}</p>
        </div>
      ))}
    </div>
  </div>
);

// WakaTimeChart component with loading state
const WakaTimeChart = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="mt-16 animate-fade-in">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
        My Coding Activity
      </h2>
      <div className="relative w-full min-h-[300px]">
        {isLoading && (
          <div className="absolute inset-0 bg-gray-800/50 rounded-lg animate-pulse flex items-center justify-center">
            <p className="text-gray-400">Loading WakaTime Chart...</p>
          </div>
        )}
        <iframe
          src="https://wakatime.com/share/@Nitinneyoo/f988bb1d-89a8-47f0-bc22-d18bb61a32e2.svg"
          className={`w-full h-auto min-h-[500px] border-0 transition-opacity duration-500 ${isLoading ? "opacity-0" : "opacity-100"}`}
          title="WakaTime Coding Activity Chart"
          onLoad={() => setIsLoading(false)}
        ></iframe>
        <div className="p-2 flex justify-center">
          <p className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
            {" "}
            - A visual representation of my Language activity over the past
            month.
          </p>
        </div>
        <iframe
          src="https://wakatime.com/share/@Nitinneyoo/e6ea73ad-d15d-4456-bbea-74960999ea6e.svg"
          className={`w-full h-auto min-h-[500px] border-0 transition-opacity duration-500 ${isLoading ? "opacity-0" : "opacity-100"}`}
          title="WakaTime Coding Activity Chart"
          onLoad={() => setIsLoading(false)}
        ></iframe>
      </div>
    </div>
  );
};

const AboutPageScreen = () => (
  <section
    id="about"
    className="py-20 lg:py-32 bg-gradient-to-b from-gray-900 to-gray-800"
  >
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
        <BioSection />
        <SkillsSection />
      </div>
      <ExperienceSection />
      <WakaTimeChart />
    </div>
  </section>
);

export default AboutPageScreen;
