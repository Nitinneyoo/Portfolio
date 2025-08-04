import { skillCategories } from './SkillPageData';



// --- Main Skill Page Component ---
const SkillPageScreen = () => {
  return (
    <div className="bg-[#0a0a0a] text-white font-sans min-h-screen">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        {/* Background Gradient */}
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1)_0%,_rgba(255,255,255,0)_70%)]"></div>
        </div>

        {/* --- Header --- */}
        <div className="relative z-10 text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Technologies & Skills
          </h1>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg">
            A collection of the primary tools, languages, and frameworks I utilize for building modern web applications.
          </p>
        </div>

        {/* --- Skills Grid --- */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-cyan-400/50 transition-colors duration-300"
            >
              <div className="flex items-center mb-4">
                {category.icon}
                <h2 className="text-2xl font-bold ml-3">{category.title}</h2>
              </div>
              <ul className="space-y-3">
                {category.skills.map((skill) => (
                  <li
                    key={skill.name}
                    className="text-gray-300 flex items-center group"
                  >
                    <span className="text-cyan-400 mr-3 transition-transform duration-300 group-hover:translate-x-1">→</span>
                    <span>{skill.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillPageScreen;