import React, { useState } from 'react';
import { volunteerExperiences } from '../data';
import { Calendar, Users, ArrowRight, X } from 'lucide-react';

interface VolunteerModalProps {
  experience: typeof volunteerExperiences[0];
  onClose: () => void;
}

function VolunteerModal({ experience, onClose }: VolunteerModalProps) {
  return (
    <div 
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <div 
        className="bg-slate-900 rounded-xl max-w-3xl w-full overflow-hidden border border-slate-800/50"
        onClick={e => e.stopPropagation()}
      >
        <div className="relative h-64 overflow-hidden">
          <img 
            src={experience.image} 
            alt={experience.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-slate-900/50 rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="p-6">
          <h3 className="text-2xl font-semibold text-white mb-2">{experience.title}</h3>
          <p className="text-blue-400 text-sm mb-4">{experience.organization}</p>
          <p className="text-slate-300 mb-6 leading-relaxed">{experience.description}</p>
          <div className="flex items-center gap-2 text-slate-500">
            <Calendar className="w-4 h-4" />
            <span className="text-sm">{experience.period}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Volunteer() {
  const [selectedExperience, setSelectedExperience] = useState<typeof volunteerExperiences[0] | null>(null);

  return (
    <section className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 sm:p-8 lg:p-12 border border-slate-700/50" id="volunteer">
      <div className="max-w-2xl mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2 relative inline-block">
          Volunteer Work
          <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full opacity-50" />
        </h2>
        <p className="text-slate-400 text-lg mt-4">
          Giving back to the community through technology education and mentorship.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {volunteerExperiences.map((experience, index) => (
          <button 
            key={index}
            onClick={() => setSelectedExperience(experience)}
            className="text-left group bg-slate-900/50 rounded-lg border border-slate-800/50 hover:border-blue-500/30 transition-all duration-300"
          >
            <div className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-blue-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-semibold text-white mb-1 truncate group-hover:text-blue-400 transition-colors">
                    {experience.title}
                  </h3>
                  <p className="text-blue-400 text-sm mb-3">
                    {experience.organization}
                  </p>
                  <p className="text-slate-400 text-sm line-clamp-2 mb-4 group-hover:text-slate-300 transition-colors">
                    {experience.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-slate-500 text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>{experience.period}</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-blue-400 transition-colors" />
                  </div>
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>

      {selectedExperience && (
        <VolunteerModal 
          experience={selectedExperience} 
          onClose={() => setSelectedExperience(null)} 
        />
      )}
    </section>
  );
}