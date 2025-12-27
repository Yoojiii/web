Введение
В рамках данной работы рассматриваются базовые технологии фронтенд-разработки: HTML, CSS и JavaScript. Эти технологии являются фундаментом современной веб-разработки и используются для создания структуры веб-страниц, их визуального оформления и интерактивного поведения.

Задание
Необходимо разработать простую веб-страницу с использованием HTML, CSS и JavaScript, продемонстрировав базовые навыки верстки, стилизации и работы с интерактивностью.
Требования к работе:
1. Проект должен быть размещён в публичном репозитории на GitHub.
2. Репозиторий должен содержать:
   a. index.html
   b. файл(ы) стилей (style.css или аналогичные)
   c. файл(ы) скриптов (script.js или аналогичные)
3. Структура проекта должна быть понятной и логичной.
4. HTML-код должен быть валидным и семантически корректным.
5. CSS должен использовать классы, избегая избыточных inline-стилей.
6. JavaScript должен:
   a. работать с DOM-элементами;
   b. обрабатывать хотя бы одно пользовательское событие (click, input и т. п.);
   c. изменять состояние страницы (текст, стили, классы, элементы).

3. Отчет о выполнении работы
3.1. Ссылка на репозиторий
**[ТРЕБУЕТСЯ: Вставить ссылку на GitHub репозиторий]**

3.2. Структура проекта
/web – корень проекта
/web/index.html – основной html-файл
/web/style.css – файл со стилями
/web/script.js – файл с js-кодом для интерактивности

3.3. HTML
Фрагмент кода:
```html
<form id="todo-form">
    <input type="text" id="todo-input" placeholder="Задача" required>
    <button type="submit">+</button>
</form>
<ul id="todo-list"></ul>
```
Описание:
Использованы теги <form>, <input>, <button>, <ul>, <li> для создания минимальной структуры страницы. Семантические теги не использовались, так как дизайн максимально упрощён.

3.4. CSS
Фрагмент кода:
```css
body {
    font-family: sans-serif;
    margin: 0;
    padding: 0;
}
form {
    display: flex;
    margin: 20px auto;
    max-width: 300px;
}
input[type="text"] {
    flex: 1;
    padding: 4px;
}
button {
    padding: 4px 10px;
}
ul#todo-list {
    max-width: 300px;
    margin: 0 auto;
    padding: 0;
    list-style: none;
}
ul#todo-list li {
    padding: 4px 0;
    cursor: pointer;
}
ul#todo-list li.completed {
    text-decoration: line-through;
    color: #888;
}
```
Описание:
- Цветовая схема минимальная, без выделения.
- Шрифт: sans-serif.
- Отступы и выравнивание для простоты восприятия.
- Адаптивность не реализована.

3.5. JS
Фрагмент кода:
```js
const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const text = input.value.trim();
    if (text) {
        addTodo(text);
        input.value = '';
    }
});

function addTodo(text) {
    const li = document.createElement('li');
    li.textContent = text;
    li.addEventListener('click', function() {
        li.classList.toggle('completed');
    });
    list.appendChild(li);
}
```
Описание:
- Выбираются элементы формы, поля ввода и списка.
- Обрабатывается событие submit формы и click по задаче.
- Добавляются задачи, их можно отмечать выполненными (перечёркивание).

3.6. Результат работы
**Скриншот 1: [ТРЕБУЕТСЯ: Скриншот главной страницы]**

**Скриншот 2: [ТРЕБУЕТСЯ: Скриншот с отмеченной выполненной задачей]**

Описание результата:
Реализована минималистичная веб-страница: можно добавлять задачи и отмечать их выполненными. Дизайн и функционал максимально просты.
