import React, { use, useState } from 'react';
import { toast } from 'react-toastify';

import type { Tprops } from '../type';
import TechStack from './TechStack';
import YourStack from './YourStack';

const Technology = ({ Technologies }: { Technologies: Tprops[] }) => {
  const TechnologyData = use(Technologies);

  const [stack, setStack] = useState<Tprops[]>([]);

  const handleAdd = (technology: Tprops) => {
    const alreadyAdded = stack.some(
      (tech) => tech.id === technology.id
    );

    if (alreadyAdded) {
      toast.warning(`${technology.name} is already in your stack!`);
      return;
    }

    setStack((prevStack) => [...prevStack, technology]);

    toast.success(`${technology.name} added to your stack!`);
  };

  const handleRemove = (id: string) => {
    const removedTechnology = stack.find(
      (tech) => tech.id === id
    );

    setStack((prevStack) =>
      prevStack.filter((tech) => tech.id !== id)
    );

    if (removedTechnology) {
      toast.info(`${removedTechnology.name} removed from your stack.`);
    }
  };

  const handleClear = () => {
    setStack([]);

    toast.info('All technologies removed from your stack.');
  };

  return (
    <div className="container mx-auto px-4">
      <div className="mb-6 md:mb-8 lg:mb-10 text-center sm:text-left">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight my-2">
          Explore the{' '}
          <span className="brand-gradient-text">
            Technologies
          </span>
        </h2>

        <p className="mt-2 sm:mt-3 text-sm sm:text-base lg:text-lg text-slate-500 max-w-lg mx-auto sm:mx-0">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-start">
        <TechStack
          Technology={TechnologyData}
          stack={stack}
          onAdd={handleAdd}
        />

        <YourStack
          stack={stack}
          onRemove={handleRemove}
          onClear={handleClear}
        />
      </div>
    </div>
  );
};

export default Technology;