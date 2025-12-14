import React from 'react';
import { ArrowRight, Download, Terminal } from 'lucide-react';

const Hero: React.FC = () => {
  const resumeLink = "https://drive.google.com/file/d/1MDlN7nIRBsgbGX_pCi0JLFjnXIy2fLd6/view";

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Effects */}
      <div className="absolute inset-0 w-full h-full bg-dark">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-emerald-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/50 border border-slate-700 mb-8 backdrop-blur-sm animate-fade-in-up">
          <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
          <span className="text-xs font-mono text-slate-300">Available for innovative projects</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 animate-fade-in-up [animation-delay:200ms]">
          Ritik Bhawsar
        </h1>
        
        <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary rounded-full mb-6 animate-fade-in-up [animation-delay:300ms]"></div>

        <h2 className="text-xl md:text-3xl font-medium text-slate-300 mb-6 animate-fade-in-up [animation-delay:400ms]">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-secondary">
            AI Engineer
          </span>
          {' '}| Machine Learning | Generative AI
        </h2>

        <p className="max-w-2xl text-slate-400 text-lg mb-10 leading-relaxed animate-fade-in-up [animation-delay:500ms]">
          Building intelligent systems with AI, LLMs, and real-world problem solving. 
          Transforming data into actionable insights through state-of-the-art deep learning architectures.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up [animation-delay:600ms]">
          <a href="#projects" className="group relative inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-primary rounded-full overflow-hidden transition-all duration-300 hover:bg-sky-400 hover:shadow-[0_0_20px_rgba(14,165,233,0.5)]">
            <span className="relative z-10 flex items-center gap-2">
              View Projects <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
          
          <a href={resumeLink} target="_blank" rel="noreferrer" className="group inline-flex items-center justify-center px-8 py-3 text-base font-medium text-slate-300 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:text-white transition-all duration-300 backdrop-blur-sm">
            <span className="flex items-center gap-2">
              Download Resume <Download className="w-4 h-4" />
            </span>
          </a>
          
          <a href="#contact" className="group inline-flex items-center justify-center px-8 py-3 text-base font-medium text-slate-300 hover:text-white transition-colors">
            Contact Me
          </a>
        </div>
      </div>

      {/* Decorative code snippet */}
      {/* <div className="absolute bottom-10 left-10 hidden lg:block opacity-30 pointer-events-none font-mono text-xs text-primary">
        <div className="bg-slate-900/80 p-4 rounded-lg border border-slate-800 backdrop-blur-sm">
           <p className="mb-1"><span className="text-purple-400">class</span> <span className="text-yellow-200">Engineer</span>:</p>
           <p className="mb-1 pl-4"><span className="text-purple-400">def</span> <span className="text-blue-400">__init__</span>(self):</p>
           <p className="mb-1 pl-8">self.stack = [<span className="text-green-300">'PyTorch'</span>, <span className="text-green-300">'LLMs'</span>]</p>
           <p className="mb-1 pl-8">self.passion = <span className="text-green-300">'Building the Future'</span></p>
        </div>
      </div> */}
    </section>
  );
};

export default Hero;
