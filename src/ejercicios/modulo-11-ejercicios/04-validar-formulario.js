/*
🧠 EJERCICIO 4 — VALIDAR DATOS CON THROW

🎯 Objetivo:
Aplicar throw para validar datos de entrada de forma clara y descriptiva.

📌 Instrucciones:
1. Crea una función validarUsuario que reciba un objeto { nombre, email, edad }.
   Valida estas reglas y usa throw para cada error:
   - nombre es requerido (no puede estar vacío ni ser undefined)
   - email debe incluir '@'
   - edad debe ser un número mayor a 0

2. Si todas las validaciones pasan, imprime 'Usuario válido: [nombre]'.

3. Prueba la función con estos casos dentro de try/catch:
   - { nombre: 'Ana', email: 'ana@mail.com', edad: 25 }  → válido
   - { nombre: '', email: 'ana@mail.com', edad: 25 }     → error de nombre
   - { nombre: 'Luis', email: 'sin-arroba', edad: 22 }   → error de email
   - { nombre: 'Carlos', email: 'c@mail.com', edad: -5 } → error de edad

✅ Resultado esperado:
'Usuario válido: Ana'
'Error: El nombre es requerido'
'Error: El email no es válido'
'Error: La edad debe ser mayor a 0'
*/


// ✍️ Escribe tu solución aquí 👇
