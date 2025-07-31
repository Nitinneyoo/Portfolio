// --- Main Privacy Policy Page Component ---
const PrivacyPolicyScreen = () => {
  const lastUpdatedDate = "July 31, 2025";

  return (
    <div className="bg-[#0a0a0a] text-white font-sans min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        {/* --- Header --- */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-500">
            Last updated: {lastUpdatedDate}
          </p>
        </div>

        {/* --- Policy Content --- */}
        <div className="prose prose-invert prose-lg max-w-none text-gray-300 space-y-6">
          <p>
            Welcome to my personal portfolio website. Your privacy is important to me. This Privacy Policy explains how I collect, use, and protect your personal information when you visit my website.
          </p>

          <h2 className="text-2xl font-bold text-white pt-4">1. Information I Collect</h2>
          <p>
            I may collect personal information that you voluntarily provide to me when you use the contact form on my website. The information collected may include:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Your name</li>
            <li>Your email address</li>
            <li>The subject and content of your message</li>
          </ul>

          <h2 className="text-2xl font-bold text-white pt-4">2. How I Use Your Information</h2>
          <p>
            The personal information you provide is used solely for the following purposes:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>To respond to your inquiries, comments, or questions submitted through the contact form.</li>
            <li>To communicate with you regarding potential collaborations or job opportunities you have expressed interest in.</li>
          </ul>

          <h2 className="text-2xl font-bold text-white pt-4">3. Data Sharing and Disclosure</h2>
          <p>
            I do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. Your information is kept confidential and is used only for the purposes outlined in this policy. I may disclose your information if required to do so by law.
          </p>

          <h2 className="text-2xl font-bold text-white pt-4">4. Data Security</h2>
          <p>
            I take reasonable measures to protect the security of your personal information. However, please be aware that no method of transmission over the Internet or method of electronic storage is 100% secure. While I strive to use commercially acceptable means to protect your personal information, I cannot guarantee its absolute security.
          </p>

          <h2 className="text-2xl font-bold text-white pt-4">5. Third-Party Links</h2>
          <p>
            My website may contain links to third-party websites, such as GitHub, LinkedIn, and Twitter. This Privacy Policy does not apply to those external sites. I am not responsible for the privacy practices or the content of such websites. I encourage you to read the privacy policies of any third-party websites you visit.
          </p>

          <h2 className="text-2xl font-bold text-white pt-4">6. Changes to This Privacy Policy</h2>
          <p>
            I may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated "Last updated" date. I encourage you to review this Privacy Policy periodically to stay informed about how I am protecting your information.
          </p>

          <h2 className="text-2xl font-bold text-white pt-4">7. Contact Me</h2>
          <p>
            If you have any questions or concerns about this Privacy Policy, please feel free to contact me at <a href="mailto:nitinsinghji12@gmail.com" className="text-cyan-400 hover:underline">nitinsinghji12@gmail.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyScreen;