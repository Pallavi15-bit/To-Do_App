const taskInput = document.getElementById("task-input");
const emojiInput = document.getElementById("emoji-input");
const taskList = document.getElementById("task-list");
const addButton = document.getElementById("add-task");

addButton.addEventListener("click", () => {
  const task = taskInput.value.trim();
  const emoji = emojiInput.value.trim();

  if (!task) return;

  const checkpoint = document.createElement("div");
  checkpoint.classList.add("checkpoint");

  checkpoint.innerHTML = `
    <span>${emoji} ${task}</span>
    <button class="complete-btn">Done</button>
  `;

  checkpoint.querySelector(".complete-btn").addEventListener("click", () => {
    checkpoint.classList.add("completed");
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 }
    });
  });

  taskList.appendChild(checkpoint);

  taskInput.value = "";
  emojiInput.value = "";
});
