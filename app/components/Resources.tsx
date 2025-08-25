// components/Resources.tsx
import React from 'react';

interface Resource {
  title: string;
  description: string;
  link: string;
}

const Resources: React.FC = () => {
  const resources: Resource[] = [
    {
      title: "Microsoft Azure AI Essentials",
      description: "Learn the essentials of AI with Microsoft Azure for free on Linkedin.",
      link: "https://www.linkedin.com/learning/paths/microsoft-azure-ai-essentials-professional-certificate-by-microsoft-and-linkedin"
    },
    {
      title: "Web & App Dev with Microsoft",
      description: "Get started with web and app development using Microsoft technologies.",
      link: "https://developer.microsoft.com/en-us/javascript/?wt.mc_id=studentamb_360446"
    },
    {
      title: "Generative AI Course By Microsoft",
      description: "Discover the power of generative AI with this comprehensive course.",
      link: "https://learn.microsoft.com/en-gb/training/paths/design-dream-destination-ai/?wt.mc_id=fsi_generativeai_explore_wwl/?wt.mc_id=studentamb_360446"
    },
    {
      title: "MLSA Contributor ID Guide",
      description: "Learn how to use, curate and share your MLSA Contributor ID effectively.",
      link: "https://stdntpartners.sharepoint.com/sites/SAProgramHandbook/SitePages/Need-content-to-use-with-your-Sharing-ID-(1).aspx/?wt.mc_id=studentamb_360446"
    }
  ];

  return (
    <section id="resources" className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Resources</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((resource, index) => (
            <div key={index} className="bg-blue-800/40 backdrop-blur-sm rounded-xl p-6 flex flex-col h-full transition-transform hover:scale-105 hover:shadow-xl">
              <h3 className="text-xl font-semibold mb-4 text-blue-300">{resource.title}</h3>
              <p className="mb-6 flex-grow">{resource.description}</p>
              <a
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto bg-blue-600 hover:bg-blue-500 text-white font-medium py-2 px-4 rounded-lg transition-colors text-center"
              >
                Explore
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resources;