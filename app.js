// DOM-Elemente abrufen
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Aufgaben aus dem lokalen Speicher laden
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Funktion zum Speichern der Aufgaben im lokalen Speicher
function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Funktion zum Rendern der Aufgabenliste
function renderTasks() {
    taskList.innerHTML = '';
    
    tasks.forEach((task, index) => {
        const taskItem = document.createElement('li');
        
        // Task-Text-Element
        const taskText = document.createElement('span');
        taskText.textContent = task.text;
        if (task.completed) {
            taskText.classList.add('completed');
        }
        
        // Checkbox für den Aufgabenstatus
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = task.completed;
        checkbox.addEventListener('change', () => toggleTask(index));
        
        // Löschen-Button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Löschen';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.addEventListener('click', () => deleteTask(index));
        
        // Elemente zum Task-Item hinzufügen
        taskItem.appendChild(checkbox);
        taskItem.appendChild(taskText);
        taskItem.appendChild(deleteBtn);
        
        // Task-Item zur Liste hinzufügen
        taskList.appendChild(taskItem);
    });
}

// Funktion zum Hinzufügen einer neuen Aufgabe
function addTask() {
    const text = taskInput.value.trim();
    
    if (text) {
        tasks.push({
            text,
            completed: false
        });
        
        taskInput.value = '';
        saveTasks();
        renderTasks();
    }
}

// Funktion zum Umschalten des Aufgabenstatus
function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    saveTasks();
    renderTasks();
}

// Funktion zum Löschen einer Aufgabe
function deleteTask(index) {
    tasks.splice(index, 1);
    saveTasks();
    renderTasks();
}

// Event-Listener
addTaskBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});

// Initiales Rendering der Aufgabenliste
renderTasks(); 