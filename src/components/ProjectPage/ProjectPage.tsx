import { Github, ExternalLink } from 'lucide-react';

// --- Reusable Project Card Component ---
// This card is designed to be a self-contained unit for displaying a single project.
// It takes all project details as props, making it easy to reuse.

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  githubUrl: string;
  liveUrl?: string; // Optional, as some projects may not have a live demo
}


const ProjectCard = ({ title, description, tags, imageUrl, githubUrl, liveUrl }: ProjectCardProps) => (
  <div className="group relative flex flex-col bg-gray-900/50 border border-gray-700/60 rounded-xl overflow-hidden transition-all duration-300 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-500/10">
    {/* Project Image */}
    <div className="relative overflow-hidden">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        // Fallback image in case the primary one fails to load
        onError={(e) => { e.currentTarget.src = 'https://placehold.co/600x400/0a0a0a/ffffff?text=Project'; }}
      />
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
    </div>

    {/* Project Content */}
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-grow">{description}</p>

      {/* Technology Tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map((tag) => (
          <span key={tag} className="text-xs font-semibold text-cyan-300 bg-cyan-900/60 px-3 py-1 rounded-full">
            {tag}
          </span>
        ))}
      </div>

      {/* Action Links */}
      <div className="mt-auto flex items-center gap-4">
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200"
        >
          <Github className="w-4 h-4" />
          Code
        </a>
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-cyan-400 transition-colors duration-200"
          >
            <ExternalLink className="w-4 h-4" />
            Live Demo
          </a>
        )}
      </div>
    </div>
  </div>
);

// --- Main Project Page Screen Component ---
// This is the main container for the entire projects section.
const ProjectPageScreen = () => {

  // Data for your projects, based on your GitHub profile.
  // I've added descriptions and relevant tags. You can update these as needed.
  const projects = [
    {
      title: "TanStack-Router-Demo",
      description: "A GitHub user search app that fetches and displays profile data using the GitHub API. A great demonstration of asynchronous JavaScript and API handling.",
      tags: ["JavaScript", "API", "HTML5", "CSS3"],
      imageUrl: "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?q=80&w=1985&auto=format&fit=crop",
      githubUrl: "https://github.com/Nitinneyoo/Dev-Detective",
      liveUrl: "https://dev-detective-nitin.vercel.app/"
    },
    {
      title: "JavaScript Mastery",
      description: "A faithful clone of the Puma e-commerce website's landing page, focusing on recreating a complex layout and responsive design with pure CSS.",
      tags: ["HTML5", "CSS3", "Responsive Design"],
      imageUrl: "https://images.unsplash.com/photo-1628255341785-4076694689c9?q=80&w=1964&auto=format&fit=crop",
      githubUrl: "https://github.com/Nitinneyoo/Puma-website-clone",
      liveUrl: "https://puma-website-clone-alpha.vercel.app/"
    },
    {
      title: "Razorpay Clone",
      description: "A pixel-perfect clone of the Razorpay homepage, built with Tailwind CSS to demonstrate utility-first styling and modern frontend practices.",
      tags: ["HTML5", "Tailwind CSS"],
      imageUrl: "https://images.unsplash.com/photo-1616469829935-c2f334623b8c?q=80&w=2070&auto=format&fit=crop",
      githubUrl: "https://github.com/Nitinneyoo/Razorpay-Clone",
      liveUrl: "https://razorpay-clone-singhnitin.vercel.app/"
    },
    {
      title: "Password Generator",
      description: "A handy utility tool for generating strong, random passwords with customizable options like length and character types.",
      tags: ["JavaScript", "HTML5", "CSS3"],
      imageUrl: "https://images.unsplash.com/photo-1585079542156-2755d9c8a094?q=80&w=1974&auto=format&fit=crop",
      githubUrl: "https://github.com/Nitinneyoo/Password-Generator",
      liveUrl: "https://password-generator-singhnitin.vercel.app/"
    },
    {
      title: "Weather App",
      description: "A clean and simple weather application that provides current weather data for a given location by fetching from a third-party weather API.",
      tags: ["JavaScript", "API", "HTML5", "CSS3"],
      imageUrl: "https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=2070&auto=format&fit=crop",
      githubUrl: "https://github.com/Nitinneyoo/Weather-App",
      liveUrl: "https://weather-app-singhnitin.vercel.app/"
    },
    {
      title: "My Portfolio",
      description: "The very site you're on! A personal portfolio built with Next.js and Tailwind CSS to showcase my skills and projects in a modern, performant package.",
      tags: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      githubUrl: "https://github.com/Nitinneyoo/Portfolio-singhnitin",
      liveUrl: "https://portfolio-singhnitin.vercel.app/"
    }
  ];

  return (
    <section id="projects" className="py-20 lg:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            My Creations
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400">
            Here's a selection of my recent work. For a full list, please check out my GitHub.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectPageScreen;
