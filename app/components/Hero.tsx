import React, { useState, useEffect } from 'react';
import { Spotlight } from './spotlight';
import { cn } from '@/lib/utils';

const Hero = () => {
  const [currentStats, setCurrentStats] = useState({ members: 0, events: 0, projects: 0 });

  useEffect(() => {
    // Animate counters
    interface Stats {
      members: number;
      events: number;
      projects: number;
    }

    type StatsKey = keyof Stats;

    type StatsSetter = React.Dispatch<React.SetStateAction<Stats>>;

    const animateCounter = (
      target: number,
      setter: StatsSetter,
      key: StatsKey,
      duration: number = 2000
    ) => {
      let start = 0;
      const end = target;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setter(prev => ({ ...prev, [key]: end }));
          clearInterval(timer);
        } else {
          setter(prev => ({ ...prev, [key]: Math.floor(start) }));
        }
      }, 16);
    };

    const timer = setTimeout(() => {
      animateCounter(250, setCurrentStats, 'members', 2000);
      animateCounter(15, setCurrentStats, 'events', 1500);
      animateCounter(8, setCurrentStats, 'projects', 1800);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <section id="home" className="relative min-h-screen pt-16 flex items-center justify-center overflow-hidden">
        {/* Spotlight Component */}
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
        
        {/* Futuristic AI-Inspired Background */}
        <div className="absolute inset-0 bg-gray-950 overflow-hidden">
          {/* Hexagonal Grid Overlay */}
          <div className="absolute inset-0 hex-grid opacity-20"></div>
          
          {/* Central Data Core Glow */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
          
          {/* Connection Lines */}
          <div className="absolute inset-0 connection-lines"></div>
          
          {/* Floating Tech Elements */}
          <div className="absolute top-20 left-20 w-10 h-10 border border-cyan-400/30 rounded-lg transform rotate-45 animate-float-tech"></div>
          <div className="absolute bottom-40 right-32 w-6 h-6 border border-purple-400/30 rounded-full animate-float-tech" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-40 right-40 w-8 h-8 border border-blue-400/30 transform rotate-12 animate-float-tech" style={{animationDelay: '4s'}}></div>
          
          {/* Animated Scan Lines */}
          <div className="absolute inset-0 scan-lines"></div>
        </div>

        <div className="container mx-auto px-6 py-12 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            
            {/* Futuristic Main Heading */}
            <div className="relative mb-6">
              {/* Binary Code Background Effect */}
              <div className="absolute -inset-6 bg-gray-900/50 rounded-2xl blur-xl opacity-50"></div>
              <div className="absolute -inset-6 binary-overlay opacity-30"></div>
              
              <h1 className="relative text-4xl md:text-6xl font-black mb-3 leading-tight animate-slide-up">
                <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 animate-gradient-text">
                  MSA
                </span>
                {' '}
                <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 animate-gradient-text-delayed">
                  IIIT Dharwad
                </span>
              </h1>
              
              {/* Animated Tech Underline */}
              <div className="flex justify-center">
                <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full animate-tech-underline"></div>
              </div>
            </div>

            {/* Subtitle */}
            <div className="max-w-2xl mx-auto mb-8 animate-fade-in-delayed">
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 font-light">
                Empowering the next generation of technology leaders through innovation, 
                collaboration, and cutting-edge Microsoft technologies
              </p>

              {/* Futuristic Mission Statement */}
              <div className="relative mb-10 mt-10 animate-fade-in-up">
                {/* Background Glow */}
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-600/25 via-blue-600/25 to-purple-600/25 rounded-xl blur-lg opacity-60 animate-pulse-glow"></div>

                {/* Terminal Container */}
                <div className="relative bg-gray-900/90 backdrop-blur-xl border border-cyan-400/30 rounded-xl shadow-2xl shadow-cyan-500/10 overflow-hidden">
                  
                  {/* Terminal Header */}
                  <div className="flex items-center space-x-2 px-4 py-2 bg-gray-800 border-b border-gray-700 text-gray-300 text-xs font-mono">
                    <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                    <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                    <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                    <span className="ml-4">~/goodness/mission</span>
                  </div>

                  {/* Terminal Body */}
                  <div className="p-6 font-mono text-cyan-300 text-lg">
                    <p><span className="text-green-400">➜</span> echo "<span className="animate-gradient-text bg-gradient-to-r from-cyan-400 via-emerald-300 to-rose-400 bg-clip-text text-transparent font-semibold">Be a force for good!</span>"</p>
                    <p className="text-emerald-300 mt-2">Be a force for good!</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Call-to-Action Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12 animate-fade-in-up">
              <a
                href="https://mvp.microsoft.com/studentambassadors/?wt.mc_id=studentamb_360446/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative overflow-hidden bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-cyan-500/30 transform hover:scale-105 animate-button-glow group"
              >
                <span className="relative z-10">Become an msa</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <a
                href="https://chat.whatsapp.com/HiE8qUaaIpYJNA5WPuCozD"
                target="_blank"
                rel="noopener noreferrer"
                className="relative overflow-hidden bg-gray-800/70 backdrop-blur-xl border-2 border-cyan-400/30 text-white font-bold py-4 px-8 rounded-xl transition-all duration-500 hover:border-cyan-400/50 hover:scale-105 animate-button-pulse group"
              >
                <span className="relative z-10">Join Community</span>
                <div className="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </div>

            {/* Futuristic Technology Partners */}
            <div className="border-t border-gray-700 pt-10 animate-fade-in-delayed">
              <p className="text-cyan-300 text-xs uppercase tracking-wider mb-6 font-semibold font-mono">Powered by Microsoft Technologies</p>
              <div className="flex flex-wrap justify-center gap-3">
                {['Azure', '.NET', 'VS Code', 'GitHub', 'Power BI', 'Microsoft 365'].map((tech, index) => (
                  <div
                    key={tech}
                    className="px-4 py-2 bg-gray-800/70 backdrop-blur-sm border border-cyan-400/20 rounded-lg text-cyan-300 text-xs font-medium font-mono transition-all duration-400 hover:bg-cyan-500/20 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/20 animate-tech-float"
                    style={{animationDelay: `${index * 0.1}s`}}
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .hex-grid {
          background-image: 
            linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px),
            linear-gradient(180deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px);
          background-size: 30px 30px;
          mask-image: repeating-conic-gradient(#000 0% 25%, transparent 0% 50%);
          mask-size: 30px 30px;
        }
        
        .binary-overlay::before {
          content: "010101 101010 010101 101010 010101 101010 010101 101010 010101 101010 010101 101010";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          color: rgba(6, 182, 212, 0.2);
          font-family: monospace;
          font-size: 6px;
          line-height: 1;
          overflow: hidden;
          white-space: nowrap;
          animation: binary-scroll 20s linear infinite;
        }
        
        .connection-lines::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            linear-gradient(to right, rgba(6, 182, 212, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(6, 182, 212, 0.1) 1px, transparent 1px);
          background-size: 30px 30px;
          mask-image: 
            radial-gradient(circle at 25% 25%, black 10%, transparent 20%),
            radial-gradient(circle at 75% 75%, black 10%, transparent 20%),
            radial-gradient(circle at 25% 75%, black 10%, transparent 20%),
            radial-gradient(circle at 75% 25%, black 10%, transparent 20%);
          mask-size: 100% 100%;
          mask-repeat: no-repeat;
        }
        
        .scan-lines {
          background: linear-gradient(
            to bottom,
            transparent 50%,
            rgba(6, 182, 212, 0.03) 51%,
            transparent 52%
          );
          background-size: 100% 3px;
          animation: scan 8s linear infinite;
          pointer-events: none;
        }
        
        @keyframes binary-scroll {
          0% { transform: translateY(0); }
          100% { transform: translateY(-100%); }
        }
        
        @keyframes scan {
          0% { background-position: 0 0; }
          100% { background-position: 0 100%; }
        }
        
        @keyframes float-tech {
          0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.3; }
          33% { transform: translateY(-8px) rotate(1deg); opacity: 0.5; }
          66% { transform: translateY(4px) rotate(-0.5deg); opacity: 0.4; }
        }
        
        @keyframes tech-underline {
          0% { width: 0; opacity: 0; }
          50% { width: 6rem; opacity: 1; }
          100% { box-shadow: 0 0 12px 2px rgba(6, 182, 212, 0.7); }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 0.9; transform: scale(1.05); }
        }

        @keyframes fade-in {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fade-in-delayed {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slide-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes gradient-text {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes gradient-text-delayed {
          0% { background-position: 100% 50%; }
          50% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }

        @keyframes pulse-glow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.8; }
        }

        @keyframes text-glow {
          0%, 100% { text-shadow: 0 0 8px rgba(6, 182, 212, 0.3); }
          50% { text-shadow: 0 0 15px rgba(6, 182, 212, 0.5), 0 0 25px rgba(6, 182, 212, 0.3); }
        }

        @keyframes button-glow {
          0%, 100% { box-shadow: 0 8px 20px rgba(6, 182, 212, 0.3); }
          50% { box-shadow: 0 12px 28px rgba(6, 182, 212, 0.5); }
        }

        @keyframes button-pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.02); }
        }

        @keyframes tech-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-2px); }
        }

        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-text {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }


        .animate-node-pulse { animation: node-pulse 3s ease-in-out infinite; }
        .animate-float-tech { animation: float-tech 8s ease-in-out infinite; }
        .animate-tech-underline { animation: tech-underline 2s ease-out forwards; }
        .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
        .animate-fade-in { animation: fade-in 1s ease-out; }
        .animate-fade-in-delayed { animation: fade-in-delayed 1.2s ease-out; }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out; }
        .animate-slide-up { animation: slide-up 1s ease-out; }
        .animate-gradient-text { animation: gradient-text 3s ease infinite; }
        .animate-gradient-text-delayed { animation: gradient-text-delayed 3s ease infinite; }
        .animate-pulse-glow { animation: pulse-glow 3s ease-in-out infinite; }
        .animate-text-glow { animation: text-glow 2s ease-in-out infinite; }
        .animate-button-glow { animation: button-glow 3s ease-in-out infinite; }
        .animate-button-pulse { animation: button-pulse 2s ease-in-out infinite; }
        .animate-tech-float { animation: tech-float 3s ease-in-out infinite; }
      `}</style>
    </>
  );
};

export default Hero;