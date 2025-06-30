
import React from 'react';
import { Twitter, Mail, Github, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              Alex Developer
            </h3>
            <p className="text-slate-400 mt-2">Building the future, one line of code at a time.</p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://twitter.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300 hover:scale-110 transform"
            >
              <Twitter className="w-5 h-5 text-slate-400 hover:text-white" />
            </a>
            <a 
              href="https://github.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors duration-300 hover:scale-110 transform"
            >
              <Github className="w-5 h-5 text-slate-400 hover:text-white" />
            </a>
            <a 
              href="https://linkedin.com/in/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-300 hover:scale-110 transform"
            >
              <Linkedin className="w-5 h-5 text-slate-400 hover:text-white" />
            </a>
            <a 
              href="mailto:your.email@example.com"
              className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors duration-300 hover:scale-110 transform"
            >
              <Mail className="w-5 h-5 text-slate-400 hover:text-white" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-slate-800 text-center">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Alex Developer. All rights reserved. Built with React & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
