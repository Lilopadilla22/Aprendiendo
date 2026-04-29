/*
🧠 EJERCICIO 2 — MODIFICAR Y AGREGAR PROPIEDADES

🎯 Objetivo:
Entender que los objetos se pueden cambiar aunque estén declarados con const.

📌 Instrucciones:
Tienes este objeto:

const pelicula = {
  titulo: 'El origen',
  anio: 2010,
  director: 'Christopher Nolan'
};

1. Cambia el año a 2011.
2. Agrega una propiedad nueva llamada genero con el valor 'Ciencia ficción'.
3. Elimina la propiedad director con delete.
4. Imprime el objeto completo al final para ver cómo quedó.

✅ Resultado esperado:
{ titulo: 'El origen', anio: 2011, genero: 'Ciencia ficción' }
*/

const pelicula = {
  titulo: 'El origen',
  anio: 2010,
  director: 'Christopher Nolan'
};

// ✍️ Escribe tu solución aquí 👇
pelicula.anio = 2011;
pelicula.genero = "Ciencia ficción";
delete pelicula.director;
console.log(pelicula)
