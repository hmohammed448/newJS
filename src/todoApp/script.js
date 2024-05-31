let taskInput = document.querySelector("#task-input");
let taskList = document.querySelector("#task-list");
let addTaskBtn = document.querySelector("#add-task-btn");
let deleteBtn = document.getElementsByClassName("delete");
let textAreas = document.getElementsByTagName("textarea");

let id = 1;
let allTask = JSON.parse(localStorage.getItem("allTaskStorage")) || [];

if (allTask.length > 0) {
  allTask.forEach((el) => createTaskElement(el.id, el.taskName));
}

let addTask = () => {
  // LargestID Checking to assign Unique ID
  let largestID = 0;
  if (allTask.length > 0) {
    largestID = allTask.map((el) => el.id).sort((a, b) => a - b);
    id = Number(largestID[largestID.length - 1] + 1);
    console.log("ID : ", id);
  }

  taskInput.value == "" && alert("Please enter task value!");
  if (taskInput.value == "") {
    return false; // Input is Empty
  }

  let taskValue = taskInput.value;
  createTaskElement(id, taskValue);

  let newTask = {
    id: id,
    taskName: taskValue,
  };
  id++;
  taskInput.value = "";

  allTask.push(newTask);
  localStorage.setItem("allTaskStorage", JSON.stringify(allTask));
  checkHeight();
  console.log("Task : ", allTask);
};

// createTaskElement function
function createTaskElement(id, taskValue) {
  let createTask = document.createElement("div");
  createTask.className = "todoTask";
  createTask.innerHTML = `<textarea id="task-${id}">${taskValue}</textarea><small class="update">Update</small><small class="delete" onclick=filterDeleted(${id})>Delete</small>`;
  taskList.append(createTask);
}

// Add Button Trigger
addTaskBtn.addEventListener("click", addTask);

function filterDeleted(item) {
  let removeTask = document.querySelector(`#task-${item}`).parentElement;
  removeTask && removeTask.remove(); // Removed parentElement from DOM

  allTask = allTask.filter((el) => el.id !== item); // Delete

  localStorage.setItem("allTaskStorage", JSON.stringify(allTask)); // set filteredData to localStorage
}

function checkHeight() {
  allTask.forEach((el) => {
    if (el.taskName.length > 250) {
      document.querySelector(`#task-${el.id}`).style.minHeight = "150px";
    }
  });
}
checkHeight();

function editTextArea(event) {
  let tar = event.target.id;

  const newID = Number(tar.slice(5));
  let arrayIndex;
  allTask.forEach((el, index) => {
    if (el.id == newID) {
      arrayIndex = index;
    }
  });
  allTask[arrayIndex].taskName = document.getElementById(tar).value;
  localStorage.setItem("allTaskStorage", JSON.stringify(allTask)); // Updating = set Updated Data to localStorage
  console.log(allTask);
  console.log("ID : ", newID, " ", typeof newID);
}

Array.from(textAreas).forEach((el) => {
  el.addEventListener("change", editTextArea);
});
