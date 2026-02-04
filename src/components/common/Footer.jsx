import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full py-4 sm:py-6 md:py-8 mt-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center text-xs sm:text-sm md:text-base text-gray-500">
        &copy; {new Date().getFullYear()} Xeylous. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
