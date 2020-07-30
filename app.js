//krok1
// gdy najeżdzamy na dany kwadrat  myszką to  chcemy żeby się powiekszył (mouseenter)
// jak wyjezdzamy z danego kwadratu to chemy zeby sie pomniejszyl (mouseleave)
// znalesc wszystkie kwadratu - done -dodane id z numerami
// dodane nasluchiwacze na wjechanie i wyjechanie z kazdego kwadratu / done 
// funkcje bigger square i smallersquare  dodaje/usuwajace klase activedla zmiany wygladu po najechaniu lubwyjechaniu 
// chcemy aby aktywny byl tylko ten kwadrat na ktorego najeżdzamy , po wyjechaniu zeby przestal byc aktywny

//krok2 (????)
//po najechaniu na kwadrat i powiekszeniu chcemu klikiem zatrzymac powiekszona pozycje 
//mozemy wszystkie na stale pwoikeszyc 
// po odkliknięciu zeby kwadrat wrocil do początkowoego wygladu


let biggerSquare = (squareNumber) => {
  document.querySelector("#square" + squareNumber).classList.add("active");
}

let smallerSquare = (squareNumber) => {
  document.querySelector("#square" + squareNumber).classList.remove("active");
  }

let biggerSquare1 = () => {
  biggerSquare(1);
}

let smallerSquare1 = () => {
  smallerSquare(1);
}

let biggerSquare2 = () => {
  biggerSquare(2);
}

let smallerSquare2 = () => {
  smallerSquare(2);
}

let biggerSquare3 = () => {
  biggerSquare(3);
}

let smallerSquare3 = () => {
  smallerSquare(3);
}

let biggerSquare4 = () => {
  biggerSquare(4);
}

let smallerSquare4 = () => {
  smallerSquare(4);
}

let biggerSquare5 = () => {
  biggerSquare(5);
}

let smallerSquare5 = () => {
  smallerSquare(5);
}

let biggerSquare6 = () => {
  biggerSquare(6);
}

let smallerSquare6 = () => {
  smallerSquare(6);
}

let biggerSquare7 = () => {
  biggerSquare(7);
}

let smallerSquare7 = () => {
  smallerSquare(7);
}

let biggerSquare8 = () => {
  biggerSquare(8);
}

let smallerSquare8 = () => {
  smallerSquare(8);
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

