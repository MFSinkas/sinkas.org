
import React from 'react';
import { Twitter } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=2000')] bg-cover bg-center opacity-10"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
        <div className="mb-8">
          <div className="w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden border-4 border-blue-500/30 shadow-2xl hover:scale-105 transition-transform duration-300">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=400&h=400&fit=crop&crop=face" 
              alt="Professional headshot"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent animate-fade-in">
          Hello, I'm Alex
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in">
          Senior Software Engineer passionate about building scalable solutions and sharing knowledge through conference talks. 
          I specialize in modern web technologies and love mentoring the next generation of developers.
        </p>
        
        <div className="flex justify-center items-center space-x-6">
          <a 
            href="https://twitter.com/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full transition-colors duration-300 hover:scale-105 transform"
          >
            <Twitter size={20} />
            <span>Follow me on X</span>
          </a>
          
          <button className="px-6 py-3 border-2 border-emerald-500 text-emerald-400 rounded-full hover:bg-emerald-500 hover:text-white transition-all duration-300 hover:scale-105 transform">
            View My Work
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
