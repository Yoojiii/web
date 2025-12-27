// Получаем элементы DOM
const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');

// Обработка отправки формы
form.addEventListener('submit', function(event) {
    event.preventDefault();
    const text = input.value.trim();
    if (text) {
        addTodo(text);
        input.value = '';
    }
});

// Функция добавления задачи
function addTodo(text) {
    const li = document.createElement('li');
    li.textContent = text;
    li.addEventListener('click', function() {
        li.classList.toggle('completed');
    });
    list.appendChild(li);
}