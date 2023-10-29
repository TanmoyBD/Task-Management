document.addEventListener('DOMContentLoaded', function() {
    const addTaskButton = document.getElementById('addTask');
    const taskList = document.getElementById('taskList');

    addTaskButton.addEventListener('click', function() {
        const taskName = prompt('Enter task name:');
        if (taskName) {
            const taskItem = document.createElement('li');
            taskItem.textContent = taskName;
            taskList.appendChild(taskItem);
        }
    });
});


