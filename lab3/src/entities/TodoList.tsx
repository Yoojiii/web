import React, { useState } from 'react';

interface TodoListProps {
  todos: string[];
}

export const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  const [completed, setCompleted] = useState<number[]>([]);

  const toggle = (idx: number) => {
    setCompleted(prev =>
      prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]
    );
  };

  return (
    <ul className="space-y-2">
      {todos.map((todo, idx) => (
        <li
          key={idx}
          className={`p-2 rounded cursor-pointer select-none border ${completed.includes(idx) ? 'line-through text-gray-400 bg-gray-100' : 'bg-gray-50'}`}
          onClick={() => toggle(idx)}
        >
          {todo}
        </li>
      ))}
    </ul>
  );
};
