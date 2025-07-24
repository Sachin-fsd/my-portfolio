import React from "react";
import { FaInstagram, FaXTwitter, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full py-6 sm:py-8 bg-black-100/55 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-sm sm:text-base">
            <span className="text-center sm:text-left">
              Email: <a href="mailto:sachineducational555@gmail.com" className="text-secondary hover:text-white transition-colors duration-300 break-all">sachineducational555@gmail.com</a>
            </span>
            <span className="text-center sm:text-left">
              Phone: <a href="tel:+919304407446" className="text-secondary hover:text-white transition-colors duration-300">+91 9304407446</a>
            </span>
          </div>
          
          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/affection_4_you/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-white transition-colors duration-300 hover:scale-110 transform"
              aria-label="Instagram"
            >
              <FaInstagram size={20} className="sm:w-6 sm:h-6" />
            </a>
            <a 
              href="https://x.com/schn_05" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-secondary hover:text-white transition-colors duration-300 hover:scale-110 transform"
              aria-label="Twitter"
            >
              <FaXTwitter size={20} className="sm:w-6 sm:h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/real-sachin/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-white transition-colors duration-300 hover:scale-110 transform"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} className="sm:w-6 sm:h-6" />
            </a>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-4 pt-4 border-t border-secondary/20 text-center text-sm text-secondary">
          <p>&copy; {new Date().getFullYear()} Sachin Singh. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;