/*
EJERCICIO 3 - COMPARACIONES

1️⃣ Compara el número 10 con el string "10" usando ==.
2️⃣ Luego compáralos usando ===.
3️⃣ Imprime ambos resultados.

Explica en un comentario por qué son diferentes.
*/

let valor1 = 10;
let valor2 = "10";
 
let comparacion = valor1 == valor2;
let comparacionEstricta = valor1 === valor2
console.log(comparacion)
console.log(comparacionEstricta)

/* 
El === es diferente a == porque para que devuelva un true como resultado debe ser exactamente del mismo tipo, 
ya sea string o numero y el valor de la variable debe ser el mismo. En cambio que == no importa el tipo que se esta declarando.
*/