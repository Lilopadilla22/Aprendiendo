/*
🧠 EJERCICIO 5 — CALLBACKS Y FUNCIONES DE ORDEN SUPERIOR

🎯 Objetivo:
Entender cómo pasar funciones como argumentos y ejecutarlas dentro de otra función.

📌 Instrucciones:
1. Crea una función llamada operar que reciba:
   - un número
   - un callback
2. La función debe llamar al callback pasándole el número duplicado.
3. Llama operar con el número 5 y un callback que imprima "El resultado es: [valor]".

Bonus: Llama operar con el número 8 y un callback diferente que devuelva si el
resultado es par o impar.

✅ Resultado esperado:
"El resultado es: 10"
"El resultado 16 es par"
*/

// ✍️ Escribe tu solución aquí 👇

function operar(num) {
  const resultado = num * 2;
  return console.log("El resultado es " + resultado);
}

function esPar(num) {
  let result = "";
  if (num % 2 === 0) {
    result = " es par";
  } else {
    result = " es impar";
  }

  return console.log(num + result);
}
function resultadoCallback(num, callback) {
  callback(num);
}

resultadoCallback(5, operar);
resultadoCallback(8, esPar);
resultadoCallback(3, esPar);
resultadoCallback(16, esPar);
