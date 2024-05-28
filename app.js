const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
// onpeut chercher directement dans un element comme #login-form

//<form> execute 'submit' event automatiquement dans le browser donc pas besoin de button et event 'click'
function loginBtnClick() {
    const username = loginInput.value; // obtenir value de input
  console.log(username); 
}
//loginButton.addEventListener("click", loginBtnClick);


//on peut click quand user rempli input

