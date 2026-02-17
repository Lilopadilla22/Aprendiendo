import type { Module } from "../types/modules";

export const modulesData: Module[] = [
  {
    id: 1,
    title: "Git y Trabajo Colaborativo",
    branch: "modulo-1-git",
    description: "Aprende flujo profesional con ramas, PR y conflictos.",
    documentation: "https://git-scm.com/docs",
    summary: `
      Git es un sistema de control de versiones distribuido.
      Permite trabajar con ramas, hacer commits descriptivos,
      crear Pull Requests y resolver conflictos como en un equipo real.
      `,
    exercises: [
      "Crear la rama modulo-1-git.",
      "Hacer mínimo 3 commits usando convención profesional.",
      "Crear un Pull Request con descripción clara.",
      "Resolver un conflicto intencional con main.",
    ],
    objective:
      "Este módulo te prepara para trabajar en equipo usando Git con flujo profesional y revisión de código.",
    sections: [
      {
        title: "Comandos Esenciales de Git",
        items: [
          {
            title: "git init",
            description:
              "Inicializa un repositorio Git en la carpeta actual. Se usa una sola vez al comenzar un proyecto.",
            syntax: "git init",
            syntaxAsCode: true,
            example: "cd mi-proyecto\ngit init",
            commonError:
              "Error común: Ejecutarlo dentro de una carpeta equivocada y terminar inicializando Git en el lugar incorrecto.",
          },
          {
            title: "git add",
            description:
              "Agrega archivos al área de preparación (staging) antes de hacer commit.",
            syntax: "git add <archivo>\ngit add .",
            syntaxAsCode: true,
            example: "git add index.html\ngit add src/App.tsx\ngit add .",
            commonError:
              "Error común: Hacer commit sin ejecutar git add antes, lo que provoca que los cambios no se guarden.",
          },
          {
            title: "git commit",
            description:
              "Guarda los cambios previamente agregados con un mensaje descriptivo.",
            syntax: 'git commit -m "mensaje"',
            syntaxAsCode: true,
            example:
              'git commit -m "feat: agregar estructura inicial del modulo 1"',
            commonError:
              "Error común: Usar mensajes como 'cambios' o 'update'. Los commits deben explicar claramente qué se hizo.",
          },
          {
            title: "git checkout -b",
            description: "Crea una nueva rama y cambia automáticamente a ella.",
            syntax: "git checkout -b <nombre-rama>",
            syntaxAsCode: true,
            example: "git checkout -b modulo-1-git",
            commonError:
              "Error común: Crear una rama pero olvidar cambiarse a ella, trabajando accidentalmente en main.",
          },
          {
            title: "git pull",
            description:
              "Descarga y fusiona cambios desde un repositorio remoto.",
            syntax: "git pull <remote> <branch>",
            syntaxAsCode: true,
            example: "git pull origin main\ngit pull upstream develop",
            commonError:
              "Error común: No hacer pull antes de trabajar y luego generar conflictos innecesarios.",
          },
          {
            title: "git merge",
            description: "Fusiona otra rama dentro de la rama actual.",
            syntax: "git merge <rama>",
            syntaxAsCode: true,
            example: "git checkout main\ngit merge modulo-1-git",
            commonError:
              "Error común: Hacer merge desde la rama equivocada y mezclar cambios en la dirección incorrecta.",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Fundamentos de JavaScript",
    branch: "modulo-2-fundamentos-js",
    description:
      "Construye una base sólida entendiendo cómo piensa JavaScript.",
    documentation: "https://developer.mozilla.org/es/docs/Web/JavaScript/Guide",

    summary: `
      JavaScript es un lenguaje flexible y dinámico. Esa flexibilidad es poderosa, 
      pero también puede generar errores si no entiendes cómo el lenguaje interpreta 
      los valores internamente.

      En este módulo no solo aprenderás qué hace cada palabra clave, sino cómo JavaScript 
      evalúa variables, cómo diferencia tipos de datos y cómo compara valores.

      Muchos errores comunes en programación no ocurren por lógica compleja, 
      sino por no comprender cómo el lenguaje convierte tipos, evalúa condiciones 
      y maneja el alcance de las variables.

      Si entiendes bien esta base, los condicionales, ciclos y funciones serán mucho más claros.
      `,
    objective:
      "Comprender cómo JavaScript maneja variables, tipos y comparaciones para escribir código claro, predecible y sin errores invisibles.",
    sections: [
      {
        title: "Variables y alcance",
        documentation:
          "https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Grammar_and_types#declaraciones",

        items: [
          {
            title: "let",
            description:
              "Se utiliza para declarar variables cuyo valor puede cambiar durante la ejecución del programa. \
              A diferencia de var (antiguo), let respeta el alcance de bloque (block scope), lo que significa que solo existe dentro del bloque donde fue declarada.\n\n\
              Se recomienda usar let cuando sabes que el valor cambiará con el tiempo.",
            syntax: "let contador = 0;",
            example:
              "let contador = 0;\ncontador = contador + 1;\n// 1\n\nif (true) {\n  let mensaje = 'Hola';\n}\n// mensaje NO existe fuera del bloque",
            commonError:
              "Confundir let con var. var no respeta el alcance de bloque y puede generar errores difíciles de detectar.",
          },
          {
            title: "const",
            description:
              "Declara una variable cuyo valor no puede ser reasignado después de su inicialización. \
              Se utiliza cuando el dato no debe cambiar.\n\n\
              Importante: const no vuelve inmutable un objeto o array, solo impide cambiar la referencia.",
            syntax: "const PI = 3.1416;",
            example:
              "const edad = 25;\n// edad = 30 ❌ Error\n\nconst persona = { nombre: 'Ana' };\npersona.nombre = 'Luis'; // ✅ válido",
            commonError:
              "Pensar que const hace completamente inmutable un objeto. Solo impide reasignar la variable.",
          },
        ],
      },
      {
        title: "Tipos de datos primitivos",
        documentation:
          "https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Grammar_and_types#tipos_de_datos",

        items: [
          {
            title: "string",
            description:
              "Representa texto. Puede declararse con comillas simples, dobles o backticks.\n\n\
              Las strings pueden combinarse con +, pero JavaScript convierte automáticamente números en texto cuando los mezclas.",
            syntax: "let texto = 'Hola';",
            example:
              "let edad = 20;\nlet mensaje = 'Tienes ' + edad;\n// 'Tienes 20'",
            commonError:
              "Sumar un número con una string sin darse cuenta de que el resultado será texto.",
          },
          {
            title: "number",
            description:
              "Representa números enteros y decimales. En JavaScript no existe distinción entre int y float.\n\n\
              Todos los números se manejan bajo el mismo tipo.",
            syntax: "let precio = 19.99;",
            example: "let resultado = 10 / 3;\n// 3.3333333333333335",
            commonError:
              "Esperar precisión matemática exacta en operaciones con decimales.",
          },
          {
            title: "boolean",
            description:
              "Representa valores lógicos: true o false.\n\n\
              Se usa principalmente en comparaciones y estructuras condicionales.",
            syntax: "let activo = true;",
            example: "let esMayor = 18 > 16;\n// true",
            commonError: "Confundir el string 'true' con el boolean true.",
          },
          {
            title: "null vs undefined",
            description:
              "undefined indica que una variable existe pero no tiene valor asignado.\n\
              null representa la ausencia intencional de valor.\n\n\
              Aunque parecen similares, no significan lo mismo.",
            syntax: "let dato;\nlet usuario = null;",
            example:
              "console.log(dato); // undefined\nconsole.log(usuario); // null",
            commonError:
              "Compararlos sin entender que undefined es automático y null es intencional.",
          },
        ],
      },
      {
        title: "Comparaciones y lógica",
        documentation:
          "https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_operators#comparacion",

        items: [
          {
            title: "== vs ===",
            description:
              "JavaScript puede comparar valores de forma estricta o flexible.\n\n\
=== compara tipo Y valor.\n\
== convierte los tipos antes de comparar (coerción implícita).",
            syntax:
              "valor1 === valor2  // comparación estricta\nvalor1 == valor2   // comparación con conversión",
            example:
              "5 === '5'  // false\n5 == '5'   // true\n\ntrue == 1  // true\ntrue === 1 // false",
            commonError:
              "Usar == sin entender que JavaScript convierte tipos automáticamente.",
          },
          {
            title: "Operadores lógicos",
            description:
              "Permiten combinar condiciones para tomar decisiones más complejas.\n\n\
              Se utilizan cuando una sola condición no es suficiente para determinar un resultado.\n\n\
              && (AND) exige que todas las condiciones sean verdaderas.\n\
              || (OR) requiere que al menos una condición sea verdadera.\n\
              ! (NOT) invierte el valor de una condición.",
            syntax:
              "condicion1 && condicion2   // Ambas deben cumplirse\n\n\
              condicion1 || condicion2   // Al menos una debe cumplirse\n\n\
              !condicion                 // Invierte el valor",
            example:
              "// AND (&&)\n\
              // Para conducir una persona necesita licencia Y carro\n\n\
              let tieneLicencia = true;\n\
              let tieneCarro = true;\n\n\
              let puedeConducir = tieneLicencia && tieneCarro;\n\
              // true → porque ambas condiciones se cumplen\n\n\n\
              // OR (||)\n\
              // Puede viajar si tiene carro O moto\n\n\
              let tieneMoto = true;\n\
              let puedeViajar = tieneCarro || tieneMoto;\n\
              // true → porque al menos una condición es verdadera\n\n\n\
              // NOT (!)\n\
              let esMenorDeEdad = false;\n\
              let puedeEntrar = !esMenorDeEdad;\n\
              // true → porque el valor fue invertido",
            commonError:
              "Confundir AND con OR o asumir que siempre devuelven true o false. En JavaScript, los operadores lógicos pueden devolver valores distintos dependiendo de la evaluación."
          }
        ],
      },
    ],
    exercises: [
      "Declara una variable con let, modifícala y verifica el alcance dentro de un bloque. Luego prueba const y analiza el error al reasignar.",
      "Crea variables de tipo string, number y boolean. Mezcla string con number y explica el resultado obtenido.",
      "Compara valores usando == y ===. Analiza cuándo JavaScript convierte tipos automáticamente.",
      "Crea condiciones usando && y ||. Prueba diferentes combinaciones de valores y analiza cuándo el resultado cambia."
    ]
  },
];
