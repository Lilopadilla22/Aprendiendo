/*
🧠 EJERCICIO 1 — FUNCTION DECLARATION

🎯 Objetivo:
Practicar la declaración de funciones y el uso de return.

📌 Instrucciones:
1. Declara una función llamada saludar que reciba un parámetro nombre.
2. La función debe devolver el string "Hola, [nombre]!".
3. Llama la función con tu nombre y guarda el resultado en una variable.
4. Imprime el resultado con console.log.

✅ Resultado esperado:
"Hola, Ana!"
*/

// ✍️ Escribe tu solución aquí 👇

function saludar(nombre) {
  return "Hola, " + nombre;
}
console.log(saludar("William"));

const miNombre = function (nombre) {
  return nombre;
};
console.log(miNombre("William"));
