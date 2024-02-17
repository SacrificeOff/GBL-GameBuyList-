const addButton = document.getElementById('push');
const tasksContainer = document.getElementById('jeux');

addButton.addEventListener('click', function() {
    const newTaskInput = document.getElementById('nouveau_element');
    const newTask = document.createElement('div');
    newTask.innerHTML = `
        <input type="checkbox" class="checkbox" name="task" id="task_${tasksContainer.childElementCount + 1}">
        <label for="task_${tasksContainer.childElementCount + 1}" class="font-bold">${newTaskInput.value}</label>
        <button class="delete-button bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded my-1">Delete</button>
    `;
    tasksContainer.appendChild(newTask);
    newTaskInput.value = '';
});

tasksContainer.addEventListener('click', function(event) {
    if (event.target.classList.contains('delete-button')) {
        event.target.parentNode.remove();
    }
});
