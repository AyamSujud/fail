function addTask() {
    var taskInput = document.getElementById('taskInput');
    var taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    var taskList = document.getElementById('taskList');
    var listItem = document.createElement('li');

    var taskContent = document.createElement('span');
    taskContent.textContent = taskText;
    listItem.appendChild(taskContent);

    var taskActions = document.createElement('div');
    taskActions.className = 'task-actions';

    var renameButton = document.createElement('button');
    renameButton.textContent = 'Rename';
    renameButton.className = 'rename';
    renameButton.onclick = function() {
        renameTask(taskContent);
    };
    taskActions.appendChild(renameButton);

    var doneButton = document.createElement('button');
    doneButton.textContent = 'Done';
    doneButton.className = 'done';
    doneButton.onclick = function() {
        moveToDone(listItem);
    };
    taskActions.appendChild(doneButton);

    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function() {
        moveToDeleted(listItem);
    };
    taskActions.appendChild(deleteButton);

    listItem.appendChild(taskActions);
    taskList.appendChild(listItem);

    taskInput.value = '';
}

function renameTask(taskContent) {
    var newTaskText = prompt('Rename task:', taskContent.textContent);
    if (newTaskText !== null && newTaskText.trim() !== '') {
        taskContent.textContent = newTaskText.trim();
    }
}

function moveToDone(listItem) {
    var doneList = document.getElementById('doneList');
    listItem.removeChild(listItem.querySelector('.task-actions'));
    doneList.appendChild(listItem);
}

function moveToDeleted(listItem) {
    var deletedList = document.getElementById('deletedList');
    listItem.removeChild(listItem.querySelector('.task-actions'));
    deletedList.appendChild(listItem);
}

