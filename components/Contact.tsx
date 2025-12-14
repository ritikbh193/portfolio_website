import React, { useState } from 'react';
import { SOCIAL_LINKS } from '../constants';
import { Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate network request
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-3">
          <span className="text-primary">05.</span> Get In Touch
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info Side */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Let's Build Something Intelligent</h3>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. 
              Whether you have a question about Generative AI or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="space-y-6">
              {SOCIAL_LINKS.map((link) => (
                <a 
                  key={link.name} 
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-primary/50 hover:bg-slate-900 transition-all group"
                >
                  <div className="p-3 bg-slate-800 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <link.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium group-hover:text-primary transition-colors">{link.name}</h4>
                    <p className="text-sm text-slate-500 font-mono truncate max-w-[250px] sm:max-w-none">
                        {link.name === 'Email' ? 'ritikbhawsar22193@gmail.com' : 'Connect with me'}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-slate-900/30 p-8 rounded-2xl border border-slate-800 backdrop-blur-sm">
             <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                   <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Name</label>
                   <input 
                      type="text" 
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                      placeholder="John Doe"
                   />
                </div>
                <div>
                   <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                   <input 
                      type="email" 
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                      placeholder="john@example.com"
                   />
                </div>
                <div>
                   <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                   <textarea 
                      id="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                      placeholder="Hello, I'd like to talk about..."
                   ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  disabled={status === 'submitting' || status === 'success'}
                  className={`w-full py-4 rounded-lg font-bold text-white flex items-center justify-center gap-2 transition-all duration-300 ${status === 'success' ? 'bg-green-500' : 'bg-gradient-to-r from-primary to-secondary hover:opacity-90'}`}
                >
                  {status === 'submitting' ? (
                     <span className="animate-pulse">Sending...</span>
                  ) : status === 'success' ? (
                     <>Message Sent <CheckCircle className="w-5 h-5"/></>
                  ) : (
                     <>Send Message <Send className="w-5 h-5" /></>
                  )}
                </button>
             </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
