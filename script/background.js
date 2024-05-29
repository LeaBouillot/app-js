const images = ["coree.jpg", "paris.jpg", "temple.jpg"];

const imageTodays = images[Math.floor(Math.random() * images.length)];

const bgimage = document.createElement("img");
bgimage.src = `images/${imageTodays}`;
document.body.appendChild(bgimage);
