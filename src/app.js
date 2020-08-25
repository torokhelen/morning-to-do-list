document.addEventListener('DOMContentLoaded', () => {

    // Selectors
    const todoInput = document.querySelector('.todo-input');
    const todoButton = document.querySelector('.todo-button');
    const todoList = document.querySelector('.todo-list');

    // Event listeners
    todoButton.addEventListener('click', addTodo);

    // Functions
    function addTodo() {
        event.preventDefault();
        //todo DIV
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo');
        // create LI
        const newTodo = document.createElement('li');
        newTodo.innerText = todoInput.value;
        newTodo.classList.add('todo-item');
        todoDiv.appendChild(newTodo);
        // check mark button
        const completedButton = document.createElement('button');
        completedButton.innerHTML = '<i class="fas fa-check"></>';
        completedButton.classList.add('complete-btn');
        todoDiv.appendChild(completedButton);
        // check trash button
        const trashButton = document.createElement('button');
        trashButton.innerHTML = '<i class="fas fa-trash"></>';
        trashButton.classList.add('trash-btn');
        todoDiv.appendChild(trashButton);
        // append to list
        todoList.appendChild(todoDiv);
        // clear todo input value
        todoInput.value = '';
    }
})