import React from 'react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, BarChart, Bar, XAxis, YAxis, Tooltip, Cell } from 'recharts';
import { SKILLS } from '../constants';
import { Brain, Database, Code2 } from 'lucide-react';

const Skills: React.FC = () => {
  // Process data for charts
  const categories = ['AI/ML', 'Frameworks', 'Backend/Tools'];
  
  const getCategoryData = (cat: string) => SKILLS.filter(s => s.category === cat);

  const radarData = SKILLS.filter(s => s.category === 'AI/ML' || s.level > 85).slice(0, 6).map(s => ({
    subject: s.name,
    A: s.level,
    fullMark: 100,
  }));

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-slate-900 border border-slate-700 p-2 rounded shadow-xl">
          <p className="text-white font-mono text-xs">{`${label}: ${payload[0].value}%`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <section id="skills" className="py-24 bg-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-3">
          <span className="text-primary">02.</span> Technical Arsenal
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Skill Cards */}
          <div className="glass-card p-6 rounded-2xl hover:border-primary/30 transition-colors group">
            <div className="h-12 w-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Brain className="text-primary w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">AI Core</h3>
            <div className="space-y-3">
              {getCategoryData('AI/ML').map(skill => (
                <div key={skill.name}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-slate-300">{skill.name}</span>
                    <span className="text-primary font-mono">{skill.level}%</span>
                  </div>
                  <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: `${skill.level}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card p-6 rounded-2xl hover:border-secondary/30 transition-colors group">
            <div className="h-12 w-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Code2 className="text-secondary w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Frameworks</h3>
            <div className="space-y-3">
              {getCategoryData('Frameworks').map(skill => (
                <div key={skill.name}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-slate-300">{skill.name}</span>
                    <span className="text-secondary font-mono">{skill.level}%</span>
                  </div>
                  <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-secondary rounded-full" style={{ width: `${skill.level}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card p-6 rounded-2xl hover:border-emerald-500/30 transition-colors group">
            <div className="h-12 w-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Database className="text-emerald-500 w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Backend & Tools</h3>
            <div className="space-y-3">
              {getCategoryData('Backend/Tools').map(skill => (
                <div key={skill.name}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-slate-300">{skill.name}</span>
                    <span className="text-emerald-400 font-mono">{skill.level}%</span>
                  </div>
                  <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${skill.level}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Visualizations Area */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           {/* Radar Chart */}
           <div className="glass-card p-6 rounded-2xl flex flex-col items-center justify-center min-h-[400px]">
             <h3 className="text-lg font-mono text-slate-400 mb-4">Core Competency Radar</h3>
             <div className="w-full h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                    <PolarGrid stroke="#334155" />
                    <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 12 }} />
                    <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                    <Radar
                      name="Skill Level"
                      dataKey="A"
                      stroke="#0ea5e9"
                      strokeWidth={2}
                      fill="#0ea5e9"
                      fillOpacity={0.4}
                    />
                    <Tooltip content={<CustomTooltip />} />
                  </RadarChart>
                </ResponsiveContainer>
             </div>
           </div>

           {/* Bar Chart for Tools */}
           <div className="glass-card p-6 rounded-2xl flex flex-col items-center justify-center min-h-[400px]">
             <h3 className="text-lg font-mono text-slate-400 mb-4">Tool Proficiency</h3>
             <div className="w-full h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={SKILLS.slice(0, 8)} layout="vertical" margin={{ left: 20 }}>
                    <XAxis type="number" domain={[0, 100]} hide />
                    <YAxis dataKey="name" type="category" width={100} tick={{ fill: '#94a3b8', fontSize: 11 }} />
                    <Tooltip content={<CustomTooltip />} cursor={{fill: 'transparent'}} />
                    <Bar dataKey="level" barSize={15} radius={[0, 4, 4, 0]}>
                      {SKILLS.slice(0, 8).map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={index % 2 === 0 ? '#8b5cf6' : '#0ea5e9'} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
             </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
