const progress = document.getElementById('progress');
const send = document.getElementById('send');
const xhr = new XMLHttpRequest();

send.addEventListener('click', showProgress);

function showProgress(event) {
	event.preventDefault();
    
	xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');	

    xhr.upload.addEventListener('progress', function (event) {
		progress.value = event.loaded / event.total;
	})

	xhr.send(new FormData(form));

}