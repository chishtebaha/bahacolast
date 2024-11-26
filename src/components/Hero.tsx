import React from 'react';
import { ExternalLink } from 'lucide-react';
import { personalInfo } from '../data';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center" id="hero">
      <div className="w-full space-y-6">
        {/* Intro Card */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50">
          <div className="p-6 sm:p-8 lg:p-12">
            <div className="flex flex-col-reverse sm:flex-row items-center gap-6 sm:gap-8 lg:gap-12">
              <div className="flex-1 space-y-4 sm:space-y-6 text-center sm:text-left">
                <h1 className="text-gradient-soft animate-gradient text-3xl sm:text-4xl lg:text-5xl font-bold">
                  Hey, I'm {personalInfo.name}
                </h1>
                <p className="text-sm sm:text-base lg:text-lg text-slate-400 leading-relaxed max-w-xl">
                  {personalInfo.bio}
                </p>
                <div className="flex gap-6 text-slate-400 justify-center sm:justify-start">
                  <a 
                    href={personalInfo.contact.linkedin} 
                    className="flex items-center gap-2 hover:text-slate-200 transition-colors group" 
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="font-medium">LinkedIn</span>
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                  <a 
                    href={personalInfo.contact.github}
                    className="flex items-center gap-2 hover:text-slate-200 transition-colors group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="font-medium">GitHub</span>
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>

              <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 flex-shrink-0">
                <div className="w-full h-full rounded-2xl overflow-hidden">
                  <img 
                    src={personalInfo.image} 
                    alt={personalInfo.name}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Journey Card */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50">
          <div className="p-6 sm:p-8 lg:p-12">
            <div className="flex items-center gap-2 text-blue-400 mb-4">
              <span className="text-sm font-medium">My Journey</span>
            </div>
            
            <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
              <p>Growing up in an underprivileged community, I witnessed firsthand the challenges that many families face daily. These experiences didn't just shape my perspective; they ignited a passion for creating meaningful change through technology and social entrepreneurship.</p>
              
              <p>As I navigated my journey into software engineering, I carried with me a deep understanding of how technology could bridge crucial gaps in society. My background became my strength, providing unique insights into developing solutions that not only solve technical challenges but also address real social needs.</p>
              
              <p>Today, I blend my software engineering expertise with a commitment to social business initiatives. I believe technology has the power to level playing fields and create opportunities for those who need them most. This dual passion drives me to build solutions that are not just technically excellent but also socially impactful.</p>
            </div>

            <div className="grid grid-cols-3 gap-3 sm:gap-4 mt-6">
              <div className="text-center sm:text-left">
                <div className="text-xl sm:text-2xl font-bold text-blue-400">5+</div>
                <div className="text-slate-400 text-xs sm:text-sm">Years of Coding</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-xl sm:text-2xl font-bold text-pink-400">3+</div>
                <div className="text-slate-400 text-xs sm:text-sm">Social Projects</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-xl sm:text-2xl font-bold text-purple-400">1000+</div>
                <div className="text-slate-400 text-xs sm:text-sm">Lives Impacted</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}