import React from 'react';
import { ResponsiveContainer, AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const data = [
  { name: 'Epoch 1', loss: 0.9, acc: 0.4 },
  { name: 'Epoch 5', loss: 0.7, acc: 0.55 },
  { name: 'Epoch 10', loss: 0.5, acc: 0.75 },
  { name: 'Epoch 20', loss: 0.3, acc: 0.85 },
  { name: 'Epoch 50', loss: 0.15, acc: 0.92 },
  { name: 'Epoch 100', loss: 0.05, acc: 0.98 },
];

const DataViz: React.FC = () => {
  return (
    <section className="py-20 bg-slate-950 border-t border-slate-900 border-b relative overflow-hidden">
       {/* Decorative bg */}
       <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#4f46e5_1px,transparent_1px)] [background-size:16px_16px]"></div>

       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-2">Model Performance Metrics</h2>
          <p className="text-slate-500 mb-10 font-mono text-sm">Visualizing training stability across various architectures</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
             <div className="h-[300px] w-full glass-card p-4 rounded-xl border-none">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={data}>
                    <defs>
                      <linearGradient id="colorAcc" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="colorLoss" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                    <XAxis dataKey="name" hide />
                    <YAxis hide />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155' }} 
                      itemStyle={{ color: '#e2e8f0' }}
                    />
                    <Area type="monotone" dataKey="acc" stroke="#0ea5e9" fillOpacity={1} fill="url(#colorAcc)" name="Accuracy" />
                    <Area type="monotone" dataKey="loss" stroke="#8b5cf6" fillOpacity={1} fill="url(#colorLoss)" name="Loss" />
                  </AreaChart>
                </ResponsiveContainer>
             </div>

             <div className="text-left space-y-6">
                <div className="flex items-center justify-between p-4 bg-slate-900/50 rounded-lg border border-slate-800">
                   <div>
                      <h4 className="text-white font-medium">Inference Speed</h4>
                      <p className="text-xs text-slate-400">Average response time</p>
                   </div>
                   <div className="text-right">
                      <span className="text-2xl font-bold text-emerald-400">45ms</span>
                   </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-slate-900/50 rounded-lg border border-slate-800">
                   <div>
                      <h4 className="text-white font-medium">Model Accuracy</h4>
                      <p className="text-xs text-slate-400">On validation set</p>
                   </div>
                   <div className="text-right">
                      <span className="text-2xl font-bold text-primary">98.2%</span>
                   </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-slate-900/50 rounded-lg border border-slate-800">
                   <div>
                      <h4 className="text-white font-medium">Parameters Optimized</h4>
                      <p className="text-xs text-slate-400">Total trainable params</p>
                   </div>
                   <div className="text-right">
                      <span className="text-2xl font-bold text-secondary">7B+</span>
                   </div>
                </div>
             </div>
          </div>
       </div>
    </section>
  );
};

export default DataViz;
