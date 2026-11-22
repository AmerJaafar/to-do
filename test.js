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

submit.onclick = () => {
  if (title.value.trim() === "") {
    error.innerHTML = "task title can not be empty";
  } else {
    error.innerHTML = "";
    let newTask = {
      id: crypto.randomUUID(),
      title: title.value,
      decreption: decreption.value,
      status: "inprogress",
    };
    tasks.push(newTask);
    localStorage.setItem("task", JSON.stringify(tasks));
    clearInputs();
    showTasks();
  }
};

function showTasks() {
  if (tasks.length == 0 ) {
    massege.classList.remove("hidden");
    table.classList.add("hidden");
    massege.innerHTML = "no tasks available to show";
  } else {
    massege.classList.add("hidden");
    table.classList.remove("hidden");
    let tableData = "";
    for (let i = 0; i < tasks.length; i++) {
      tableData += `<tr>
              <td>${tasks[i].title}</td>
              <td>${tasks[i].decreption}</td>
              <td>${tasks[i].status}</td>
              <td><button>update</button></td>
              <td><button onclick="deleteTask('${tasks[i].id}', ${i})">delete</button></td>
            </tr> `;
    }
    tBody.innerHTML = tableData;
  }
}
function clearInputs() {
  title.value = "";
  decreption.value = "";
}
showTasks();

function deleteTask(id, index) {
  console.log(id , index)
}
