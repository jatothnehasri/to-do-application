const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const themeToggle = document.getElementById("themeToggle");

function addTask() {
  const taskText = taskInput.value.trim();
  if (!taskText) {
    alert("⚠️ Please enter a task.");
    return;
  }

  const li = document.createElement("li");

  // 📝 Task Text
  const span = document.createElement("span");
  span.textContent = taskText;
  span.onclick = () => {
    span.classList.toggle("completed");
    if (span.classList.contains("completed")) {
      alert("✅ Marked as completed!");
    } else {
      alert("🔄 Marked as not completed!");
    }
  };

  // ✏️ Edit button
  const editBtn = document.createElement("button");
  editBtn.textContent = "✏️";
  editBtn.title = "Edit Task";
  editBtn.onclick = () => {
    const newText = prompt("Edit task:", span.textContent);
    if (newText !== null && newText.trim() !== "") {
      span.textContent = newText.trim();
      alert("📝 Task updated!");
    }
  };

  // 🗑️ Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "🗑️";
  deleteBtn.title = "Delete Task";
  deleteBtn.onclick = () => {
    if (confirm("Are you sure you want to delete this task? 🗑️")) {
      li.remove();
      alert("Task deleted!");
    }
  };

  li.appendChild(span);
  li.appendChild(editBtn);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  taskInput.value = "";
}

// 🌙 Theme toggle
themeToggle.onclick = () => {
  document.body.classList.toggle("dark");
};
