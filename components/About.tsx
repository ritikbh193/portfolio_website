import React from 'react';
import { Brain, Cpu, Globe, Rocket } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Bio */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-primary">01.</span> About Me
            </h2>
            <div className="space-y-4 text-slate-400 text-lg leading-relaxed">
              <p>
                Hello! I'm <span className="text-white font-medium">Ritik Bhawsar</span>, a passionate AI & ML Engineer based in India. I enjoy bridging the gap between complex theoretical models and practical, real-world applications.
              </p>
              <p>
                My journey involves deep diving into <span className="text-secondary">Generative AI</span>, Large Language Models (LLMs), and Computer Vision. I have a knack for building production-ready systems, from fine-tuning open-source models (like LLaMA and Mistral) to deploying scalable APIs with FastAPI.
              </p>
              <p>
                Currently, I am working with startups to revolutionize workflows using AI agents and intelligent document processing. I am a constant learner, always experimenting with the latest in the AI landscape.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-2 gap-4">
               <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 flex items-center gap-3">
                 <div className="p-2 bg-primary/10 rounded-lg text-primary"><Brain className="w-5 h-5"/></div>
                 <span className="text-slate-300 text-sm font-medium">GenAI Expert</span>
               </div>
               <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 flex items-center gap-3">
                 <div className="p-2 bg-secondary/10 rounded-lg text-secondary"><Cpu className="w-5 h-5"/></div>
                 <span className="text-slate-300 text-sm font-medium">Model Fine-Tuning</span>
               </div>
            </div>
          </div>

          {/* Right Side: Visual/Stats */}
          <div className="relative">
             <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary rounded-2xl opacity-20 blur-lg"></div>
             <div className="relative bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl">
                <div className="space-y-6">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                    <div className="flex items-center gap-3">
                       <Rocket className="text-emerald-400" />
                       <span className="text-white font-mono">Projects Completed</span>
                    </div>
                    <span className="text-2xl font-bold text-white">15+</span>
                  </div>
                  
                  <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                    <div className="flex items-center gap-3">
                       <Brain className="text-primary" />
                       <span className="text-white font-mono">Models Deployed</span>
                    </div>
                    <span className="text-2xl font-bold text-white">10+</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                       <Globe className="text-purple-400" />
                       <span className="text-white font-mono">Location</span>
                    </div>
                    <span className="text-lg font-medium text-slate-300">India</span>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-800">
                    <p className="text-sm text-slate-500 font-mono mb-2">CURRENT FOCUS:</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 text-xs rounded-full bg-slate-800 text-primary border border-slate-700">Agentic Workflows</span>
                      <span className="px-3 py-1 text-xs rounded-full bg-slate-800 text-primary border border-slate-700">RAG Optimization</span>
                      <span className="px-3 py-1 text-xs rounded-full bg-slate-800 text-primary border border-slate-700">Multimodal AI</span>
                    </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
