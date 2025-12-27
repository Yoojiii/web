import React, { useState } from 'react';
import { AddTodo } from '../features/AddTodo';
import { TodoList } from '../entities/TodoList';

export const TodoWidget: React.FC = () => {
  const [todos, setTodos] = useState<string[]>([]);

  const addTodo = (todo: string) => {
    setTodos((prev) => [...prev, todo]);
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Список задач</h1>
      <AddTodo onAdd={addTodo} />
      <TodoList todos={todos} />
    </div>
  );
};
