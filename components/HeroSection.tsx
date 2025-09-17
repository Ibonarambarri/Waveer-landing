import React from 'react';
import Image from 'next/image';

const HeroSection: React.FC = () => {
  return (
    <main className="flex-1 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="text-center space-y-8">
          <div className="space-y-6">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary/10 text-primary text-sm font-medium">
              In Development
            </div>

            <div className="flex justify-center">
              <Image
                src="/trippilot-logo.jpg"
                alt="TripPilot"
                width={500}
                height={150}
                className="w-auto h-24 sm:h-32 lg:h-40"
                priority
              />
            </div>

            <h2 className="text-xl sm:text-2xl text-primary font-medium max-w-2xl mx-auto">
              Smart AI Travel Organizer
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              We're developing the next generation of travel planning.
              Stay updated with our progress here, or follow us on X for
              more detailed development updates.
            </p>
          </div>

          <div className="pt-8">
            <a
              href="https://x.com/trippilot_es"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-primary text-white font-semibold rounded-lg
                       hover:bg-primary/90 transition-all duration-200 transform hover:scale-105
                       focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 shadow-lg"
            >
              <svg
                className="w-5 h-5 mr-3"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              Follow on X
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;