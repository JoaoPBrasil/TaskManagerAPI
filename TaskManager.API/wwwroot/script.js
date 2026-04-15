const apiUrl = "/api/tasks";

async function loadTasks() {

    const response = await fetch(apiUrl);

    const tasks = await response.json();

    const list = document.getElementById("taskList");

    const counter = document.getElementById("taskCounter");

    list.innerHTML = "";

    if (tasks.length === 0) {

        counter.innerText = "No tasks yet";

        return;
    }

    const completed = tasks.filter(t => t.isCompleted).length;

    counter.innerText =
        `${completed} of ${tasks.length} tasks completed`;

    tasks.forEach(task => {

        const li = document.createElement("li");

        li.innerHTML = `
        <div>

            <input
                type="checkbox"
                ${task.isCompleted ? "checked" : ""}
                onchange="toggleComplete(${task.id}, this.checked)"
            >

            <span class="${task.isCompleted ? 'completed' : ''}">
                ${task.title}
            </span>

            <span class="status">
                ${task.isCompleted ? 'Completed' : 'Pending'}
            </span>

        </div>

        <div>

            <button onclick="deleteTask(${task.id})">
                Delete
            </button>

        </div>
    `;

        list.appendChild(li);

    });
}

async function createTask() {

    const title = document.getElementById("title").value;

    const description =
        document.getElementById("description").value;

    await fetch(apiUrl, {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({

            title,
            description

        })
    });

    loadTasks();
}

async function deleteTask(id) {

    await fetch(`${apiUrl}/${id}`, {

        method: "DELETE"

    });

    loadTasks();
}

async function toggleComplete(id, isCompleted) {

    const response = await fetch(`${apiUrl}/${id}`);

    const task = await response.json();

    await fetch(`${apiUrl}/${id}`, {

        method: "PUT",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({

            title: task.title,

            description: task.description,

            isCompleted: isCompleted

        })
    });

    loadTasks();
}

loadTasks();