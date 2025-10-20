


import React from 'react';
import Typewriter from 'typewriter-effect';

const Loader: React.FC = () => {
  return (
    <div className="relative h-screen w-full">
      {/* Background image that will be blurred */}
      <img
        src="https://th.bing.com/th/id/OIP._ecVN9kSuOx9sg9bC2pynwHaEK?cb=iwc2&rs=1&pid=ImgDetMain"
        className="absolute inset-0 w-full h-full object-cover -z-10"
        alt="Blurry Background"
      />

      {/* Blurry overlay */}
      <div className="fixed inset-0 z-[9999] flex items-center justify-center backdrop-blur-md bg-white/40 dark:bg-black/30">
        <div className="bg-black/90 text-green-400 p-6 rounded-xl shadow-2xl border border-green-500 font-mono w-[90%] max-w-md">
          {/* Dots like a terminal */}
          <div className="mb-3 flex items-center gap-2">
            <span className="text-red-500">●</span>
            <span className="text-yellow-500">●</span>
            <span className="text-green-500">●</span>
          </div>

          {/* Typewriter effect */}
          <div className="text-base md:text-lg leading-relaxed">
            <Typewriter
              options={{
                strings: [
                  '$ npm run dev',
                  '$ git push origin main',
                  '$ yarn build',
                  '$ pnpm install',
                  '$ code .',
                ],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 50,
                pauseFor: 1500,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
