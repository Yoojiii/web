import React from 'react';
import { TodoWidget } from '../widgets/TodoWidget';

export const MainPage: React.FC = () => {
  return (
    <div className="py-8">
      <TodoWidget />
    </div>
  );
};
