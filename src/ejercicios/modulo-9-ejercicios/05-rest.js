/*
🧠 EJERCICIO 5 — REST

🎯 Objetivo:
Practicar cómo agrupar el "resto" de elementos o parámetros con el operador rest.

📌 Instrucciones:
1. Dado este objeto, extrae nombre y email, y agrupa el resto en otrosDatos:

   const perfil = {
     nombre: 'Carlos',
     email: 'carlos@correo.com',
     ciudad: 'CDMX',
     rol: 'admin',
     activo: true
   };

   Imprime nombre, email y otrosDatos por separado.

2. Crea una función llamada sumarTodo que use rest (...numeros)
   para aceptar cualquier cantidad de argumentos y devolver su suma.
   Pruébala con distintas cantidades de números.

3. Crea una función log que reciba un titulo como primer parámetro
   y el resto de mensajes agrupados con rest.
   Imprime el título y luego cada mensaje en una línea separada.

✅ Resultado esperado:
'Carlos'
'carlos@correo.com'
{ ciudad: 'CDMX', rol: 'admin', activo: true }

sumarTodo(1, 2, 3)     → 6
sumarTodo(10, 20, 30, 40) → 100

log('Errores:', 'Error 1', 'Error 2', 'Error 3')
→ Errores:
→  - Error 1
→  - Error 2
→  - Error 3
*/

const perfil = {
  nombre: 'Carlos',
  email: 'carlos@correo.com',
  ciudad: 'CDMX',
  rol: 'admin',
  activo: true
};

// ✍️ Escribe tu solución aquí 👇
