function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    const li = document.createElement("li");

    li.innerHTML = `
        <span onclick="toggleDone(this)">${taskText}</span>
        <button onclick="removeTask(this)">Remover</button>
      `;

    document.getElementById("taskList").appendChild(li);
    taskInput.value = "";
  }
}

function removeTask(button) {
  const li = button.parentElement;
  li.remove();
}
