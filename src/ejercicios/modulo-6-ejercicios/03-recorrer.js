/*
🧠 EJERCICIO 3 — RECORRER UN OBJETO

🎯 Objetivo:
Practicar las distintas formas de recorrer las propiedades de un objeto.

📌 Instrucciones:
Tienes este objeto:

const auto = {
  marca: 'Toyota',
  modelo: 'Corolla',
  anio: 2020,
  color: 'blanco'
};

1. Recórrelo con for...in e imprime: "marca: Toyota", "modelo: Corolla", etc.
2. Usa Object.keys para obtener un array con las claves e imprímelo.
3. Usa Object.values para obtener un array con los valores e imprímelo.
4. Usa Object.entries con forEach para imprimir cada par en formato "clave → valor".

✅ Resultado esperado:
marca: Toyota
modelo: Corolla
anio: 2020
color: blanco

['marca', 'modelo', 'anio', 'color']
['Toyota', 'Corolla', 2020, 'blanco']

marca → Toyota
modelo → Corolla
anio → 2020
color → blanco
*/

const auto = {
  marca: 'Toyota',
  modelo: 'Corolla',
  anio: 2020,
  color: 'blanco'
};

// ✍️ Escribe tu solución aquí 👇

// 1. for...in
for (const datos in auto){
  console.log(datos + ":", auto[datos])
}

// 2. Object.keys
const carro = Object.keys(auto)
console.log(carro)

carro.forEach(carro =>{
  console.log(carro + ":", auto[carro])
})

// 3. Object.values
const valores = Object.values(auto)
console.log(valores)
// 4. Object.entries
Object.entries(auto).forEach(([vehiculo,valor])=>{
  console.log(vehiculo + ":", valor)
})