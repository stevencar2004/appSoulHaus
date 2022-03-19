const btnCalcularDistancia = document.getElementById("btnCalcularDistancia");
const point1 = document.getElementsByName("sectionField");
const point2 = document.getElementsByName("sectionField2");

let p1_x = point1[0];
let p1_y = point1[1];
let p2_x = point2[0];
let p2_y = point2[1];

btnCalcularDistancia.addEventListener("click", () => {
  if (p1_x.value == "" || p2_x.value == "" || p1_x == "" || p2_y == "") {
    alert("Por favor, Llena todos los datos y vuelve a intentar");
  } else {
    const cateto1 = Math.abs(p1_x.value - p2_x.value);
    const cateto2 = Math.abs(p1_y.value - p2_y.value);

    const distancia = Math.pow(cateto1, 2) + Math.pow(cateto2, 2);

    const result = Math.sqrt(distancia);

    boxModal.classList.remove("modal--hidde");
    modalFielResult.innerHTML = "La distancia es de " + result.toFixed(2) + " m";

    boxModal.addEventListener("click", () => {
      boxModal.classList.add("modal--hidde");
    });
  }
});
