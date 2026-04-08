/*
🧠 EJERCICIO 5 — MANEJO DE ERRORES EN FETCH

🎯 Objetivo:
Aprender a manejar tanto errores de red como respuestas fallidas del servidor.

📌 Instrucciones:
1. Crea una función async llamada obtenerPersonajePorId que reciba un id.

2. Dentro, haz fetch a:
   https://rickandmortyapi.com/api/character/${id}

3. Antes de leer el JSON, verifica response.ok:
   - Si no es ok, lanza un error con el mensaje:
     `No se encontró el personaje con id ${id}`

4. Si todo salió bien, imprime el nombre y status del personaje.

5. Envuelve todo en try/catch y en el catch imprime:
   `Error: ${error.message}`

6. Llama la función con estos valores y observa cada resultado:
   - obtenerPersonajePorId(2)   → debe funcionar
   - obtenerPersonajePorId(9999) → debe lanzar el error del if

✅ Resultado esperado:
'Morty Smith - Alive'
'Error: No se encontró el personaje con id 9999'
*/


// ✍️ Escribe tu solución aquí 👇
