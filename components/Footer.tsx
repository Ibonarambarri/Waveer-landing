import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-50 to-gray-100 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div className="text-sm sm:text-base text-gray-600 font-bold">
            © {currentYear} Waveer. All rights reserved.
          </div>

          <div className="flex space-x-6 sm:space-x-8">
            <a
              href="#"
              className="text-sm sm:text-base text-gray-600 hover:text-primary transition-colors duration-200 font-bold"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-sm sm:text-base text-gray-600 hover:text-primary transition-colors duration-200 font-bold"
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