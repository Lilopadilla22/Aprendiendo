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
      {
        title: "Convención de Commits (estilo profesional)",
        documentation: "https://www.conventionalcommits.org/es/v1.0.0/",
        items: [
          {
            title: "Formato recomendado",
            description:
              "Un buen commit explica QUÉ cambió y POR QUÉ. Usaremos una convención simple y profesional basada en Conventional Commits.",
            syntax:
              "tipo: descripcion breve\n\n// opcional\ncuerpo (qué y por qué)\n\n// opcional\nrefs: #ticket o link",
            syntaxAsCode: false,
            example:
              "feat: agregar seccion de comandos git\n\nSe agrega una sección con sintaxis, ejemplos y errores comunes para el módulo 1.\n\nrefs: #12",
            commonError:
              "Hacer commits genéricos como 'cambios' o 'update'. No sirven para entender el historial."
          },
          {
            title: "Tipos de commit más usados",
            description:
              "Estos tipos ayudan a entender el historial y facilitan el trabajo en equipo.",
            syntax:
              "feat:     nueva funcionalidad\nfix:      corrección de bug\nrefactor: cambio interno sin cambiar funcionalidad\nstyle:    cambios de formato (espacios, lint) sin lógica\ndocs:     cambios en documentación\nchore:    tareas de mantenimiento (deps, scripts)\ntest:     agregar o ajustar tests",
            syntaxAsCode: false,
            example:
              "feat: agregar modulo 2 fundamentos javascript\nfix: corregir enlace de documentación en ModuleDetail\nrefactor: reorganizar estructura de sections\ndocs: agregar README de ejercicios del modulo 2\nchore: actualizar dependencias",
            commonError:
              "Usar un tipo incorrecto para todo (por ejemplo, poner feat cuando es refactor) y confundir el propósito del cambio."
          },
          {
            title: "Reglas para un buen mensaje",
            description:
              "La descripción debe ser corta, clara y en presente. Idealmente en minúsculas y sin punto final.",
            syntax:
              "tipo: verbo + objeto (máx 72 caracteres)\n\nEj: feat: agregar filtro de búsqueda",
            syntaxAsCode: false,
            example:
              "fix: evitar crash cuando status no existe\nrefactor: separar documentación por sección",
            commonError:
              "Mensajes demasiado largos o ambiguos; usar mayúsculas innecesarias; incluir varios cambios distintos en un solo commit."
          },
          {
            title: "Commits atómicos",
            description:
              "Un commit debe representar un cambio pequeño y coherente. Si hiciste 3 cosas diferentes, deberían ser 3 commits.",
            syntax:
              "✅ 1 commit = 1 intención\n\nEjemplo:\n- UI: mejorar diseño\n- Data: actualizar modulesData\n- Logic: ajustar getModuleStatus",
            syntaxAsCode: false,
            example:
              "feat: agregar archivos base de ejercicios del modulo 2\nrefactor: ajustar estados de modulos\nfeat: mejorar contenido del modulo 2",
            commonError:
              "Subir 20 archivos mezclando UI + lógica + data + ejercicios y llamarlo 'update'. Luego es imposible revisar el PR."
          }
        ]
      }
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
  {
    id: 3,
    title: "Control de Flujo en JavaScript",
    branch: "modulo-3-control-flujo",
    description:
      "Aprende a controlar cómo se ejecuta tu programa usando condiciones y bucles.",
    documentation:
      "https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Control_flow_and_error_handling",
    summary: `
      El control de flujo permite que tu programa tome decisiones y repita acciones.
      No todo el código se ejecuta de forma lineal: a veces necesitas validar condiciones
      o repetir procesos varias veces.

      En este módulo aprenderás a usar condicionales (if, else, else if),
      el operador ternario y los bucles (for, while, do while).
    `,
    objective:
      "Comprender cómo controlar la ejecución del código usando condiciones y estructuras repetitivas.",
    sections: [
      {
        title: "Condicionales",
        documentation:
          "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/if...else",
        items: [
          {
            title: "if / else",
            description:
              "Las condicionales permiten ejecutar código solo cuando una condición se cumple.\n\n\
  Si la condición es verdadera se ejecuta el bloque del if.\n\
  Si es falsa se ejecuta el bloque del else.",
            syntax:
              "if (condicion) {\n\
    // código si es verdadero\n\
  } else {\n\
    // código si es falso\n\
  }",
            example:
              "let edad = 20;\n\n\
  if (edad >= 18) {\n\
    console.log('Puede entrar');\n\
  } else {\n\
    console.log('No puede entrar');\n\
  }",
            commonError:
              "Olvidar usar paréntesis en la condición o confundir = con ==."
          },
          {
            title: "else if",
            description:
              "Permite evaluar múltiples condiciones diferentes en orden.\n\n\
  JavaScript evalúa cada condición hasta encontrar una verdadera.",
            syntax:
              "if (condicion1) {\n\
    // código\n\
  } else if (condicion2) {\n\
    // código\n\
  } else {\n\
    // código final\n\
  }",
            example:
              "let nota = 85;\n\n\
  if (nota >= 90) {\n\
    console.log('Excelente');\n\
  } else if (nota >= 70) {\n\
    console.log('Aprobado');\n\
  } else {\n\
    console.log('Reprobado');\n\
  }",
            commonError:
              "Pensar que todas las condiciones se evalúan. Solo se ejecuta la primera verdadera."
          }
        ]
      },
      {
        title: "Operador Ternario",
        documentation:
          "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Conditional_Operator",
        items: [
          {
            title: "Condición en una sola línea",
            description:
              "El operador ternario es una forma corta de escribir una condición.\n\n\
  Se usa cuando solo necesitas devolver un valor dependiendo de una condición.",
            syntax:
              "condicion ? valorSiVerdadero : valorSiFalso",
            example:
              "let edad = 20;\n\n\
  let mensaje = edad >= 18\n\
    ? 'Puede entrar'\n\
    : 'No puede entrar';\n\n\
  console.log(mensaje);",
            commonError:
              "Usar ternarios demasiado largos que hacen el código difícil de leer."
          }
        ]
      },
      {
        title: "Bucles",
        documentation:
          "https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Loops_and_iteration",
        items: [
          {
            title: "for",
            description:
              "El bucle for se usa cuando sabes cuántas veces quieres repetir una acción.",
            syntax:
              "for (inicio; condicion; incremento) {\n\
    // código que se repite\n\
  }",
            example:
              "for (let i = 0; i < 5; i++) {\n\
    console.log(i);\n\
  }",
            commonError:
              "Olvidar actualizar la variable del bucle y crear un bucle infinito."
          },
          {
            title: "while",
            description:
              "El bucle while ejecuta código mientras una condición sea verdadera.",
            syntax:
              "while (condicion) {\n\
    // código\n\
  }",
            example:
              "let contador = 0;\n\n\
  while (contador < 3) {\n\
    console.log(contador);\n\
    contador++;\n\
  }",
            commonError:
              "No cambiar la condición dentro del bucle y provocar un bucle infinito."
          },
          {
            title: "do while",
            description:
              "Este bucle ejecuta el código al menos una vez antes de evaluar la condición.",
            syntax:
              "do {\n\
    // código\n\
  } while (condicion)",
            example:
              "let numero = 5;\n\n\
  do {\n\
    console.log(numero);\n\
    numero--;\n\
  } while (numero > 0);",
            commonError:
              "Pensar que se comporta igual que while. do while siempre se ejecuta al menos una vez."
          }
        ]
      }
    ],
    exercises: [
      "Crea una condición que verifique si un número es mayor que 10.",
      "Escribe una condición que determine si una persona puede votar (edad >= 18).",
      "Usa un operador ternario para mostrar 'Mayor de edad' o 'Menor de edad'.",
      "Crea un bucle for que imprima los números del 1 al 10.",
      "Crea un bucle while que cuente del 5 al 0."
    ]
  },
  {
    id: 4,
    title: "Funciones en JavaScript",
    branch: "modulo-4-funciones",
    description: "Aprende a organizar y reutilizar código usando funciones declaradas, expresadas y de flecha.",
    documentation: "https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Functions",
    summary: `
      Las funciones son bloques de código reutilizables que reciben datos,
      los procesan y devuelven un resultado.

      Son la base de cualquier programa bien organizado: en lugar de repetir
      el mismo código varias veces, lo encapsulas en una función y la llamas
      cuando la necesitas.

      En JavaScript existen distintas formas de escribir funciones.
      Conocerlas te permite elegir la más adecuada según el contexto.

      También es fundamental entender el alcance (scope) de las variables
      dentro de una función, y la diferencia entre parámetros y argumentos.
    `,
    objective:
      "Comprender cómo declarar, invocar y estructurar funciones en JavaScript para escribir código organizado, reutilizable y fácil de mantener.",
    sections: [
      {
        title: "Declaración de funciones",
        documentation:
          "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/function",
        items: [
          {
            title: "function declaration",
            description:
              "Es la forma más básica de crear una función. Se declara con la palabra reservada function seguida de un nombre.\n\nEsta forma tiene hoisting: puedes llamar a la función antes de declararla en el código.",
            syntax: "function nombreFuncion(parametros) {\n  // código\n  return resultado;\n}",
            syntaxAsCode: true,
            example:
              "function saludar(nombre) {\n  return 'Hola, ' + nombre;\n}\n\nconsole.log(saludar('Ana')); // 'Hola, Ana'",
            commonError:
              "Olvidar el return y asumir que la función devuelve algo. Sin return, la función devuelve undefined."
          },
          {
            title: "function expression",
            description:
              "Una función que se asigna a una variable. A diferencia de la declaración, NO tiene hoisting: debes declararla antes de usarla.",
            syntax: "const nombreFuncion = function(parametros) {\n  return resultado;\n};",
            syntaxAsCode: true,
            example:
              "const sumar = function(a, b) {\n  return a + b;\n};\n\nconsole.log(sumar(3, 4)); // 7",
            commonError:
              "Intentar llamar a la función antes de declararla. Al ser una variable, no existe antes de esa línea."
          },
          {
            title: "arrow function",
            description:
              "Sintaxis moderna (ES6) para escribir funciones de forma más compacta. No tiene su propio this, lo cual es importante al usarlas dentro de objetos o clases.\n\nSi el cuerpo es una sola expresión, puedes omitir las llaves y el return.",
            syntax:
              "const nombreFuncion = (parametros) => resultado;\n\n// con cuerpo:\nconst nombreFuncion = (parametros) => {\n  return resultado;\n};",
            syntaxAsCode: true,
            example:
              "const multiplicar = (a, b) => a * b;\nconsole.log(multiplicar(3, 4)); // 12\n\nconst saludar = nombre => 'Hola, ' + nombre;\nconsole.log(saludar('Luis')); // 'Hola, Luis'",
            commonError:
              "Usar arrow functions como métodos de objetos esperando acceder a this. Las arrow functions no tienen su propio this."
          }
        ]
      },
      {
        title: "Parámetros y argumentos",
        documentation:
          "https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Functions#parametros_de_funcion",
        items: [
          {
            title: "Parámetros vs argumentos",
            description:
              "Los parámetros son los nombres que defines en la función. Los argumentos son los valores que le pasas cuando la llamas.\n\nSon conceptos distintos aunque se usan juntos.",
            syntax: "function nombre(parametro1, parametro2) { ... }\nnombre(argumento1, argumento2);",
            syntaxAsCode: true,
            example:
              "function restar(a, b) {  // a y b son parámetros\n  return a - b;\n}\n\nrestar(10, 3); // 10 y 3 son argumentos\n// resultado: 7",
            commonError:
              "Pasar más o menos argumentos sin saberlo. JavaScript no lanza error: los que faltan son undefined y los extra se ignoran."
          },
          {
            title: "Parámetros por defecto",
            description:
              "Puedes asignar un valor por defecto a un parámetro. Si no se pasa ese argumento al llamar la función, usa el valor por defecto.",
            syntax: "function nombre(param = valorPorDefecto) { ... }",
            syntaxAsCode: true,
            example:
              "function saludar(nombre = 'visitante') {\n  return 'Hola, ' + nombre;\n}\n\nconsole.log(saludar());        // 'Hola, visitante'\nconsole.log(saludar('María')); // 'Hola, María'",
            commonError:
              "Poner parámetros con valor por defecto antes de los obligatorios. Los parámetros por defecto van siempre al final."
          }
        ]
      },
      {
        title: "Return y scope",
        documentation:
          "https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Functions#scope_de_una_funcion",
        items: [
          {
            title: "return",
            description:
              "La palabra clave return termina la ejecución de la función y devuelve un valor.\n\nCualquier código después del return no se ejecuta. Una función puede tener múltiples returns en distintas ramas.",
            syntax: "function nombre() {\n  return valor;\n}",
            syntaxAsCode: true,
            example:
              "function esPar(numero) {\n  if (numero % 2 === 0) {\n    return true;\n  }\n  return false;\n}\n\nconsole.log(esPar(4)); // true\nconsole.log(esPar(7)); // false",
            commonError:
              "Olvidar el return y no entender por qué la función devuelve undefined."
          },
          {
            title: "Scope de función",
            description:
              "Las variables declaradas dentro de una función solo existen dentro de ella. No puedes acceder a ellas desde afuera.\n\nEsto se llama scope local. Las variables declaradas fuera se llaman variables globales y sí son accesibles dentro de la función.",
            syntax: "function nombre() {\n  let local = 'solo aquí';\n}\n// local no existe aquí",
            syntaxAsCode: true,
            example:
              "let global = 'soy global';\n\nfunction mostrar() {\n  let local = 'soy local';\n  console.log(global); // ✅ accesible\n  console.log(local);  // ✅ accesible\n}\n\nconsole.log(global); // ✅\nconsole.log(local);  // ❌ ReferenceError",
            commonError:
              "Intentar usar fuera de la función una variable declarada dentro y no entender el error ReferenceError."
          }
        ]
      },
      {
        title: "Funciones como valores",
        documentation:
          "https://developer.mozilla.org/es/docs/Glossary/First-class_Function",
        items: [
          {
            title: "Funciones de orden superior",
            description:
              "En JavaScript, las funciones son valores como cualquier otro. Puedes pasarlas como argumentos a otras funciones.\n\nUna función que recibe otra función como parámetro se llama función de orden superior (higher-order function). Esto es la base de metodos como map, filter y reduce.",
            syntax: "function ejecutar(fn) {\n  fn();\n}",
            syntaxAsCode: true,
            example:
              "function ejecutar(fn) {\n  fn();\n}\n\nfunction decirHola() {\n  console.log('Hola!');\n}\n\nejecutar(decirHola); // 'Hola!'\n\n// Con arrow function directa:\nejecutar(() => console.log('Mundo!')); // 'Mundo!'",
            commonError:
              "Pasar la función con paréntesis: ejecutar(decirHola()) la ejecuta de inmediato en lugar de pasarla."
          },
          {
            title: "Callbacks",
            description:
              "Un callback es una función que se pasa como argumento y se llama dentro de otra función.\n\nEs uno de los patrones más comunes en JavaScript, especialmente para manejar eventos y operaciones asincronas.",
            syntax: "function accion(callback) {\n  // hace algo...\n  callback();\n}",
            syntaxAsCode: true,
            example:
              "function procesar(valor, callback) {\n  const resultado = valor * 2;\n  callback(resultado);\n}\n\nprocesar(5, (res) => {\n  console.log('Resultado:', res); // 'Resultado: 10'\n});",
            commonError:
              "Confundir el callback con una llamada normal. El callback se ejecuta dentro de la función que lo recibe, no donde fue definido."
          }
        ]
      }
    ],
    exercises: [
      "Escribe una función declarada que reciba un nombre y devuelva un saludo personalizado.",
      "Convierte esa función en una arrow function.",
      "Crea una función con un parámetro por defecto que se use cuando no se pasa argumento.",
      "Escribe una función que reciba dos números y devuelva el mayor de los dos.",
      "Crea una función de orden superior que reciba un número y un callback, y ejecute el callback con ese número duplicado."
    ]
  }
  ,{
    id: 5,
    title: "Arrays en JavaScript",
    branch: "modulo-5-arrays",
    description: "Aprende a guardar y manejar listas de datos usando arrays.",
    documentation: "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array",
    summary: `
      Imagina que tienes una lista de compras en papel: manzanas, leche, pan.
      Un array es exactamente eso, pero en código: una lista ordenada donde
      puedes guardar varios valores en una sola variable.

      Sin arrays, tendrías que crear una variable por cada cosa que quieras guardar.
      Con arrays puedes manejar listas completas, recorrerlas, agregar cosas,
      quitar cosas y mucho más.

      Este módulo te enseña desde cómo crear un array hasta cómo leer y modificar
      su contenido de forma clara y directa.
    `,
    objective:
      "Entender qué es un array, cómo acceder a sus elementos y cómo modificarlos usando los métodos más comunes.",
    sections: [
      {
        title: "¿Qué es un array?",
        documentation:
          "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array",
        items: [
          {
            title: "Definición",
            description:
              "Un array es una estructura de datos que te permite guardar varios valores en una sola variable, en un orden específico.\n\nSin arrays, si quisieras guardar los nombres de 5 frutas necesitarías 5 variables distintas: fruta1, fruta2, fruta3... Eso es difícil de manejar y peor aún si la lista crece.\n\nCon un array, todos esos valores viven juntos bajo un mismo nombre, y puedes acceder a cualquiera de ellos usando su posición.\n\nCada posición se llama índice y empieza en 0, no en 1. Eso significa que el primer elemento está en la posición 0, el segundo en la 1, y así sucesivamente.\n\nLos arrays son fundamentales en programación porque casi todo en el mundo real es una lista: productos, usuarios, mensajes, resultados de búsqueda. Saber manejarlos bien es indispensable."
          },
          {
            title: "Crear un array",
            description:
              "Un array se escribe entre corchetes [ ] y sus elementos se separan con comas.\n\nPuede guardar cualquier tipo de dato: textos, números, booleanos, incluso otros arrays.\n\nPiénsalo como una caja con cajones numerados, donde cada cajón guarda un valor.",
            syntax: "const lista = [valor1, valor2, valor3];",
            syntaxAsCode: true,
            example:
              "const frutas = ['manzana', 'pera', 'uva'];\nconst numeros = [10, 20, 30];\nconst mixto = ['hola', 42, true];\n\nconsole.log(frutas);  // ['manzana', 'pera', 'uva']\nconsole.log(numeros); // [10, 20, 30]",
            commonError:
              "Olvidar las comas entre elementos o mezclar tipos sin darse cuenta de lo que eso implica al procesar la lista."
          },
          {
            title: "Acceder a un elemento",
            description:
              "Cada elemento de un array tiene una posición llamada índice.\n\nEl primer elemento está en la posición 0, no en la 1. Esto confunde al principio, pero es así en casi todos los lenguajes.\n\nPara acceder a un elemento, escribes el nombre del array seguido del índice entre corchetes.",
            syntax: "array[indice]",
            syntaxAsCode: true,
            example:
              "const frutas = ['manzana', 'pera', 'uva'];\n\nconsole.log(frutas[0]); // 'manzana'\nconsole.log(frutas[1]); // 'pera'\nconsole.log(frutas[2]); // 'uva'\nconsole.log(frutas[3]); // undefined (no existe)",
            commonError:
              "Comenzar a contar desde 1 en lugar de 0. El primer elemento siempre es el índice 0."
          },
          {
            title: "Propiedad length",
            description:
              "Todo array tiene una propiedad llamada length que te dice cuántos elementos tiene.\n\nEs muy útil cuando no sabes de antemano qué tan larga es la lista.",
            syntax: "array.length",
            syntaxAsCode: true,
            example:
              "const frutas = ['manzana', 'pera', 'uva'];\n\nconsole.log(frutas.length); // 3\n\n// El último elemento siempre está en length - 1:\nconsole.log(frutas[frutas.length - 1]); // 'uva'",
            commonError:
              "Intentar acceder al elemento en la posición length y obtener undefined. El último índice es siempre length - 1."
          }
        ]
      },
      {
        title: "Modificar un array",
        documentation:
          "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array#metodos_de_instancia",
        items: [
          {
            title: "push — agregar al final",
            description:
              "push agrega uno o más elementos al final del array.\n\nEs como añadir algo al final de tu lista de compras.",
            syntax: "array.push(nuevoElemento);",
            syntaxAsCode: true,
            example:
              "const frutas = ['manzana', 'pera'];\nfrutas.push('uva');\n\nconsole.log(frutas); // ['manzana', 'pera', 'uva']",
            commonError:
              "Olvidar que push modifica el array original y también devuelve el nuevo tamaño, no el array."
          },
          {
            title: "pop — quitar del final",
            description:
              "pop elimina el último elemento del array y lo devuelve.\n\nSi necesitas guardar el elemento que quitaste, puedes asignarlo a una variable.",
            syntax: "const eliminado = array.pop();",
            syntaxAsCode: true,
            example:
              "const frutas = ['manzana', 'pera', 'uva'];\nconst ultima = frutas.pop();\n\nconsole.log(ultima);  // 'uva'\nconsole.log(frutas);  // ['manzana', 'pera']",
            commonError:
              "Pensar que pop devuelve el array resultante. Devuelve el elemento eliminado, no el array."
          },
          {
            title: "unshift — agregar al inicio",
            description:
              "unshift agrega uno o más elementos al inicio del array, desplazando el resto hacia adelante.",
            syntax: "array.unshift(nuevoElemento);",
            syntaxAsCode: true,
            example:
              "const frutas = ['pera', 'uva'];\nfrutas.unshift('manzana');\n\nconsole.log(frutas); // ['manzana', 'pera', 'uva']",
            commonError:
              "Confundirlo con push. unshift agrega al inicio, push agrega al final."
          },
          {
            title: "shift — quitar del inicio",
            description:
              "shift elimina el primer elemento del array y lo devuelve.\n\nEs el opuesto de pop: mientras pop actúa al final, shift actúa al inicio.",
            syntax: "const eliminado = array.shift();",
            syntaxAsCode: true,
            example:
              "const frutas = ['manzana', 'pera', 'uva'];\nconst primera = frutas.shift();\n\nconsole.log(primera); // 'manzana'\nconsole.log(frutas);  // ['pera', 'uva']",
            commonError:
              "Mezclar shift con pop. Recuerda: shift = inicio, pop = final."
          }
        ]
      },
      {
        title: "Recorrer un array",
        documentation:
          "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach",
        items: [
          {
            title: "for clásico con índice",
            description:
              "Puedes recorrer un array con un bucle for usando el índice para acceder a cada elemento.\n\nEs útil cuando necesitas el número de posición dentro del bucle.",
            syntax: "for (let i = 0; i < array.length; i++) {\n  console.log(array[i]);\n}",
            syntaxAsCode: true,
            example:
              "const frutas = ['manzana', 'pera', 'uva'];\n\nfor (let i = 0; i < frutas.length; i++) {\n  console.log(frutas[i]);\n}\n// 'manzana'\n// 'pera'\n// 'uva'",
            commonError:
              "Usar <= en lugar de < en la condición. Eso haría que el bucle intente acceder a un índice que no existe."
          },
          {
            title: "for...of",
            description:
              "Es una forma más moderna y legible de recorrer un array cuando no necesitas el índice.\n\nEn lugar de trabajar con posiciones, te da directamente cada valor en cada vuelta.",
            syntax: "for (const elemento of array) {\n  // usar elemento\n}",
            syntaxAsCode: true,
            example:
              "const frutas = ['manzana', 'pera', 'uva'];\n\nfor (const fruta of frutas) {\n  console.log(fruta);\n}\n// 'manzana'\n// 'pera'\n// 'uva'",
            commonError:
              "Usar for...of cuando necesitas el índice. En ese caso, es mejor el for clásico o forEach con índice."
          },
          {
            title: "forEach",
            description:
              "forEach es un método del array que ejecuta una función por cada elemento.\n\nEs la forma más expresiva de recorrer una lista cuando solo quieres hacer algo con cada elemento sin necesidad de crear un nuevo array.",
            syntax: "array.forEach((elemento) => {\n  // hacer algo con elemento\n});",
            syntaxAsCode: true,
            example:
              "const frutas = ['manzana', 'pera', 'uva'];\n\nfrutas.forEach((fruta) => {\n  console.log('Fruta:', fruta);\n});\n// 'Fruta: manzana'\n// 'Fruta: pera'\n// 'Fruta: uva'",
            commonError:
              "Intentar usar return dentro de forEach para detener el bucle. forEach siempre recorre todos los elementos sin excepción."
          }
        ]
      },
      {
        title: "Buscar dentro de un array",
        documentation:
          "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/includes",
        items: [
          {
            title: "includes — ¿existe este valor?",
            description:
              "includes te dice si un valor existe dentro del array. Devuelve true o false.\n\nEs la forma más directa de saber si algo está en una lista.",
            syntax: "array.includes(valor)",
            syntaxAsCode: true,
            example:
              "const frutas = ['manzana', 'pera', 'uva'];\n\nconsole.log(frutas.includes('pera'));    // true\nconsole.log(frutas.includes('sandía')); // false",
            commonError:
              "Usar includes para buscar objetos. Solo funciona bien con valores primitivos como strings y números."
          },
          {
            title: "indexOf — ¿en qué posición está?",
            description:
              "indexOf devuelve el índice (posición) del primer elemento que coincide con el valor buscado.\n\nSi el elemento no existe, devuelve -1. Eso es una convención muy común en programación para indicar 'no encontrado'.",
            syntax: "array.indexOf(valor)",
            syntaxAsCode: true,
            example:
              "const frutas = ['manzana', 'pera', 'uva'];\n\nconsole.log(frutas.indexOf('pera')); // 1\nconsole.log(frutas.indexOf('kiwi')); // -1\n\n// Verificar si existe antes de usar el índice:\nif (frutas.indexOf('pera') !== -1) {\n  console.log('La pera está en la lista');\n}",
            commonError:
              "No verificar si el resultado es -1 antes de usarlo como índice. Eso puede causar comportamientos inesperados."
          }
        ]
      }
    ],
    exercises: [
      "Crea un array con 5 nombres. Accede al primero y al último usando su índice.",
      "Agrega un nombre al final de tu lista con push y otro al inicio con unshift.",
      "Elimina el último nombre con pop y guarda el valor eliminado en una variable.",
      "Recorre tu lista con forEach e imprime cada nombre con un mensaje como 'Nombre: [valor]'.",
      "Usa includes para verificar si un nombre específico está en la lista. Muestra un mensaje según el resultado."
    ]
  },
  {
    id: 6,
    title: "Objetos en JavaScript",
    branch: "modulo-6-objetos",
    description: "Aprende a representar cosas del mundo real con propiedades y valores agrupados en un objeto.",
    documentation: "https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Working_with_objects",
    summary: `
      Piensa en una ficha de contacto: tiene nombre, teléfono, correo y ciudad.
      Toda esa información describe a una sola persona.

      Un objeto en JavaScript hace exactamente eso: agrupa varios datos
      relacionados bajo un mismo nombre. En lugar de tener cuatro variables
      separadas, tienes un objeto con cuatro propiedades.

      Los objetos están en todos lados: la respuesta de una API es un objeto,
      un usuario es un objeto, un producto en un carrito es un objeto.

      Entender cómo crearlos, leerlos y modificarlos es una de las habilidades
      más importantes de JavaScript.
    `,
    objective:
      "Comprender cómo crear objetos, acceder a sus propiedades, modificarlas y recorrerlas de forma clara.",
    sections: [
      {
        title: "¿Qué es un objeto?",
        documentation:
          "https://developer.mozilla.org/es/docs/Learn/JavaScript/Objects/Basics",
        items: [
          {
            title: "Crear un objeto",
            description:
              "Un objeto se escribe entre llaves { } y contiene pares de clave: valor separados por comas.\n\nLa clave es el nombre de la propiedad (como el nombre del campo en un formulario).\nEl valor es lo que está guardado en esa propiedad.\n\nPuede guardar cualquier tipo de dato: textos, números, booleanos, arrays, incluso otros objetos.",
            syntax: "const objeto = {\n  clave: valor,\n  clave2: valor2\n};",
            syntaxAsCode: true,
            example:
              "const persona = {\n  nombre: 'Ana',\n  edad: 28,\n  activa: true\n};\n\nconsole.log(persona);\n// { nombre: 'Ana', edad: 28, activa: true }",
            commonError:
              "Usar = en lugar de : para separar la clave del valor. En objetos siempre se usan dos puntos."
          },
          {
            title: "Acceder a una propiedad — notación de punto",
            description:
              "Para leer el valor de una propiedad, escribes el nombre del objeto, un punto y el nombre de la propiedad.\n\nEs como decir: 'del objeto persona, dame el nombre'.",
            syntax: "objeto.propiedad",
            syntaxAsCode: true,
            example:
              "const persona = {\n  nombre: 'Ana',\n  edad: 28\n};\n\nconsole.log(persona.nombre); // 'Ana'\nconsole.log(persona.edad);   // 28",
            commonError:
              "Escribir mal el nombre de la propiedad. Si la clave es 'nombre' y escribes 'Nombre', obtienes undefined."
          },
          {
            title: "Acceder a una propiedad — notación de corchetes",
            description:
              "También puedes acceder a una propiedad usando corchetes con el nombre entre comillas.\n\nEsto es útil cuando el nombre de la propiedad está guardado en una variable, o cuando el nombre tiene espacios o caracteres especiales.",
            syntax: "objeto['propiedad']\nobjeto[variable]",
            syntaxAsCode: true,
            example:
              "const persona = { nombre: 'Ana', edad: 28 };\n\nconsole.log(persona['nombre']); // 'Ana'\n\n// Útil cuando la clave viene de una variable:\nconst campo = 'edad';\nconsole.log(persona[campo]); // 28",
            commonError:
              "Olvidar las comillas dentro de los corchetes cuando la clave es texto fijo. persona[nombre] sin comillas busca una variable llamada nombre."
          }
        ]
      },
      {
        title: "Modificar un objeto",
        documentation:
          "https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Working_with_objects#objetos_y_propiedades",
        items: [
          {
            title: "Cambiar el valor de una propiedad",
            description:
              "Puedes modificar el valor de una propiedad existente asignándole un nuevo valor con =.\n\nAunque el objeto esté declarado con const, sus propiedades sí pueden cambiar. const solo impide reemplazar el objeto completo, no modificar su contenido.",
            syntax: "objeto.propiedad = nuevoValor;",
            syntaxAsCode: true,
            example:
              "const persona = { nombre: 'Ana', edad: 28 };\n\npersona.edad = 29;\nconsole.log(persona.edad); // 29",
            commonError:
              "Pensar que const protege el contenido del objeto. Solo protege la referencia, no las propiedades."
          },
          {
            title: "Agregar una propiedad nueva",
            description:
              "Puedes agregar una propiedad que no existía simplemente asignándole un valor.\n\nNo necesitas declarar el objeto de nuevo ni usar ningún método especial.",
            syntax: "objeto.nuevaClave = valor;",
            syntaxAsCode: true,
            example:
              "const persona = { nombre: 'Ana' };\n\npersona.email = 'ana@correo.com';\nconsole.log(persona);\n// { nombre: 'Ana', email: 'ana@correo.com' }",
            commonError:
              "Intentar agregar propiedades con una sintaxis diferente. En JavaScript, simplemente asignas y ya queda guardado."
          },
          {
            title: "Eliminar una propiedad",
            description:
              "Para eliminar una propiedad de un objeto se usa la palabra delete seguida de la propiedad.\n\nDespués de eliminada, si intentas acceder a esa propiedad obtienes undefined.",
            syntax: "delete objeto.propiedad;",
            syntaxAsCode: true,
            example:
              "const persona = { nombre: 'Ana', edad: 28, telefono: '555-1234' };\n\ndelete persona.telefono;\nconsole.log(persona);\n// { nombre: 'Ana', edad: 28 }",
            commonError:
              "Confundir delete con asignar undefined. Son cosas distintas: delete elimina la propiedad por completo, asignar undefined solo le cambia el valor."
          }
        ]
      },
      {
        title: "Recorrer un objeto",
        documentation:
          "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/for...in",
        items: [
          {
            title: "for...in",
            description:
              "for...in recorre todas las claves de un objeto, una por una.\n\nEn cada vuelta te da el nombre de la propiedad (la clave), y con eso puedes acceder al valor usando corchetes.",
            syntax: "for (const clave in objeto) {\n  console.log(clave, objeto[clave]);\n}",
            syntaxAsCode: true,
            example:
              "const persona = { nombre: 'Ana', edad: 28, ciudad: 'CDMX' };\n\nfor (const clave in persona) {\n  console.log(clave + ':', persona[clave]);\n}\n// nombre: Ana\n// edad: 28\n// ciudad: CDMX",
            commonError:
              "Usar for...of en un objeto. for...of es para arrays, for...in es para objetos."
          },
          {
            title: "Object.keys — obtener solo las claves",
            description:
              "Object.keys devuelve un array con todos los nombres de las propiedades del objeto.\n\nEs útil cuando necesitas la lista de campos disponibles o quieres recorrer el objeto usando métodos de array.",
            syntax: "Object.keys(objeto)",
            syntaxAsCode: true,
            example:
              "const persona = { nombre: 'Ana', edad: 28, ciudad: 'CDMX' };\n\nconst claves = Object.keys(persona);\nconsole.log(claves); // ['nombre', 'edad', 'ciudad']\n\nclaves.forEach(clave => {\n  console.log(clave + ':', persona[clave]);\n});",
            commonError:
              "Esperar que Object.keys devuelva los valores. Solo devuelve los nombres de las propiedades."
          },
          {
            title: "Object.values — obtener solo los valores",
            description:
              "Object.values devuelve un array con todos los valores del objeto, en el mismo orden en que fueron definidos.",
            syntax: "Object.values(objeto)",
            syntaxAsCode: true,
            example:
              "const persona = { nombre: 'Ana', edad: 28, ciudad: 'CDMX' };\n\nconst valores = Object.values(persona);\nconsole.log(valores); // ['Ana', 28, 'CDMX']",
            commonError:
              "Asumir que los valores estarán en un orden específico si el objeto fue modificado dinámicamente."
          },
          {
            title: "Object.entries — claves y valores juntos",
            description:
              "Object.entries devuelve un array de pares [clave, valor], lo que te permite acceder a ambos al mismo tiempo mientras recorres.\n\nEs la opción más completa cuando necesitas tanto el nombre como el valor de cada propiedad.",
            syntax: "Object.entries(objeto)",
            syntaxAsCode: true,
            example:
              "const persona = { nombre: 'Ana', edad: 28 };\n\nObject.entries(persona).forEach(([clave, valor]) => {\n  console.log(clave + ':', valor);\n});\n// nombre: Ana\n// edad: 28",
            commonError:
              "No usar desestructuración en el parámetro y terminar con un array dentro del loop sin saber cómo acceder a cada parte."
          }
        ]
      },
      {
        title: "Objetos en la práctica",
        documentation:
          "https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Working_with_objects",
        items: [
          {
            title: "Objetos dentro de arrays",
            description:
              "Es muy común tener un array donde cada elemento es un objeto. Esto representa listas de cosas con múltiples características, como una lista de usuarios, productos o tareas.\n\nPara acceder a una propiedad de un elemento, combinas el índice del array con la notación de punto.",
            syntax: "lista[indice].propiedad",
            syntaxAsCode: true,
            example:
              "const usuarios = [\n  { nombre: 'Ana', rol: 'admin' },\n  { nombre: 'Luis', rol: 'editor' },\n  { nombre: 'Sofía', rol: 'viewer' }\n];\n\nconsole.log(usuarios[0].nombre); // 'Ana'\nconsole.log(usuarios[1].rol);    // 'editor'\n\nusuarios.forEach(usuario => {\n  console.log(usuario.nombre, '-', usuario.rol);\n});",
            commonError:
              "Olvidar que primero va el índice y luego la propiedad. usuarios.nombre[0] no funciona."
          },
          {
            title: "Verificar si una propiedad existe",
            description:
              "A veces no sabes si un objeto tiene cierta propiedad. Puedes verificarlo con el operador in o comparando el valor con undefined.\n\nEsto es útil cuando trabajas con datos que vienen de fuera, como respuestas de una API.",
            syntax: "'propiedad' in objeto\nobjeto.propiedad !== undefined",
            syntaxAsCode: true,
            example:
              "const persona = { nombre: 'Ana', edad: 28 };\n\nconsole.log('nombre' in persona); // true\nconsole.log('email' in persona);  // false\n\nif (persona.email !== undefined) {\n  console.log('Tiene email');\n} else {\n  console.log('No tiene email');\n}",
            commonError:
              "Acceder directamente a una propiedad que puede no existir y obtener undefined sin entender por qué."
          }
        ]
      }
    ],
    exercises: [
      "Crea un objeto que represente un producto con nombre, precio y disponible. Imprime cada propiedad por separado.",
      "Modifica el precio del producto y agrega una propiedad nueva llamada categoria.",
      "Recorre el objeto con for...in e imprime cada clave con su valor en formato 'clave: valor'.",
      "Crea un array de 3 objetos de productos. Recorre el array con forEach e imprime el nombre y precio de cada uno.",
      "Verifica si tu objeto producto tiene una propiedad llamada descuento. Muestra un mensaje según el resultado."
    ]
  }
];
