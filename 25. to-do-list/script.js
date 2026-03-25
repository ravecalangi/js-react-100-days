const addBtn = document.getElementById("add-btn");
const toDoContainer = document.getElementById("todo-container");
const inputText = document.getElementById("input-text");

function addTask() {
  if (inputText.value.trim() === "") {
    alert("You can't input empty value.");
    return;
  }

  const li = document.createElement("li");
  li.textContent = inputText.value;

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";

  removeBtn.addEventListener("click", () => {
    li.remove();
  });

  li.appendChild(removeBtn);
  toDoContainer.appendChild(li);

  inputText.value = "";
}

addBtn.addEventListener("click", addTask);

document.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});