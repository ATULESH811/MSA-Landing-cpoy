// components/Contact.tsx
import React from 'react';

const Contact: React.FC = () => {
  const contactMethods = [
    {
      icon: "fas fa-envelope",
      text: "Email",
      link: "mailto:mlsa@iiitdwd.ac.in"
    },
    {
      icon: "fab fa-linkedin",
      text: "LinkedIn",
      link: "https://www.linkedin.com/company/mlsa-iiitdwd"
    },
    {
      icon: "fab fa-github",
      text: "GitHub",
      link: "https://github.com/aryanjstar"
    },
    {
      icon: "fas fa-globe",
      text: "Portfolio",
      link: "https://aryanjaiswal.netlify.app"
    }
  ];

  return (
    <section id="contact" className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Contact Us</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-800/40 backdrop-blur-sm rounded-xl p-6 flex flex-col items-center justify-center transition-transform hover:scale-105 hover:shadow-xl group"
            >
              <div className="text-3xl mb-4 group-hover:text-blue-300 transition-colors">
                <i className={method.icon}></i>
              </div>
              <span className="text-lg font-medium">{method.text}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;