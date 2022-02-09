// Variable for new task button
var buttonEl = document.querySelector('#save-task');
// Variable for task list
var tasksToDoEl = document.querySelector('#tasks-to-do');

// Click function of button

var createTaskHandler = function() {
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task.";
    tasksToDoEl.appendChild(listItemEl);
  }

  buttonEl.addEventListener("click", createTaskHandler); 