/*
🧠 EJERCICIO 4 — ARRAY DE OBJETOS

🎯 Objetivo:
Practicar cómo trabajar con listas donde cada elemento tiene múltiples propiedades.

📌 Instrucciones:
1. Crea un array llamado estudiantes con 3 objetos.
   Cada objeto debe tener: nombre, edad y aprobado (true/false).

2. Recorre el array con forEach e imprime un mensaje por cada estudiante:
   "Ana - 22 años - Aprobada" o "Ana - 22 años - Reprobada"
   (usa el valor de aprobado para decidir el texto)

3. Accede directamente al segundo estudiante e imprime solo su nombre.

✅ Resultado esperado:
"Ana - 22 años - Aprobada"
"Luis - 19 años - Reprobado"
"Sofía - 21 años - Aprobada"
"Luis"
*/


// ✍️ Escribe tu solución aquí 👇

const estudiantes = [
   {nombre:"Ana", edad: 22, aprobado:true},
   {nombre:"Luis", edad: 19, aprobado:false},
   {nombre:"Sofia", edad: 21, aprobado:true}
]

estudiantes.forEach(estudiante => {
   console.log(estudiante.nombre, "-", estudiante.edad + " años " + "-", estudiante.aprobado ? "Aprobado" : "Reprobado")
});
console.log(estudiantes[1].nombre)