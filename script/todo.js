const toDoForm = document.getElementById("todo-form");
const toDoInput = document.getElementById("todo-input");
const toDoList = document.getElementById("todo-list");

function addTodo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  toDoList.appendChild(li);
  li.appendChild(span);
  span.innerText = newTodo;
}
function addTodoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = " ";
  addTodo(newTodo);
}
toDoForm.addEventListener("submit", addTodoSubmit);
