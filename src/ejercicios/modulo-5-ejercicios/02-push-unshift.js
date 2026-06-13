/*
🧠 EJERCICIO 2 — AGREGAR ELEMENTOS

🎯 Objetivo:
Practicar cómo agregar elementos al inicio y al final de un array.

📌 Instrucciones:
1. Crea un array llamado colores con 3 colores.
2. Agrega un color al final usando push.
3. Agrega otro color al inicio usando unshift.
4. Imprime el array después de cada cambio para ver cómo crece.

✅ Resultado esperado:
['rojo', 'verde', 'azul']           ← inicial
['rojo', 'verde', 'azul', 'negro']  ← después de push
['blanco', 'rojo', 'verde', 'azul', 'negro'] ← después de unshift
*/


// ✍️ Escribe tu solución aquí 👇

const colores = ["rojo", "verde", "azul"];
console.log(colores)
colores.push("negro");
console.log(colores)
colores.unshift("blanco")
console.log(colores)


