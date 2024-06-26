let taskInput = document.querySelector("#task-input");
let addTaskBtn = document.querySelector("#add-task-btn");
let taskList = document.querySelector("#task-list");

let id = 1;
const getLocalData = () => {
    let data = JSON.parse(localStorage.getItem("allTodoAtStorage"));
    return data;
};

let allTask = getLocalData() || [];
console.log("Length of allTask is : ", allTask.length);

// createTaskElement function
const createTaskElement = (newId, newValue) => {
    let createTask = document.createElement("li");
    createTask.className = "todoTask";
    createTask.setAttribute("id", newId);
    createTask.innerHTML = `<textarea readonly class="transClose">${newValue}</textarea>
    <small class="edit" onClick="updateTask('${newId}')">Edit</small>
    <small class="update" style="display: none;" onClick="editTask('${newId}')">Update</small>
    <small class="delete" onclick="filterDeleted('${newId}')">Delete</small>`;
    taskList.append(createTask);
};

if (allTask && allTask.length > 0) {
    allTask.sort((a, b) => a.taskName.length - b.taskName.length).forEach((ele) => createTaskElement(ele.taskId, ele.taskName));
    console.log("Data found and mapped");
} else {
    console.log("No Data found in localStorage");
}

function checkId() {
    if (allTask.length > 0) {
        let newArr = allTask
        const arr = newArr.sort(
            (a, b) => Number(b.taskId.slice(5)) - Number(a.taskId.slice(5))
        );
        id = Number(arr[0].taskId.slice(5)) + 1;
    }
}
checkId();

// Add Task Button
addTaskBtn.addEventListener("click", () => {
    let newObj = {
        'taskId': `task_${id}`,
        'taskName': taskInput.value.trim(),
    };
    createTaskElement(newObj.taskId, newObj.taskName);
    id++;
    taskInput.value = "";
    allTask.push(newObj);
    updateStorage();
});

// Press Enter on input when task is written
taskInput.addEventListener("keypress", (e) => {
    if (e.key == "Enter") {
        let newObj = {
            'taskId': `task_${id}`,
            'taskName': taskInput.value.trim(),
        };
        createTaskElement(newObj.taskId, newObj.taskName);
        id++;
        taskInput.value = "";
        allTask.push(newObj);
        updateStorage();
    }
});

// Delete Todo or Filter todo
const filterDeleted = (el) => {
    document.getElementById(el).remove();
    allTask = allTask.filter((item) => item.taskId !== el);
    updateStorage();
};

// Update Todo
const updateTask = (el) => {
    // console.log(allTask)
    let updateEl = document.getElementById(el).children[0];
    let newInputValue = updateEl.value.trim();
    if (updateEl.hasAttribute("readonly")) {
        updateEl.removeAttribute("readonly");
        updateEl.classList.remove = "transClose";
        updateEl.classList.add = "transOpen";
        document.getElementById(el).children[1].innerHTML = "Update";
    } else {
        updateEl.setAttribute("readonly", "true");
        updateEl.classList.remove = "transOpen";
        updateEl.classList.add = "transClose";
        document.getElementById(el).children[1].innerHTML = "Edit";
        allTask = allTask.map((e) => {
            if (e.taskId === el) {
                e.taskName = newInputValue;
            }
            return e;
        });
        updateStorage();
    }
};

function updateStorage() {
    localStorage.setItem("allTodoAtStorage", JSON.stringify(allTask));
}



