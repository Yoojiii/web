import React, { useState } from 'react';
import TodoList from './TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setTodos([...todos, input.trim()]);
      setInput('');
    }
  };

  return (
    <div className="app-container">
      <form onSubmit={addTodo}>
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Задача"
        />
        <button type="submit">+</button>
      </form>
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
