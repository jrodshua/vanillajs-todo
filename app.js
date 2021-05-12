const listState = [];
let currentTodo = "";

const listText = document.getElementById("todo-input");
const addButton = document.getElementById("todo-button");
const addedList = document.getElementById("todo-list");

const handleTodoText = (event) => {
  currentTodo = event.target.value;
};

const resetTodoText = () => {
  listText.value = "";
};

const handleAddTodo = (event) => {
  event.preventDefault();
  if (currentTodo !== "") {
    listState.push({
      id: Date.now(),
      item: currentTodo,
    });

    resetTodoText();
    renderTodoList();
  }
};

const renderTodoList = () => {
  const listItem = document.createElement("li");
  listState.forEach((list) => {
    listItem.innerHTML = list.item;
    addedList.appendChild(listItem);
  });

  listItem.addEventListener("click", (event) => {
    const { target } = event;
    target.remove();
  });
};

listText.addEventListener("change", handleTodoText);
addButton.addEventListener("click", handleAddTodo);
