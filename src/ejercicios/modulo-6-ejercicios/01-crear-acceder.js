/*
🧠 EJERCICIO 1 — CREAR Y ACCEDER A UN OBJETO

🎯 Objetivo:
Practicar cómo crear un objeto y leer sus propiedades de distintas formas.

📌 Instrucciones:
1. Crea un objeto llamado producto con estas propiedades:
   - nombre: (un nombre de producto)
   - precio: (un número)
   - disponible: (true o false)

2. Imprime cada propiedad usando notación de punto.
3. Imprime el nombre usando notación de corchetes.
4. Guarda el nombre de una propiedad en una variable y úsala
   con corchetes para acceder al valor.

✅ Resultado esperado:
[nombre del producto]
[precio]
[disponible]
[nombre usando corchetes]
[nombre usando variable]
*/


// ✍️ Escribe tu solución aquí 👇

const producto = {
   nombre: "Play 5",
   precio: 2000000,
   disponible:true
}
console.log(producto.nombre)
console.log(producto.precio)
console.log(producto.disponible)

console.log(producto["nombre"])
console.log(producto["precio"])
console.log(producto["disponible"])

const valor = "precio";
console.log(producto[valor])