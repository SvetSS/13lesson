'use strict'
const todoControl = document.querySelector('.todo-control');
const headerInput = document.querySelector('.header-input');
const todoList = document.querySelector('.todo-list');
const todoCompleted = document.querySelector('.todo-completed');

let toDoData = JSON.parse(localStorage.getItem('todoList1')) || [];


const render = function () {
    todoList.innerHTML = '';
    todoCompleted.innerHTML = '';



    toDoData.forEach(function (item) {
        //toDoData.forEach(function (item) {
        const li = document.createElement('li');
        li.classList.add('todo-item');
        li.innerHTML = '<span class="text-todo">' + item.text + '</span>' +
            '<div class="todo-buttons">' +
            '<button class="todo-remove"></button>' +
            '<button class="todo-complete"></button>' +
            '</div>'
        if (item.completed) {
            todoCompleted.append(li)
        } else {
            todoList.append(li)
        };
        li.querySelector('.todo-complete').addEventListener('click', function () {
            item.completed = !item.completed;
            render();
            localStorage.setItem('todoList1', JSON.stringify(toDoData));
        })
        li.querySelector('.todo-remove').addEventListener('click', function () {
            const itemIndex = toDoData.indexOf(item);
            toDoData.splice(itemIndex, 1);
            render();
            localStorage.setItem('todoList1', JSON.stringify(toDoData));
        })
    })
    console.log(toDoData);
}
todoControl.addEventListener('submit', function (event) {
    event.preventDefault();
    if (headerInput.value.trim() === '') {

        headerInput.placeholder = 'заполните поле';
    }
    else {

        const newToDo = {
            text: headerInput.value,
            completed: false
        };
        toDoData.push(newToDo);
        //
        localStorage.setItem('todoList1', JSON.stringify(toDoData));
        //
        headerInput.value = '';
        //console.log(headerInput.value);
        render();
    }

});
render();
/* let toDoData = [];


const render = function () {
    todoList.innerHTML = '';
    todoCompleted.innerHTML = '';


    let toDoDataLocal = JSON.parse(localStorage.getItem('todoList1')) || [];
    toDoData.forEach(function (item) {
        //toDoData.forEach(function (item) {
        const li = document.createElement('li');
        li.classList.add('todo-item');
        li.innerHTML = '<span class="text-todo">' + item.text + '</span>' +
            '<div class="todo-buttons">' +
            '<button class="todo-remove"></button>' +
            '<button class="todo-complete"></button>' +
            '</div>'
        if (item.completed) {
            todoCompleted.append(li)
        } else {
            todoList.append(li)
        };
        li.querySelector('.todo-complete').addEventListener('click', function () {
            item.completed = !item.completed;
            render();
        })
        li.querySelector('.todo-remove').addEventListener('click', function () {
            toDoData.splice(item, 1);
            render();
        })
    })
    console.log(toDoData);
}
todoControl.addEventListener('submit', function (event) {
    event.preventDefault();
    if (headerInput.value.trim() === '') {

        headerInput.placeholder = 'заполните поле';
    }
    else {

        const newToDo = {
            text: headerInput.value,
            completed: false
        };
        toDoData.push(newToDo);
        //
        localStorage.setItem('todoList1', JSON.stringify(toDoData));
        //
        headerInput.value = '';
        console.log(headerInput.value);
        console.log(headerInput.value);
        render();
    }

}) */






