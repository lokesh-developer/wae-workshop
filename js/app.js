let button = document.getElementById("add-task");
let input = document.getElementById("task-name");
let inputValue;
let tasks = JSON.parse(localStorage.getItem("allTasks")) || [];
let table = document.querySelector('tbody')

function loadData() {
    let storedData = JSON.parse(localStorage.getItem("allTasks"))
    storedData.map((s) => {
        table.insertAdjacentHTML("beforeend", `
                <tr>
                    <td id="taskHu">${s}</td>
                    <td><button id="complete-task" onclick="completeTask(this)">Complete</button></td>
                    <td><button id="delete-task" onclick="deleteTask(this)">Delete</button></td>
                </tr>
    `)
    })
}
loadData();
let completeButtons = document.querySelectorAll("#complete-task");
let completeButton = document.querySelector("#complete-task");

function addTask() {
    inputValue = input.value;
    tasks.push(inputValue)
}


button.addEventListener("click", function () {
    localStorage.setItem("allTasks", JSON.stringify(tasks))
    localStorage.setItem("taskNumber", tasks.length)
    table.insertAdjacentHTML("beforeend", `
                <tr>
                    <td id="taskHu">${inputValue}</td>
                    <td><button id="complete-task" onclick="completeTask(this)">Complete</button></td>
                    <td><button id="delete-task" onclick="deleteTask(this)">Delete</button></td>
                </tr>
    `)
    inputValue = ""
    input.value = ""
})

function completeTask(e) {
    e.parentElement.parentElement.querySelector('#taskHu').classList.add("completed")
    e.disabled = true;
}

function deleteTask(e) {
    tasks.forEach(element => {
        if (element === e.parentElement.parentElement.querySelector('#taskHu').innerText) {
            tasks.splice(tasks.indexOf(element), 1)
        }
    });
    localStorage.setItem('allTasks', JSON.stringify(tasks))
    e.parentElement.parentElement.remove()
}


