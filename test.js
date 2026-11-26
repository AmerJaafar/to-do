let title = document.getElementById("title");
let decreption = document.getElementById("descreption");
let submit = document.getElementById("submit");
let error = document.getElementById("error");
let table = document.getElementById("table");
let massege = document.getElementById("massege");
let tBody = document.getElementById("t-body");

let tasks;
localStorage.task != null
  ? (tasks = JSON.parse(localStorage.task))
  : (tasks = []);

function addTask() {
  if (title.value.trim() === "") {
    error.textContent = "task title can not be empty";
  } else {
    error.textContent = "";
    let newTask = {
      id: crypto.randomUUID(),
      title: title.value,
      decreption: decreption.value,
      status: "todo",
    };
    tasks.push(newTask);
    localStorage.setItem("task", JSON.stringify(tasks));
    clearInputs();
    showTasks();
  }
}
submit.addEventListener("click", addTask);

function showTasks() {
  tBody.replaceChildren();
  if (tasks.length == 0) {
    massege.classList.remove("hidden");
    table.classList.add("hidden");
    massege.textContent = "no tasks available to show";
  } else {
    massege.classList.add("hidden");
    table.classList.remove("hidden");

    for (let i = 0; i < tasks.length; i++) {
      const id = tasks[i].id;
      const tr = document.createElement("tr");
      const tdTitle = document.createElement("td");
      tdTitle.textContent = tasks[i].title;
      const tdDesc = document.createElement("td");
      tdDesc.textContent = tasks[i].decreption;
      const tdStatus = document.createElement("td");
      tdStatus.textContent = tasks[i].status;
      const tdDelete = document.createElement("td");
      const deleteButton = document.createElement("button");
      deleteButton.setAttribute("class", "delete");
      deleteButton.textContent = "delete";
      deleteButton.addEventListener("click", () => {
        deleteTask(id);
      });
      tdDelete.appendChild(deleteButton);
      const tdUpdat = document.createElement("td");
      const updatButton = document.createElement("button");
      updatButton.textContent = "updat";
      tdUpdat.appendChild(updatButton);
      updatButton.addEventListener("click", () => {
        updateTask(id);
      });
      tr.appendChild(tdTitle);
      tr.appendChild(tdDesc);
      tr.appendChild(tdStatus);
      tr.appendChild(tdDelete);
      tr.appendChild(tdUpdat);
      tBody.appendChild(tr);
    }
  }
}
function clearInputs() {
  title.value = "";
  decreption.value = "";
}
showTasks();

function deleteTask(id) {
  const foundIndex = tasks.findIndex(function (item) {
    return item.id === id;
  });
  if (foundIndex != -1) {
    tasks.splice(foundIndex, 1);
    localStorage.setItem("task", JSON.stringify(tasks));
  }
  showTasks();
}
function updateTask(id) {
  console.log(id);
}
