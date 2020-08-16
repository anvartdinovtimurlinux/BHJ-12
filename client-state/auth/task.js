'use strict';


const formContainer = document.getElementById('signin');
const form = document.getElementById('signin__form');
const welcome = document.getElementById('welcome');
const loginBtn = document.getElementById('signin__btn');
const logoutBtn = document.getElementById('logout__btn');
const userID = document.getElementById('user_id');


document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.user) {
    welcome.classList.add('welcome_active');
    userID.innerText = localStorage.user;
  } else {
    formContainer.classList.add('signin_active');
  }
});

loginBtn.addEventListener('click', (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const request = new XMLHttpRequest();
  request.open('POST', ' https://netology-slow-rest.herokuapp.com/auth.php');
  request.send(formData);

  request.addEventListener('readystatechange', () => {
    if (request.readyState === 4 && request.status === 200) {
      const data = JSON.parse(request.responseText);
      if (data.success) {
        welcome.classList.add('welcome_active');
        formContainer.classList.remove('signin_active');
        userID.innerText = data.user_id;
        localStorage.setItem('user', data.user_id);
      } else {
        alert('Неверный логин/пароль');
      }
    }
  });
});

logoutBtn.addEventListener('click', () => {
  localStorage.removeItem('user');
  welcome.classList.remove('welcome_active');
  formContainer.classList.add('signin_active');
});