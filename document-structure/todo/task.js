let inputBox = document.getElementById("task__input");
let tasksList = document.getElementById("tasks__list");
const form = document.getElementById('tasks__form');

const addTask = (event) => {
	event.preventDefault();

	const inputText = inputBox.value.trim();

	if(inputText == '') {
		return;
	}

	tasksList.insertAdjacentHTML('afterbegin', `
		<div class="task">
		  <div class="task__title">
			${inputText}
		  </div>
		  <a href="#" class="task__remove">&times;</a>
		</div>
		`);

	const task = document.querySelector('.task:first-child');
	
	const closeButton = task.querySelector('.task__remove');	
	closeButton.addEventListener('click', () => {
		task.remove();
	});

	form.reset();

}

document.getElementById("tasks__add").addEventListener("click", addTask);