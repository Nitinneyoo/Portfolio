import { Github, Linkedin, Twitter, Code, Database, Settings } from 'lucide-react';

// Reusable component for social media links
const SocialLink = ({ href, icon: Icon, 'aria-label': ariaLabel }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={ariaLabel}
    className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
  >
    <Icon className="w-6 h-6" />
  </a>
);

// Reusable component for skill tags
const SkillTag = ({ skill }) => (
  <div className="bg-gray-800/70 border border-gray-700/50 rounded-md px-3 py-1 text-sm text-gray-300">
    {skill}
  </div>
);

const AboutPageScreen = () => {
  const socialLinks = [
    { href: "https://github.com/your-username", icon: Github, label: "GitHub" },
    { href: "https://linkedin.com/in/your-username", icon: Linkedin, label: "LinkedIn" },
    { href: "https://twitter.com/your-username", icon: Twitter, label: "Twitter" },
  ];

  const skills = {
    frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5 & CSS3"],
    backend: ["Node.js", "Express.js", "MongoDB", "Firebase", "REST APIs"],
    tools: ["Git & GitHub", "Webpack", "Docker", "Figma", "VS Code"]
  };

  return (
    <section id="about" className="py-20 lg:py-32">
      <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Left Column: Bio */}
        <div className="flex flex-col gap-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            A Bit About Me
          </h2>
          <p className="text-gray-400 leading-relaxed">
            I'm a developer based in India with a passion for building clean, efficient, and user-centric web applications. My expertise lies in the MERN stack, and I thrive on turning complex challenges into elegant digital solutions.
          </p>
          <p className="text-gray-400 leading-relaxed">
            When I'm not coding, I enjoy contributing to open-source and exploring the latest trends in technology and design.
          </p>
          <div className="flex items-center gap-4 mt-2">
            <span className="font-semibold text-white">Find me on:</span>
            <div className="flex items-center gap-4">
              {socialLinks.map(link => (
                <SocialLink key={link.label} href={link.href} icon={link.icon} aria-label={link.label} />
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Skills */}
        <div className="flex flex-col gap-8 p-8 bg-gray-800/30 border border-gray-700/50 rounded-xl">
          <div>
            <h3 className="flex items-center gap-3 text-xl font-bold mb-4">
              <Code className="text-cyan-400 w-6 h-6" />
              Frontend
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.frontend.map(skill => <SkillTag key={skill} skill={skill} />)}
            </div>
          </div>
          <div>
            <h3 className="flex items-center gap-3 text-xl font-bold mb-4">
              <Database className="text-cyan-400 w-6 h-6" />
              Backend
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.backend.map(skill => <SkillTag key={skill} skill={skill} />)}
            </div>
          </div>
          <div>
            <h3 className="flex items-center gap-3 text-xl font-bold mb-4">
              <Settings className="text-cyan-400 w-6 h-6" />
              Tools & Methods
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.tools.map(skill => <SkillTag key={skill} skill={skill} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPageScreen;
