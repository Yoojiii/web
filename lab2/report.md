# lab2

## 3.1. Ссылка на репозиторий
**[ТРЕБУЕТСЯ: Вставить ссылку на GitHub репозиторий]**

## 3.2. Структура проекта
/lab2 – корень проекта
/lab2/index.html – основной html-файл
/lab2/webpack.config.js – конфигурация Webpack
/lab2/dist/ – собранный bundle
/lab2/src/index.js — точка входа
/lab2/src/App.jsx — корневой компонент
/lab2/src/TodoList.jsx — дополнительный компонент
/lab2/src/style.css — стили
/lab2/.babelrc — конфигурация Babel

## 3.3. Webpack
Конфигурация Webpack:
```js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
  ],
  devServer: {
    static: './dist',
    port: 3000,
    open: true,
  },
  mode: 'development',
};
```
Описание:
- entry: './src/index.js' — точка входа приложения
- output: bundle.js в папке dist
- loaders: babel-loader для JS/JSX, style-loader и css-loader для CSS
- plugins: HtmlWebpackPlugin для генерации index.html
- devServer: запуск на localhost:3000

## 3.4. Настройка Babel
Используются пресеты:
- @babel/preset-env
- @babel/preset-react

Конфигурация .babelrc:
```json
{
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react"
  ]
}
```

## 3.5. Реализация React-приложения
**App.jsx** — корневой компонент, реализует форму добавления задач и отображает список через TodoList.
```jsx
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
```
**TodoList.jsx** — компонент для отображения списка задач и отметки выполненных:
```jsx
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
```
Описание:
- App — корневой компонент, хранит состояние задач, добавляет новые задачи.
- TodoList — отображает задачи, позволяет отмечать их выполненными (перечёркивание).
- Рендеринг происходит в index.js через ReactDOM.createRoot(...).render(<App />).

## 3.6. Результат работы
**Скриншот 1: [ТРЕБУЕТСЯ: Скриншот работающего приложения]**

**Скриншот 2: [ТРЕБУЕТСЯ: Скриншот с отмеченной задачей]**

Описание результата:
Приложение позволяет добавлять задачи и отмечать их выполненными. Используются React-компоненты, стили подключены через Webpack, сборка и запуск осуществляются через webpack-dev-server.
