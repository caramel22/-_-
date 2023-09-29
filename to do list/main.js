document.addEventListener('DOMContentLoaded', function() {
    const taskForm = document.getElementById('taskForm');
    const taskList = document.getElementById('taskList');

    taskForm.addEventListener('submit', function(e) {
        e.preventDefault();

       
        const taskInput = document.getElementById('taskInput');
        const descriptionInput = document.getElementById('descriptionInput');
        const task = taskInput.value;
        const description = descriptionInput.value;

        
        const newRow = document.createElement('tr');

       
        const taskCell = document.createElement('td');
        taskCell.textContent = task;

        const descriptionCell = document.createElement('td');
        descriptionCell.textContent = description;

     
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.classList.add('edit');
        editButton.addEventListener('click', function() {
            const newTask = prompt('Enter new task:', task);
            if (newTask !== null) {
                taskCell.textContent = newTask;
            }
        });

       
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete');
        deleteButton.addEventListener('click', function() {
            if (confirm('Are you sure you want to delete this task?')) {
                newRow.innerHTML = '';
            }
        });

        const actionsCell = document.createElement('td');
        actionsCell.classList.add('actions');
        actionsCell.appendChild(editButton);
        actionsCell.appendChild(deleteButton);

        newRow.appendChild(taskCell);
        newRow.appendChild(descriptionCell);
        newRow.appendChild(actionsCell);

      
        taskList.appendChild(newRow);

        
        taskInput.value = '';
        descriptionInput.value = '';
    });
});