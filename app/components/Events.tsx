import React, { useState, useRef, useEffect } from 'react';

interface Event {
  title: string;
  date: string;
  description: string;
  image?: string;
  status: 'past' | 'upcoming';
  category?: string;
}

const Events: React.FC = () => {
  const [activeEvent, setActiveEvent] = useState<number>(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const timelineRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const animationFrameRef = useRef<number | null>(null);

   const events: Event[] = [
    {
      title: "Empowering Your Tech Journey",
      date: "26th July 2024",
      description: "An event focusing on how to be an MLSA and hands-on experience with Git and GitHub.",
      image: "/images/IMG_1.jpg",
      status: 'past',
      category: "Workshop"
    },
    {
      title: "Establishment of MLSA Chapter",
      date: "24th October 2024",
      description: "An offline event introducing the MLSA program, its tiers, benefits, & how you can be a part of it.",
      image: "/images/IMG_2.jpg",
      status: 'past',
      category: "Official Launch"
    },
    {
      title: "Kickstart Your Web Dev Journey",
      date: "28th December 2024",
      description: "An online event providing an overview and roadmap of web development technologies.",
      image: "/images/IMG_3.jpg",
      status: 'past',
      category: "Webinar"
    },
    {
      title: "Get Together Session",
      date: "5th February 2025",
      description: "A fun-filled session designed to connect, interact, and engage with each other while enjoying exciting games and activities.",
      image: "/images/IMG_4.jpg",
      status: 'past',
      category: "Networking"
    },
    {
      title: "UI/UX Designing Workshop",
      date: "Coming Soon",
      description: "Learn the fundamentals of UI/UX design and get hands-on experience with Figma.",
      status: 'upcoming',
      category: "Workshop"
    },
    {
      title: "Open Source Workshop",
      date: "Coming Soon",
      description: "Explore the world of open-source development and learn how to contribute effectively.",
      status: 'upcoming',
      category: "Workshop"
    },
    {
      title: "IoT-Powered Smart Robot Car Workshop",
      date: "5th - 6th March 2025",
      description: "Build a smart robotic car using ESP8266/ESP32 and essential electronic components.",
      status: 'upcoming',
      category: "Hands-on"
    },
    {
      title: "MLSA Logic League 1.0",
      date: "7th March 2025",
      description: "A competitive programming event featuring debugging and coding contests.",
      status: 'upcoming',
      category: "Competition"
    },
    {
      title: "Vedic Coding",
      date: "10th March 2025",
      description: "Integrate traditional Vedic mathematical algorithms with modern programming techniques.",
      status: 'upcoming',
      category: "Workshop"
    },
    {
      title: "ModelCraft: Hands-on ML Workshop",
      date: "12th March 2025",
      description: "Work on a guided AI/ML project and implement a real-world solution.",
      status: 'upcoming',
      category: "AI/ML"
    },
    {
      title: "Data Duel - AI/ML Showdown",
      date: "13th March 2025",
      description: "Test your AI/ML knowledge and model-building capabilities in this competitive event.",
      status: 'upcoming',
      category: "Competition"
    },
    {
      title: "Cybersecurity Unplugged",
      date: "15th March 2025",
      description: "An insightful session with a seasoned Cybersecurity Expert.",
      status: 'upcoming',
      category: "Expert Session"
    }
  ];

  // Smooth scroll to position with spring effect
  const smoothScrollTo = (target: number, duration: number = 700) => {
    if (!timelineRef.current) return;
    
    const start = timelineRef.current.scrollLeft;
    const change = target - start;
    const startTime = performance.now();
    
    const animateScroll = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function (easeOutQuint)
      const ease = 1 - Math.pow(1 - progress, 5);
      
      if (timelineRef.current) {
        timelineRef.current.scrollLeft = start + change * ease;
      }
      
      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(animateScroll);
      } else {
        setIsScrolling(false);
      }
    };
    
    setIsScrolling(true);
    animationFrameRef.current = requestAnimationFrame(animateScroll);
  };

  // Handle mouse events for dragging timeline
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (timelineRef.current?.offsetLeft || 0));
    setScrollLeft(timelineRef.current?.scrollLeft || 0);
    
    // Cancel any ongoing animations
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    
    // After dragging, snap to the nearest event
    if (timelineRef.current) {
      const scrollPosition = timelineRef.current.scrollLeft + timelineRef.current.offsetWidth / 2;
      const eventElements = timelineRef.current.querySelectorAll('.event-card');
      
      let closestEvent = 0;
      let closestDistance = Infinity;
      
      eventElements.forEach((element, index) => {
        const distance = Math.abs((element as HTMLElement).offsetLeft - scrollPosition);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestEvent = index;
        }
      });
      
      const eventElement = eventElements[closestEvent] as HTMLElement;
      if (eventElement) {
        const targetScroll = eventElement.offsetLeft - timelineRef.current.offsetWidth / 2 + eventElement.offsetWidth / 2;
        smoothScrollTo(targetScroll);
        setActiveEvent(closestEvent);
      }
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (timelineRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (timelineRef.current) {
      timelineRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  // Handle touch events for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - (timelineRef.current?.offsetLeft || 0));
    setScrollLeft(timelineRef.current?.scrollLeft || 0);
    
    // Cancel any ongoing animations
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - (timelineRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (timelineRef.current) {
      timelineRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    
    // After dragging, snap to the nearest event
    if (timelineRef.current) {
      const scrollPosition = timelineRef.current.scrollLeft + timelineRef.current.offsetWidth / 2;
      const eventElements = timelineRef.current.querySelectorAll('.event-card');
      
      let closestEvent = 0;
      let closestDistance = Infinity;
      
      eventElements.forEach((element, index) => {
        const distance = Math.abs((element as HTMLElement).offsetLeft - scrollPosition);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestEvent = index;
        }
      });
      
      const eventElement = eventElements[closestEvent] as HTMLElement;
      if (eventElement) {
        const targetScroll = eventElement.offsetLeft - timelineRef.current.offsetWidth / 2 + eventElement.offsetWidth / 2;
        smoothScrollTo(targetScroll);
        setActiveEvent(closestEvent);
      }
    }
  };

  // Auto-scroll to active event
  useEffect(() => {
    if (timelineRef.current && !isDragging) {
      const eventElements = timelineRef.current.querySelectorAll('.event-card');
      const eventElement = eventElements[activeEvent] as HTMLElement;
      
      if (eventElement) {
        const targetScroll = eventElement.offsetLeft - timelineRef.current.offsetWidth / 2 + eventElement.offsetWidth / 2;
        smoothScrollTo(targetScroll);
      }
    }
  }, [activeEvent, isDragging]);

  // Clean up on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  const EventCard: React.FC<{ event: Event; index: number }> = ({ event, index }) => (
    <div 
      className={`event-card relative flex-shrink-0 w-80 h-96 mx-4 transition-all duration-500 cursor-pointer ${
        activeEvent === index ? 'scale-105 z-10' : 'scale-95 opacity-80'
      }`}
      onClick={() => !isScrolling && setActiveEvent(index)}
    >
      <div className={`h-full rounded-2xl overflow-hidden border-2 backdrop-blur-md flex flex-col transform transition-all duration-500 ${
        event.status === 'past' 
          ? 'bg-blue-900/30 border-blue-700/50 shadow-lg shadow-blue-500/20' 
          : 'bg-purple-900/30 border-purple-700/50 shadow-lg shadow-purple-500/20'
      } ${activeEvent === index ? 'ring-2 ring-white/50' : ''}`}>
        {/* Event image or placeholder */}
        <div className="h-40 relative overflow-hidden">
          {event.image ? (
            <img 
              src={event.image} 
              alt={event.title} 
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
            />
          ) : (
            <div className={`w-full h-full flex items-center justify-center transition-all duration-500 ${
              event.status === 'past' ? 'bg-blue-800/50' : 'bg-purple-800/50'
            }`}>
              <div className="text-4xl transform transition-transform duration-500 hover:scale-110">
                {event.status === 'past' ? '📅' : '🚀'}
              </div>
            </div>
          )}
          <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
            {event.category}
          </div>
          <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm ${
            event.status === 'past' ? 'bg-green-500/90 text-white' : 'bg-yellow-500/90 text-black'
          }`}>
            {event.status === 'past' ? 'Completed' : 'Upcoming'}
          </div>
        </div>
        
        {/* Event content */}
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-bold mb-2 text-white transition-all duration-300 hover:text-blue-300">{event.title}</h3>
          <div className="flex items-center mb-4 text-blue-300">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>{event.date}</span>
          </div>
          <p className="text-gray-300 mb-6 flex-grow">{event.description}</p>
          
          {event.status === 'upcoming' && (
            <button className="mt-auto bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/30">
              Register Now
            </button>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <section id="events" className="py-20 bg-gradient-to-b from-slate-900 to-gray-900 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Events Timeline
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Explore our past achievements and upcoming events. Scroll horizontally to navigate through our timeline.
          </p>
        </div>

        {/* Timeline navigation */}
        <div className="flex justify-center mb-10">
          <div className="bg-gray-800/50 rounded-full p-2 flex backdrop-blur-sm">
            <button 
              onClick={() => setActiveEvent(prev => Math.max(0, prev - 1))}
              disabled={activeEvent === 0 || isScrolling}
              className="px-4 py-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors mr-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div className="flex items-center px-4">
              <span className="text-blue-400 font-medium">{activeEvent + 1}</span>
              <span className="text-gray-400 mx-2">/</span>
              <span className="text-gray-400">{events.length}</span>
            </div>
            <button 
              onClick={() => setActiveEvent(prev => Math.min(events.length - 1, prev + 1))}
              disabled={activeEvent === events.length - 1 || isScrolling}
              className="px-4 py-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors ml-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Timeline container */}
        <div className="relative">
          {/* Timeline line with gradient animation */}
          <div className="absolute left-0 right-0 top-40 h-1 bg-gradient-to-r from-blue-500 to-purple-500 opacity-30">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-40 animate-pulse"></div>
          </div>
          
          {/* Scrollable timeline */}
          <div 
            ref={timelineRef}
            className="flex overflow-x-auto py-10 px-4 scrollbar-hide"
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onTouchMove={handleTouchMove}
            style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
          >
            <div className="flex items-center">
              {events.map((event, index) => (
                <React.Fragment key={index}>
                  <EventCard event={event} index={index} />
                  {/* Connector line between events with animation */}
                  {index < events.length - 1 && (
                    <div className="flex items-center justify-center w-16 relative">
                      <div className="w-0.5 h-16 bg-gradient-to-b from-blue-500 to-purple-500 opacity-30"></div>
                      <div className="absolute w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-white animate-ping opacity-75"></div>
                      </div>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* Event indicator dots */}
        <div className="flex justify-center mt-8">
          <div className="flex space-x-3">
            {events.map((_, index) => (
              <button
                key={index}
                onClick={() => !isScrolling && setActiveEvent(index)}
                disabled={isScrolling}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeEvent === index 
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 scale-125' 
                    : 'bg-gray-600 hover:bg-gray-500'
                } ${isScrolling ? 'opacity-50' : ''}`}
              ></button>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.8; }
        }
        
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        .animate-ping {
          animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        
        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default Events;