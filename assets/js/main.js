// Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.


// tools

// array
// for
// if/else
// console.log
// const/let
// addEventlistener
// querySelector
// getElementbyId

const images = [
    "./assets/img/01.webp",
    "./assets/img/02.webp",
    "./assets/img/03.webp",
    "./assets/img/04.webp",
    "./assets/img/05.webp",
]

const imagesElement = document.querySelector(".images"); 

let activeImage = 0
//with CSS hide all images except one 
// create a for to slide the images 

for (i=0; i<images.length; i++) {
    const imgSrc = images[i]; 
    const imageEl = `<img class = "${i === activeImage ? 'active' : ''}" src="${imgSrc}" alt="">`
    console.log(imageEl);
    imagesElement.insertAdjacentHTML("beforeend", imageEl)
}
// add images to HTML with templete literal and insertAdjacentHTML






