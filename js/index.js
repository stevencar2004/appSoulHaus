const btnDistancia = document.getElementById("btn-distancia");
const btnDiagonal = document.getElementById("btn-diagonal");

const boxHome = document.getElementById("home");
const boxDiagonal = document.getElementById("diagonal");
const boxDistancia = document.getElementById("distancia");

boxModal = document.getElementById("modal");
modalFielResult = document.getElementById("result");

btnDiagonal.addEventListener("click", () => {
  boxHome.classList.add("hero--hidde");
  boxDiagonal.classList.add("section--show");
});

btnDistancia.addEventListener("click", () => {
  boxHome.classList.add("hero--hidde");
  boxDistancia.classList.add("section--show");
});
