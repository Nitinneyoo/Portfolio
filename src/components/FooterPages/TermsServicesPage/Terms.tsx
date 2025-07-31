// --- Main Terms and Conditions Page Component ---
const TermsScreen = () => {
  const lastUpdatedDate = "July 31, 2025";

  return (
    <div className="bg-[#0a0a0a] text-white font-sans min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        {/* --- Header --- */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Terms and Conditions
          </h1>
          <p className="text-gray-500">
            Last updated: {lastUpdatedDate}
          </p>
        </div>

        {/* --- Terms Content --- */}
        <div className="prose prose-invert prose-lg max-w-none text-gray-300 space-y-6">
          <h2 className="text-2xl font-bold text-white pt-4">1. Agreement to Terms</h2>
          <p>
            By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by these terms, please do not use this site.
          </p>

          <h2 className="text-2xl font-bold text-white pt-4">2. Intellectual Property Rights</h2>
          <p>
            Unless otherwise indicated, this website is my proprietary property. All source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the site (collectively, the “Content”) and the trademarks and logos contained therein (the “Marks”) are owned or controlled by me or licensed to me, and are protected by copyright and trademark laws. The Content and the Marks are provided on the site “AS IS” for your information and personal use only.
          </p>

          <h2 className="text-2xl font-bold text-white pt-4">3. Prohibited Activities</h2>
          <p>
            You may not access or use the site for any purpose other than that for which I make the site available. As a user of the site, you agree not to:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Systematically retrieve data or other content from the site to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from me.</li>
            <li>Engage in any automated use of the system, such as using scripts to send comments or messages, or using any data mining, robots, or similar data gathering and extraction tools.</li>
            <li>Attempt to impersonate another user or person.</li>
            <li>Use any information obtained from the site in order to harass, abuse, or harm another person.</li>
          </ul>

          <h2 className="text-2xl font-bold text-white pt-4">4. Third-Party Websites and Content</h2>
          <p>
            The site may contain links to other websites ("Third-Party Websites"). Such Third-Party Websites are not investigated, monitored, or checked for accuracy, appropriateness, or completeness by me, and I am not responsible for any Third-Party Websites accessed through the site.
          </p>

          <h2 className="text-2xl font-bold text-white pt-4">5. Modifications and Interruptions</h2>
          <p>
            I reserve the right to change, modify, or remove the contents of the site at any time or for any reason at my sole discretion without notice. I also reserve the right to modify or discontinue all or part of the site without notice at any time. I will not be liable to you or any third party for any modification, suspension, or discontinuance of the site.
          </p>

          <h2 className="text-2xl font-bold text-white pt-4">6. Governing Law</h2>
          <p>
            These Terms and Conditions shall be governed by and defined following the laws of India. Nitin Singh and yourself irrevocably consent that the courts of India shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.
          </p>

          <h2 className="text-2xl font-bold text-white pt-4">7. Disclaimer</h2>
          <p>
            THE SITE IS PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE SITE AND MY SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, I DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SITE AND YOUR USE THEREOF.
          </p>

          <h2 className="text-2xl font-bold text-white pt-4">8. Contact Me</h2>
          <p>
            In order to resolve a complaint regarding the site or to receive further information regarding use of the site, please contact me at: <a href="mailto:nitinsinghji12@gmail.com" className="text-cyan-400 hover:underline">nitinsinghji12@gmail.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsScreen;