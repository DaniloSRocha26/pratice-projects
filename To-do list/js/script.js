const form = document.getElementById("listForm")
const stackTasks = document.getElementById("stackTasks")
const addTaskBtn = document.getElementById("addTaskBtn")

let taskCount = 0

function createTaskInput() {
    const taskRow = document.createElement("li")
    taskRow.classList.add("InputRow")

    const label = document.createElement("label")
    label.textContent = `Task ${taskCount + 1}`

    const input = document.createElement("input")
    input.type = "text"
    input.name = `task${taskCount + 1}`

    const deleteBtn = document.createElement("button")
    deleteBtn.type = "button"
    deleteBtn.textContent = "X"
    deleteBtn.addEventListener("click", () => {
        taskRow.remove()
    })

    taskRow.appendChild(label)
    taskRow.appendChild(input)
    taskRow.appendChild(deleteBtn)

    stackTasks.appendChild(taskRow)
    taskCount++
}

addTaskBtn.addEventListener("click", createTaskInput)

form.addEventListener("submit", (e) => {
    e.preventDefault()

    const inputs = stackTasks.querySelectorAll("input")
    const taskList = Array.from(inputs).map((input) => input.value.trim())

    alert("Registered Tasks:\n\n" + taskList.join("\n"))
})
