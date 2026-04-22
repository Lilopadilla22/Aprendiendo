/*
🧠 EJERCICIO 3 — PARÁMETROS POR DEFECTO

🎯 Objetivo:
Entender cómo los valores por defecto evitan resultados undefined inesperados.

📌 Instrucciones:
1. Crea una función llamada presentar que reciba nombre y rol.
2. El valor por defecto de rol debe ser "visitante".
3. Llama la función de dos formas:
   - Solo con nombre → debe usar el rol por defecto.
   - Con nombre y rol → debe usar el rol que le pasas.

✅ Resultado esperado:
"Hola, soy Laura y soy visitante"
"Hola, soy Laura y soy desarrolladora"
*/


// ✍️ Escribe tu solución aquí 👇

function presentar(nombre, rol="Visitante"){
   return "Hola, Soy " + nombre + " y soy " + rol
}
console.log(presentar("William"))
console.log(presentar("William", "Desarrollador"))