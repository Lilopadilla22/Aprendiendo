/*
🧠 EJERCICIO 1 — CREAR Y ACCEDER A UN ARRAY

🎯 Objetivo:
Entender cómo se crea un array y cómo leer sus elementos por posición.

📌 Instrucciones:
1. Crea un array llamado nombres con 5 nombres de personas.
2. Imprime el primer nombre usando su índice.
3. Imprime el último nombre sin escribir el número de índice a mano
   (usa la propiedad length para calcularlo).
4. Intenta acceder a una posición que no existe e imprime el resultado.

✅ Resultado esperado:
[primer nombre]
[último nombre]
undefined
*/


// ✍️ Escribe tu solución aquí 👇

const nombres = ["Pepito Perez", "Fulanito", "Perensejo", "Juanito", "Jaimito"];
console.log(nombres[0])
console.log(nombres[nombres.length - 1])
console.log(nombres[5])