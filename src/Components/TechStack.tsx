import React from 'react';
import type { Tprops } from '../type';
import Yourcard from './Yourcard';

const TechStack = ({
  Technology,
  stack,
  onAdd,
}: {
  Technology: Tprops[];
  stack: Tprops[];
  onAdd: (technology: Tprops) => void;
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 flex-1">
      {Technology.map((tech, index) => {
        const isAdded = stack.some((item) => item.id === tech.id);

        return (
          <Yourcard
            key={tech.name || index}
            Technology={tech}
            isAdded={isAdded}
            onAdd={onAdd}
          />
        );
      })}
    </div>
  );
};

export default TechStack;