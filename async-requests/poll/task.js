'use strict';


let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.responseType = 'json';
xhr.send();

xhr.addEventListener('readystatechange', () => {
  if (xhr.readyState === 4) {
    const question = xhr.response.data.title;
    const answers = xhr.response.data.answers;
    const ID = xhr.response.id;

    const answerButtons = [];
    for (let answer of answers) {
      answerButtons.push(`
        <button class="poll__answer">
          ${answer}
        </button>`);
    }

    const poll = document.createElement('div');
    poll.name = 'poll'
    poll.className = 'poll';
    poll.innerHTML = `
      <div class="poll__title" id="poll__title">
        ${question}
      </div>
      <div class="poll__answers poll__answers_active" id="poll__answers">
        ${answerButtons.join('')}
      </div>`;
    document.querySelector('body').insertAdjacentElement('afterbegin', poll);

    document.querySelectorAll('.poll__answer').forEach((element, index) => {
      element.addEventListener('click', () => {
        alert(element.innerText);

        xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/poll.php');
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.responseType = 'json';
        xhr.send(`vote=${ID}&answer=${index}`);
        
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
                ${question}
              </div>
              <div>
                ${results.join('')}
              </div>`;
          }
        });
      });
    });
  }
});
