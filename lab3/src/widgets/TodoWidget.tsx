import React, { useState } from 'react';
import { AddTodo } from '../features/AddTodo';
import { TodoList } from '../entities/TodoList';

export const TodoWidget: React.FC = () => {
  const [todos, setTodos] = useState<string[]>([]);

  const addTodo = (todo: string) => {
    setTodos(prev => [...prev, todo]);
  };

  return (
    <div className="w-full max-w-md bg-white rounded shadow p-4">
      <AddTodo onAdd={addTodo} />
      <TodoList todos={todos} />
    </div>
  );
};
