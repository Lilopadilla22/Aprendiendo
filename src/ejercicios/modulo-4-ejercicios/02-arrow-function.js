/*
🧠 EJERCICIO 2 — ARROW FUNCTION

🎯 Objetivo:
Reescribir funciones usando la sintaxis moderna de arrow functions.

📌 Instrucciones:
1. Tienes esta función declarada:

   function multiplicar(a, b) {
     return a * b;
   }

2. Conviértela en una arrow function asignada a una constante.
3. Luego escribe otra versión con cuerpo corto (sin llaves ni return explícito).
4. Verifica que ambas devuelvan el mismo resultado.

✅ Resultado esperado:
12
12
*/


// ✍️ Escribe tu solución aquí 👇

const multiplicar = (a,b)=>{
  return a*b;
}
console.log(multiplicar(6,2))

const multiply =(a,b) => a*b
console.log(multiply(6,2))