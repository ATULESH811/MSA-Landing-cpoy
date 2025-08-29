import React, { useState, useEffect } from 'react';

const About: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  // Sample event images (replace with your actual event images)
  const eventImages = [
    "/images/IMG_1.jpg",
    "/images/IMG_3.jpg",
    "/images/IMG_4.jpg",
    "/images/IMG_2.jpg",
    "/images/IMG_6.jpg",
    "/images/IMG_5.jpg",
  ];

  const eventTitles = [
    "Azure Workshop 2023",
    "Hackathon Finals",
    "AI/ML Bootcamp",
    "Community Meetup",
    "Cloud Computing Seminar",
    "Developer Conference"
  ];

  const eventDescriptions = [
    "Hands-on workshop on Microsoft Azure cloud services",
    "Annual coding competition with exciting prizes",
    "Intensive training on artificial intelligence and machine learning",
    "Networking event with industry professionals",
    "Deep dive into cloud technologies and solutions",
    "Annual gathering of developers and tech enthusiasts"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    if (index === currentSlide) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsTransitioning(false);
    }, 300);
  };

  const goToNextSlide = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % eventImages.length);
      setIsTransitioning(false);
    }, 300);
  };

  const goToPrevSlide = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + eventImages.length) % eventImages.length);
      setIsTransitioning(false);
    }, 300);
  };

  return (
    <section id="about" className="relative py-20 bg-gray-950 overflow-hidden">
      {/* Futuristic Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Hexagonal Grid Overlay */}
        <div className="absolute inset-0 hex-grid opacity-20"></div>
        
        {/* Glowing Orbs */}
        <div className="absolute top-20 left-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
        
        {/* Connection Lines */}
        <div className="absolute inset-0 connection-lines"></div>
        
        {/* Floating Tech Elements */}
        <div className="absolute top-40 left-1/4 w-10 h-10 border border-cyan-400/30 rounded-lg transform rotate-45 animate-float-tech"></div>
        <div className="absolute bottom-40 right-1/3 w-6 h-6 border border-purple-400/30 rounded-full animate-float-tech" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/3 right-1/4 w-8 h-8 border border-blue-400/30 transform rotate-12 animate-float-tech" style={{animationDelay: '4s'}}></div>
        
        {/* Animated Scan Lines */}
        <div className="absolute inset-0 scan-lines"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
              About Us
            </span>
          </h2>
          
          {/* Animated Tech Underline */}
          <div className="flex justify-center mb-8">
            <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full animate-tech-underline"></div>
          </div>
          
          
        </div>

        {/* Event Slideshow */}
        <div className="mb-20 animate-fade-in-up">
          <div className="relative h-[600px] rounded-xl overflow-hidden shadow-2xl group border border-cyan-400/20">
            <div className="absolute inset-0 flex transition-transform duration-700 ease-in-out">
              {eventImages.map((image, index) => (
                <div 
                  key={index} 
                  className="w-full h-full flex-shrink-0 relative transition-transform duration-700"
                  style={{ 
                    transform: `translateX(-${currentSlide * 100}%)`,
                    opacity: index === currentSlide ? 1 : 0,
                    transition: 'opacity 0.7s ease-in-out',
                    position: 'absolute',
                    top: 0,
                    left: `${index * 100}%`
                  }}
                >
                  <img 
                    src={image} 
                    alt={`Event ${index + 1}`} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <h4 className="text-2xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                      {eventTitles[index]}
                    </h4>
                    <p className="text-cyan-200 mb-4">{eventDescriptions[index]}</p>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-cyan-600 rounded-full flex items-center justify-center mr-3">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-300">MSA IIIT Dharwad Event</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation buttons */}
            <button 
              onClick={goToPrevSlide}
              className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-cyan-500/80 text-white p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 backdrop-blur-sm"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={goToNextSlide}
              className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-cyan-500/80 text-white p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 backdrop-blur-sm"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Indicators */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
              {eventImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-cyan-500 scale-125' : 'bg-white/60 hover:bg-white'
                  }`}
                ></button>
              ))}
            </div>

            {/* Slide counter */}
            <div className="absolute top-6 right-6 bg-black/60 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
              {currentSlide + 1} / {eventImages.length}
            </div>
          </div>
        </div>

        {/* Founder Section */}
        <div className="bg-gray-900/80 backdrop-blur-xl border border-cyan-400/30 rounded-2xl p-8 md:p-12 shadow-xl shadow-cyan-500/10 animate-fade-in-up">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
            Meet the Founder
          </h3>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="relative">
              <div className="w-48 h-48 mx-auto md:mx-0 rounded-full overflow-hidden border-4 border-cyan-500/30 shadow-lg shadow-cyan-500/20">
                <img 
                  src="/images/AJ.jpg" 
                  alt="Aryan Jaiswal" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-cyan-600 text-white text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm">
                <span className="text-yellow-400">gold</span>-MSA
              </div>
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-cyan-500/20 rounded-full blur-xl -z-10"></div>
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <h4 className="text-2xl font-bold text-white mb-2">Aryan Jaiswal</h4>
              <p className="text-cyan-300 mb-4">Founder & Microsoft Student Ambassador</p>
              <p className="text-gray-300 leading-relaxed">
                Passionate about AI, Web Development, and Community Building. I am a B.Tech student specializing in full-stack development, AI/ML, and cloud technologies. With hands-on experience in building impactful projects and mentoring students, I aim to create a thriving tech community at IIIT Dharwad.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 justify-center md:justify-start">
                <a 
                  href="https://www.linkedin.com/in/aryanjstar/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="relative overflow-hidden flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-all duration-500 shadow-lg hover:shadow-cyan-500/30 transform hover:scale-105 group"
                >
                  <span className="relative z-10">Connect on LinkedIn</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
                <a 
                  href="https://github.com/aryanjstar" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="relative overflow-hidden flex items-center gap-2 bg-gray-800/70 backdrop-blur-sm border border-cyan-400/30 text-white font-medium py-2 px-4 rounded-lg transition-all duration-500 hover:border-cyan-400/50 hover:scale-105 group"
                >
                  <span className="relative z-10">GitHub</span>
                  <div className="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              </div>
            </div>

          </div>
        </div>
        <br />
        {/* lead */}
        <div className="bg-gray-900/80 backdrop-blur-xl border border-cyan-400/30 rounded-2xl p-8 md:p-12 shadow-xl shadow-cyan-500/10 animate-fade-in-up">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
            Meet the Current Lead
          </h3>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="relative">
              <div className="w-48 h-48 mx-auto md:mx-0 rounded-full overflow-hidden border-4 border-cyan-500/30 shadow-lg shadow-cyan-500/20">
                <img 
                  src="/images/SS.jpg" 
                  alt="Aryan Jaiswal" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-cyan-600 text-white text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm">
                <span className="text-cyan-400">alpha</span>-MSA
              </div>
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-cyan-500/20 rounded-full blur-xl -z-10"></div>
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <h4 className="text-2xl font-bold text-white mb-2">Sai Sathwik Ch</h4>
              <p className="text-cyan-300 mb-4">Current Lead Microsoft Student Ambassador</p>
              <p className="text-gray-300 leading-relaxed">
                I'm a senior at IIIT Dharwad pursuing a Bachelors degree in Computer Science. I have a keen interest in the field of Artificial Intelligence and Machine Learning, and I am excited to be a part of the Microsoft Student Ambassadors program. I am passionate about contributing to the growth and development of the Microsoft community, and I am committed to using my skills and knowledge to make a positive impact on the world.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 justify-center md:justify-start">
                <a 
                  href="https://www.linkedin.com/in/sai-sathwik-cheera-96364930a/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="relative overflow-hidden flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-all duration-500 shadow-lg hover:shadow-cyan-500/30 transform hover:scale-105 group"
                >
                  <span className="relative z-10">Connect on LinkedIn</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
                <a 
                  href="https://github.com/Saisathwik8838" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="relative overflow-hidden flex items-center gap-2 bg-gray-800/70 backdrop-blur-sm border border-cyan-400/30 text-white font-medium py-2 px-4 rounded-lg transition-all duration-500 hover:border-cyan-400/50 hover:scale-105 group"
                >
                  <span className="relative z-10">GitHub</span>
                  <div className="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>

      <style jsx>{`
        .hex-grid {
          background-image: 
            linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px),
            linear-gradient(180deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px);
          background-size: 30px 30px;
          mask-image: repeating-conic-gradient(#000 0% 25%, transparent 0% 50%);
          mask-size: 30px 30px;
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

        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-float-tech { animation: float-tech 8s ease-in-out infinite; }
        .animate-tech-underline { animation: tech-underline 2s ease-out forwards; }
        .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
        .animate-fade-in { animation: fade-in 1s ease-out; }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out; }
      `}</style>
    </section>
  );
};

export default About;