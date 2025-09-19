import React from 'react';
import Image from 'next/image';

const HeroSection: React.FC = () => {
  return (
    <main className="min-h-screen bg-gradient-modern flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Panel - Main Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-6">
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/20 backdrop-blur-sm text-white border border-white/30 text-sm sm:text-base font-semibold">
                ✨ In Development
              </div>

              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-tight">
                  TripPilot
                </h1>
                <h2 className="text-xl sm:text-2xl lg:text-3xl text-white/90 font-semibold">
                  Smart AI Travel Organizer
                </h2>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-lg sm:text-xl lg:text-2xl text-white/80 leading-relaxed font-medium max-w-2xl">
                We're developing the next generation of travel planning with artificial intelligence.
                Stay updated with our progress or follow us on X for detailed development updates.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="https://x.com/trippilot_es"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-modern animate-delay-200"
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

                <button
                  className="inline-flex items-center justify-center px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-xl text-lg border border-white/30 transition-all duration-300 transform hover:scale-105 hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent animate-delay-400"
                  disabled
                >
                  🚀 Get Early Access
                  <span className="ml-2 text-sm">(Soon)</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Panel - Visual Content */}
          <div className="relative animate-fade-in-up animate-delay-200">
            <div className="card-modern p-8 lg:p-12 animate-float">
              <div className="space-y-8">
                <div className="flex justify-center">
                  <Image
                    src="/trippilot-logo.png"
                    alt="TripPilot"
                    width={400}
                    height={120}
                    className="w-auto h-20 sm:h-24 lg:h-28"
                  />
                </div>

                <div className="space-y-6 text-center">
                  <h3 className="text-2xl lg:text-3xl font-bold text-primary">
                    Coming Soon
                  </h3>

                  <div className="space-y-4 text-gray-600">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-sm lg:text-base">AI-powered itinerary planning</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      <span className="text-sm lg:text-base">Smart budget optimization</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm lg:text-base">Real-time travel assistance</span>
                    </div>
                  </div>

                  <div className="pt-6">
                    <div className="bg-gradient-subtle rounded-2xl p-6">
                      <p className="text-sm text-gray-500 leading-relaxed">
                        "Join us and start planning incredible trips with your personal travel assistant."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;