import React from 'react';
import { BrainCircuit } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-slate-950 border-t border-slate-900">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
             <BrainCircuit className="h-6 w-6 text-slate-600" />
             <span className="text-slate-500 font-mono text-sm">© {new Date().getFullYear()} Ritik Bhawsar</span>
          </div>
          <p className="text-slate-600 text-sm font-mono text-center md:text-right">
             Designed & Built with React, Tailwind & LLMs
          </p>
       </div>
    </footer>
  );
};

export default Footer;
