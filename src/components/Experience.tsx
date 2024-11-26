import React, { useState } from 'react';
import { experiences } from '../data';
import { Calendar, Building2, ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';

export default function Experience() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleExperience = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 sm:p-8 lg:p-12 border border-slate-700/50" id="experience">
      <div className="max-w-2xl mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2 relative inline-block">
          Experience
          <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full opacity-50" />
        </h2>
        <p className="text-slate-400 text-lg mt-4">
          A journey through my professional career in software development.
        </p>
      </div>

      <div className="space-y-4">
        {experiences.map((experience, index) => (
          <div 
            key={index} 
            className={`
              bg-slate-900/50 rounded-lg overflow-hidden transition-all duration-300 
              border border-slate-800/50 hover:border-blue-500/30
              ${openIndex === index ? 'ring-1 ring-blue-500/50' : ''}
            `}
          >
            <button
              onClick={() => toggleExperience(index)}
              className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-slate-800/50 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                    {experience.title}
                  </h3>
                  <div className="flex items-center gap-4 mt-1">
                    <span className="text-blue-400">{experience.company}</span>
                    <div className="flex items-center gap-1.5 text-slate-500">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{experience.period}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <ArrowRight className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${openIndex === index ? 'rotate-90' : ''}`} />
              </div>
            </button>
            
            {openIndex === index && (
              <div className="px-6 py-5 bg-slate-800/30 border-t border-slate-700/50">
                <div className="pl-16">
                  <div className="prose prose-invert max-w-none">
                    <p className="text-slate-300 leading-relaxed">
                      {experience.description}
                    </p>
                    
                    {/* You can add more details like: */}
                    <ul className="mt-4 space-y-2 text-slate-400">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                        Led development of cloud-native applications
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                        Improved system performance by 40%
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                        Mentored junior developers
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}