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

let activeImg = 0
//with CSS hide all images except one 
// create a for to slide the images 
// add images to HTML with templete literal and insertAdjacentHTML
for (i=0; i<images.length; i++) {
    const imgSrc = images[i]; 
    const imageEl = `<img class = "${i === activeImg ? 'active' : ''}" src="${imgSrc}" alt="">`
    console.log(imageEl);
    imagesElement.insertAdjacentHTML("beforeend", imageEl)
}


// create a const for displayed img 

const displayedImgEl = document.querySelectorAll("img"); 
// add event listener to next/prev 
const nextEl = document.querySelector(".next"); 

nextEl.addEventListener("click",

function(){
// remove the class active from the current img

let currentImg = displayedImgEl[activeImg]; 

currentImg.classList.remove("active");
// increase/decrease activeImg counter

activeImg++; 
// assign class active to next/prev img 


let nextImg = displayedImgEl[activeImg]; 
nextImg.classList.add("active")
})


// add event listener to next/prev 
const prevEl = document.querySelector(".prev"); 

prevEl.addEventListener("click",

function(){
// remove the class active from the current img

let currentImg = displayedImgEl[activeImg]; 

currentImg.classList.remove("active");
// increase/decrease activeImg counter

activeImg--; 
// assign class active to next/prev img 


let prevImg = displayedImgEl[activeImg]; 
prevImg.classList.add("active")
})










