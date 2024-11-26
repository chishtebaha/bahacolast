import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: "Project Alpha",
    description: "A revolutionary AI-powered platform that transforms how we interact with data.",
    tech: ["React", "TypeScript", "TensorFlow"],
    live: "https://example.com",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Project Beta",
    description: "Real-time collaboration tool for remote teams with advanced features.",
    tech: ["Next.js", "Socket.io", "MongoDB"],
    live: "https://example.com",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80"
  },
];

export default function Projects() {
  return (
    <section className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 sm:p-8 lg:p-12 border border-slate-700/50" id="projects">
      <div className="max-w-2xl mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2 relative inline-block">
          Featured Projects
          <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full opacity-50" />
        </h2>
        <p className="text-slate-400 text-lg mt-4">
          A selection of my recent work and personal projects.
        </p>
      </div>

      <div className="grid gap-6">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="group bg-slate-900/50 rounded-xl border border-slate-800/50 overflow-hidden hover:border-blue-500/30 transition-all duration-300"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-4">
              {/* Image Section */}
              <div className="lg:col-span-5 relative h-48 lg:h-64 overflow-hidden rounded-lg">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-slate-900/25 to-transparent" />
              </div>

              {/* Content Section */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span 
                        key={i} 
                        className="px-2.5 py-1 text-xs text-slate-300 bg-slate-800/50 rounded-full border border-slate-700/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Link */}
                  <div>
                    <a 
                      href={project.live}
                      className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors group/link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="text-sm font-medium">View Project</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}