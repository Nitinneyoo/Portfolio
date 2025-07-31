import { useState, useEffect } from 'react';
import { Github, Twitter, Linkedin, Mail, ArrowRight, Download } from 'lucide-react';
import { projects } from './HomePageProjectCrad'; // Assuming you have a projects data file
import ColourfulText from '../ui/colourful-text';
import ContactPage from 'src/components/ContactPage/ContactPage';

// --- Card for Projects (No changes needed) ---
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


// --- Social Media Link (No changes needed) ---
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


// --- Main Home Page Component (Corrected) ---
const HomePageScreen = () => {
  // State for scroll animation
  const [scale, setScale] = useState(1);
  const [opacity, setOpacity] = useState(1);
  const [y, setY] = useState(0);

  // Scroll event handler for the video animation
  useEffect(() => {
    const handleScroll = () => {
      const animationDistance = window.innerHeight;
      const currentScrollY = window.scrollY;
      let progress = currentScrollY / animationDistance;
      progress = Math.max(0, Math.min(1, progress));

      const newScale = 1 - progress * 0.3;
      // Fade out the video completely after 80% scroll progress
      const newOpacity = progress > 0.8 ? 1 - (progress - 0.8) / 0.2 : 1;
      const newY = -progress * 30;

      setScale(newScale);
      setOpacity(newOpacity);
      setY(newY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const socialLinks = [
    { href: "https://github.com/Nitinneyoo", icon: Github, label: "GitHub" },
    { href: "https://www.linkedin.com/in/nitinneyoo/", icon: Linkedin, label: "LinkedIn" },
    { href: "https://x.com/singhnitin2705", icon: Twitter, label: "Twitter" },
  ];

  return (
    // This is the single parent element for the component
    <div className="bg-[#0a0a0a] text-white font-sans">

      {/* --- SCROLL ANIMATION CONTAINER --- */}
      {/* This container creates the space for the scroll animation to happen */}
      <div className="relative h-[200vh]">
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
          <div
            className="w-full h-full"
            style={{
              transform: `scale(${scale}) translateY(${y}%)`,
              opacity: opacity,
            }}
          >
            <video
              className="w-full h-full object-cover rounded-2xl"
              src="/Segment_7.mp4"
              autoPlay
              loop
              muted
              playsInline // Important for autoplay on iOS
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>

      {/* --- MAIN PAGE CONTENT --- */}
      {/* The negative margin pulls this content up to sit on top of the animation container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-[100vh]">

        {/* --- Hero Section --- */}
        <section id="home" className="min-h-screen flex flex-col justify-center items-start">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4">
            <span className="text-gray-400">I'm <ColourfulText text="Nitin Singh" />.</span><br />
            A <ColourfulText text="Front-End" /> Developer.
          </h1>
          <p className="max-w-xl text-gray-300 text-lg md:text-xl mb-8">
            I specialize in building modern, responsive, and user-friendly web applications. My passion lies in turning complex problems into beautiful, intuitive digital experiences.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="/ContactSection"
              className="inline-flex items-center justify-center px-6 py-3 font-semibold text-black bg-white rounded-lg shadow-lg hover:bg-gray-200 transition-colors duration-300"
            >
              Get in Touch
            </a>
            <a
              href="/Nitinsingh_Resume.pdf"
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
            href="mailto:singhnitin2705@gmail.com"
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