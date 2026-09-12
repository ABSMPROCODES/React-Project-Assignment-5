import React from 'react';
import BannarImage from '../assets/banner-stack.png';
const Bannar = () => {
  return (
   <section className="bg-white min-h-[80vh] flex items-center pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          <div className="max-w-2xl text-left">
            <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
              Build Your Ideal <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-500 via-pink-500 to-purple-600">
                Development Stack
              </span>
            </h1>
            
            <p className="mt-6 text-lg text-slate-500 leading-relaxed max-w-lg">
              Explore frontend, backend, database, and tooling options, 
              compare them side by side, and put together the stack that fits your 
              next project.
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-3.5 text-sm font-semibold text-white bg-linear-to-r from-orange-500 to-pink-500 rounded-lg hover:opacity-90 transition-opacity shadow-sm">
                Explore Technologies
              </button>
              <button className="px-8 py-3.5 text-sm font-semibold text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors shadow-sm">
                Learn More
              </button>
            </div>
          </div>

    
          <div className="relative mx-auto w-full max-w-lg lg:max-w-none flex justify-center lg:justify-end">
            <img
              src={BannarImage}
              alt="n"
              className="w-full h-auto max-w-125 object-contain drop-shadow-2xl"
              loading="lazy"
            />
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Bannar;