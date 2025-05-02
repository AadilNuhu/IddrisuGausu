import { FaFacebook, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 md:flex md:items-center md:justify-between">
          {/* Logo and copyright */}
          <div className="flex justify-center md:order-2 space-x-6 md:space-x-8">
            <a 
              href="https://linkedin.com/in/yourprofile" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-600 transition-colors"
            >
              <FaFacebook className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a 
              href="https://youtube.com/yourchannel" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-red-600 transition-colors"
            >
              <FaYoutube className="h-6 w-6" />
              <span className="sr-only">YouTube</span>
            </a>
          </div>
          
          {/* Copyright text */}
          <div className="mt-8 md:mt-0 md:order-1">
            <p className="text-center text-base text-gray-500">
              &copy; {new Date().getFullYear()} Coach Sabato. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;