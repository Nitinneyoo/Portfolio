// --- Changelog Data ---
// To add new updates, simply add a new object to the top of this array.
const changelogData = [
  {
    version: "v1.1.0",
    date: "July 31, 2025",
    changes: [
      { type: "Added", description: "Created the new Changelog page to document project updates." },
      { type: "Added", description: "Designed and implemented the Contact page with a functional form UI." },
      { type: "Added", description: "Launched the Blog page with a reusable card component." },
      { type: "Improved", description: "Standardized the page header and layout for consistency." },
    ],
  },
  {
    version: "v1.0.0",
    date: "July 30, 2025",
    changes: [
      { type: "Added", description: "Initial release of the personal portfolio website." },
      { type: "Added", description: "Created the Home page with a scroll-based video animation." },
      { type: "Added", description: "Implemented the Skills and FAQ pages." },
      { type: "Refactored", description: "Migrated scroll animation from useState/useEffect to Framer Motion for better performance." },
    ],
  },
];

// --- Helper function for styling badges ---
const getBadgeClass = (type: string) => {
  switch (type) {
    case "Added":
      return "bg-green-900/50 text-green-300";
    case "Improved":
      return "bg-cyan-900/50 text-cyan-300";
    case "Fixed":
      return "bg-red-900/50 text-red-300";
    case "Refactored":
      return "bg-yellow-900/50 text-yellow-300";
    default:
      return "bg-gray-700 text-gray-300";
  }
};


// --- Main Changelog Page Component ---
const ChangelogScreen = () => {
  return (
    <div className="bg-[#0a0a0a] text-white font-sans min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        {/* --- Header --- */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Project Changelog
          </h1>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg">
            A timeline of all major updates and improvements to this portfolio.
          </p>
        </div>

        {/* --- Changelog List --- */}
        <div className="space-y-12">
          {changelogData.map((version) => (
            <section key={version.version} aria-labelledby={`version-${version.version}`}>
              <div className="flex items-baseline gap-4">
                <h2
                  id={`version-${version.version}`}
                  className="text-2xl md:text-3xl font-bold text-white"
                >
                  {version.version}
                </h2>
                <time className="text-sm text-gray-500">{version.date}</time>
              </div>
              <ul className="mt-6 space-y-4 list-inside">
                {version.changes.map((change, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span
                      className={`inline-block text-xs font-semibold px-2 py-1 rounded-full whitespace-nowrap ${getBadgeClass(change.type)}`}
                    >
                      {change.type}
                    </span>
                    <span className="text-gray-300">{change.description}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChangelogScreen;