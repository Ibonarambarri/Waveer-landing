import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div className="text-sm text-gray-600">
            © {currentYear} TripPilot. All rights reserved.
          </div>

          <div className="flex space-x-6">
            <a
              href="#"
              className="text-sm text-gray-600 hover:text-primary transition-colors duration-200"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-sm text-gray-600 hover:text-primary transition-colors duration-200"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;