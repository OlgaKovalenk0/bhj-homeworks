const items = document.getElementById('items');
const loader = document.getElementById('loader');
const xhr = new XMLHttpRequest()

xhr.addEventListener('readystatechange', () => {
  if (xhr.readyState === xhr.DONE) {
    loader.classList.remove('loader_active');
    
    let response =JSON.parse(xhr.responseText)['response']['Valute'];
    
    for (let item in response) {
      items.insertAdjacentHTML('afterbegin', `
        <div class='item'>
          <div class='item__code'>
            ${response[item]['CharCode']}
          </div>
          <div class='item__value'>
            ${response[item]['Value']}
          </div>
          <div class='item__currency'>
            руб.
          </div>
        </div>
        `);
    };
  }
})

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses')
xhr.send()