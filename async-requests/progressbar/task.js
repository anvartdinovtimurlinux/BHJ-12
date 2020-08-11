'use strict';


'use strict';


const progress = document.getElementById('progress');
const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const formData = new FormData(form);
  const xhr = new XMLHttpRequest();

  xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');

  xhr.upload.onprogress = (event) => {
    progress.value = event.loaded / event.total;
  };

  xhr.upload.onerror = () => {
    console.log(`Произошла ошибка во время отправки: ${xhr.status}`);
  };

  xhr.send(formData);
});