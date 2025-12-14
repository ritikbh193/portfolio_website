import React from 'react';
import { FileText, Download, Eye } from 'lucide-react';

const Resume: React.FC = () => {
  const resumeLink = "https://drive.google.com/file/d/1MDlN7nIRBsgbGX_pCi0JLFjnXIy2fLd6/view";

  return (
    <section id="resume" className="py-24 bg-dark relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">Resume</h2>
        <p className="text-slate-400 mb-12 max-w-2xl mx-auto">
          Currently open to new opportunities in AI/ML Engineering. 
          Grab a copy of my resume to learn more about my experience and technical skills.
        </p>

        <div className="relative group mx-auto w-full max-w-lg cursor-pointer">
          {/* Abstract Resume Preview - styled as a document */}
          <div className="relative bg-white h-[600px] rounded shadow-2xl overflow-hidden transform group-hover:scale-[1.02] transition-transform duration-300">
             {/* Header */}
             <div className="h-32 bg-slate-800 w-full"></div>
             {/* Content Lines Skeleton */}
             <div className="p-8 space-y-6">
                <div className="h-4 bg-slate-200 rounded w-1/3"></div>
                <div className="space-y-2">
                   <div className="h-2 bg-slate-100 rounded w-full"></div>
                   <div className="h-2 bg-slate-100 rounded w-full"></div>
                   <div className="h-2 bg-slate-100 rounded w-5/6"></div>
                </div>
                <div className="h-4 bg-slate-200 rounded w-1/4 mt-8"></div>
                <div className="space-y-2">
                   <div className="h-2 bg-slate-100 rounded w-full"></div>
                   <div className="h-2 bg-slate-100 rounded w-full"></div>
                   <div className="h-2 bg-slate-100 rounded w-4/5"></div>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-8">
                   <div className="h-24 bg-slate-50 rounded"></div>
                   <div className="h-24 bg-slate-50 rounded"></div>
                </div>
             </div>

             {/* Overlay */}
             <div className="absolute inset-0 bg-slate-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center flex-col gap-4 backdrop-blur-sm">
                 <a href={resumeLink} target="_blank" rel="noreferrer" className="px-6 py-3 bg-white text-slate-900 rounded-full font-bold flex items-center gap-2 hover:bg-primary hover:text-white transition-colors">
                    <Eye className="w-5 h-5" /> Preview PDF
                 </a>
                 <a href={resumeLink} target="_blank" rel="noreferrer" className="px-6 py-3 bg-transparent border-2 border-white text-white rounded-full font-bold flex items-center gap-2 hover:bg-white hover:text-slate-900 transition-colors">
                    <Download className="w-5 h-5" /> Download
                 </a>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;