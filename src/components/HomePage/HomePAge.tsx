import { Github, Twitter, Linkedin, Mail, ArrowRight, Download } from 'lucide-react';

// --- 1. Reusable Components ---

// Card for Projects
interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  projectUrl: string;
}

const ProjectCard = ({ title, description, tags, imageUrl, projectUrl }: ProjectCardProps) => {
  return (
    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 ease-in-out">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-cover"
        onError={(e) => { e.currentTarget.src = 'https://placehold.co/600x400/0a0a0a/ffffff?text=Project'; }} />
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400 mb-4 text-sm leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span key={tag} className="text-xs font-semibold text-cyan-300 bg-cyan-900/50 px-2 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <a
          href={projectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm font-semibold text-white hover:text-cyan-400 transition-colors duration-200 group"
        >
          View Project <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  );
};

// Social Media Link
interface SocialLinkProps {
  href: string;
  icon: React.ElementType;
  'aria-label': string;
}

const SocialLink = ({ href, icon: Icon, 'aria-label': ariaLabel }: SocialLinkProps) => (
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


// --- 2. Main Home Page Component ---

const HomePageScreen = () => {

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with features like product catalog, shopping cart, user authentication, and a Stripe integration for payments.",
      tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      imageUrl: "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=2072&auto=format&fit=crop",
      projectUrl: "#"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management tool that helps teams organize, track, and manage their work with an intuitive drag-and-drop interface.",
      tags: ["Next.js", "TypeScript", "Firebase", "Zustand"],
      imageUrl: "/Todo.png",
      projectUrl: "#"
    },
    {
      title: "Portfolio Website V2",
      description: "My personal portfolio site built with Next.js and styled with Tailwind CSS, showcasing my skills and projects in a clean, modern design.",
      tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
      imageUrl: "/Portfolio.png",
      projectUrl: "#"
    }
  ];

  const socialLinks = [
    { href: "https://github.com/Nitinneyoo", icon: Github, label: "GitHub" },
    { href: "https://www.linkedin.com/in/nitinneyoo/", icon: Linkedin, label: "LinkedIn" },
    { href: "https://x.com/singhnitin2705", icon: Twitter, label: "Twitter" },
  ];

  return (
    <div className="bg-[#0a0a0a] text-white font-sans">
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1)_0%,_rgba(255,255,255,0)_70%)]"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* --- Hero Section --- */}
        <section id="home" className="min-h-screen flex flex-col justify-center items-start">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4">
            <span className="text-gray-400">I'm Nitin Singh.</span><br />
            A Web Developer.
          </h1>
          <p className="max-w-xl text-gray-300 text-lg md:text-xl mb-8">
            I specialize in building modern, responsive, and user-friendly web applications. My passion lies in turning complex problems into beautiful, intuitive digital experiences.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 font-semibold text-black bg-white rounded-lg shadow-lg hover:bg-gray-200 transition-colors duration-300"
            >
              Get in Touch
            </a>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center justify-center px-6 py-3 font-semibold text-white bg-gray-800/50 border border-gray-700 rounded-lg hover:bg-gray-800 transition-colors duration-300"
            >
              Download CV <Download className="w-4 h-4 ml-2" />
            </a>
          </div>
        </section>

        {/* --- About Section --- */}
        <section id="about" className="py-20 lg:py-32">
          <div className="grid md:grid-cols-5 gap-8 lg:gap-16 items-center">
            <div className="md:col-span-2">
              <img
                src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop"
                alt="Abstract technology"
                className="rounded-xl object-cover w-full h-full shadow-2xl shadow-cyan-500/10"
              />
            </div>
            <div className="md:col-span-3">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
              <p className="text-gray-400 mb-4 leading-relaxed">
                Hello! I'm a passionate developer based in India with a strong focus on the MERN stack (MongoDB, Express.js, React, Node.js). I enjoy bringing ideas to life in the browser and continuously learning about new technologies.
              </p>
              <p className="text-gray-400 mb-6 leading-relaxed">
                When I'm not coding, you can find me exploring the latest trends in UI/UX design, contributing to open-source projects, or enjoying a good cup of coffee.
              </p>
              <div className="flex items-center gap-4">
                <span className="font-semibold">Find me on:</span>
                <div className="flex items-center gap-4">
                  {socialLinks.map(link => (
                    <SocialLink key={link.label} href={link.href} icon={link.icon} aria-label={link.label} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- Projects Section --- */}
        <section id="projects" className="py-20 lg:py-32">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="max-w-2xl mx-auto text-gray-400">Here are some of the projects I'm proud of. Feel free to explore them.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map(project => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </section>

        {/* --- Contact Section --- */}
        <section id="contact" className="py-20 lg:py-32 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Build Something Together</h2>
          <p className="max-w-2xl mx-auto text-gray-400 mb-8">
            Have a project in mind or just want to say hello? My inbox is always open.
          </p>
          <a
            href="mailto:your-email@example.com"
            className="inline-flex items-center px-8 py-4 font-semibold text-lg text-black bg-cyan-400 rounded-lg shadow-lg hover:bg-cyan-300 transition-colors duration-300"
          >
            <Mail className="w-5 h-5 mr-3" /> Contact Me
          </a>
        </section>

        {/* --- Footer --- */}
        <footer className="py-8 border-t border-gray-800/50 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Nitin Singh. All Rights Reserved.</p>
        </footer>

      </div>
    </div>
  );
};

export default HomePageScreen;
