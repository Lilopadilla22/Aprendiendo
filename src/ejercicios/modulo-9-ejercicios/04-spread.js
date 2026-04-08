/*
🧠 EJERCICIO 4 — SPREAD

🎯 Objetivo:
Practicar cómo copiar y combinar arrays y objetos sin modificar los originales.

📌 Instrucciones:

// ARRAYS:
const frutas = ['manzana', 'pera', 'uva'];
const verduras = ['zanahoria', 'lechuga'];

1. Combina frutas y verduras en un nuevo array llamado alimentos.
   Verifica que los originales no cambiaron.

2. Crea una copia de frutas y agrega 'kiwi' al final de la copia.
   Verifica que el array original frutas no tiene 'kiwi'.

// OBJETOS:
const config = { tema: 'oscuro', idioma: 'es', fontSize: 14 };

3. Crea un nuevo objeto con todas las propiedades de config
   pero cambiando solo fontSize a 16.
   Verifica que config original no cambió.

4. Tienes dos objetos:
   const datosPersonales = { nombre: 'Ana', edad: 28 };
   const datosProfesionales = { empresa: 'Tech', rol: 'Dev' };
   Combínalos en un solo objeto perfil.

✅ Resultado esperado:
['manzana', 'pera', 'uva', 'zanahoria', 'lechuga']
['manzana', 'pera', 'uva']  ← original sin 'kiwi'
{ tema: 'oscuro', idioma: 'es', fontSize: 16 }
{ tema: 'oscuro', idioma: 'es', fontSize: 14 }  ← original sin cambios
{ nombre: 'Ana', edad: 28, empresa: 'Tech', rol: 'Dev' }
*/

const frutas = ['manzana', 'pera', 'uva'];
const verduras = ['zanahoria', 'lechuga'];
const config = { tema: 'oscuro', idioma: 'es', fontSize: 14 };
const datosPersonales = { nombre: 'Ana', edad: 28 };
const datosProfesionales = { empresa: 'Tech', rol: 'Dev' };

// ✍️ Escribe tu solución aquí 👇
