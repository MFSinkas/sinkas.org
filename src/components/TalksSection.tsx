
import React from 'react';
import { Play, Calendar, Users } from 'lucide-react';

const talks = [
  {
    title: "Building Scalable React Applications",
    event: "ReactConf 2023",
    date: "October 2023",
    audience: "500+ developers",
    thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=400&h=225&fit=crop",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    description: "Deep dive into React performance optimization techniques and architectural patterns for large-scale applications."
  },
  {
    title: "Modern DevOps Practices",
    event: "DevOps Summit 2023",
    date: "August 2023",
    audience: "300+ engineers",
    thumbnail: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=400&h=225&fit=crop",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    description: "Exploring CI/CD pipelines, containerization, and cloud-native deployment strategies."
  },
  {
    title: "The Future of Web Development",
    event: "TechTalks 2022",
    date: "November 2022",
    audience: "800+ attendees",
    thumbnail: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=400&h=225&fit=crop",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    description: "Predictions and insights on emerging web technologies and their impact on the industry."
  }
];

const TalksSection = () => {
  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
          Conference Talks
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {talks.map((talk, index) => (
            <div key={index} className="group bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300 hover:shadow-2xl hover:scale-105">
              <div className="relative">
                <img 
                  src={talk.thumbnail} 
                  alt={talk.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a 
                    href={talk.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 p-4 rounded-full transition-colors duration-300"
                  >
                    <Play className="w-8 h-8 text-white" />
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                  {talk.title}
                </h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-emerald-400 text-sm">
                    <span className="font-medium">{talk.event}</span>
                  </div>
                  <div className="flex items-center text-slate-400 text-sm">
                    <Calendar className="w-4 h-4 mr-2" />
                    {talk.date}
                  </div>
                  <div className="flex items-center text-slate-400 text-sm">
                    <Users className="w-4 h-4 mr-2" />
                    {talk.audience}
                  </div>
                </div>
                
                <p className="text-slate-300 text-sm leading-relaxed">
                  {talk.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://www.youtube.com/channel/your-channel" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-red-600 hover:bg-red-700 px-6 py-3 rounded-full transition-colors duration-300 hover:scale-105 transform"
          >
            <span>View All Talks on YouTube</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default TalksSection;
