        let tasks = ["Buy groceries", "Complete assignment"];
        function loadTasks() {
            const taskList = document.getElementById('taskList');
            taskList.innerHTML = ''; 
            tasks.forEach((task, index) => {
                const taskItem = `<li class="list-group-item d-flex justify-content-between align-items-center">
                                    ${task}
                                    <button class="btn btn-danger btn-sm" onclick="deleteTask(${index})">Delete</button>
                                  </li>`;
                taskList.innerHTML += taskItem;
            });
        }
        function addTask() {
            const taskInput = document.getElementById('taskInput');
            const newTask = taskInput.value.trim();
            if (newTask !== '') {
                tasks.push(newTask); 
                taskInput.value = ''; 
                loadTasks(); 
            }
        }

        function deleteTask(index) {
            tasks.splice(index, 1); 
            loadTasks(); 
        }

        document.getElementById('addTaskButton').addEventListener('click', addTask);
        window.onload = loadTasks;