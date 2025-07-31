import { createFileRoute } from '@tanstack/react-router'
import { Home } from 'lucide-react';
import { Player } from '@lottiefiles/react-lottie-player';


export const Route = createFileRoute('/NotFoundPage/NotFoundPage')({
  component: NotFoundPage,
})

function NotFoundPage() {
  return (
    <div className="bg-[#0a0a0a] text-white font-sans min-h-screen flex flex-col items-center justify-center">
      <div className="max-w-md mx-auto text-center px-4">

        {/* Lottie Animation Player */}
        <Player
          autoplay
          loop
          src="https://lottie.host/b049a097-8333-46f3-855c-15a36ba45a70/E9w9b8vcbW.json" // A free 404 animation from LottieFiles
          style={{ height: '300px', width: '300px' }}
        />

        {/* --- Content --- */}
        <h1 className="text-4xl md:text-5xl font-extrabold mt-4">
          Page Not Found
        </h1>
        <p className="max-w-md mx-auto text-gray-400 text-lg mt-4 mb-8">
          Oops! The page you are looking for does not exist. It might have been moved or deleted.
        </p>

        {/* --- Back to Home Button --- */}
        <a
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 font-semibold text-black bg-white rounded-lg shadow-lg hover:bg-gray-200 transition-colors duration-300"
        >
          <Home className="w-4 h-4 mr-2" />
          Go Back Home
        </a>
      </div>
    </div>
  );
}
