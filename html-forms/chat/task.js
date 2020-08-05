'use strict';


const botMessages = [
  'Ты еще тут?',
  'Как же ты надоел',
  'Пиши в спортлото',
  'Чао, бамбино',
  'Да сколько это еще будет продолжаться?',
  'Некоторые люди совсем не понимают намеки',
  'Время позднее, тебе пора спать',
  'Ну хорошо, сформулируй вопрос еще раз и я тебе отвечу',
];

const chatWidget = document.querySelector('.chat-widget');
const messages = document.getElementById('chat-widget__messages');
const messageField = document.getElementById('chat-widget__input');
const chatContainer = document.querySelector('.chat-widget__messages-container');

const sendMessage = (text, isBot=true) => {
  const date = new Date();
  messages.innerHTML += `
    <div class="message ${isBot ? '' : 'message_client'}">
      <div class="message__time">${date.getHours()}:${date.getMinutes()}</div>
      <div class="message__text">
        ${text}
      </div>
    </div>`;
  chatContainer.scroll(0, chatContainer.getBoundingClientRect().bottom);
}

let timeDelay;
const delay = () => {
  timeDelay = setTimeout(() => {
    sendMessage('Тебе че-то нужно? Или просто мое время тратишь?');
  }, 30000);
}


chatWidget.addEventListener('click', () => {
  chatWidget.classList.add('chat-widget_active');
  delay();
});

messageField.addEventListener('keydown', (event) => {
  window.clearTimeout(timeDelay);

  if (event.keyCode === 13 && messageField.value) {
    sendMessage(messageField.value, false);
    messageField.value = '';

    const botMessage = botMessages[Math.floor(Math.random() * botMessages.length)];
    const responseTime = Math.floor(Math.random() * 1000);
    setTimeout(() => {
      sendMessage(botMessage);
    }, responseTime);
  }

  delay();
});
