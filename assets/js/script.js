// Variable for new task button
var formEl = document.querySelector("#task-form");
// Variable for task list
var tasksToDoEl = document.querySelector('#tasks-to-do');

// Click function of button

var createTaskHandler = function() {

    event.preventDefault();

    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task.";
    tasksToDoEl.appendChild(listItemEl);
  }

  formEl.addEventListener("submit", createTaskHandler); 