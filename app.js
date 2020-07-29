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
  square1.style.height = "130px";
  square1.style.width = "130px";
}

let smallerSquare1 = () => {
  square1.style.height = "100px";
  square1.style.width = "100px";
}

let biggerSquare2 = () => {
  square2.style.height = "130px";
  square2.style.width = "130px";
}

let smallerSquare2 = () => {
  square2.style.height = "100px";
  square2.style.width = "100px";
}

let biggerSquare3 = () => {
  square3.style.height = "130px";
  square3.style.width = "130px";
}

let smallerSquare3 = () => {
  square3.style.height = "100px";
  square3.style.width = "100px";
}

let biggerSquare4 = () => {
  square4.style.height = "130px";
  square4.style.width = "130px";
}

let smallerSquare4 = () => {
  square4.style.height = "100px";
  square4.style.width = "100px";
}

let biggerSquare5 = () => {
  square5.style.height = "130px";
  square5.style.width = "130px";
}

let smallerSquare5 = () => {
  square5.style.height = "100px";
  square5.style.width = "100px";
}

let biggerSquare6 = () => {
  square6.style.height = "130px";
  square6.style.width = "130px";
}

let smallerSquare6 = () => {
  square6.style.height = "100px";
  square6.style.width = "100px";
}

let biggerSquare7 = () => {
  square7.style.height = "130px";
  square7.style.width = "130px";
}

let smallerSquare7 = () => {
  square7.style.height = "100px";
  square7.style.width = "100px";
}

let biggerSquare8 = () => {
  square8.style.height = "130px";
  square8.style.width = "130px";
}

let smallerSquare8 = () => {
  square8.style.height = "100px";
  square8.style.width = "100px";
}



square1.addEventListener("mouseenter",  biggerSquare1);
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