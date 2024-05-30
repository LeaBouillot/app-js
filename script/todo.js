const toDoForm = document.getElementById("todo-form");
const toDoInput = document.getElementById("todo-input");
const toDoList = document.getElementById("todo-list");

const toDo = []; //un tableau toDo
function saveToDos() {
    localStorage.setItem("todos", toDo); //save toDo dans le local storage
}

function deleteTodo(event) {
    const li = event.target.parentNode; //chaque button a different de parentNode, on peut effcer la liste qu on click
    li.remove();
}


function addTodo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newTodo;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteTodo)
  toDoList.appendChild(li);
  li.appendChild(span);
  li.appendChild(button);
  
}
function addTodoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = " ";
  toDo.push(newTodo); //ajouter (push) dans un tableau toDo
  addTodo(newTodo);
  saveToDos();//save toDo dans le local storage
}
toDoForm.addEventListener("submit", addTodoSubmit);
