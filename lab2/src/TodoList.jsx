import React, { useState } from 'react';

function TodoList({ todos }) {
  const [completed, setCompleted] = useState([]);

  const toggle = idx => {
    setCompleted(prev =>
      prev.includes(idx)
        ? prev.filter(i => i !== idx)
        : [...prev, idx]
    );
  };

  return (
    <ul className="todo-list">
      {todos.map((todo, idx) => (
        <li
          key={idx}
          className={completed.includes(idx) ? 'completed' : ''}
          onClick={() => toggle(idx)}
        >
          {todo}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
