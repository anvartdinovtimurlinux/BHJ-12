'use strict';


const editor = document.querySelector('#editor');
const btnClear = document.querySelector('#clear-editor');

document.addEventListener('DOMContentLoaded', () => {
  editor.value = localStorage.text
    ? localStorage.text
    : '';
});

editor.addEventListener('input', () => {
  localStorage.text = editor.value;
});

btnClear.addEventListener('click', () => {
  editor.value = '';
  localStorage.text = '';
});