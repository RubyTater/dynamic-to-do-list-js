document.addEventListener('DOMContentLoaded', function () {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a task
    function addTask() {
        // Get and trim input value
        const taskText = taskInput.value.trim();

        // Check if input is empty
        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        // Create <li> element and set its textContent
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-btn';

        // Assign onclick to remove the task
        removeBtn.onclick = function () {
            taskList.removeChild(li);
        };

        // Append remove button to <li>, then append <li> to the list
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = '';
    }

    // Add click event to Add Task button
    addButton.addEventListener('click', addTask);

    // Add keypress event for Enter key
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});

