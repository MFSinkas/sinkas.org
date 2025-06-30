
import React from 'react';
import { Award, Star, TrendingUp, Users, Code, Zap } from 'lucide-react';

const highlights = [
  {
    icon: Award,
    title: "Top Performer 2023",
    description: "Recognized as the top performer in engineering excellence and innovation",
    metric: "Employee of the Year"
  },
  {
    icon: Star,
    title: "Open Source Contributor",
    description: "Active contributor to major open source projects with 1000+ GitHub stars",
    metric: "50+ repositories"
  },
  {
    icon: TrendingUp,
    title: "Performance Optimization",
    description: "Led initiatives that improved application performance by 60% across the board",
    metric: "60% improvement"
  },
  {
    icon: Users,
    title: "Team Leadership",
    description: "Successfully managed and mentored engineering teams of various sizes",
    metric: "20+ developers mentored"
  },
  {
    icon: Code,
    title: "Full-Stack Expertise",
    description: "Proficient in modern web technologies from frontend to backend and DevOps",
    metric: "10+ technologies"
  },
  {
    icon: Zap,
    title: "Innovation Leader",
    description: "Spearheaded adoption of cutting-edge technologies and development practices",
    metric: "5+ tech adoptions"
  }
];

const HighlightsSection = () => {
  return (
    <section className="py-20 bg-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
          Career Highlights
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <div key={index} className="group bg-gradient-to-br from-slate-700/50 to-slate-800/50 rounded-xl p-8 border border-slate-600/30 hover:border-blue-500/30 transition-all duration-300 hover:shadow-xl backdrop-blur-sm">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <highlight.icon className="w-6 h-6 text-white" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                    {highlight.title}
                  </h3>
                </div>
              </div>
              
              <p className="text-slate-300 mb-4 leading-relaxed">
                {highlight.description}
              </p>
              
              <div className="inline-flex items-center px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-sm font-medium">
                {highlight.metric}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600/10 to-emerald-600/10 rounded-2xl p-8 border border-blue-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Collaborate?</h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              I'm always interested in discussing new opportunities, sharing knowledge, or collaborating on exciting projects. 
              Let's connect and explore what we can build together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors duration-300 hover:scale-105 transform">
                Get In Touch
              </button>
              <button className="px-6 py-3 border-2 border-emerald-500 text-emerald-400 rounded-full hover:bg-emerald-500 hover:text-white transition-all duration-300 hover:scale-105 transform">
                Download Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;
