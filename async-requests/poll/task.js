'use strict';


function getPoll() {
  const question = xhr.response.data.title;
  const answers = xhr.response.data.answers;
  const id = xhr.response.id;

  const answerButtons = [];
  for (let answer of answers) {
    answerButtons.push(`
      <button class="poll__answer">
        ${answer}
      </button>`);
  }

  const poll = document.createElement('div');
  poll.className = 'poll';
  poll.id = id;
  poll.innerHTML = `
    <div class="poll__title" id="poll__title">
      ${question}
    </div>
    <div class="poll__answers poll__answers_active" id="poll__answers">
      ${answerButtons.join('')}
    </div>`;

  return poll;
}


function pollProcessor(element, index) {
  element.addEventListener('click', () => {
    alert('Спасибо, ваш голос засчитан!');

    const poll = document.querySelector('.poll');

    xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/poll.php');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.responseType = 'json';
    xhr.send(`vote=${poll.id}&answer=${index}`);
    
    xhr.addEventListener('readystatechange', () => {
      if (xhr.readyState === 4) {
        const results = [];
        const totalVotes = xhr.response.stat.reduce((acc, a) => acc + a.votes, 0);
        for (let result of xhr.response.stat) {
          results.push(`
            <p>
              ${result.answer}: 
              <b>${(100 * result.votes / totalVotes).toFixed(2)}%</b>
            </p>
          `);
        }

        poll.innerHTML = `
          <div class="poll__title" id="poll__title">
            ${document.querySelector('.poll__title').innerText}
          </div>
          <div>
            ${results.join('')}
          </div>`;
      }
    });
  });
}


let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.responseType = 'json';
xhr.send();

xhr.addEventListener('readystatechange', () => {
  if (xhr.readyState === 4) {
    const poll = getPoll();
    document.querySelector('body').insertAdjacentElement('afterbegin', poll);

    poll.querySelectorAll('.poll__answer').forEach(pollProcessor);
  }
});
