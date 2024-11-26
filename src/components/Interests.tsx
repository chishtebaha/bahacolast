import React from 'react';
import { Camera, Code2, Brain, Globe } from 'lucide-react';
import { interests } from '../data';

const iconMap = {
  Camera,
  Code2,
  Brain,
  Globe,
};

export default function Interests() {
  return (
    <section className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 sm:p-8 lg:p-12 border border-slate-700/50" id="interests">
      <div className="max-w-2xl mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2 relative inline-block">
          Interests & Hobbies
          <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full opacity-50" />
        </h2>
        <p className="text-slate-400 text-lg mt-4">
          What keeps me curious and motivated beyond code.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {interests.map((interest, index) => {
          const Icon = iconMap[interest.icon as keyof typeof iconMap];
          return (
            <div
              key={index}
              className="bg-slate-900/50 rounded-lg p-6 border border-slate-800/50 hover:border-blue-500/50 transition-all group"
            >
              <div className="mb-4 p-3 bg-blue-500/10 rounded-lg w-fit group-hover:bg-blue-500/20 transition-colors">
                <Icon className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{interest.title}</h3>
              <p className="text-slate-400">{interest.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}