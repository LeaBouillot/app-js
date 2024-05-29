const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
// onpeut chercher directement dans un element comme #login-form
const bonjour = document.querySelector("#bonjour");
const HIDDEN_CLASSNAME = "hidden"; //upperCase pour "string" on peut utiliser plus 2 fois "hidden"
const USERNAME_KEY = "username";

function bonjourUsername() {}
//<form> execute 'submit' event automatiquement dans le browser donc pas besoin de button et event 'click'
function loginSubmit(event) {
  event.preventDefault(); // empecher refraiche de page
  loginForm.classList.add(HIDDEN_CLASSNAME); //et apres loginForm est disparut
  const username = loginInput.value; //obtenir value de input
  localStorage.setItem(USERNAME_KEY, username); //save username dans local storage
  bonjourUsername(username);
}

function bonjourUsername(username) {
  bonjour.innerText = `Bonjour ${username}`;
  bonjour.classList.remove(HIDDEN_CLASSNAME);
}
const saveUsername = localStorage.getItem(USERNAME_KEY);

if (saveUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", loginSubmit);
} else {
  bonjourUsername(saveUsername);
}
