const num1 = parseInt(prompt("ingrese el primer numero"));
const num2 = parseInt(prompt("ingrese el segundo numero"));
const num3 = parseInt(prompt("ingrese el tercer numero"));

if (num1 > num2 && num1 > num3) {
  console.log("El primer numero es el mayor");
} else if (num2 > num1 && num2 > num3) {
  console.log("El segundo numero es el mayor");
} else if (num3 > num1 && num3 > num2) {
  console.log("El tercer numero es el mayor");
} else if (num1 === num2 && num1 > num3) {
  console.log("los dos primeros numeros son los mayores");  
} else if (num1 === num3 && num3 > num2) {
  console.log("el primer y tercer numero son los mayores");
} else if (num2 === num3 && num3 > num1) {
  console.log("los dos ultimos numeros son los mayores");
} else {
  console.log("los tres numeros son iguales");
}
