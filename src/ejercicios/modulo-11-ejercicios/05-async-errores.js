/*
🧠 EJERCICIO 5 — MANEJO DE ERRORES EN CÓDIGO ASÍNCRONO

🎯 Objetivo:
Combinar todo lo aprendido: fetch + try/catch/finally + throw.

📌 Instrucciones:
1. Crea una función async llamada obtenerPersonaje que reciba un id.

2. Dentro, haz fetch a:
   https://rickandmortyapi.com/api/character/${id}

3. Si response.ok es false, lanza un error con el mensaje:
   `No existe un personaje con id ${id}`

4. Si la respuesta es válida, imprime nombre, status y especie.

5. Usa finally para imprimir siempre:
   `Búsqueda de id ${id} finalizada`

6. Llama la función con:
   - obtenerPersonaje(3)    → debe funcionar
   - obtenerPersonaje(9999) → debe lanzar error

✅ Resultado esperado:
'Morty Smith — Alive — Human'
'Búsqueda de id 3 finalizada'

'Error: No existe un personaje con id 9999'
'Búsqueda de id 9999 finalizada'
*/


// ✍️ Escribe tu solución aquí 👇
