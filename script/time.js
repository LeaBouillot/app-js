const clock = document.getElementById("clock");

//String.padStart( maxiLenth, "x"); ajouter x au premier // padEnd :ajouter au dernier
function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}
getClock(); //afficher imediatement
setInterval(getClock, 1000); // every 1 second
