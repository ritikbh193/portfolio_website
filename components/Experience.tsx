import React from 'react';
import { EXPERIENCES } from '../constants';
import { Briefcase, Calendar } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-3">
          <span className="text-primary">03.</span> Professional Journey
        </h2>

        <div className="relative border-l border-slate-800 ml-3 md:ml-6 space-y-12">
          {EXPERIENCES.map((exp, index) => (
            <div key={exp.id} className="relative pl-8 md:pl-12 group">
              {/* Timeline Node */}
              <div className="absolute -left-[5px] top-2 h-3 w-3 rounded-full bg-slate-800 border border-slate-600 group-hover:bg-primary group-hover:border-primary transition-colors duration-300"></div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                  {exp.role} <span className="text-primary">@ {exp.company}</span>
                </h3>
                <div className="flex items-center gap-2 text-sm text-slate-500 font-mono mt-1 sm:mt-0">
                  <Calendar className="w-4 h-4" />
                  {exp.period}
                </div>
              </div>

              <div className="bg-slate-900/40 border border-slate-800 rounded-xl p-6 hover:bg-slate-900/60 transition-colors">
                <ul className="space-y-3">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-400 text-base leading-relaxed">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-secondary flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
