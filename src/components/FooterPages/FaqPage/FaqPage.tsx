import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

// --- FAQ Data ---
// Update your questions and answers here.
const faqData = [
  {
    question: "What types of projects do you specialize in?",
    answer: "I specialize in building full-stack web applications, with a strong focus on the MERN stack (MongoDB, Express.js, React, Node.js). I enjoy creating modern, responsive, and user-friendly interfaces backed by robust and scalable server-side logic."
  },
  {
    question: "Are you available for freelance work or new opportunities?",
    answer: "Yes, I am currently open to new opportunities and freelance projects. I'm passionate about tackling new challenges and collaborating on innovative ideas. Please feel free to get in touch via the contact form or email."
  },
  {
    question: "What is your development process like?",
    answer: "My process is collaborative and structured. It typically starts with understanding the project requirements, followed by planning and UI/UX design. I then move to development, with regular updates and feedback sessions. Finally, I handle testing and deployment to ensure a high-quality product."
  },
  {
    question: "Where are you located?",
    answer: "I am based in Bommasandra, Karnataka, India. I am available to work remotely with clients and teams from any time zone."
  },
  {
    question: "What are your hourly rates?",
    answer: "My rates vary depending on the scope, complexity, and duration of the project. I prefer to discuss project details first to provide a fair and accurate quote. Please contact me to discuss your project."
  }
];

// --- Reusable FAQ Item Component with Animation ---
interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem = ({ question, answer }: FaqItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="border-b border-gray-700/50 py-4">
      <motion.button
        onClick={toggleOpen}
        className="flex justify-between items-center w-full text-left"
        aria-expanded={isOpen}
      >
        <span className="text-lg font-semibold text-gray-100">{question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="w-5 h-5 text-gray-400" />
        </motion.span>
      </motion.button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: 'auto', marginTop: '16px' }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="text-gray-400 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};


// --- Main FAQ Page Component ---
const FaqPage = () => {
  return (
    <div className="bg-[#0a0a0a] text-white font-sans min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        {/* --- Header --- */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg">
            Here are answers to some common questions. If you can't find what you're looking for, feel free to contact me.
          </p>
        </div>

        {/* --- FAQ List --- */}
        <div className="bg-gray-800/20 backdrop-blur-sm border border-gray-700/30 rounded-xl p-6 md:p-8">
          {faqData.map((item, index) => (
            <FaqItem key={index} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqPage;