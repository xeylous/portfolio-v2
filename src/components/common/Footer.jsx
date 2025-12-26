import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full py-6 mt-auto">
      <div className="max-w-7xl mx-auto text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Pariola. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
