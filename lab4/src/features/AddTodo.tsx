import React, { useState } from 'react';

interface AddTodoProps {
  onAdd: (todo: string) => void;
}

export const AddTodo: React.FC<AddTodoProps> = ({ onAdd }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value.trim()) {
      onAdd(value.trim());
      setValue('');
    }
  };

  return (
    <form className="flex gap-2 mb-4" onSubmit={handleSubmit}>
      <input
        className="flex-1 border rounded px-2 py-1"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Новая задача"
      />
      <button
        className="bg-blue-500 text-white px-4 py-1 rounded"
        type="submit"
      >
        +
      </button>
    </form>
  );
};
