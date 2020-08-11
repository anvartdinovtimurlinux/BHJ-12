'use strict';


function createCurrencyList(currencies) {
  const currencyList = document.createElement('div');
  currencyList.id = 'items';

  for (let currency of Object.values(currencies)) {
    const currencyName = currency.CharCode;
    const currencyValue = currency.Value;

    const currencyItem = document.createElement('div');
    currencyItem.className = 'item';
    currencyItem.innerHTML = `
      <div class="item__code">
        ${currencyName}
      </div>
      <div class="item__value">
        ${currencyValue}
      </div>
      <div class="item__currency">
        руб.
      </div>`;

    currencyList.append(currencyItem);
  }

  document.querySelector('#loader').classList.remove('loader_active');
  document.querySelector('h1').insertAdjacentElement('afterend', currencyList);
}


let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');
xhr.responseType = 'json';
xhr.send();


xhr.addEventListener('readystatechange', () => {
  if (xhr.readyState === 4) {
    const currencies = xhr.response.response.Valute;
    localStorage.setItem('currency', JSON.stringify(currencies));

    if (document.querySelector('#items')) {
      document.querySelector('#items').remove();
    }
    createCurrencyList(currencies);

    // console.log('Выведен обновленный список валют');
  }
});


document.addEventListener('DOMContentLoaded', () => {
  const previousCurrency = JSON.parse(localStorage.getItem('currency'));
  if (previousCurrency) {
    createCurrencyList(previousCurrency);

    // console.log('Выведен старый список валют');
  }
});