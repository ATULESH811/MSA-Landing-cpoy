import React, { useState, useRef, useEffect } from 'react';

interface MilestoneItem {
  title: string;
  description: string;
  imgSrc: string;
}

const milestones: MilestoneItem[] = [
  {
    title: 'Microsoft Learn Student Ambassador (MSA)',
    description: `The MSA program is a global community of student leaders passionate about technology. Ambassadors connect with peers, host events, learn new skills, and get early access to Microsoft resources, helping them grow as developers and leaders.`,
    imgSrc: '/images/msa.png',
  },
  {
    title: 'Beta MSA',
    description: `A Beta Ambassador is a student who has gone beyond the basics—actively contributing to their community through workshops, projects, and technical sessions. They showcase leadership, creativity, and consistency, inspiring others to explore technology.`,
    imgSrc: '/images/beta-msa.png',
  },
  {
    title: 'Gold MSA',
    description: `The Gold Ambassador is the highest recognition in the program. Gold MSAs are leaders who make a significant impact at both local and global levels. They mentor other Ambassadors, collaborate with industry experts, and represent the program as role models in the tech ecosystem.`,
    imgSrc: '/images/gold-msa.png',
  },
];

const Milestone = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="milestones" 
      ref={containerRef}
      className="relative py-24 bg-gray-950 overflow-hidden min-h-screen flex items-center"
    >
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-10 right-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-ping-slow"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-20 bg-grid-pattern bg-cover"></div>
        
        {/* Binary Rain Effect */}
        <div className="absolute inset-0 overflow-hidden opacity-30">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="absolute text-cyan-400/40 text-xs animate-binary-fall"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${15 + Math.random() * 10}s`
              }}
            >
              {Math.random() > 0.5 ? '1' : '0'}
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 mb-16 animate-gradient-text bg-300%">
          Pathway to Excellence
        </h2>

        {/* Navigation Dots */}
        <div className="flex justify-center space-x-3 mb-10">
          {milestones.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-500 ${
                index === activeIndex 
                  ? 'bg-cyan-400 scale-125' 
                  : 'bg-gray-600 hover:bg-cyan-600'
              }`}
              aria-label={`Go to milestone ${index + 1}`}
            />
          ))}
        </div>

        {/* Main Milestone Display */}
        <div className="relative h-96 md:h-[500px] mb-16">
          {milestones.map((item, index) => (
            <div
              key={index}
              className={`absolute inset-0 flex flex-col md:flex-row items-center justify-center transition-all duration-700 ${
                index === activeIndex
                  ? 'opacity-100 transform translate-x-0'
                  : 'opacity-0 transform translate-x-full'
              }`}
            >
              {/* Holographic Image */}
              <div className="relative w-56 h-56 md:w-72 md:h-72 mb-8 md:mb-0 md:mr-12">
                <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-xl animate-pulse"></div>
                <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-cyan-400/50 shadow-lg shadow-cyan-500/30">
                  <img 
                    src={item.imgSrc} 
                    alt={item.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-cyan-500/10"></div>
                </div>
                <div className="absolute -inset-4 bg-cyan-500/10 rounded-full blur-md -z-10"></div>
              </div>

              {/* Content */}
              <div className="text-left max-w-md">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  {item.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Milestone Cards (Grid View) */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          {milestones.map((item, index) => (
            <div
              key={index}
              className={`bg-gray-900/80 backdrop-blur-xl border rounded-2xl p-6 shadow-lg transform transition-all duration-500 group cursor-pointer ${
                index === activeIndex
                  ? 'border-cyan-400/50 scale-105 shadow-cyan-500/30'
                  : 'border-cyan-400/30 shadow-cyan-500/10 hover:scale-105'
              }`}
              onClick={() => setActiveIndex(index)}
            >
              {/* Holographic Badge */}
              <div className="relative w-20 h-20 mx-auto mb-6">
                <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-md"></div>
                <div className="relative w-full h-full rounded-full overflow-hidden border border-cyan-400/50">
                  <img 
                    src={item.imgSrc} 
                    alt={item.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-2 -right-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full animate-pulse">
                  {index + 1}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-white mb-3 text-center">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 text-sm leading-relaxed">
                {item.description.slice(0, 120)}...
              </p>

              {/* View More Indicator */}
              <div className="text-center mt-4">
                <span className="text-cyan-400 text-sm font-medium group-hover:underline">
                  {index === activeIndex ? 'Currently Viewing' : 'View Details'}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Progress Bar */}
        <div className="mt-16 bg-gray-800 h-2 rounded-full overflow-hidden">
          <div 
            className="bg-gradient-to-r from-cyan-500 to-purple-500 h-full rounded-full transition-all duration-1000"
            style={{ width: `${((activeIndex + 1) / milestones.length) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes gradient-text {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes binary-fall {
          0% { transform: translateY(-100px); opacity: 0; }
          10% { opacity: 0.7; }
          90% { opacity: 0.5; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
        
        @keyframes ping-slow {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.5); opacity: 0.2; }
        }
        
        .animate-gradient-text {
          animation: gradient-text 5s ease infinite;
          background-size: 200% auto;
        }
        
        .animate-binary-fall {
          animation: binary-fall linear infinite;
        }
        
        .animate-ping-slow {
          animation: ping-slow 4s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        
        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px);
          background-size: 40px 40px;
        }
      `}</style>
    </section>
  );
};

export default Milestone;