'use strict'
const todoControl = document.querySelector('.todo-control');
const headerInput = document.querySelector('.header-input');
const todoList = document.querySelector('.todo-list');
const todoCompleted = document.querySelector('.todo-completed');

const toDoData = [
    {
        text: 'кофе',
        completed: false
    },
    {
        text: 'кakao',
        completed: true
    }

]
const render = function () {
    console.log(toDoData);
}
todoControl.addEventListener('submit', function (event) {
    event.preventDefault();
    const newToDo = {
        text: headerInput.value,
        completed: false
    };
    toDoData.push(newToDo);
    console.log(headerInput.value);
    render();
})
console.log('hfh');