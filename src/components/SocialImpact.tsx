import React from 'react';
import { Users, Heart, Lightbulb, Target } from 'lucide-react';

const impacts = [
  {
    title: "Community Tech Education",
    description: "Established free coding workshops in underprivileged areas of Bangladesh, teaching basic programming skills to over 100 students.",
    metric: "100+ Students Taught",
    icon: Users
  },
  {
    title: "Social Business Initiative",
    description: "Created a platform connecting local artisans with global markets, increasing their average income by 40%.",
    metric: "40% Income Increase",
    icon: Heart
  },
  {
    title: "Tech for Good",
    description: "Developed mobile apps for local NGOs to streamline their aid distribution process, impacting thousands of families.",
    metric: "5000+ Families Reached",
    icon: Lightbulb
  },
  {
    title: "Future Goals",
    description: "Combining CS and entrepreneurship at W&L to create sustainable tech solutions for social challenges in developing regions.",
    metric: "Vision 2025",
    icon: Target
  }
];

export default function SocialImpact() {
  return (
    <section className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 sm:p-8 lg:p-12 border border-slate-700/50" id="social-impact">
      <div className="max-w-2xl mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2 relative inline-block">
          Social Impact
          <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full opacity-50" />
        </h2>
        <p className="text-slate-400 text-lg mt-4">
          Using technology to create meaningful change in communities.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {impacts.map((impact, index) => {
          const Icon = impact.icon;
          return (
            <div 
              key={index}
              className="bg-slate-900/50 rounded-lg p-6 border border-slate-800/50 hover:border-blue-500/30 transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {impact.title}
                  </h3>
                  <p className="text-slate-400 mb-4 leading-relaxed">
                    {impact.description}
                  </p>
                  <div className="inline-block px-3 py-1 bg-blue-500/10 rounded-full">
                    <span className="text-sm font-medium text-blue-400">
                      {impact.metric}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}