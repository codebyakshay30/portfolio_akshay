import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Terminal, Code2, MonitorPlay } from 'lucide-react';
import { personalInfo, projectsData } from './data/portfolioData';

function App() {
  return (
    <div className="min-h-screen bg-[#08090d] text-slate-200 font-sans selection:bg-sky-500/30">
      <nav className="fixed top-0 w-full p-6 backdrop-blur-md border-b border-white/5 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="font-bold text-xl tracking-tighter text-white">AS.</div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-cyan-400 transition-colors"><Github size={20} /></a>
            <a href="#" className="hover:text-cyan-400 transition-colors"><Linkedin size={20} /></a>
            <a href={`mailto:${personalInfo.email}`} className="hover:text-cyan-400 transition-colors"><Mail size={20} /></a>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 pt-32 pb-20">
        <section className="min-h-[70vh] flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm mb-6 text-cyan-300">
              <Terminal size={14} />
              <span>{personalInfo.university} — {personalInfo.year}</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-white">
              Hi, I'm {personalInfo.name.split(' ')[0]}.<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500">
                Building the future.
              </span>
            </h1>
            
            <p className="text-lg text-slate-400 max-w-2xl mb-10 leading-relaxed">
              {personalInfo.title}. Passionate about Systems, Web Development, and creating 
              performant, scalable applications. Currently experimenting with C++, React, and modern web architectures.
            </p>

            <div className="flex gap-4">
              <a href="#projects" className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-slate-200 transition-colors">
                View Projects
              </a>
              <button className="bg-white/5 border border-white/10 px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors flex items-center gap-2">
                <Code2 size={18} /> Resume
              </button>
            </div>
          </motion.div>
        </section>

        <section id="projects" className="py-20">
          <h2 className="text-3xl font-bold mb-10 flex items-center gap-2">
            <MonitorPlay className="text-cyan-400" /> Featured Work
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projectsData.map((project, i) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/20 transition-all group"
              >
                <div className="text-xs font-mono text-cyan-400 mb-3">{project.category}</div>
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-cyan-300 transition-colors">{project.title}</h3>
                <p className="text-slate-400 mb-6 text-sm">{project.tagline}</p>
                <div className="flex gap-2 flex-wrap mt-auto">
                  {project.techStack.map(tech => (
                    <span key={tech} className="px-2 py-1 text-xs rounded-md bg-white/5 text-slate-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
