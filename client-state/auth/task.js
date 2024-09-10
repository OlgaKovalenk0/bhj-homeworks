const userId = localStorage.getItem('id');

if (userId) {
  setAuth(userId);

  const signoutBtn = document.getElementById('signout__btn');

  signoutBtn.addEventListener('click', (e) => {
    localStorage.removeItem('id');
  })
} else {

  const signinBtn = document.getElementById('signin__btn');

  const form = document.forms.signin__form;
  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';

  signinBtn.addEventListener('click', (e) => {
    e.preventDefault();
  
    xhr.addEventListener('load', () => {
  
      const response = xhr.response;
      
      if (response.success) {
        const userId = response['user_id'];
        localStorage.setItem('id', userId);
        setAuth(userId);      
      } else {
        alert('Неверный логин/пароль');
      }
    });
  
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
    const formData = new FormData(form);
    xhr.send(formData);
    form.reset();
  });
}

function setAuth(userId) {
  document.querySelector('.signin').classList.remove('signin_active');
  document.querySelector('.welcome').classList.add('welcome_active');      
  document.getElementById('user_id').textContent = userId;
}