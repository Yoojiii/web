import React from 'react';
import { TodoWidget } from '../widgets/TodoWidget';

export const MainPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center pt-10">
      <h1 className="text-2xl font-bold mb-4">Todo App (FSD, TS, Tailwind)</h1>
      <TodoWidget />
    </div>
  );
};
