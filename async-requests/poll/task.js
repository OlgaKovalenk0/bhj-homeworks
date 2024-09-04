let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll', false);

xhr.send();

let obj = JSON.parse(xhr.responseText);

let pollTitle = document.getElementById('poll__title'),
    pollAnswers = document.getElementById('poll__answers');

pollTitle.innerHTML = obj.data.title;

let ans = obj.data.answers;

for (let i = 0; ans.length > i; i++) {
    let btn = document.createElement('button');
    btn.className = 'poll__answer';
    btn.innerHTML = ans[i];

    pollAnswers.appendChild(btn);

    btn.addEventListener('click', function () {
        alert('Спасибо, ваш голос засчитан!');
    })
} 