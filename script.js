const taskInput = document.querySelector(".newtask input");
const taskSection = document.querySelector(".tasks");

taskInput.addEventListener("keyup", (e) => {
  if (e.key == "Enter") {
    createTask();
  }
});

document.querySelector("#push").onclick = function () {
  createTask();
};

function createTask() {
  if (taskInput.value.length == 0) {
    alert("The task field is empty");
  } else {
    taskSection.innerHTML += `<div class="task"> 
    <label id="taskname"> 
    <input id="check-task" onclick="updateTask(this)" type="checkbox">
        <p>${document.querySelector("#newtask input").value}</p>
        </label>
        <div class="delete">X</i></div></div>`;

    var currentTask = document.querySelectorAll(".delete");
    for (var i = 0; i < currentTask.length; i++) {
      currentTask[i].onclick = function () {
        this.parentNode.remove();
      };
    }

    taskSection.offsetHeight >= 300
      ? taskSection.classList.add("overflow")
      : taskSection.classList.remove("overflow");
  }
}

function updateTask(task) {
  let taskItem = task.parentElement.lastElementChild;
  if (task.checked) {
    taskItem.classList.add("checked");
  } else {
    taskItem.classList.remove("checked");
  }
}
