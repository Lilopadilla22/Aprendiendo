/*
🧠 EJERCICIO 3 — FINALLY

🎯 Objetivo:
Entender que finally siempre se ejecuta, sin importar si hubo error o no.

📌 Instrucciones:
1. Simula un proceso de carga con esta estructura:

   function procesarArchivo(contenido) {
     // lanza un error si contenido está vacío
   }

   Llama a la función dentro de un try/catch/finally donde:
   - try: llama procesarArchivo con contenido válido
   - catch: imprime el error
   - finally: imprime 'Proceso terminado'

2. Repite el bloque pero ahora llamando procesarArchivo con un string vacío.
   Verifica que 'Proceso terminado' se imprime en ambos casos.

✅ Resultado esperado:
'Archivo procesado correctamente'
'Proceso terminado'

'Error: El contenido no puede estar vacío'
'Proceso terminado'
*/


// ✍️ Escribe tu solución aquí 👇
