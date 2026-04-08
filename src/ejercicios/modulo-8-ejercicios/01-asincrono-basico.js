/*
🧠 EJERCICIO 1 — CÓDIGO ASÍNCRONO BÁSICO

🎯 Objetivo:
Entender que el código asíncrono no se ejecuta en el orden en que está escrito.

📌 Instrucciones:
1. Escribe tres console.log: 'Primero', 'Segundo', 'Tercero'.
   Entre el primero y el tercero, agrega un setTimeout de 0 milisegundos
   con el console.log de 'Segundo'.

   ¿En qué orden aparecen? ¿Te sorprende el resultado?

2. Crea una función llamada esperar que reciba milisegundos y devuelva
   una promesa que se resuelva después de ese tiempo:

   function esperar(ms) {
     return new Promise((resolve) => setTimeout(resolve, ms));
   }

3. Crea una función async llamada secuencia que haga esto:
   - Imprime 'Inicio'
   - Espera 1 segundo usando await esperar(1000)
   - Imprime 'Pasó 1 segundo'
   - Espera 1 segundo más
   - Imprime 'Fin'

4. Llama a secuencia() y observa el resultado.

✅ Resultado esperado (parte 1):
'Primero'
'Tercero'
'Segundo'  ← llega después aunque el tiempo sea 0

✅ Resultado esperado (parte 2):
'Inicio'
(pausa)
'Pasó 1 segundo'
(pausa)
'Fin'
*/


// ✍️ Escribe tu solución aquí 👇

// Parte 1: orden de ejecución


// Parte 2: función esperar


// Parte 3 y 4: función async secuencia
