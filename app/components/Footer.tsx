// components/Footer.tsx
import React from "react";
import { Facebook, Twitter, Linkedin, Github, Instagram } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t-0.5 border-cyan-500/40 text-white py-10 px-6 relative overflow-hidden ">
      {/* Neon corner accents */}
      <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-cyan-400 rounded-bl-lg animate-pulse"></div>
      <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-purple-400 rounded-br-lg animate-pulse" style={{ animationDelay: '0.2s' }}></div>
      <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-blue-400 rounded-tl-lg animate-pulse" style={{ animationDelay: '0.4s' }}></div>
      <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-pink-400 rounded-tr-lg animate-pulse" style={{ animationDelay: '0.6s' }}></div>

      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Section */}
        <p className="text-sm font-mono text-cyan-300">
          © {currentYear} <span className="text-white font-semibold">MSA IIIT Dharwad</span> | 
          Designed by <span className="text-white font-semibold">Sai Sathwik</span> | 
          Developed by <span className="text-white font-semibold">Harshith D</span>
        </p>

        {/* Center Section */}
        <p className="text-xs italic font-mono text-purple-300">
          Empowering Developers | Assisted by MSA Team
        </p>

        {/* Right Section: Social Icons */}
        <div className="flex gap-5">
          <a href="https://Instagram.com/msa_iiitdwd" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors duration-300">
            <Instagram  size={22} className="hover:animate-pulse" />
          </a>
          <a href="https://x.com/mlsa_iiitdwd" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition-colors duration-300">
            <Twitter size={22} className="hover:animate-pulse" />
          </a>
          <a href="https://www.linkedin.com/company/mlsa-iiitdwd/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors duration-300">
            <Linkedin size={22} className="hover:animate-pulse" />
          </a>
          <a href="https://github.com/Harshith-Daraboina/MSA-Landing" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors duration-300">
            <Github size={22} className="hover:animate-pulse" />
          </a>
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-xs font-mono text-cyan-400">
        Made with <span className="text-red-500">❤️</span> by the MSA IIIT Dharwad Community
      </div>
    </footer>
  );
};

export default Footer;
