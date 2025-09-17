import React from 'react';
import Head from 'next/head';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>TripPilot - Smart AI Travel Organizer</title>
        <meta
          name="description"
          content="TripPilot is developing the next generation of travel planning with artificial intelligence. Stay updated with our progress."
        />
        <meta name="keywords" content="travel, AI, artificial intelligence, planning, TripPilot, travel organizer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="TripPilot - Smart AI Travel Organizer" />
        <meta
          property="og:description"
          content="We're developing the next generation of travel planning with AI."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="TripPilot - Smart AI Travel Organizer" />
        <meta
          name="twitter:description"
          content="We're developing the next generation of travel planning with AI."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen flex flex-col">
        <HeroSection />
        <Footer />
      </div>
    </>
  );
};

export default Home;