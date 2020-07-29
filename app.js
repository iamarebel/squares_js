// krok 1
// gdy najeżdzamy na dany kwadrat  myszką to  chcemy żeby się powiekszył (mouseenter)
// jak wyjezdzamy z danego kwadratu to chemy zeby sie pomniejszyl (mouseleave)

// znalesc wszystkie kwadratu - done -dodane id 
// dodane nasluchiwacze na wjechanie i wyjechanie z kazdego kwadratu / done 
// funkcje bigger square i smallersquare  dla zmiany wykladu po najechaniu lubwyjechaniu 
// chcemy aby aktywny byl tylko ten kwadrat na ktorego najeżdzamy , po wyjechaniu zeby przestal byc aktywny


let square1 = document.querySelector("#square1");
let square2 = document.querySelector("#square2");
let square3 = document.querySelector("#square3");
let square4 = document.querySelector("#square4");
let square5 = document.querySelector("#square5");
let square6 = document.querySelector("#square6");
let square7 = document.querySelector("#square7");
let square8 = document.querySelector("#square8");

let biggerSquare1 = () => {
  document.querySelector("#square1").classList.add("active");
}

let smallerSquare1 = () => {
  document.querySelector("#square1").classList.remove("active");
}

let biggerSquare2 = () => {
  document.querySelector("#square2").classList.add("active");
}

let smallerSquare2 = () => {
  document.querySelector("#square2").classList.remove("active");
}

let biggerSquare3 = () => {
  document.querySelector("#square3").classList.add("active");
}

let smallerSquare3 = () => {
  document.querySelector("#square3").classList.remove("active");
}

let biggerSquare4 = () => {
  document.querySelector("#square4").classList.add("active");
}

let smallerSquare4 = () => {
  document.querySelector("#square4").classList.remove("active");
}

let biggerSquare5 = () => {
  document.querySelector("#square5").classList.add("active");
}

let smallerSquare5 = () => {
  document.querySelector("#square5").classList.remove("active");
}

let biggerSquare6 = () => {
  document.querySelector("#square6").classList.add("active");
}

let smallerSquare6 = () => {
  document.querySelector("#square6").classList.remove("active");
}

let biggerSquare7 = () => {
  document.querySelector("#square7").classList.add("active");
}

let smallerSquare7 = () => {
  document.querySelector("#square7").classList.remove("active");
}

let biggerSquare8 = () => {
  document.querySelector("#square8").classList.add("active");
}

let smallerSquare8 = () => {
  document.querySelector("#square8").classList.remove("active");
}


square1.addEventListener("mouseenter", biggerSquare1);
square1.addEventListener("mouseleave",  smallerSquare1);

square2.addEventListener("mouseenter", biggerSquare2);
square2.addEventListener("mouseleave", smallerSquare2);

square3.addEventListener("mouseenter", biggerSquare3);
square3.addEventListener("mouseleave", smallerSquare3);

square4.addEventListener("mouseenter", biggerSquare4);
square4.addEventListener("mouseleave", smallerSquare4);

square5.addEventListener("mouseenter", biggerSquare5);
square5.addEventListener("mouseleave", smallerSquare5);

square6.addEventListener("mouseenter", biggerSquare6);
square6.addEventListener("mouseleave", smallerSquare6);

square7.addEventListener("mouseenter", biggerSquare7);
square7.addEventListener("mouseleave", smallerSquare7);

square8.addEventListener("mouseenter", biggerSquare8);
square8.addEventListener("mouseleave", smallerSquare8);