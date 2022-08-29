const num1 = Number(prompt("ingrese un numero"));
if (num1 % 2 === 0 || num1 % 3 === 0 || num1 % 5 === 0 || num1 % 7 === 0) {
  console.log("el numero es divisible por alguno de estos numeros: 2,3,5 o 7 ");
} else {
  console.log("el numero no es divisible ni por 2 ni 3 ni 5 ni 7");
}
