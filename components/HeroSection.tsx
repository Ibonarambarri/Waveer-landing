import React from 'react';
import Image from 'next/image';

const HeroSection: React.FC = () => {
  return (
    <main className="min-h-screen bg-gradient-modern flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-stretch">
          {/* Left Panel - Main Content Card */}
          <div className="relative animate-fade-in-up">
            <div className="card-modern p-6 sm:p-8 lg:p-12 h-full flex flex-col justify-center animate-float">
              <div className="space-y-5 sm:space-y-6 lg:space-y-8">
                <div className="flex justify-center items-center gap-3 sm:gap-4">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-primary leading-tight">
                    Waveer
                  </h1>
                  <Image
                    src="/waveer-logo.png"
                    alt="Waveer"
                    width={80}
                    height={80}
                    className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24"
                  />
                </div>

                <div className="space-y-5 sm:space-y-6 text-center">
                  <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-900 font-semibold">
                    Smart AI Travel Organizer
                  </h2>

                  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-900 leading-relaxed font-medium px-2">
                    We're developing the next generation of travel planning with artificial intelligence.
                    Stay updated with our progress or follow us on X for detailed development updates.
                  </p>

                  <div className="flex justify-center pt-5 sm:pt-6">
                    <button
                      className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 bg-primary/10 text-primary font-semibold rounded-xl text-base sm:text-lg border border-primary/30 transition-all duration-300 transform hover:scale-105 hover:bg-primary/20 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                      disabled
                    >
                      Get Early Access
                      <span className="ml-2 text-xs sm:text-sm">(Soon)</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/20 rounded-full blur-3xl"></div>
          </div>

          {/* Right Panel - Features Grid */}
          <div className="relative animate-fade-in-up animate-delay-200">
            <div className="card-modern p-6 sm:p-8 lg:p-12 h-full flex items-center animate-float animate-float-delay">
              <div className="grid grid-cols-2 gap-4 sm:gap-4 w-full">
                {/* Feature 1 */}
                <div className="bg-gradient-subtle rounded-xl sm:rounded-2xl p-4 sm:p-4 lg:p-5 flex flex-col justify-start space-y-2 sm:space-y-2">
                  <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-800 leading-tight">AI Itinerary Planning</h3>
                  <p className="text-xs lg:text-sm text-gray-600 leading-snug">Smart route optimization for your trips</p>
                </div>

                {/* Feature 2 */}
                <div className="bg-gradient-subtle rounded-xl sm:rounded-2xl p-4 sm:p-4 lg:p-5 flex flex-col justify-start space-y-2 sm:space-y-2">
                  <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-800 leading-tight">Budget Optimization</h3>
                  <p className="text-xs lg:text-sm text-gray-600 leading-snug">Get the best value for your money</p>
                </div>

                {/* Feature 3 */}
                <div className="bg-gradient-subtle rounded-xl sm:rounded-2xl p-4 sm:p-4 lg:p-5 flex flex-col justify-start space-y-2 sm:space-y-2">
                  <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-800 leading-tight">Real-time Assistant</h3>
                  <p className="text-xs lg:text-sm text-gray-600 leading-snug">24/7 AI support during your journey</p>
                </div>

                {/* Feature 4 */}
                <div className="bg-gradient-subtle rounded-xl sm:rounded-2xl p-4 sm:p-4 lg:p-5 flex flex-col justify-start space-y-2 sm:space-y-2">
                  <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-800 leading-tight">Smart Recommendations</h3>
                  <p className="text-xs lg:text-sm text-gray-600 leading-snug">Personalized suggestions based on your preferences</p>
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