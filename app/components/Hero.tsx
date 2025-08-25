import React, { useState, useEffect } from 'react';

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
      <section id="home" className="relative min-h-screen pt-20 flex items-center justify-center overflow-hidden">
        {/* Enhanced Professional Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-blue-900">
          {/* Animated Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-blue-900/30 to-indigo-900/20 animate-gradient-shift"></div>
          
          {/* Starry Background */}
          <div className="absolute inset-0 bg-stars opacity-40"></div>
          
          {/* Subtle Grid Pattern */}
          <div className="absolute inset-0 bg-grid-pattern opacity-3"></div>
          
          {/* Enhanced Gradient Orbs with Animation */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-600/12 to-indigo-600/12 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-cyan-600/8 to-blue-600/8 rounded-full blur-2xl animate-spin-slow"></div>
        </div>

        <div className="container mx-auto px-8 py-16 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            
            {/* Enhanced Status Badge */}
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-500/15 to-purple-500/15 border border-blue-400/25 rounded-full px-6 py-3 mb-8 backdrop-blur-md shadow-lg animate-fade-in">
              <div className="relative">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <div className="absolute inset-0 w-3 h-3 bg-green-400 rounded-full animate-ping opacity-75"></div>
              </div>
              <span className="text-blue-200 font-semibold text-sm tracking-wider uppercase bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
                Microsoft Student Ambassador Community
              </span>
            </div>

            {/* Enhanced Main Heading with Animation */}
            <div className="relative mb-8">
              {/* Glowing backdrop */}
              <div className="absolute -inset-8 bg-gradient-to-r from-blue-600/30 via-purple-600/30 to-indigo-600/30 rounded-3xl blur-2xl opacity-50 animate-pulse-glow"></div>
              
              <h1 className="relative text-5xl md:text-7xl font-black mb-4 leading-tight animate-slide-up">
                <span className="inline-block bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent animate-gradient-text">
                  MLSA
                </span>
                {' '}
                <span className="inline-block bg-gradient-to-r from-cyan-300 via-blue-300 to-indigo-300 bg-clip-text text-transparent animate-gradient-text-delayed">
                  IIIT Dharwad
                </span>
              </h1>
              
              {/* Decorative underline */}
              <div className="flex justify-center">
                <div className="h-1 w-32 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 rounded-full animate-expand"></div>
              </div>
            </div>

            {/* Subtitle */}
            <div className="max-w-3xl mx-auto mb-12 animate-fade-in-delayed">
              <p className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-10 font-light">
                Empowering the next generation of technology leaders through innovation, 
                collaboration, and cutting-edge Microsoft technologies
              </p>

              {/* Enhanced Founder Card */}
              <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-8 mb-8 shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:scale-105 animate-float-gentle">
                <div className="relative">
                  <div className="w-14 h-14 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 rounded-full flex items-center justify-center animate-spin-slow">
                    <div className="w-11 h-11 bg-white rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-bold text-base">AJ</span>
                    </div>
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-green-400 to-green-500 border-2 border-white rounded-full animate-pulse"></div>
                </div>
                <div className="text-left">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="text-white font-bold text-lg">Aryan Jaiswal</span>
                    <span className="bg-gradient-to-r from-blue-500/30 to-purple-500/30 text-blue-200 text-xs px-3 py-1.5 rounded-full border border-blue-400/30">Founder</span>
                  </div>
                  <p className="text-blue-300 text-sm mb-2 font-medium"><span className='text-yellow-400 font-bold'>Gold</span>-Microsoft Learn Student Ambassador</p>
                  <a
                    href="https://www.linkedin.com/in/aryanjstar/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-300 hover:text-blue-100 text-sm transition-all duration-300 hover:underline font-medium"
                  >
                    Connect on LinkedIn →
                  </a>
                </div>
              </div>

              {/* Enhanced Mission Statement */}
              <div className="relative mb-12 mt-12 animate-fade-in-up">
                {/* Multiple glowing layers */}
                <div className="absolute -inset-6 bg-gradient-to-r from-blue-600/25 via-purple-600/25 to-pink-600/25 rounded-2xl blur-xl opacity-60 animate-pulse-glow"></div>
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-xl blur-lg opacity-80 animate-pulse-glow-delayed"></div>
                
                <div className="relative bg-gradient-to-br from-blue-900/60 via-purple-900/50 to-indigo-900/60 backdrop-blur-xl border-2 border-gradient rounded-2xl p-8 shadow-2xl">
                  {/* <div className="flex items-center justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg 
                        key={i} 
                        className="w-6 h-6 text-yellow-400 mx-1 animate-twinkle" 
                        style={{animationDelay: `${i * 0.2}s`}}
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div> */}
                  <p className="text-3xl md:text-4xl font-light text-white italic mb-3 animate-text-glow">
                    <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 bg-clip-text text-transparent font-semibold">
                      &ldquo;Be a force for good!&rdquo;
                    </span>
                  </p>
                  <div className="text-blue-200 text-base font-medium">
                    Our guiding principle
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Statistics */}
            {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-8 transition-all duration-500 hover:bg-gradient-to-br hover:from-blue-500/20 hover:to-purple-500/20 hover:scale-105 hover:shadow-2xl animate-fade-in-up" style={{animationDelay: '0.1s'}}>
                <div className="text-5xl font-black text-transparent bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text mb-3 animate-count">{currentStats.members}+</div>
                <div className="text-gray-200 font-semibold">Active Members</div>
              </div>
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-8 transition-all duration-500 hover:bg-gradient-to-br hover:from-purple-500/20 hover:to-pink-500/20 hover:scale-105 hover:shadow-2xl animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                <div className="text-5xl font-black text-transparent bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text mb-3 animate-count">{currentStats.events}+</div>
                <div className="text-gray-200 font-semibold">Technical Events</div>
              </div>
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-8 transition-all duration-500 hover:bg-gradient-to-br hover:from-indigo-500/20 hover:to-purple-500/20 hover:scale-105 hover:shadow-2xl animate-fade-in-up" style={{animationDelay: '0.3s'}}>
                <div className="text-5xl font-black text-transparent bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text mb-3 animate-count">{currentStats.projects}+</div>
                <div className="text-gray-200 font-semibold">Innovation Projects</div>
              </div>
            </div> */}

            {/* Enhanced Call-to-Action Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16 animate-fade-in-up">
              <a
                href="https://mvp.microsoft.com/studentambassadors/?wt.mc_id=studentamb_360446/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white font-bold py-5 px-10 rounded-2xl transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-blue-500/30 transform hover:scale-105 animate-button-glow"
              >
                <span className="relative z-10">Become an MLSA</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <a
                href="https://chat.whatsapp.com/HiE8qUaaIpYJNA5WPuCozD"
                target="_blank"
                rel="noopener noreferrer"
                className="relative overflow-hidden bg-gradient-to-r from-white/15 to-white/10 backdrop-blur-xl border-2 border-white/30 text-white font-bold py-5 px-10 rounded-2xl transition-all duration-500 hover:bg-gradient-to-r hover:from-white/25 hover:to-white/20 hover:border-white/50 hover:scale-105 animate-button-pulse"
              >
                <span className="relative z-10">Join Community</span>
              </a>
            </div>

            {/* Enhanced Technology Partners */}
            <div className="border-t border-gradient-to-r from-transparent via-white/20 to-transparent pt-12 animate-fade-in-delayed">
              <p className="text-gray-300 text-sm uppercase tracking-wider mb-8 font-semibold">Powered by Microsoft Technologies</p>
              <div className="flex flex-wrap justify-center gap-4">
                {['Azure', '.NET', 'VS Code', 'GitHub', 'Power BI', 'Microsoft 365'].map((tech, index) => (
                  <div
                    key={tech}
                    className="px-6 py-3 bg-gradient-to-r from-white/10 to-white/5 border border-white/20 rounded-xl text-white text-sm font-medium transition-all duration-400 hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20 hover:scale-110 hover:shadow-lg animate-tech-float"
                    style={{animationDelay: `${index * 0.1}s`}}
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
          <div className="w-6 h-12 border-2 border-white/40 rounded-full flex justify-center p-2 bg-white/5 backdrop-blur-sm">
            <div className="w-1.5 h-4 bg-gradient-to-b from-white to-blue-300 rounded-full animate-bounce"></div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .border-gradient {
          border-image: linear-gradient(45deg, #3b82f6, #8b5cf6, #6366f1) 1;
        }
        
        .bg-grid-pattern {
          background-image: radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px);
          background-size: 40px 40px;
        }
        
        .bg-stars {
          background-image: 
            radial-gradient(2px 2px at 20px 30px, #eee, transparent),
            radial-gradient(2px 2px at 40px 70px, #fff, transparent),
            radial-gradient(1px 1px at 90px 40px, #ddd, transparent),
            radial-gradient(1px 1px at 130px 80px, #fff, transparent),
            radial-gradient(2px 2px at 160px 30px, #eee, transparent),
            radial-gradient(1px 1px at 210px 70px, #ddd, transparent),
            radial-gradient(2px 2px at 250px 40px, #fff, transparent),
            radial-gradient(1px 1px at 290px 80px, #eee, transparent),
            radial-gradient(2px 2px at 330px 30px, #ddd, transparent),
            radial-gradient(1px 1px at 370px 70px, #fff, transparent),
            radial-gradient(2px 2px at 410px 40px, #eee, transparent),
            radial-gradient(1px 1px at 450px 80px, #ddd, transparent),
            radial-gradient(2px 2px at 490px 30px, #fff, transparent),
            radial-gradient(1px 1px at 530px 70px, #eee, transparent),
            radial-gradient(2px 2px at 570px 40px, #ddd, transparent),
            radial-gradient(1px 1px at 610px 80px, #fff, transparent);
          background-size: 650px 650px;
          animation: twinkle 8s infinite ease-in-out;
        }
        
        @keyframes twinkle {
          0% { opacity: 0.3; }
          50% { opacity: 0.8; }
          100% { opacity: 0.3; }
        }

        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 0.9; transform: scale(1.05); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(1deg); }
          66% { transform: translateY(5px) rotate(-0.5deg); }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fade-in-delayed {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slide-up {
          from { opacity: 0; transform: translateY(50px); }
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

        @keyframes expand {
          from { width: 0; }
          to { width: 8rem; }
        }

        @keyframes pulse-glow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.8; }
        }

        @keyframes pulse-glow-delayed {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }

        @keyframes float-gentle {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }

        @keyframes text-glow {
          0%, 100% { text-shadow: 0 0 10px rgba(255, 255, 255, 0.3); }
          50% { text-shadow: 0 0 20px rgba(255, 255, 255, 0.5), 0 0 30px rgba(255, 255, 255, 0.3); }
        }

        @keyframes twinkle {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 1; }
        }

        @keyframes count {
          from { transform: scale(0.8); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }

        @keyframes button-glow {
          0%, 100% { box-shadow: 0 10px 25px rgba(59, 130, 246, 0.3); }
          50% { box-shadow: 0 15px 35px rgba(59, 130, 246, 0.5); }
        }

        @keyframes button-pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.02); }
        }

        @keyframes tech-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-3px); }
        }

        @keyframes bounce-gentle {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(-10px); }
        }

        .animate-gradient-shift { animation: gradient-shift 6s ease infinite; }
        .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
        .animate-fade-in { animation: fade-in 1s ease-out; }
        .animate-fade-in-delayed { animation: fade-in-delayed 1.2s ease-out; }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out; }
        .animate-slide-up { animation: slide-up 1s ease-out; }
        .animate-gradient-text { animation: gradient-text 3s ease infinite; }
        .animate-gradient-text-delayed { animation: gradient-text-delayed 3s ease infinite; }
        .animate-expand { animation: expand 1s ease-out; }
        .animate-pulse-glow { animation: pulse-glow 3s ease-in-out infinite; }
        .animate-pulse-glow-delayed { animation: pulse-glow-delayed 3s ease-in-out infinite 1s; }
        .animate-float-gentle { animation: float-gentle 4s ease-in-out infinite; }
        .animate-text-glow { animation: text-glow 2s ease-in-out infinite; }
        .animate-twinkle { animation: twinkle 2s ease-in-out infinite; }
        .animate-count { animation: count 0.8s ease-out; }
        .animate-button-glow { animation: button-glow 3s ease-in-out infinite; }
        .animate-button-pulse { animation: button-pulse 2s ease-in-out infinite; }
        .animate-tech-float { animation: tech-float 3s ease-in-out infinite; }
        .animate-bounce-gentle { animation: bounce-gentle 2s ease-in-out infinite; }
      `}</style>
    </>
  );
};

export default Hero;