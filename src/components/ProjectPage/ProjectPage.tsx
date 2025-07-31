import { Github, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import { projects } from './ProjectPageData';


interface ProjecrCardProps {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  githubUrl: string;
  liveUrl: string;
  role: string;
  impact: string;
  timeframe: string;
}


interface ProjectFilterProps {
  categories: string[];
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}
// Reusable ProjectCard component with enhanced animations
const ProjectCard = ({ title, description, tags, imageUrl, githubUrl, liveUrl, role, impact, timeframe }: ProjecrCardProps) => (
  <div className="group relative flex flex-col bg-gray-900/50 border border-gray-700/60 rounded-xl overflow-hidden transition-all duration-300 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-500/10 animate-slide-in-up">
    {/* Project Image with zoom effect */}
    <div className="relative overflow-hidden">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        onError={(e) => { e.currentTarget.src = 'https://placehold.co/600x400/0a0a0a/ffffff?text=Project'; }}
      />
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
    </div>

    {/* Project Content */} 
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed mb-2">{description}</p>
      <p className="text-gray-500 text-xs mb-4">
        <span className="font-semibold">Role:</span> {role} | <span className="font-semibold">Impact:</span> {impact} | <span className="font-semibold">Timeframe:</span> {timeframe}
      </p>

      {/* Technology Tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map((tag) => (
          <span key={tag} className="text-xs font-semibold text-cyan-300 bg-cyan-900/60 px-3 py-1 rounded-full animate-fade-in">
            {tag}
          </span>
        ))}
      </div>

      {/* Action Links with hover animation */}
      <div className="mt-auto flex items-center gap-4">
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white transform hover:scale-105 transition-all duration-200"
        >
          <Github className="w-4 h-4" />
          Code
        </a>
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-cyan-400 transform hover:scale-105 transition-all duration-200"
          >
            <ExternalLink className="w-4 h-4" />
            Live Demo
          </a>
        )}
      </div>
    </div>
  </div>
);

// ProjectFilter component for category-based filtering
const ProjectFilter = ({ categories, activeCategory, setActiveCategory }: ProjectFilterProps) => (
  <div className="flex flex-wrap gap-4 mb-8 animate-fade-in">
    {categories.map((category) => (
      <button
        key={category}
        onClick={() => setActiveCategory(category)}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category
          ? 'bg-cyan-400 text-gray-900'
          : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
          }`}
      >
        {category}
      </button>
    ))}
  </div>
);

// ProjectHeader component
const ProjectHeader = () => (
  <div className="text-center mb-16 animate-fade-in">
    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">My Projects</h2>
    <p className="max-w-2xl mx-auto text-gray-400">
      Explore a curated selection of my work, showcasing my expertise in building modern, scalable, and user-focused applications. Filter by category to dive deeper.
    </p>
  </div>
);

const ProjectPageScreen = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...new Set(projects.map((p) => p.category))];
  const filteredProjects = activeCategory === 'All' ? projects : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 lg:py-32 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProjectHeader />
        <ProjectFilter categories={categories} activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div key={project.title} className={`animate-delay-${index * 100}`}>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectPageScreen;