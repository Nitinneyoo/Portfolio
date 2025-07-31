import React from 'react';

// You can use any icon from lucide-react or other libraries
// For this example, we'll create a simple gem shape with SVG.
const GemIcon = () => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-blue-500 drop-shadow-lg"
  >
    <path
      d="M12 2L2 8.5L12 22L22 8.5L12 2Z"
      fill="currentColor"
      stroke="#1E3A8A" // A darker blue for the stroke
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path
      d="M12 22V8.5"
      stroke="#1E40AF"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2 8.5L12 8.5L22 8.5"
      stroke="#3B82F6"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);


const ContactPageScreen = () => {
  return (
    <>
      {/* We are defining the custom animation keyframes here using a style tag.
        In a real project, this would go into your tailwind.config.js file.
      */}
      <style>
        {`
          @keyframes swing {
            0%, 100% {
              transform: rotate(15deg);
            }
            50% {
              transform: rotate(-15deg);
            }
          }
          .animate-swing {
            animation: swing 3s ease-in-out infinite;
          }
        `}
      </style>

      <div className="w-full h-screen bg-slate-50 flex flex-col items-center justify-center font-sans">
        <div className="relative flex flex-col items-center">
          {/* The chain of the pendant */}
          <div className="w-0.5 h-24 bg-gray-300 rounded-full"></div>

          {/* The swinging part of the pendant */}
          <div
            className="relative w-12 h-12 flex items-center justify-center transform-origin-top animate-swing"
          >
            {/* The top loop that connects to the chain */}
            <div className="absolute -top-2 w-4 h-4 rounded-full border-2 border-gray-400 bg-white"></div>

            {/* The Gem Icon */}
            <GemIcon />
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-lg font-medium text-gray-700">Pending Confirmation</p>
          <p className="text-sm text-gray-500">Please wait while we process your request...</p>
        </div>

      </div>
    </>
  );
}

export default ContactPageScreen;