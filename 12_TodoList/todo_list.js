
const taskInput = document.getElementById("taskInput");
const searchInput = document.getElementById("searchInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const clearCompletedBtn = document.getElementById("clearCompletedBtn");
const clearAllBtn = document.getElementById("clearAllBtn");

let tasks = [];

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        tasks.push({ text: taskText }); // add task to the list
        taskInput.value = ""; // clear input
        displayTasks();
    }
}

function displayTasks(filteredTasks = tasks) {

    console.log(filteredTasks);

    taskList.innerHTML = "" // reset the taskList

    filteredTasks.forEach((task, index) => {
        // create a list item with input and label
        const li = document.createElement("li");
        li.innerHTML = `<input type="checkbox" id="task-${index}" ${task.completed ? "checked" : ""} onchange="toggleTask(${index})">
        <label for="task-${index}">${task.text}</label>`;

        // add the newly created list item to the list
        taskList.appendChild(li);
    });

}

function toggleTask(index) {
    // to check and uncheck task
    tasks[index].completed = !tasks[index].completed;
    displayTasks();
    console.log(tasks);
}

function clearCompletedTasks() {
    // retrieve only the tasks that are not completed 
    tasks = tasks.filter(task => !task.completed);
    displayTasks();
}

addTaskBtn.addEventListener("click", addTask);
clearCompletedBtn.addEventListener("click", clearCompletedTasks);

clearAllBtn.addEventListener("click", () => {
    tasks = [];
    displayTasks();
});

searchInput.addEventListener("input", () => {
    const searchText = searchInput.value.trim().toLowerCase();
    let filteredTasks = "";

    // only search if entered more than 3 character
    if (searchText.length > 2) {
        filteredTasks = tasks.filter(task =>
            task.text.toLowerCase().includes(searchText)
        );

        displayTasks(filteredTasks);
    } else {
        displayTasks();
    }

})