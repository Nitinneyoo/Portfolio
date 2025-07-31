import { ArrowRight, Calendar, Clock } from 'lucide-react';
import type { Key } from 'react';

// --- 1. Mock Data for Blog Posts ---
// In a real application, this data would come from a CMS or API.
const blogPosts = [
  {
    id: 1,
    title: "Mastering React Hooks: A Deep Dive into useState and useEffect",
    slug: "mastering-react-hooks",
    imageUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop",
    excerpt: "Unlock the full potential of functional components in React by understanding the two most fundamental hooks: useState and useEffect.",
    category: "React",
    publishedDate: "July 15, 2025",
    readingTime: "8 min read",
  },
  {
    id: 2,
    title: "Building a RESTful API with Node.js, Express, and MongoDB",
    slug: "building-a-restful-api",
    imageUrl: "https://images.unsplash.com/photo-1542744095-291d1f67b221?q=80&w=2070&auto=format&fit=crop",
    excerpt: "A step-by-step guide to creating a robust and scalable backend server for your web applications using the MERN stack's backend technologies.",
    category: "Node.js",
    publishedDate: "June 28, 2025",
    readingTime: "12 min read",
  },
  {
    id: 3,
    title: "The Art of Styling: A Guide to Tailwind CSS and Framer Motion",
    slug: "styling-with-tailwind-and-framer-motion",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    excerpt: "Learn how to rapidly build beautiful, responsive, and animated user interfaces with the powerful combination of Tailwind CSS and Framer Motion.",
    category: "Web Design",
    publishedDate: "May 10, 2025",
    readingTime: "7 min read",
  },
];

// --- 2. BlogPostCard Component ---
// This component displays a single blog post.
interface BlogPost {
  id: Key | null | undefined;
  slug: string;
  imageUrl: string;
  category: string;
  title: string;
  excerpt: string;
  publishedDate: string;
  readingTime: string;
}

const BlogPostCard = ({ post }: { post: BlogPost }) => {
  return (
    <a
      href={`/blog/${post.slug}`}
      className="block bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-xl overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300 ease-in-out"
    >
      <img
        src={post.imageUrl}
        alt={post.title}
        className="w-full h-48 object-cover"
        onError={(e) => { e.currentTarget.src = 'https://placehold.co/600x400/0a0a0a/ffffff?text=Article'; }}
      />
      <div className="p-6">
        <span className="text-xs font-semibold text-cyan-300 bg-cyan-900/50 px-2 py-1 rounded-full mb-2 inline-block">
          {post.category}
        </span>
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-200">
          {post.title}
        </h3>
        <p className="text-gray-400 mb-4 text-sm leading-relaxed">
          {post.excerpt}
        </p>
        <div className="flex justify-between items-center text-xs text-gray-500">
          <div className="flex items-center">
            <Calendar className="w-3.5 h-3.5 mr-1.5" />
            <span>{post.publishedDate}</span>
          </div>
          <div className="flex items-center">
            <Clock className="w-3.5 h-3.5 mr-1.5" />
            <span>{post.readingTime}</span>
          </div>
        </div>
      </div>
    </a>
  );
};


// --- 3. Main Blog Page Component ---
const BlogPageScreen = () => {
  return (
    <div className="bg-[#0a0a0a] text-white font-sans min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        {/* --- Header --- */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            From the Blog
          </h1>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg">
            A collection of my thoughts, tutorials, and insights on web development and technology.
          </p>
        </div>

        {/* --- Blog Posts Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>

        {/* --- View All Button (Optional) --- */}
        <div className="text-center mt-16">
          <a
            href="/"
            className="inline-flex items-center px-6 py-3 font-semibold text-white bg-gray-800/50 border border-gray-700 rounded-lg hover:bg-gray-800 transition-colors duration-300 group"
          >
            View All Posts <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogPageScreen;