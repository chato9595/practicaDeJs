const num1 = parseInt(prompt("ingrese el primer numero"));
const num2 = parseInt(prompt("ingrese el segundo numero"));
const num3 = parseInt(prompt("ingrese el tercer numero"));

if (num1 > num2 && num1 > num3) {
  console.log("El numero mas grande es el primero --> " + num1);
} else if (num2 > num1 && num2 > num3) {
  console.log("El numero mas grande es el segundo --> " + num2);
} else if (num3 > num1 && num3 > num2) {
  console.log("El numero mas grande es el tercero --> " + num3);
} else if (num1 === num2 && num1 > num3) {
  console.log("los dos primeros numeros son los mayores --> " + num1);
} else if (num1 === num3 && num3 > num2) {
  console.log("el primer y tercer numero son los mayores --> " + num1);
} else if (num2 === num3 && num3 > num1) {
  console.log("los dos ultimos numeros son los mayores -->" + num3);
} else {
  console.log("los tres numeros son iguales");
}
