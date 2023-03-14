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
const displayedImgSection = document.querySelector(".current_image")

let activeImg = 0
//with CSS hide all images except one 
// create a for to slide the images 
// add images to HTML with templete literal and insertAdjacentHTML
for (i=0; i<images.length; i++) {
    const imgSrc = images[i]; 
    const imageEl = `<img class = "${i === activeImg ? 'active' : ''} " src="${imgSrc}" alt="">`
    console.log(imageEl);
    imagesElement.insertAdjacentHTML("beforeend", imageEl)
}

 for (i=0; i<images.length; i++) {
     const currentImgSrc = images[i]; 
     const currentImageEl = `<img class = "${i === activeImg ? 'show' : ''} " src="${currentImgSrc}" alt="">`
     console.log(currentImageEl);
     displayedImgSection.insertAdjacentHTML("beforeend", currentImageEl)
 }


// create a const for displayed img 

 const displayedImgEl = document.querySelectorAll(".current_image img");
 const thumblineImgEl =  document.querySelectorAll(".images img");
// add event listener to next/prev 
const nextEl = document.querySelector(".next"); 

nextEl.addEventListener("click",

function(){
// remove the class active from the current img
console.log("click");

let currentImg = displayedImgEl[activeImg]; 
let selectedImgEl = thumblineImgEl[activeImg];

selectedImgEl.classList.remove("active");
currentImg.classList.remove("show");
// increase/decrease activeImg counter

if (activeImg === 4) {
    activeImg = 0
    } else {
    activeImg ++
    }
; 
// assign class active to next/prev img 
console.log(activeImg);

let nextImg = displayedImgEl[activeImg]; 
let nextSelectedImg = thumblineImgEl[activeImg];
nextSelectedImg.classList.add("active");
nextImg.classList.add("show")

}
 )


// add event listener to next/prev 
const prevEl = document.querySelector(".prev"); 

prevEl.addEventListener("click",

function(){
// remove the class active from the current img

console.log("click");

let currentImg = displayedImgEl[activeImg]; 
let selectedImgEl = thumblineImgEl[activeImg];

selectedImgEl.classList.remove("active");
currentImg.classList.remove("show");
// increase/decrease activeImg counter

if (activeImg === 0) {
    activeImg = 4
    } else {
    activeImg --
    }

// assign class active to next/prev img 
console.log(activeImg);

let prevImg = displayedImgEl[activeImg]; 
let prevSelectedImg = thumblineImgEl[activeImg];
prevSelectedImg.classList.add("active");
prevImg.classList.add("show");



})


// Aggiungere il ciclo infinito del carosello. Ovvero se è attiva la prima immagine e l'utente clicca la freccia per andare all’immagine precedente, dovrà comparire l’ultima immagine dell’array e viceversa.

// add if/else condition to next/prev addEventListener 
// if activeImg is <0 or >5 than will be =5 or 0










