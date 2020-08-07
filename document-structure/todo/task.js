'use strict';


const newTaskText = document.getElementById('task__input');
const newTaskBtn = document.getElementById('tasks__add');
const taskList = document.getElementById('tasks__list');
const tasks = [];


const addTask = (text) => {
  const task = document.createElement('div');
  task.className = 'task';
  task.innerHTML = `
    <div class="task__title">
      ${text}
    </div>
    <a href="#" class="task__remove">&times;</a>`;

  taskList.append(task);
  tasks.push(text);

  task.querySelector('.task__remove').addEventListener('click', () => {
    task.remove();
    tasks.splice(tasks.indexOf(text), 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  });
  
  localStorage.setItem('tasks', JSON.stringify(tasks));
  newTaskText.value = '';
};


document.addEventListener('DOMContentLoaded', () => {
  const tasksFromLS = JSON.parse(localStorage.getItem('tasks'));
  if (tasksFromLS) {
    for (let task of tasksFromLS) {
      addTask(task);
    }
  }
});


newTaskText.addEventListener('keydown', (event) => {
  if (event.keyCode === 13 && newTaskText.value) {
    event.preventDefault()
    addTask(newTaskText.value)
  }
});


newTaskBtn.addEventListener('click', (event) => {
  if (newTaskText.value) {
    event.preventDefault()
    addTask(newTaskText.value)
  }
});

