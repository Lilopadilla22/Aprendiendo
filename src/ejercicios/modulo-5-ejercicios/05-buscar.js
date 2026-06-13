/*
🧠 EJERCICIO 5 — BUSCAR DENTRO DE UN ARRAY

🎯 Objetivo:
Usar includes e indexOf para buscar valores y tomar decisiones según el resultado.

📌 Instrucciones:
Tienes este array:
const invitados = ['Carlos', 'María', 'Luis', 'Sofía', 'Pedro'];

1. Usa includes para verificar si 'María' está en la lista.
   Imprime "María está invitada" o "María no está invitada" según el resultado.

2. Usa includes para verificar si 'Juan' está en la lista.
   Imprime el mensaje correspondiente.

3. Usa indexOf para encontrar en qué posición está 'Luis'.
   Imprime "Luis está en la posición [número]".

4. Usa indexOf con un nombre que no existe ('Ana') y maneja el resultado:
   Si devuelve -1, imprime "Ana no está en la lista".

✅ Resultado esperado:
"María está invitada"
"Juan no está invitado"
"Luis está en la posición 2"
"Ana no está en la lista"
*/

const invitados = ["Carlos", "María", "Luis", "Sofía", "Pedro"];

// ✍️ Escribe tu solución aquí 👇
if (invitados.indexOf("María") !== -1) {
  console.log("Maria esta invitada");
} else {
  console.log("Maria no esta invitada");
}

if (invitados.indexOf("Juan") !== -1) {
  console.log("Juan esta invitado");
} else {
  console.log("Juan no esta invitado");
}

console.log("Luis esta en la posicion " + invitados.indexOf("Luis"));
console.log(invitados.indexOf("Ana") + " Ana no esta en la lista");
