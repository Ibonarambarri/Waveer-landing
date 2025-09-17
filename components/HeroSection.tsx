import React from 'react';
import Image from 'next/image';

const HeroSection: React.FC = () => {
  return (
    <main className="flex-1 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-2xl md:max-w-4xl lg:max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 sm:p-12 lg:p-16">
          <div className="text-center space-y-10 sm:space-y-12">
            <div className="space-y-8">
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-secondary/10 text-primary text-base sm:text-lg font-bold">
                In Development
              </div>

              <div className="flex justify-center">
                <Image
                  src="/trippilot-logo.jpg"
                  alt="TripPilot"
                  width={600}
                  height={180}
                  className="w-auto h-32 sm:h-40 lg:h-48"
                  priority
                />
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl text-primary font-black max-w-3xl mx-auto">
                Smart AI Travel Organizer
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <p className="text-xl sm:text-2xl lg:text-3xl text-gray-600 leading-relaxed font-semibold">
                We're developing the next generation of travel planning.
                Stay updated with our progress here, or follow us on X for
                more detailed development updates.
              </p>
            </div>

            <div className="pt-10">
              <a
                href="https://x.com/trippilot_es"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-10 py-5 bg-primary text-white font-bold rounded-xl text-lg
                         hover:bg-primary/90 transition-all duration-200 transform hover:scale-105
                         focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 shadow-lg"
              >
                <svg
                  className="w-6 h-6 mr-4"
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
      </div>
    </main>
  );
};

export default HeroSection;