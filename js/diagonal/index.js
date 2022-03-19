const btnResultDiagonal = document.getElementById("btnResultDiagonal");
const field = document.getElementById("field-matriz");

btnResultDiagonal.addEventListener("click", () => {
  const matrizBase = field.value.trim();

  if (matrizBase == "") {
    alert("No encontramos ninguna matriz");
  } else {
    const matriz = matrizBase.split("\n");
    const result = calcMatriz(matriz);

    boxModal.classList.remove("modal--hidde");
    modalFielResult.innerHTML = "El resultado es " + result;

    boxModal.addEventListener("click", () => {
      boxModal.classList.add("modal--hidde");
    });
  }
});

const calcMatriz = (arr) => {
  let diagonalRight = 0;
  let diagonalLeft = 0;

  for (let index = 0; index < arr.length; index++) {
    const element = arr[index][index];

    diagonalRight += parseInt(element);
  }

  for (let index = 0; index < arr.length; index++) {
    const rowLenght = arr[index].length - 1;
    const element2 = arr[index][rowLenght - index];

    diagonalLeft += parseInt(element2);
  }

  return Math.abs(diagonalRight - diagonalLeft);
};
