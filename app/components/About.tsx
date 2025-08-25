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
    <section id="about" className="py-20 bg-gradient-to-b from-gray-900 to-slate-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-72 bg-gradient-to-b from-blue-900/20 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Us
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            The Microsoft Learn Student Ambassadors (MLSA) program is a global initiative by Microsoft to empower students with technical skills, leadership opportunities, and a platform to innovate. The MLSA IIIT Dharwad Chapter is a student-driven community aimed at fostering a culture of learning, innovation, and collaboration among students.
          </p>
        </div> */}

        <div className="items-center mb-20">
          

          {/* Big Event Slideshow */}
          <div className="relative h-[720px] rounded-xl overflow-hidden shadow-2xl group">
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
                    <h4 className="text-2xl font-bold mb-2">{eventTitles[index]}</h4>
                    <p className="text-lg text-blue-200 mb-4">{eventDescriptions[index]}</p>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-sm">MLSA IIIT Dharwad Event</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation buttons */}
            <button 
              onClick={goToPrevSlide}
              className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-4 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={goToNextSlide}
              className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-4 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Indicators */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
              {eventImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-blue-500 scale-125' : 'bg-white/60 hover:bg-white'
                  }`}
                ></button>
              ))}
            </div>

            {/* Slide counter */}
            <div className="absolute top-6 right-6 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
              {currentSlide + 1} / {eventImages.length}
            </div>
          </div>
        </div>

        {/* Founder Section */}
        <div className="bg-gradient-to-r from-gray-800 to-slate-800 rounded-2xl p-8 md:p-12 shadow-xl">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center text-white">Meet the Founder</h3>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="relative">
              <div className="w-48 h-48 mx-auto md:mx-0 rounded-full overflow-hidden border-4 border-blue-500/30 shadow-lg">
                <img 
                  src="/images/AJ.jpg" 
                  alt="Aryan Jaiswal" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                β-MLSA
              </div>
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <h4 className="text-2xl font-bold text-white mb-2">Aryan Jaiswal</h4>
              <p className="text-blue-300 mb-4">Founder & Microsoft Student Ambassador</p>
              <p className="text-gray-300 leading-relaxed">
                Passionate about AI, Web Development, and Community Building. I am a B.Tech student specializing in full-stack development, AI/ML, and cloud technologies. With hands-on experience in building impactful projects and mentoring students, I aim to create a thriving tech community at IIIT Dharwad.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 justify-center md:justify-start">
                <a 
                  href="https://www.linkedin.com/in/aryanjstar/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  Connect on LinkedIn
                </a>
                <a 
                  href="https://github.com/aryanjstar" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors duration-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .shadow-2xl {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
        }
      `}</style>
    </section>
  );
};

export default About;