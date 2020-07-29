let square1 = document.querySelector("#square1");
let square2 = document.querySelector("#square2");
let square3 = document.querySelector("#square3");
let square4 = document.querySelector("#square4");
let square5 = document.querySelector("#square5");
let square6 = document.querySelector("#square6");
let square7 = document.querySelector("#square7");
let square8 = document.querySelector("#square8");

let biggerSquare = () => {
  console.log("najechane");
}

let smallerSquare = () => {
  console.log("wyjechane");
}

square1.addEventListener("mouseenter", biggerSquare);
square2.addEventListener("mouseenter", biggerSquare);
square3.addEventListener("mouseenter", biggerSquare);
square4.addEventListener("mouseenter", biggerSquare);
square5.addEventListener("mouseenter", biggerSquare);
square6.addEventListener("mouseenter", biggerSquare);
square7.addEventListener("mouseenter", biggerSquare);
square8.addEventListener("mouseenter", biggerSquare);

square1.addEventListener("mouseleave", smallerSquare);
square2.addEventListener("mouseleave", smallerSquare);
square3.addEventListener("mouseleave", smallerSquare);
square4.addEventListener("mouseleave", smallerSquare);
square5.addEventListener("mouseleave", smallerSquare);
square6.addEventListener("mouseleave", smallerSquare);
square7.addEventListener("mouseleave", smallerSquare);
square8.addEventListener("mouseleave", smallerSquare);