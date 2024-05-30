const toDoForm = document.getElementById("todo-form");
const toDoInput = document.getElementById("todo-input");
const toDoList = document.getElementById("todo-list");

let toDoArray = []; //un tableau toDo
function saveToDos() {
    localStorage.setItem("todos", JSON.stringify(toDoArray)); //save toDoArray dans le local storage le format JSON
}
//The JSON.parse() static method parses a JSON string, constructing the JavaScript value or object described by the string
function deleteTodo(event) {
    const li = event.target.parentNode; //chaque button a different de parentNode, on peut effcer la liste qu on click
    li.remove();
    toDoArray = toDoArray.filter(toDo => toDo.id !== parseInt(li.id));
    saveToDos();
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
  toDoInput.value = "";
  const newTodoObject = {
    id: Date.now(), //OU   id: toDoArray.length + 1
    text: newTodo,
  };
  toDoArray.push(newTodoObject); //ajouter (push) dans un tableau toDo
  addTodo(newTodoObject);
  saveToDos();//save toDo dans le local storage
}
toDoForm.addEventListener("submit", addTodoSubmit);

const toDos = localStorage.getItem("todos");

if (toDos !== null) {
  const parseToDos = JSON.parse(toDos);
  toDoArray = parseToDos; // ancien todos est dans le toDosArray (local storage)
  parseToDos.forEach(addTodo);
}
 