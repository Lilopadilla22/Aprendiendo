/*
🧠 EJERCICIO 3 — ELIMINAR ELEMENTOS

🎯 Objetivo:
Practicar cómo quitar elementos del inicio y del final de un array,
y capturar el valor que fue eliminado.

📌 Instrucciones:
1. Crea un array llamado tareas con 4 tareas pendientes.
2. Elimina la última tarea con pop y guárdala en una variable.
   Imprime qué tarea fue eliminada.
3. Elimina la primera tarea con shift y guárdala en otra variable.
   Imprime qué tarea fue eliminada.
4. Imprime el array final para ver cuántas tareas quedan.

✅ Resultado esperado:
"Tarea eliminada del final: [última tarea]"
"Tarea eliminada del inicio: [primera tarea]"
[array con las 2 tareas restantes]
*/

// ✍️ Escribe tu solución aquí 👇

const tareas = ["Estudiar", "Hacer ejercicio", "Hacer comida", "Jugar"]
console.log(tareas)
const tarea1 = tareas.pop()
console.log(tarea1)
const tarea2 = tareas.shift()
console.log(tarea2)
console.log(tareas)