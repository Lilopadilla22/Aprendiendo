/*
🧠 EJERCICIO 4 — RETURN CON LÓGICA

🎯 Objetivo:
Practicar el uso de return dentro de condicionales.

📌 Instrucciones:
1. Crea una función llamada mayor que reciba dos números a y b.
2. La función debe devolver el número más grande de los dos.
3. Si son iguales, devuelve el string "Son iguales".
4. Prueba la función con distintos valores.

✅ Resultado esperado:
10
3
"Son iguales"
*/

// ✍️ Escribe tu solución aquí 👇

let resultado;
function mayorQue(a, b) {
  let resultado;
  if (a > b) {
    resultado = a;
  } else if (b > a) {
    resultado = b;
  } else {
    resultado = "Son iguales";
  }
  return resultado;
}

console.log(mayorQue(10, 3));
console.log(mayorQue(1, 3));
console.log(mayorQue(3, 3));
