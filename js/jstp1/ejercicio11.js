const num = Number(prompt("ingrese un numero"));

if (num % 2 === 0 && num % 3 === 0 && num % 5 === 0 && num % 7 === 0) {
  console.log("el numero ingresado es divisible por 2, 3, 5 y 7");
} else if (num % 2 === 0 && num % 3 === 0 && num % 5 === 0) {
  console.log("el numero ingresado es divisible por 2, 3, y 5");
} else if (num % 2 === 0 && num % 3 === 0 && num % 7 === 0) {
  console.log("el numero ingresado es divisible por 2, 3, y 7");
} else if (num % 3 === 0 && num % 5 === 0 && num % 7 === 0) {
  console.log("el numero ingresado es divisible por 3, 5, y 7");
} else if (num % 2 === 0 && num % 5 === 0 && num % 7 === 0) {
  console.log("el numero ingresado es divisible por 2, 5, y 7");
} else if (num % 2 === 0 && num % 3 === 0) {
  console.log("el numero ingresado es divisible por 2 y por 3");
} else if (num % 2 === 0 && num % 5 === 0) {
  console.log("el numero ingresado es divisible por 2 y por 5");
} else if (num % 2 === 0 && num % 7 === 0) {
  console.log("el numero ingresado es divisible por 2 y por 7");
} else if (num % 3 === 0 && num % 5 === 0) {
  console.log("el numero ingresado es divisible por 3 y por 5");
} else if (num % 3 === 0 && num % 7 === 0) {
  console.log("el numero ingresado es divisible por 3 y por 7");
} else if (num % 5 === 0 && num % 7 === 0) {
  console.log("el numero ingresado es divisible por 5 y por 7");
} else if (num % 2 === 0) {
  console.log("el numero ingresado es divisible por 2");
} else if (num % 3 === 0) {
  console.log("el numero ingresado es divisible por 3");
} else if (num % 5 === 0) {
  console.log("el numero ingresado es divisible por 5");
} else if (num % 7 === 0) {
  console.log("el numero ingresado es divisible por 7");
} else {
  console.log("el numero ingresado no es divisible ni por 2 ni 3 ni 5 ni 7");
}
