
import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    title: "Senior Software Engineer",
    company: "Tech Innovations Inc.",
    location: "San Francisco, CA",
    period: "2021 - Present",
    description: "Leading full-stack development of enterprise applications using React, Node.js, and AWS. Mentoring junior developers and architecting scalable solutions for 10M+ users.",
    achievements: [
      "Reduced application load time by 60%",
      "Led team of 8 engineers",
      "Implemented CI/CD pipeline"
    ]
  },
  {
    title: "Full Stack Developer",
    company: "Digital Solutions LLC",
    location: "Austin, TX",
    period: "2019 - 2021",
    description: "Developed and maintained web applications using modern JavaScript frameworks. Collaborated with cross-functional teams to deliver high-quality software solutions.",
    achievements: [
      "Built 15+ production applications",
      "Improved code coverage to 90%",
      "Reduced bug reports by 45%"
    ]
  },
  {
    title: "Software Developer",
    company: "StartupTech",
    location: "Remote",
    period: "2017 - 2019",
    description: "Contributed to the development of a SaaS platform from ground up. Focused on frontend development and user experience optimization.",
    achievements: [
      "Launched MVP in 6 months",
      "Achieved 95% user satisfaction",
      "Optimized mobile performance"
    ]
  }
];

const ExperienceSection = () => {
  return (
    <section className="py-20 bg-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
          Professional Experience
        </h2>
        
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-emerald-500"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start space-x-8 group">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Briefcase className="w-8 h-8 text-white" />
                </div>
                
                <div className="flex-grow bg-slate-700/50 rounded-xl p-8 backdrop-blur-sm border border-slate-600/30 hover:border-blue-500/30 transition-all duration-300 hover:shadow-xl">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white mb-2 md:mb-0">{exp.title}</h3>
                    <div className="flex items-center text-slate-400 text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      {exp.period}
                    </div>
                  </div>
                  
                  <div className="flex items-center text-emerald-400 mb-4">
                    <span className="text-lg font-medium mr-3">{exp.company}</span>
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="text-sm">{exp.location}</span>
                  </div>
                  
                  <p className="text-slate-300 mb-6 leading-relaxed">{exp.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {exp.achievements.map((achievement, i) => (
                      <div key={i} className="bg-slate-600/30 rounded-lg p-4 border border-slate-500/20">
                        <span className="text-blue-400 text-sm font-medium">✓ {achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
