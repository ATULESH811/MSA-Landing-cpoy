// components/Footer.tsx
import React from "react";
import { Facebook, Twitter, Linkedin, Github } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 text-white py-8 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Left Section */}
        <p className="text-sm text-gray-300">
          © {currentYear} <span className="font-semibold">MLSA IIIT Dharwad</span> | 
          Designed by <span className="text-white font-semibold">Sai Sathwik</span> | 
          Developed by <span className="text-white font-semibold">Harshith D</span>
        </p>

        {/* Center Section */}
        <p className="text-xs text-gray-400 italic">Empowering Developers | Assisted by MSA Team</p>

        {/* Right Section: Social Icons */}
        <div className="flex gap-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
            <Facebook size={20} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition">
            <Twitter size={20} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
            <Linkedin size={20} />
          </a>
          <a href="https://github.com/Harshith-Daraboina/MSA-Landing" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition">
            <Github size={20} />
          </a>
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="mt-6 border-t border-gray-700 pt-4 text-center text-xs text-gray-500">
        Made with ❤️ by the MLSA IIIT Dharwad Community
      </div>
    </footer>
  );
};

export default Footer;
