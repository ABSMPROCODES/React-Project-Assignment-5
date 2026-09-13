import React from 'react';
import type { Tprops } from '../type';

const Yourcard = ({
  Technology,
  isAdded,
  onAdd,
}: {
  Technology: Tprops;
  isAdded: boolean;
  onAdd: (technology: Tprops) => void;
}) => {
  const {
    icon,
    name,
    description,
    category,
    difficulty,
    rating,
    badge,
  } = Technology;

  return (
    <div
      className={`bg-white rounded-[24px] p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] font-sans flex flex-col justify-between box-border transition-all duration-200 ${
        isAdded
          ? 'border-2 border-blue-500 shadow-[0_4px_20px_-4px_rgba(59,130,246,0.2)]'
          : 'border border-slate-100'
      }`}
    >
      <div>
        <div className="flex justify-between items-start mb-6">
          <img
            src={icon}
            alt={`${name} logo`}
            className="w-10 h-10 object-contain"
          />

          <span
            className={`text-xs font-semibold px-3 py-1.5 rounded-full ${
              isAdded
                ? 'bg-blue-50 text-blue-600'
                : 'bg-[#f0f7ff] text-[#0ea5e9]'
            }`}
          >
            {isAdded ? 'Added' : badge}
          </span>
        </div>

        <h3 className="text-xl font-bold text-slate-900 mb-2">
          {name}
        </h3>

        <p className="text-sm text-slate-500 leading-relaxed mb-6">
          {description}
        </p>
      </div>

      <div>
        <div className="w-full h-px bg-slate-100 mb-5"></div>

        <div className="flex items-center justify-between text-xs mb-6">
          <span className="bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md font-medium">
            {category}
          </span>

          <span className="text-slate-500 font-medium">
            {difficulty}
          </span>

          <span className="flex items-center gap-1 font-semibold text-slate-700">
            <span className="text-amber-400">★</span> {rating}
          </span>
        </div>

       <button
  type="button"
  disabled={isAdded}
  onClick={() => onAdd(Technology)}
  className={`w-full py-3.5 rounded-xl text-sm font-semibold transition-all ${
    isAdded
      ? 'bg-blue-100 text-blue-600 cursor-not-allowed'
      : 'bg-black text-white hover:opacity-90 hover:-translate-y-0.5'
  }`}
>
  {isAdded ? '✓ Added to Stack' : 'Add to Stack'}
</button>
      </div>
    </div>
  );
};

export default Yourcard;