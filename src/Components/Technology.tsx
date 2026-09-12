import React, { use } from 'react';
import type { Tprops } from '../type';
import TechStack from './TechStack';

const Technology = ({ Technologies }: { Technologies: Tprops[] }) => {
  const TechnologyData = use(Technologies);
  return <div className="container mx-auto"> 

    <div className="mb-6 md:mb-8 lg:mb-10 px-4 sm:px-0 text-center sm:text-left">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight my-2">
        Explore the <span className="text-pink-500">Technologies</span>
      </h2>
      <p className="mt-2 sm:mt-3 text-sm sm:text-base lg:text-lg text-slate-500 max-w-lg mx-auto sm:mx-0">
        Pick one technology per category to build your ideal stack.
      </p>
    </div>


      <TechStack Technology ={TechnologyData} /> 
    </div>
  
};

export default Technology;