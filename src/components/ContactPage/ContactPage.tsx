import { Mail, MapPin, Phone, Github, Twitter, Linkedin } from 'lucide-react';
import type { FormEvent } from 'react';

// --- Reusable Social Link Component ---
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

// --- Main Contact Page Component ---
const ContactPage = () => {
  const socialLinks = [
    { href: "https://github.com/Nitinneyoo", icon: Github, label: "GitHub" },
    { href: "https://www.linkedin.com/in/nitinneyoo/", icon: Linkedin, label: "LinkedIn" },
    { href: "https://x.com/singhnitin2705", icon: Twitter, label: "Twitter" },
  ];

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    // TODO: Add form submission logic here (e.g., using an API route, Formspree, etc.)
    alert("Form submitted! (This is a placeholder)");
  };

  return (
    <div className="bg-[#0a0a0a] text-white font-sans min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        {/* --- Header --- */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Contact Me
          </h1>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg">
            Have a project in mind or just want to say hello? I'd love to hear from you.
          </p>
        </div>

        {/* --- Main Content Grid --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* --- Left Column: Contact Info --- */}
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-4 text-cyan-400" />
                <a href="nitinsinghji12@gmail.com" className="text-gray-300 hover:text-white">
                  nitinsinghji12@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-4 text-cyan-400" />
                <span className="text-gray-300">Bommasandra, Karnataka, India</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-4 text-cyan-400" />
                <span className="text-gray-300">(+91)7000080870</span>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800">
              <h3 className="text-xl font-semibold mb-4">Find me on</h3>
              <div className="flex items-center gap-6">
                {socialLinks.map(link => (
                  <SocialLink key={link.label} href={link.href} icon={link.icon} aria-label={link.label} />
                ))}
              </div>
            </div>
          </div>

          {/* --- Right Column: Contact Form --- */}
          <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8">
            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  ></textarea>
                </div>
              </div>
              <div className="mt-8">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-6 py-3 font-semibold text-black bg-cyan-400 rounded-lg shadow-lg hover:bg-cyan-300 transition-colors duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;