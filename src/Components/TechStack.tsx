import React from 'react';
import type { Tprops } from '../type';

const TechStack = ({ Technology }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 container mx-auto">
      {Technology.map((tech) => (
        <div className="bg-white border border-slate-100 rounded-[24px] p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] font-sans flex flex-col justify-between box-border">
          <div>
           
            <div className="flex justify-between items-start mb-6">
              <img 
                src={tech.icon} 
                alt={`${tech.name} logo`} 
                className="w-10 h-10 object-contain"
              />
              <span className="bg-[#f0f7ff] text-[#0ea5e9] text-xs font-semibold px-3 py-1.5 rounded-full">
                Popular
              </span>
            </div>

           
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              {tech.name}
            </h3>
            <p className="text-sm text-slate-500 leading-relaxed mb-6">
              {tech.description}
            </p>
          </div>

          <div>
           
            <div className="w-full h-px bg-slate-100 mb-5"></div>

           
            <div className="flex items-center justify-between text-xs mb-6">
              <span className="bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md font-medium">
                {tech.category}
              </span>
              <span className="text-slate-500 font-medium">
                {tech.difficulty}
              </span>
              <span className="flex items-center gap-1 font-semibold text-slate-700">
                <span className="text-amber-400">★</span> {tech.rating}
              </span>
            </div>

            <button className="w-full bg-[#0b1121] text-white py-3.5 rounded-xl text-sm font-semibold hover:bg-slate-800 transition-colors">
              Add to Stack
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default TechStack;