const num1 = parseInt(prompt("ingrese el primer numero"));
const num2 = parseInt(prompt("ingrese el segundo numero"));
if (num1 > num2) {
  console.log("el primer numero es mayor que el segundo");
} else if(num1 === num2) {
  console.log("los numeros son iguales");
} else {
  console.log("el primer numero NO es mayor que el segundo");
}
