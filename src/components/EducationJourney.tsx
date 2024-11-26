import React, { useState } from 'react';
import { GraduationCap, BookOpen, Rocket, School, ChevronDown, ChevronUp } from 'lucide-react';

const timeline = [
  {
    title: "High School Graduate",
    institution: "Local High School, Bangladesh",
    period: "2020",
    description: "Graduated with distinction, focusing on science and mathematics.",
    icon: School
  },
  {
    title: "Gap Years & Self-Learning",
    institution: "Self-Directed Education",
    period: "2020-2023",
    description: "Utilized this time to learn programming, build projects, and create social impact through technology initiatives. Completed various online courses in computer science and web development.",
    icon: BookOpen
  },
  {
    title: "Entrepreneurial Projects",
    institution: "Social Business Initiatives",
    period: "2021-2023",
    description: "Led multiple tech-based social projects, gaining hands-on experience in both programming and project management while making a difference in the community.",
    icon: Rocket
  },
  {
    title: "College Aspirations",
    institution: "Washington and Lee University",
    period: "2024 Goal",
    description: "Pursuing admission to combine Computer Science major with Entrepreneurship minor, aiming to create technology solutions for social good.",
    icon: GraduationCap
  }
];

export default function EducationJourney() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50" id="education">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 sm:p-8 lg:p-12 flex items-start justify-between group text-left"
      >
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2 relative inline-block">
            Education Journey
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full opacity-50" />
          </h2>
          <p className="text-slate-400 text-lg mt-4">
            A unique path of self-directed learning and growth.
          </p>
        </div>
        <div className="p-2 -mr-2 rounded-lg group-hover:bg-slate-800/50 transition-colors">
          {isOpen ? (
            <ChevronUp className="w-6 h-6 text-slate-400 group-hover:text-white transition-colors" />
          ) : (
            <ChevronDown className="w-6 h-6 text-slate-400 group-hover:text-white transition-colors" />
          )}
        </div>
      </button>

      <div 
        className={`
          overflow-hidden transition-all duration-300 ease-in-out
          ${isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}
        `}
      >
        <div className="p-6 sm:p-8 lg:p-12 pt-0">
          <div className="relative">
            <div className="absolute left-8 top-8 bottom-8 w-px bg-slate-700/50"></div>
            
            <div className="space-y-8">
              {timeline.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={index} 
                    className="relative pl-16 animate-fadeIn"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="absolute left-0 p-2 bg-slate-900 rounded-lg border border-slate-700/50">
                      <Icon className="w-6 h-6 text-blue-400" />
                    </div>
                    
                    <div className="bg-slate-900/50 rounded-lg p-6 border border-slate-800/50 hover:border-blue-500/30 transition-all duration-300">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <h3 className="text-xl font-semibold text-white">
                          {item.title}
                        </h3>
                        <span className="text-blue-400 text-sm">
                          {item.period}
                        </span>
                      </div>
                      
                      <p className="text-blue-400 text-sm mb-3">
                        {item.institution}
                      </p>
                      
                      <p className="text-slate-400 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}