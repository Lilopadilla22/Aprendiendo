/*
🧠 EJERCICIO 5 — reduce

🎯 Objetivo:
Practicar cómo acumular valores de un array hasta obtener un único resultado.

📌 Instrucciones:
Tienes este carrito de compras:

const carrito = [
  { nombre: 'Café', precio: 50, cantidad: 2 },
  { nombre: 'Pan', precio: 30, cantidad: 3 },
  { nombre: 'Jugo', precio: 45, cantidad: 1 }
];

1. Usa reduce para calcular el total del carrito.
   El total de cada producto es precio * cantidad.
   Imprime el total final.

2. Tienes este array de palabras:
   const palabras = ['Hola', ' ', 'mundo', ' ', 'desde', ' ', 'reduce'];
   Usa reduce para unirlas todas en un solo string.

Bonus: Usa reduce con el array de carrito para contar cuántos artículos hay
en total (suma de todas las cantidades).

✅ Resultado esperado:
235  ← (50*2) + (30*3) + (45*1)
'Hola mundo desde reduce'
6    ← 2 + 3 + 1
*/

const carrito = [
  { nombre: 'Café', precio: 50, cantidad: 2 },
  { nombre: 'Pan', precio: 30, cantidad: 3 },
  { nombre: 'Jugo', precio: 45, cantidad: 1 }
];

const palabras = ['Hola', ' ', 'mundo', ' ', 'desde', ' ', 'reduce'];

// ✍️ Escribe tu solución aquí 👇
