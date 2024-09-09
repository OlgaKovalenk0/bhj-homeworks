let inputBox = document.getElementById("task__input");
let tasksList = document.getElementById("tasks__list");
const form = document.getElementById('tasks__form');

const addTask = () => {

	const inputText = inputBox.value.trim();

	if(inputText == '') {
		return;
	}

	const task = document.createElement('div')
	task.classList.add('task');	

	const taskTitle = document.createElement('div')
	taskTitle.classList.add('task__title');
	taskTitle.innerText = inputText;
	task.append(taskTitle);

	const closeLink = document.createElement('a');
	closeLink.classList.add('task__remove');
	closeLink.attributes.href = '#'
	closeLink.innerHTML = '&times;';
	closeLink.addEventListener('click', () => {
		task.remove();
	})	
	task.append(closeLink);

	tasksList.append(task);

	form.reset();

}

document.getElementById("tasks__add").addEventListener("click", addTask);