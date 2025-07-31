import { Github, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import { projects } from './ProjectPageData'; // Your updated projects data file
import { BentoGrid, BentoGridItem } from "@/components/magicui/bento-grid"; // Import BentoGrid

// ... (Your ProjectCard, VideoShowcase, ProjectFilter, and ProjectHeader components remain the same)

interface ProjectCardProps {
  title: string,
  description: string,
  tags: string[],
  imageUrl: string,
  githubUrl: string,
  liveUrl?: string,
  role: string,
  impact: string,
  timeframe: string,
  videoUrl?: string
  className?: string // Optional className for BentoGridItem
}

interface ProjectFilterProps {
  categories: string[],
  activeCategory: string,
  setActiveCategory: (category: string) => void
}
interface VideoShowcaseProps {
  videos: {
    title: string,
    description: string,
    url: string,
    thumbnail?: string
    className?: string // Optional className for BentoGridItem
  }[]
}
// Reusable ProjectCard component with video support
const ProjectCard = ({ title, description, tags, imageUrl, githubUrl, liveUrl, role, impact, timeframe, videoUrl }: ProjectCardProps) => (
  <div className="group h-full relative flex flex-col bg-gray-900/50 border border-gray-700/60 rounded-xl overflow-hidden transition-all duration-300 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-500/10 animate-slide-in-up">
    {/* ... image/video part is fine ... */}
    <div className="relative overflow-hidden">
      {videoUrl ? (
        <video
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
          controls
          poster={imageUrl}
          onError={(e) => { e.currentTarget.poster = 'https://placehold.co/600x400/0a0a0a/ffffff?text=Video+Error'; }}
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
          onError={(e) => { e.currentTarget.src = 'https://placehold.co/600x400/0a0a0a/ffffff?text=Project'; }}
        />
      )}
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
    </div>

    {/* Project Content */}
    <div className="p-6 flex flex-col flex-grow">
      {/* 👇 CORRECTED COLORS HERE 👇 */}
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed mb-2">{description}</p>
      <p className="text-gray-500 text-xs mb-4">
        <span className="font-semibold">Role:</span> {role} | <span className="font-semibold">Impact:</span> {impact} | <span className="font-semibold">Timeframe:</span> {timeframe}
      </p>

      {/* ... rest of the component is fine ... */}
      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map((tag) => (
          <span key={tag} className="text-xs font-semibold text-cyan-300 bg-cyan-900/60 px-3 py-1 rounded-full animate-fade-in">
            {tag}
          </span>
        ))}
      </div>

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

// VideoShowcase component for AI-generated videos
const VideoShowcase = ({ videos }: VideoShowcaseProps) => (
  <div className="mb-16 animate-fade-in">
    <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
      AI-Powered Video Creations
    </h2>
    <p className="max-w-2xl mx-auto text-gray-400 mb-12 text-center">
      Leveraging AI tools like Steve.AI and Runway, I create engaging animations and promotional videos, streamlining the production process and enhancing visual storytelling.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {videos.map((video, index) => (
        <div key={video.title} className={`animate-delay-${index * 100}`}>
          <div className="relative bg-gray-800/30 border border-gray-700/50 rounded-xl overflow-hidden">
            <video
              className="w-full h-64 object-cover"
              controls
              poster={video.thumbnail}
              autoPlay
              muted
              // playsinline
              onError={(e) => { e.currentTarget.poster = 'https://placehold.co/600x400/0a0a0a/ffffff?text=Video+Error'; }}
            >
              <source src={video.url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">{video.title}</h3>
              <p className="text-gray-400 text-sm">{video.description}</p>
            </div>
          </div>
        </div>
      ))}
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
          : 'bg-gray-800/50 text-white hover:bg-gray-700/50'
          }`}
      >
        {category}
      </button>
    ))}
  </div>
);

// ProjectHeader component with AI narrative
const ProjectHeader = () => (
  <div className="text-center mb-16 animate-fade-in">
    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">My Projects</h2>
    <p className="max-w-2xl mx-auto text-gray-400 mb-4">
      Explore my work in web development and AI-driven content creation. Using tools like Steve.AI and Runway, I’ve crafted animations and videos that enhance storytelling, saving up to 50% of production time while achieving professional results.
    </p>
    <p className="max-w-2xl mx-auto text-gray-400">
      Filter by category to dive into my projects, from interactive web apps to visually stunning videos.
    </p>
  </div>
);


const ProjectPageScreen = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const videos = [
    {
      title: "AI History Animation",
      description: "A promotional animation created with Steve.AI, showcasing my portfolio’s UI transitions and responsive design.",
      url: "/Segment_2.mp4",
    },
    {
      title: "AI Showcase",
      description: "A short reel built with Runway, highlighting interactive web components and Tailwind CSS animations.",
      url: "/Segment_1.mp4",
    }
  ];

  const categories = ['All', ...new Set(projects.map((p) => p.category))];
  const filteredProjects = activeCategory === 'All' ? projects : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 lg:py-32 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <VideoShowcase videos={videos} />
        <ProjectHeader />
        <ProjectFilter categories={categories} activeCategory={activeCategory} setActiveCategory={setActiveCategory} />

        {/* Replace the old grid with BentoGrid */}
        <BentoGrid>
          {filteredProjects.map((project) => {
            return (
              <BentoGridItem key={project.title} className={project.className}>
                <ProjectCard {...project} />
              </BentoGridItem>
            );
          })}
        </BentoGrid>

      </div>
    </section>
  );
};

export default ProjectPageScreen;