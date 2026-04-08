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
  },
  {
    id: 7,
    title: "Métodos de Arrays",
    branch: "modulo-7-metodos-arrays",
    description: "Aprende los métodos más poderosos de los arrays para transformar, filtrar y buscar datos sin escribir bucles manualmente.",
    documentation: "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array#metodos_de_instancia",
    summary: `
      Ya sabes que un array es una lista de valores. Pero la magia de verdad
      está en lo que puedes hacer con esa lista sin tener que escribir
      un bucle for cada vez.

      JavaScript tiene métodos incorporados en los arrays que resuelven
      las tareas más comunes: transformar cada elemento, quedarte solo con
      los que cumplen una condición, buscar uno específico, o calcular
      un resultado a partir de toda la lista.

      Estos métodos son los que más vas a usar en proyectos reales,
      especialmente cuando trabajas con datos que vienen de una API.
      Una vez que los entiendas, tu código será más corto, más claro
      y más fácil de leer.
    `,
    objective:
      "Dominar los métodos map, filter, find, some, every y reduce para manipular arrays de forma expresiva y sin bucles manuales.",
    sections: [
      {
        title: "Transformar — map",
        documentation:
          "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map",
        items: [
          {
            title: "¿Qué hace map?",
            description:
              "map recorre cada elemento de un array, le aplica una función y devuelve un array nuevo con los resultados.\n\nNo modifica el array original. Siempre crea uno nuevo.\n\nPiénsalo como una máquina de transformación: le metes una lista, defines qué quieres hacer con cada elemento, y te devuelve una lista nueva con los resultados.\n\nEs ideal cuando quieres convertir todos los elementos de una lista al mismo tiempo: subir precios, poner nombres en mayúsculas, extraer solo un campo de cada objeto.",
            syntax: "const nuevo = array.map((elemento) => {\n  return transformacion;\n});",
            syntaxAsCode: true,
            example:
              "const precios = [100, 200, 300];\n\n// Quiero subir todos los precios un 10%:\nconst precios actualizados = precios.map((precio) => precio * 1.10);\n\nconsole.log(preciosActualizados); // [110, 220, 330]\nconsole.log(precios);             // [100, 200, 300] ← sin cambios\n\n// Con array de objetos:\nconst productos = [\n  { nombre: 'Café', precio: 50 },\n  { nombre: 'Pan', precio: 30 }\n];\n\nconst nombres = productos.map((p) => p.nombre);\nconsole.log(nombres); // ['Café', 'Pan']",
            commonError:
              "Olvidar el return dentro del map cuando usas llaves. Sin return, cada elemento se convierte en undefined."
          }
        ]
      },
      {
        title: "Filtrar — filter",
        documentation:
          "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter",
        items: [
          {
            title: "¿Qué hace filter?",
            description:
              "filter recorre el array y devuelve un nuevo array con solo los elementos que cumplen una condición.\n\nNo modifica el array original. Si ningún elemento cumple la condición, devuelve un array vacío.\n\nEs como un colador: pones todos los datos y solo pasan los que cumplen la regla que definiste.\n\nEs ideal para buscar usuarios activos, productos disponibles, tareas completadas, o cualquier subconjunto de una lista.",
            syntax: "const resultado = array.filter((elemento) => condicion);",
            syntaxAsCode: true,
            example:
              "const edades = [15, 22, 17, 30, 14, 25];\n\n// Solo los mayores de edad:\nconst adultos = edades.filter((edad) => edad >= 18);\nconsole.log(adultos); // [22, 30, 25]\n\n// Con array de objetos:\nconst productos = [\n  { nombre: 'Café', disponible: true },\n  { nombre: 'Té', disponible: false },\n  { nombre: 'Jugo', disponible: true }\n];\n\nconst disponibles = productos.filter((p) => p.disponible);\nconsole.log(disponibles);\n// [{ nombre: 'Café', disponible: true }, { nombre: 'Jugo', disponible: true }]",
            commonError:
              "Esperar que filter devuelva un solo elemento. Siempre devuelve un array, aunque solo haya un resultado o ninguno."
          }
        ]
      },
      {
        title: "Buscar — find y findIndex",
        documentation:
          "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/find",
        items: [
          {
            title: "find — el primero que cumple la condición",
            description:
              "find recorre el array y devuelve el primer elemento que cumple la condición.\n\nA diferencia de filter, no devuelve un array: devuelve el elemento directamente.\nSi no encuentra nada, devuelve undefined.\n\nÚsalo cuando sabes que hay uno solo que te interesa, como buscar un usuario por su id.",
            syntax: "const elemento = array.find((elemento) => condicion);",
            syntaxAsCode: true,
            example:
              "const usuarios = [\n  { id: 1, nombre: 'Ana' },\n  { id: 2, nombre: 'Luis' },\n  { id: 3, nombre: 'Sofía' }\n];\n\nconst usuario = usuarios.find((u) => u.id === 2);\nconsole.log(usuario); // { id: 2, nombre: 'Luis' }\n\nconst noExiste = usuarios.find((u) => u.id === 99);\nconsole.log(noExiste); // undefined",
            commonError:
              "Confundir find con filter. find devuelve el elemento, filter devuelve un array de elementos."
          },
          {
            title: "findIndex — la posición del primero que cumple",
            description:
              "findIndex hace lo mismo que find, pero en lugar de devolver el elemento, devuelve su posición (índice) en el array.\n\nSi no lo encuentra, devuelve -1, igual que indexOf.\n\nEs útil cuando necesitas saber dónde está el elemento para luego modificarlo o eliminarlo.",
            syntax: "const indice = array.findIndex((elemento) => condicion);",
            syntaxAsCode: true,
            example:
              "const usuarios = [\n  { id: 1, nombre: 'Ana' },\n  { id: 2, nombre: 'Luis' },\n  { id: 3, nombre: 'Sofía' }\n];\n\nconst indice = usuarios.findIndex((u) => u.id === 2);\nconsole.log(indice); // 1\n\n// Útil para actualizar ese elemento:\nusuarios[indice].nombre = 'Luis Actualizado';\nconsole.log(usuarios[1]); // { id: 2, nombre: 'Luis Actualizado' }",
            commonError:
              "No verificar que el índice no es -1 antes de usarlo. Si es -1 y lo usas para acceder al array, obtendrás el último elemento."
          }
        ]
      },
      {
        title: "Verificar condiciones — some y every",
        documentation:
          "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/some",
        items: [
          {
            title: "some — ¿al menos uno cumple?",
            description:
              "some devuelve true si al menos un elemento del array cumple la condición. En cuanto encuentra uno, para de buscar.\n\nEs como preguntar: '¿hay alguno que...?'\n\nDevuelve false si ninguno cumple, o si el array está vacío.",
            syntax: "const resultado = array.some((elemento) => condicion);",
            syntaxAsCode: true,
            example:
              "const edades = [15, 17, 22, 14];\n\nconst hayAdulto = edades.some((edad) => edad >= 18);\nconsole.log(hayAdulto); // true\n\nconst productos = [\n  { nombre: 'Café', disponible: false },\n  { nombre: 'Té', disponible: false }\n];\n\nconst hayDisponible = productos.some((p) => p.disponible);\nconsole.log(hayDisponible); // false",
            commonError:
              "Confundirlo con every. some pregunta si alguno cumple, every pregunta si todos cumplen."
          },
          {
            title: "every — ¿todos cumplen?",
            description:
              "every devuelve true solo si todos los elementos del array cumplen la condición. Si encuentra uno que no cumple, para y devuelve false.\n\nEs como preguntar: '¿todos son...?'\n\nDevuelve true si el array está vacío (ninguno incumple la condición).",
            syntax: "const resultado = array.every((elemento) => condicion);",
            syntaxAsCode: true,
            example:
              "const notas = [85, 90, 78, 92];\n\nconst todosAprobaron = notas.every((nota) => nota >= 70);\nconsole.log(todosAprobaron); // true\n\nconst todosExcelentes = notas.every((nota) => nota >= 90);\nconsole.log(todosExcelentes); // false",
            commonError:
              "Olvidar que every con un array vacío siempre devuelve true, lo cual puede causar resultados inesperados."
          }
        ]
      },
      {
        title: "Acumular — reduce",
        documentation:
          "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce",
        items: [
          {
            title: "¿Qué hace reduce?",
            description:
              "reduce recorre el array y va acumulando un resultado en cada vuelta, hasta terminar con un único valor final.\n\nEse valor puede ser cualquier cosa: un número, un string, un objeto o hasta otro array.\n\nRecibe dos parámetros en la función: el acumulador (lo que va creciendo) y el elemento actual.\nAl final del segundo argumento le pasas el valor inicial del acumulador.\n\nEs el más flexible de todos los métodos. Úsalo cuando los demás no alcanzan para lo que necesitas.",
            syntax: "const resultado = array.reduce((acumulador, elemento) => {\n  return acumulador + elemento;\n}, valorInicial);",
            syntaxAsCode: true,
            example:
              "// Sumar todos los números de una lista:\nconst numeros = [10, 20, 30, 40];\n\nconst total = numeros.reduce((acumulado, numero) => {\n  return acumulado + numero;\n}, 0);\n\nconsole.log(total); // 100\n\n// Sumar precios de productos:\nconst carrito = [\n  { nombre: 'Café', precio: 50 },\n  { nombre: 'Pan', precio: 30 },\n  { nombre: 'Jugo', precio: 45 }\n];\n\nconst totalCarrito = carrito.reduce((total, producto) => {\n  return total + producto.precio;\n}, 0);\n\nconsole.log(totalCarrito); // 125",
            commonError:
              "Olvidar el valor inicial (el segundo argumento). Sin él, reduce usa el primer elemento como acumulador y puede dar resultados incorrectos con arrays de objetos."
          }
        ]
      },
      {
        title: "Otros métodos útiles",
        documentation:
          "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array",
        items: [
          {
            title: "slice — copiar una parte del array",
            description:
              "slice devuelve una copia de una porción del array sin modificar el original.\n\nRecibe dos índices: dónde empieza y dónde termina (sin incluir el final).\nSi no le pasas nada, copia el array completo.",
            syntax: "array.slice(inicio, fin)",
            syntaxAsCode: true,
            example:
              "const frutas = ['manzana', 'pera', 'uva', 'kiwi', 'mango'];\n\nconsole.log(frutas.slice(1, 3)); // ['pera', 'uva']\nconsole.log(frutas.slice(2));    // ['uva', 'kiwi', 'mango']\nconsole.log(frutas);             // sin cambios",
            commonError:
              "Confundirlo con splice. slice no modifica el array original, splice sí."
          },
          {
            title: "sort — ordenar el array",
            description:
              "sort ordena los elementos del array. Por defecto los ordena como texto (alfabéticamente), lo que da resultados extraños con números.\n\nPara ordenar números correctamente hay que pasarle una función de comparación.",
            syntax: "array.sort((a, b) => a - b)  // ascendente\narray.sort((a, b) => b - a)  // descendente",
            syntaxAsCode: true,
            example:
              "const nombres = ['Sofía', 'Ana', 'Luis'];\nnombres.sort();\nconsole.log(nombres); // ['Ana', 'Luis', 'Sofía']\n\nconst numeros = [40, 5, 100, 2];\nnumeros.sort((a, b) => a - b);\nconsole.log(numeros); // [2, 5, 40, 100]",
            commonError:
              "Ordenar números sin la función de comparación. sort() sin argumentos convierte los números a texto y los ordena mal: [100, 2, 40, 5]."
          },
          {
            title: "join — convertir el array en texto",
            description:
              "join une todos los elementos del array en un solo string, separándolos con el separador que le indiques.\n\nEs útil cuando quieres mostrar una lista como texto legible.",
            syntax: "array.join(separador)",
            syntaxAsCode: true,
            example:
              "const frutas = ['manzana', 'pera', 'uva'];\n\nconsole.log(frutas.join(', '));  // 'manzana, pera, uva'\nconsole.log(frutas.join(' - ')); // 'manzana - pera - uva'\nconsole.log(frutas.join(''));    // 'manzanapera uva'",
            commonError:
              "No pasar ningún separador y obtener los elementos unidos con comas por defecto, cuando quizás necesitabas otro formato."
          }
        ]
      }
    ],
    exercises: [
      "Tienes un array de precios. Usa map para crear un nuevo array con todos los precios con un 15% de descuento.",
      "Tienes un array de productos con nombre y disponible. Usa filter para quedarte solo con los disponibles.",
      "Usa find para buscar un usuario por su id dentro de un array de objetos.",
      "Usa some para verificar si hay algún producto con precio mayor a 500. Usa every para verificar si todos tienen precio mayor a 0.",
      "Usa reduce para calcular el total de una lista de precios."
    ]
  },
  {
    id: 8,
    title: "Asincronía en JavaScript",
    branch: "modulo-8-asincronia",
    description: "Entiende cómo JavaScript maneja tareas que toman tiempo, como llamadas a APIs, sin bloquear el resto del código.",
    documentation: "https://developer.mozilla.org/es/docs/Learn/JavaScript/Asynchronous",
    summary: `
      Imagina que estás en un restaurante. El mesero toma tu orden y se va a la cocina.
      No se queda parado frente a ti esperando que el chef termine. Mientras tanto,
      atiende a otras mesas. Cuando tu comida está lista, te la trae.

      JavaScript funciona igual. Cuando hay una tarea que toma tiempo,
      como pedir datos a un servidor, no se queda congelado esperando.
      Sigue ejecutando el resto del código y cuando la respuesta llega,
      la procesa.

      Eso es la asincronía: la capacidad de iniciar una tarea, continuar
      con otras cosas, y volver cuando esa tarea termina.

      En este módulo aprenderás las tres formas en que JavaScript maneja esto:
      callbacks, promesas y async/await, que es la forma moderna y más clara.
    `,
    objective:
      "Comprender qué es la asincronía, cómo funcionan las promesas y cómo usar async/await para escribir código asíncrono de forma legible.",
    sections: [
      {
        title: "¿Qué es la asincronía?",
        documentation:
          "https://developer.mozilla.org/es/docs/Learn/JavaScript/Asynchronous/Introducing",
        items: [
          {
            title: "Código síncrono vs asíncrono",
            description:
              "En código síncrono, cada línea espera a que la anterior termine antes de ejecutarse. El programa va de arriba hacia abajo, en orden.\n\nEn código asíncrono, algunas tareas se inician y el programa sigue ejecutándose sin esperar su resultado. Cuando la tarea termina, se ejecuta el código que depende de ella.\n\nLas operaciones más comunes que son asíncronas en JavaScript son:\n- Pedir datos a un servidor (fetch)\n- Leer un archivo\n- Esperar un tiempo determinado (setTimeout)\n\nSi JavaScript no tuviera asincronía, cada vez que hicieras una petición al servidor, toda la página se congelaría hasta recibir respuesta.",
            syntax: "// Síncrono — va en orden:\nconsole.log('1');\nconsole.log('2');\nconsole.log('3');\n\n// Asíncrono — no espera:\nconsole.log('1');\nsetTimeout(() => console.log('2'), 1000);\nconsole.log('3');",
            syntaxAsCode: true,
            example:
              "console.log('Inicio');\n\nsetTimeout(() => {\n  console.log('Esto tarda 2 segundos');\n}, 2000);\n\nconsole.log('Fin');\n\n// Resultado en consola:\n// 'Inicio'\n// 'Fin'\n// 'Esto tarda 2 segundos'  ← llega después",
            commonError:
              "Asumir que el código se ejecuta en el orden en que está escrito cuando hay operaciones asíncronas de por medio."
          }
        ]
      },
      {
        title: "Promesas",
        documentation:
          "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise",
        items: [
          {
            title: "¿Qué es una promesa?",
            description:
              "Una promesa es un objeto que representa una operación que todavía no terminó, pero que va a terminar en algún momento.\n\nCuando la operación termina, la promesa puede tener dos resultados:\n- Resuelta (fulfilled): todo salió bien, hay un resultado.\n- Rechazada (rejected): algo salió mal, hay un error.\n\nEs como cuando pides algo en línea. Recibes un número de seguimiento (la promesa). Puedes seguir con tu vida. Cuando el paquete llega, te notifican (resuelta). Si hay un problema, también te avisan (rechazada).",
            syntax: "const promesa = new Promise((resolve, reject) => {\n  // si todo sale bien:\n  resolve(resultado);\n  // si hay error:\n  reject(error);\n});",
            syntaxAsCode: true,
            example:
              "const promesa = new Promise((resolve, reject) => {\n  const exito = true;\n\n  if (exito) {\n    resolve('Todo salió bien');\n  } else {\n    reject('Algo falló');\n  }\n});\n\nconsole.log(promesa);\n// Promise { 'Todo salió bien' }",
            commonError:
              "Intentar leer el valor de una promesa directamente. Necesitas .then() o await para acceder al resultado cuando esté listo."
          },
          {
            title: ".then() y .catch() — manejar el resultado",
            description:
              "Para trabajar con el resultado de una promesa usas .then() y .catch().\n\n.then() se ejecuta cuando la promesa se resuelve bien. Recibe el resultado.\n.catch() se ejecuta cuando la promesa falla. Recibe el error.\n\nPuedes encadenar varios .then() uno tras otro si necesitas hacer varias cosas con el resultado.",
            syntax: "promesa\n  .then((resultado) => {\n    // usar el resultado\n  })\n  .catch((error) => {\n    // manejar el error\n  });",
            syntaxAsCode: true,
            example:
              "const obtenerUsuario = new Promise((resolve, reject) => {\n  const usuario = { nombre: 'Ana', edad: 28 };\n  resolve(usuario);\n});\n\nobtenerUsuario\n  .then((usuario) => {\n    console.log('Usuario:', usuario.nombre); // 'Ana'\n  })\n  .catch((error) => {\n    console.log('Error:', error);\n  });",
            commonError:
              "Olvidar el .catch() y no manejar los errores. Si la promesa falla y no hay .catch(), el error se pierde silenciosamente."
          }
        ]
      },
      {
        title: "async / await",
        documentation:
          "https://developer.mozilla.org/es/docs/Learn/JavaScript/Asynchronous/Promises#async_y_await",
        items: [
          {
            title: "¿Qué es async/await?",
            description:
              "async/await es la forma moderna de trabajar con promesas. En lugar de encadenar .then() y .catch(), puedes escribir el código como si fuera síncrono, pero por dentro sigue siendo asíncrono.\n\nasync se pone antes de la función para indicar que dentro de ella habrá operaciones asíncronas.\nawait se pone antes de una promesa para decirle a JavaScript: 'espera aquí hasta que esto termine, luego continúa'.\n\nEl código queda mucho más limpio y fácil de leer.",
            syntax: "async function nombre() {\n  const resultado = await promesa;\n  console.log(resultado);\n}",
            syntaxAsCode: true,
            example:
              "function esperar(ms) {\n  return new Promise((resolve) => setTimeout(resolve, ms));\n}\n\nasync function saludar() {\n  console.log('Iniciando...');\n  await esperar(1000); // espera 1 segundo\n  console.log('Hola después de 1 segundo');\n}\n\nsaludar();\n// 'Iniciando...'\n// (pausa de 1 segundo)\n// 'Hola después de 1 segundo'",
            commonError:
              "Usar await fuera de una función async. Solo puedes usar await dentro de funciones marcadas con async."
          },
          {
            title: "Manejo de errores con try/catch",
            description:
              "Con async/await, los errores se manejan usando try/catch, que es mucho más natural que encadenar .catch().\n\ntry contiene el código que puede fallar.\ncatch atrapa el error si algo sale mal y te permite reaccionar ante él.\n\nSiempre usa try/catch cuando hagas operaciones asíncronas que dependen de recursos externos como APIs.",
            syntax: "async function nombre() {\n  try {\n    const resultado = await promesa;\n    // usar resultado\n  } catch (error) {\n    // manejar el error\n  }\n}",
            syntaxAsCode: true,
            example:
              "async function obtenerDatos() {\n  try {\n    const respuesta = await fetch('https://api.ejemplo.com/datos');\n    const datos = await respuesta.json();\n    console.log(datos);\n  } catch (error) {\n    console.log('No se pudo obtener la información:', error.message);\n  }\n}\n\nobtenerDatos();",
            commonError:
              "No usar try/catch y dejar que los errores de red o de servidor pasen sin ser atrapados, causando fallos silenciosos."
          }
        ]
      },
      {
        title: "fetch — pedir datos a un servidor",
        documentation:
          "https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch",
        items: [
          {
            title: "¿Qué es fetch?",
            description:
              "fetch es la función que usa el navegador para hacer peticiones a servidores o APIs.\n\nCuando llamas a fetch, le pasas la dirección (URL) de donde quieres obtener los datos. Eso devuelve una promesa que se resuelve cuando llega la respuesta del servidor.\n\nPero ojo: la respuesta que llega no son los datos directamente. Primero tienes que convertirla a JSON usando .json(), que también devuelve una promesa.",
            syntax: "const respuesta = await fetch(url);\nconst datos = await respuesta.json();",
            syntaxAsCode: true,
            example:
              "async function obtenerPersonaje() {\n  try {\n    const respuesta = await fetch('https://rickandmortyapi.com/api/character/1');\n    const personaje = await respuesta.json();\n\n    console.log(personaje.name);   // 'Rick Sanchez'\n    console.log(personaje.status); // 'Alive'\n  } catch (error) {\n    console.log('Error al obtener el personaje:', error.message);\n  }\n}\n\nobtenerPersonaje();",
            commonError:
              "Olvidar el segundo await para .json(). La respuesta de fetch no son los datos: es un objeto especial que necesitas convertir."
          },
          {
            title: "Verificar si la respuesta fue exitosa",
            description:
              "fetch no lanza un error cuando el servidor responde con un error como 404 (no encontrado) o 500 (error del servidor). La promesa se resuelve igual.\n\nPor eso debes revisar manualmente la propiedad response.ok, que es true solo cuando la respuesta fue exitosa (códigos 200-299).",
            syntax: "if (!respuesta.ok) {\n  throw new Error('Error en la respuesta: ' + respuesta.status);\n}",
            syntaxAsCode: true,
            example:
              "async function obtenerDatos(id) {\n  try {\n    const respuesta = await fetch(`https://rickandmortyapi.com/api/character/${id}`);\n\n    if (!respuesta.ok) {\n      throw new Error('No se encontró el personaje');\n    }\n\n    const datos = await respuesta.json();\n    console.log(datos.name);\n  } catch (error) {\n    console.log('Error:', error.message);\n  }\n}\n\nobtenerDatos(9999); // ID que no existe",
            commonError:
              "Asumir que si fetch no lanzó error, la respuesta fue exitosa. Un 404 o 500 no lanza error por sí solo."
          }
        ]
      }
    ],
    exercises: [
      "Crea una función async que use setTimeout envuelto en una promesa para esperar 2 segundos e imprimir un mensaje.",
      "Escribe una función async que haga fetch a 'https://rickandmortyapi.com/api/character/1' e imprima el nombre y especie del personaje.",
      "Agrega manejo de errores con try/catch a tu función fetch. Prueba con un ID que no exista para ver cómo se captura el error.",
      "Haz fetch a 'https://rickandmortyapi.com/api/character' e imprime los nombres de los primeros 3 personajes del array results.",
      "Verifica response.ok antes de leer los datos. Si no es ok, lanza un error con un mensaje descriptivo."
    ]
  },
  {
    id: 9,
    title: "Destructuring y Spread/Rest",
    branch: "modulo-9-destructuring-spread",
    description: "Aprende a extraer datos de arrays y objetos de forma directa, y a copiar o combinar estructuras con spread y rest.",
    documentation: "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment",
    summary: `
      Imagina que recibes una caja con varios compartimentos y solo necesitas
      dos cosas de ahí. En lugar de abrir la caja, sacar todo y luego buscar
      lo que necesitas, destructuring te permite ir directo a lo que quieres
      y asignarlo a una variable en una sola línea.

      Es una característica de JavaScript moderno (ES6) que hace el código
      mucho más limpio y directo, especialmente cuando trabajas con datos
      que vienen de una API o cuando recibes objetos como parámetros en funciones.

      Spread y rest son el complemento: te permiten copiar, combinar y separar
      arrays y objetos de forma sencilla, sin modificar los originales.
    `,
    objective:
      "Usar destructuring para extraer valores de arrays y objetos de forma concisa, y spread/rest para copiar, combinar y agrupar datos.",
    sections: [
      {
        title: "Destructuring de objetos",
        documentation:
          "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#desestructuraci%C3%B3n_de_objetos",
        items: [
          {
            title: "Extraer propiedades de un objeto",
            description:
              "Destructuring de objetos te permite extraer propiedades y asignarlas a variables en una sola línea.\n\nEn lugar de escribir persona.nombre, persona.edad en cada lugar, extraes esas propiedades de una vez y las usas directamente con su nombre.\n\nLas llaves { } del lado izquierdo no son un objeto nuevo: le dicen a JavaScript qué propiedades quieres extraer.",
            syntax: "const { propiedad1, propiedad2 } = objeto;",
            syntaxAsCode: true,
            example:
              "const persona = { nombre: 'Ana', edad: 28, ciudad: 'CDMX' };\n\n// Sin destructuring:\nconsole.log(persona.nombre); // 'Ana'\nconsole.log(persona.edad);   // 28\n\n// Con destructuring:\nconst { nombre, edad } = persona;\nconsole.log(nombre); // 'Ana'\nconsole.log(edad);   // 28",
            commonError:
              "Intentar extraer una propiedad con un nombre diferente al que tiene en el objeto. Si la clave es 'nombre' y escribes 'name', obtienes undefined."
          },
          {
            title: "Renombrar al extraer",
            description:
              "Puedes asignar un nombre diferente a la variable mientras extraes la propiedad. Esto es útil cuando el nombre original es muy genérico o ya existe una variable con ese nombre.",
            syntax: "const { propiedadOriginal: nuevoNombre } = objeto;",
            syntaxAsCode: true,
            example:
              "const producto = { nombre: 'Café', precio: 50 };\n\nconst { nombre: nombreProducto, precio: costo } = producto;\n\nconsole.log(nombreProducto); // 'Café'\nconsole.log(costo);          // 50",
            commonError:
              "Confundir el orden. Es propiedadDelObjeto: nombreQueQuieres, no al revés."
          },
          {
            title: "Valores por defecto al extraer",
            description:
              "Si la propiedad no existe en el objeto, puedes definir un valor por defecto que se usará en su lugar.",
            syntax: "const { propiedad = valorPorDefecto } = objeto;",
            syntaxAsCode: true,
            example:
              "const usuario = { nombre: 'Luis' };\n\nconst { nombre, rol = 'visitante' } = usuario;\n\nconsole.log(nombre); // 'Luis'\nconsole.log(rol);    // 'visitante'  ← no existía en el objeto",
            commonError:
              "Asumir que el valor por defecto se aplica cuando la propiedad existe pero vale undefined. Sí se aplica en ese caso."
          },
          {
            title: "Destructuring en parámetros de función",
            description:
              "Una de las formas más útiles de destructuring es directamente en los parámetros de una función. En lugar de recibir el objeto completo y luego extraer sus propiedades, las extraes desde el inicio.\n\nEsto se ve muchísimo en componentes de React.",
            syntax: "function nombre({ propiedad1, propiedad2 }) { ... }",
            syntaxAsCode: true,
            example:
              "function mostrarUsuario({ nombre, edad, rol = 'visitante' }) {\n  console.log(`${nombre} tiene ${edad} años. Rol: ${rol}`);\n}\n\nmostrarUsuario({ nombre: 'Ana', edad: 28 });\n// 'Ana tiene 28 años. Rol: visitante'",
            commonError:
              "Olvidar las llaves en el parámetro y recibir el objeto completo en lugar de sus propiedades ya extraídas."
          }
        ]
      },
      {
        title: "Destructuring de arrays",
        documentation:
          "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#desestructuraci%C3%B3n_de_arreglos",
        items: [
          {
            title: "Extraer elementos de un array",
            description:
              "Destructuring de arrays funciona igual que el de objetos, pero en lugar de llaves usas corchetes, y en lugar de nombres de propiedades usas posiciones.\n\nEl primer nombre recibe el primer elemento, el segundo nombre recibe el segundo, y así sucesivamente.",
            syntax: "const [primero, segundo] = array;",
            syntaxAsCode: true,
            example:
              "const colores = ['rojo', 'verde', 'azul'];\n\nconst [primero, segundo, tercero] = colores;\n\nconsole.log(primero);  // 'rojo'\nconsole.log(segundo);  // 'verde'\nconsole.log(tercero);  // 'azul'",
            commonError:
              "Pensar que los nombres tienen que coincidir con algo. En arrays, el orden es lo que importa, no el nombre."
          },
          {
            title: "Saltar elementos",
            description:
              "Puedes ignorar elementos que no necesitas dejando el espacio vacío con una coma.",
            syntax: "const [primero, , tercero] = array;",
            syntaxAsCode: true,
            example:
              "const numeros = [10, 20, 30, 40];\n\nconst [primero, , tercero] = numeros;\n\nconsole.log(primero); // 10\nconsole.log(tercero); // 30  ← saltamos el 20",
            commonError:
              "Olvidar la coma para saltar el elemento y terminar con el valor incorrecto asignado."
          }
        ]
      },
      {
        title: "Spread — expandir",
        documentation:
          "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Spread_syntax",
        items: [
          {
            title: "Spread en arrays",
            description:
              "El operador spread (...) expande los elementos de un array en el lugar donde lo usas.\n\nEs como vaciar la caja y esparcir su contenido. Sirve para copiar arrays o combinar varios en uno sin modificar los originales.",
            syntax: "const nuevo = [...array1, ...array2];",
            syntaxAsCode: true,
            example:
              "const frutas = ['manzana', 'pera'];\nconst verduras = ['zanahoria', 'lechuga'];\n\n// Combinar dos arrays:\nconst alimentos = [...frutas, ...verduras];\nconsole.log(alimentos);\n// ['manzana', 'pera', 'zanahoria', 'lechuga']\n\n// Copiar un array:\nconst copia = [...frutas];\ncopia.push('uva');\nconsole.log(frutas); // sin cambios",
            commonError:
              "Copiar un array con = en lugar de spread. Con = ambas variables apuntan al mismo array, y cambiar uno cambia el otro."
          },
          {
            title: "Spread en objetos",
            description:
              "Spread también funciona con objetos: copia todas las propiedades de un objeto dentro de otro.\n\nEs la forma más común de crear una copia de un objeto o de combinar dos objetos. Si hay propiedades repetidas, la última sobreescribe a la anterior.",
            syntax: "const nuevo = { ...objeto1, ...objeto2 };",
            syntaxAsCode: true,
            example:
              "const base = { nombre: 'Ana', rol: 'visitante' };\nconst extra = { rol: 'admin', activo: true };\n\n// Combinar — rol de extra sobreescribe el de base:\nconst usuario = { ...base, ...extra };\nconsole.log(usuario);\n// { nombre: 'Ana', rol: 'admin', activo: true }\n\n// Actualizar una propiedad sin mutar el original:\nconst actualizado = { ...base, rol: 'editor' };\nconsole.log(actualizado); // { nombre: 'Ana', rol: 'editor' }\nconsole.log(base);        // { nombre: 'Ana', rol: 'visitante' } ← sin cambios",
            commonError:
              "Asumir que spread hace una copia profunda. Si el objeto tiene propiedades que son arrays u objetos anidados, esas referencias sí se comparten."
          }
        ]
      },
      {
        title: "Rest — agrupar el resto",
        documentation:
          "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions/rest_parameters",
        items: [
          {
            title: "Rest en destructuring",
            description:
              "Rest (...) también usa tres puntos, pero hace lo contrario que spread: agrupa el resto de los elementos en una sola variable.\n\nSe usa al final del destructuring para capturar todo lo que no extrajiste individualmente.",
            syntax: "const { a, b, ...resto } = objeto;\nconst [primero, ...demas] = array;",
            syntaxAsCode: true,
            example:
              "const persona = { nombre: 'Ana', edad: 28, ciudad: 'CDMX', rol: 'admin' };\n\nconst { nombre, edad, ...otrosDatos } = persona;\n\nconsole.log(nombre);     // 'Ana'\nconsole.log(edad);       // 28\nconsole.log(otrosDatos); // { ciudad: 'CDMX', rol: 'admin' }\n\n// En arrays:\nconst [primero, ...restantes] = [10, 20, 30, 40];\nconsole.log(primero);    // 10\nconsole.log(restantes);  // [20, 30, 40]",
            commonError:
              "Poner rest en el medio del destructuring. El operador rest siempre va al final."
          },
          {
            title: "Rest en parámetros de función",
            description:
              "En funciones, rest permite que una función reciba cualquier cantidad de argumentos y los agrupe en un array.\n\nEs la solución moderna al antiguo objeto arguments, y funciona con arrow functions.",
            syntax: "function nombre(...args) {\n  // args es un array con todos los argumentos\n}",
            syntaxAsCode: true,
            example:
              "function sumarTodo(...numeros) {\n  return numeros.reduce((total, n) => total + n, 0);\n}\n\nconsole.log(sumarTodo(1, 2, 3));       // 6\nconsole.log(sumarTodo(10, 20, 30, 40)); // 100\n\n// Combinando parámetros normales con rest:\nfunction mostrar(titulo, ...items) {\n  console.log(titulo + ':');\n  items.forEach(item => console.log(' -', item));\n}\n\nmostrar('Frutas', 'manzana', 'pera', 'uva');\n// Frutas:\n//  - manzana\n//  - pera\n//  - uva",
            commonError:
              "Poner el parámetro rest antes de otros parámetros. Rest siempre va al final de la lista de parámetros."
          }
        ]
      }
    ],
    exercises: [
      "Dado un objeto persona con nombre, edad, ciudad y profesion, usa destructuring para extraer solo nombre y profesion en variables separadas.",
      "Extrae nombre y rol de un objeto usuario, pero renombra rol como tipoDeAcceso. Dale un valor por defecto de 'invitado' si rol no existe.",
      "Crea una función recibirPedido que reciba un objeto con producto, cantidad y direccion usando destructuring en el parámetro.",
      "Dado un array de 5 colores, extrae el primero y el tercero saltando el segundo. Agrupa el resto en una variable.",
      "Combina dos arrays con spread. Luego crea una copia de un objeto cambiando solo una de sus propiedades sin modificar el original."
    ]
  },
  {
    id: 10,
    title: "Módulos ES en JavaScript",
    branch: "modulo-10-modulos",
    description: "Aprende a dividir tu código en archivos separados y reutilizables usando import y export.",
    documentation: "https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Modules",
    summary: `
      Cuando un proyecto crece, tener todo el código en un solo archivo se vuelve
      un problema: es difícil de leer, de mantener y de trabajar en equipo.

      Los módulos ES te permiten dividir tu código en archivos pequeños
      y específicos, donde cada uno se encarga de una sola cosa.
      Luego conectas esos archivos entre sí usando export e import.

      Es exactamente cómo funcionan los proyectos reales en React, Node.js
      y cualquier aplicación moderna. Si has visto import en algún archivo
      de JavaScript, ya estás viendo módulos en acción.
    `,
    objective:
      "Entender cómo exportar e importar funciones, variables y objetos entre archivos para organizar el código de forma profesional.",
    sections: [
      {
        title: "Export — compartir código",
        documentation:
          "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/export",
        items: [
          {
            title: "Named export — exportar por nombre",
            description:
              "Puedes exportar cualquier cosa que declares en un archivo: variables, funciones, clases, objetos.\n\nSe llama 'named export' porque al importarlo necesitas usar el mismo nombre con el que fue exportado.\n\nPuedes tener varios named exports en un mismo archivo.",
            syntax: "export const variable = valor;\nexport function nombre() { ... }\n\n// O al final del archivo:\nexport { cosa1, cosa2 };",
            syntaxAsCode: true,
            example:
              "// archivo: utils.js\n\nexport const PI = 3.1416;\n\nexport function saludar(nombre) {\n  return 'Hola, ' + nombre;\n}\n\nexport const colores = ['rojo', 'verde', 'azul'];",
            commonError:
              "Olvidar la palabra export antes de lo que quieres compartir. Sin ella, el archivo lo tiene pero nadie más puede usarlo."
          },
          {
            title: "Default export — exportar lo principal",
            description:
              "Cada archivo puede tener un solo export default. Es lo que ese archivo exporta como su 'cosa principal'.\n\nAl importarlo puedes ponerle el nombre que quieras, sin llaves.\n\nEn React, cada componente tiene un export default al final del archivo.",
            syntax: "export default función;\nexport default clase;\nexport default valor;",
            syntaxAsCode: true,
            example:
              "// archivo: calcular.js\n\nfunction calcularTotal(items) {\n  return items.reduce((total, item) => total + item.precio, 0);\n}\n\nexport default calcularTotal;\n\n// También puedes escribirlo directamente:\nexport default function calcularTotal(items) {\n  return items.reduce((total, item) => total + item.precio, 0);\n}",
            commonError:
              "Tener más de un export default en el mismo archivo. Solo puede haber uno por archivo."
          }
        ]
      },
      {
        title: "Import — usar código de otro archivo",
        documentation:
          "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/import",
        items: [
          {
            title: "Importar named exports",
            description:
              "Para importar named exports usas llaves con el nombre exacto que fue exportado.\n\nPuedes importar uno o varios en la misma línea, separados por comas.\nSiempre debes especificar la ruta del archivo.",
            syntax: "import { nombre1, nombre2 } from './archivo';",
            syntaxAsCode: true,
            example:
              "// archivo: main.js\n\nimport { PI, saludar, colores } from './utils';\n\nconsole.log(PI);           // 3.1416\nconsole.log(saludar('Ana')); // 'Hola, Ana'\nconsole.log(colores);      // ['rojo', 'verde', 'azul']",
            commonError:
              "Escribir mal el nombre o no poner llaves. Si el export fue named, el import necesita llaves y el nombre exacto."
          },
          {
            title: "Importar default export",
            description:
              "Para importar un export default no usas llaves, y puedes elegir el nombre que quieras para esa importación.",
            syntax: "import nombreQueQuieras from './archivo';",
            syntaxAsCode: true,
            example:
              "// archivo: main.js\n\nimport calcularTotal from './calcular';\n\nconst carrito = [\n  { precio: 50 },\n  { precio: 30 },\n  { precio: 45 }\n];\n\nconsole.log(calcularTotal(carrito)); // 125",
            commonError:
              "Poner llaves al importar un default export. Los default exports se importan sin llaves."
          },
          {
            title: "Importar ambos en la misma línea",
            description:
              "Puedes combinar un default import con named imports en una misma línea. El default va primero, sin llaves, y los named van entre llaves.",
            syntax: "import defaultExport, { named1, named2 } from './archivo';",
            syntaxAsCode: true,
            example:
              "// archivo: helpers.js\nexport default function formatearPrecio(precio) {\n  return '$' + precio.toFixed(2);\n}\nexport const MONEDA = 'MXN';\nexport const IVA = 0.16;\n\n// archivo: main.js\nimport formatearPrecio, { MONEDA, IVA } from './helpers';\n\nconsole.log(formatearPrecio(99.9)); // '$99.90'\nconsole.log(MONEDA);                // 'MXN'",
            commonError:
              "Poner el default export dentro de las llaves. El default siempre va separado, antes de las llaves."
          },
          {
            title: "Renombrar al importar",
            description:
              "Puedes renombrar un named export al importarlo usando la palabra as. Esto es útil cuando hay conflicto de nombres o quieres un nombre más claro en el contexto donde lo usas.",
            syntax: "import { original as nuevoNombre } from './archivo';",
            syntaxAsCode: true,
            example:
              "import { saludar as decirHola, PI as numeroPi } from './utils';\n\nconsole.log(decirHola('Luis')); // 'Hola, Luis'\nconsole.log(numeroPi);          // 3.1416",
            commonError:
              "Usar el nombre original después de haberlo renombrado. Una vez que usas as, solo existe el nuevo nombre en ese archivo."
          }
        ]
      },
      {
        title: "Organización en proyectos reales",
        documentation:
          "https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Modules#otras_caracter%C3%ADsticas_de_los_m%C3%B3dulos",
        items: [
          {
            title: "Cómo se estructura un proyecto con módulos",
            description:
              "En un proyecto real, cada archivo tiene una responsabilidad clara. No existe un archivo gigante con todo: el código se distribuye en carpetas y archivos que se importan entre sí.\n\nAlgunos patrones comunes:\n- utils/ → funciones reutilizables\n- components/ → piezas de interfaz\n- services/ → lógica para hablar con APIs\n- data/ → datos o configuración fija",
            syntax: "src/\n  utils/\n    formatear.js\n    validar.js\n  services/\n    api.js\n  components/\n    Boton.js",
            syntaxAsCode: true,
            example:
              "// services/api.js\nconst BASE_URL = 'https://rickandmortyapi.com/api';\n\nexport async function obtenerPersonaje(id) {\n  const res = await fetch(`${BASE_URL}/character/${id}`);\n  if (!res.ok) throw new Error('Personaje no encontrado');\n  return res.json();\n}\n\n// main.js\nimport { obtenerPersonaje } from './services/api';\n\nobtenerPersonaje(1).then(p => console.log(p.name));",
            commonError:
              "Poner rutas absolutas en lugar de relativas. Los imports entre tus propios archivos siempre empiezan con ./ o ../"
          }
        ]
      }
    ],
    exercises: [
      "Crea un archivo matematicas.js que exporte dos funciones: sumar y restar. Impórtalas en otro archivo y úsalas.",
      "Agrega un export default a matematicas.js con una función multiplicar. Impórtala en el archivo principal sin llaves.",
      "Crea un archivo constantes.js con valores exportados: PI, GRAVEDAD y VELOCIDAD_LUZ. Impórtalos donde los necesites.",
      "Importa una función con un nombre diferente usando as. Por ejemplo, importa sumar como calcularSuma.",
      "Organiza un mini proyecto: crea un archivo api.js que exporte una función para hacer fetch, y úsala desde main.js."
    ]
  },
  {
    id: 11,
    title: "Manejo de Errores",
    branch: "modulo-11-errores",
    description: "Aprende a anticipar, capturar y responder a los errores de tu programa de forma controlada.",
    documentation: "https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#sentencias_para_el_manejo_de_excepciones",
    summary: `
      Todo programa va a tener errores en algún momento: una petición que falla,
      un valor que no llega, un dato con el formato incorrecto.
      La diferencia entre un programa frágil y uno robusto no es cuántos errores
      ocurren, sino qué tan bien los maneja cuando ocurren.

      Sin manejo de errores, un solo problema puede romper toda la aplicación.
      Con un buen manejo de errores, el programa detecta qué salió mal,
      responde de forma controlada y sigue funcionando.

      En este módulo aprenderás a usar try/catch para atrapar errores,
      cómo lanzar tus propios errores con throw, y cómo crear mensajes
      de error útiles que te ayuden a entender qué pasó.
    `,
    objective:
      "Escribir código que detecte y maneje errores de forma controlada, usando try/catch/finally y throw para crear programas más confiables.",
    sections: [
      {
        title: "try / catch",
        documentation:
          "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/try...catch",
        items: [
          {
            title: "¿Qué hace try/catch?",
            description:
              "try/catch es la forma de decirle a JavaScript: 'intenta ejecutar este código, y si algo sale mal, atrápalo aquí en lugar de romper todo'.\n\ntry contiene el código que podría fallar.\ncatch recibe el error que ocurrió y te da la oportunidad de reaccionar ante él.\n\nSin try/catch, un error detendrá la ejecución del programa. Con él, el error queda contenido y el programa puede seguir.",
            syntax: "try {\n  // código que puede fallar\n} catch (error) {\n  // qué hacer si falla\n}",
            syntaxAsCode: true,
            example:
              "try {\n  const resultado = JSON.parse('esto no es JSON válido');\n  console.log(resultado);\n} catch (error) {\n  console.log('Algo salió mal:', error.message);\n}\n// 'Algo salió mal: Unexpected token e in JSON at position 0'\n\nconsole.log('El programa sigue ejecutándose');\n// ✅ Esta línea sí se ejecuta porque el error fue atrapado",
            commonError:
              "Dejar el catch vacío. Si no haces nada con el error, el problema ocurre pero nadie lo sabe y es muy difícil de depurar después."
          },
          {
            title: "El objeto error",
            description:
              "Cuando ocurre un error, JavaScript crea un objeto con información sobre lo que pasó. Las propiedades más útiles son:\n\n- error.message → descripción del error en texto\n- error.name → tipo de error (TypeError, ReferenceError, SyntaxError...)\n- error.stack → rastro de dónde ocurrió el error en el código\n\nConocer el tipo de error te ayuda a entender qué salió mal y cómo solucionarlo.",
            syntax: "catch (error) {\n  console.log(error.name);    // tipo de error\n  console.log(error.message); // descripción\n}",
            syntaxAsCode: true,
            example:
              "try {\n  console.log(variableQueNoExiste);\n} catch (error) {\n  console.log(error.name);    // 'ReferenceError'\n  console.log(error.message); // 'variableQueNoExiste is not defined'\n}\n\ntry {\n  null.toString();\n} catch (error) {\n  console.log(error.name);    // 'TypeError'\n  console.log(error.message); // 'Cannot read properties of null'\n}",
            commonError:
              "Ignorar error.message y solo imprimir el objeto completo. El mensaje es lo más útil para entender qué ocurrió."
          }
        ]
      },
      {
        title: "finally",
        documentation:
          "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/try...catch#la_clausula_finally",
        items: [
          {
            title: "Código que siempre se ejecuta",
            description:
              "finally es una sección opcional que se ejecuta siempre, sin importar si el try tuvo éxito o si el catch atrapó un error.\n\nEs útil para hacer limpieza o acciones que deben ocurrir pase lo que pase: cerrar una conexión, ocultar un spinner de carga, liberar un recurso.",
            syntax: "try {\n  // código\n} catch (error) {\n  // si falla\n} finally {\n  // siempre se ejecuta\n}",
            syntaxAsCode: true,
            example:
              "async function cargarDatos() {\n  mostrarSpinner(true);\n\n  try {\n    const datos = await fetch('/api/datos');\n    mostrar(datos);\n  } catch (error) {\n    console.log('Error al cargar:', error.message);\n  } finally {\n    mostrarSpinner(false); // siempre se oculta el spinner\n  }\n}",
            commonError:
              "Poner en finally código que depende del resultado del try. Si el try falló, ese código puede generar otro error."
          }
        ]
      },
      {
        title: "throw — lanzar errores propios",
        documentation:
          "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/throw",
        items: [
          {
            title: "¿Qué es throw?",
            description:
              "throw te permite lanzar tu propio error cuando detectas una situación que no debería ocurrir. Detienes la ejecución del código y el error sube hasta el catch más cercano.\n\nPuedes lanzar cualquier valor, pero lo más correcto es lanzar un objeto Error para que tenga nombre, mensaje y stack trace completo.",
            syntax: "throw new Error('Descripción del problema');",
            syntaxAsCode: true,
            example:
              "function dividir(a, b) {\n  if (b === 0) {\n    throw new Error('No se puede dividir entre cero');\n  }\n  return a / b;\n}\n\ntry {\n  console.log(dividir(10, 2));  // 5\n  console.log(dividir(10, 0));  // lanza el error\n} catch (error) {\n  console.log('Error:', error.message);\n  // 'Error: No se puede dividir entre cero'\n}",
            commonError:
              "Lanzar un string en lugar de un objeto Error. throw 'algo salió mal' funciona, pero pierdes el stack trace y el tipo de error."
          },
          {
            title: "throw en validaciones",
            description:
              "Una de las formas más comunes de usar throw es en funciones que validan datos. Si los datos no son válidos, lanzas un error descriptivo en lugar de dejar que el problema ocurra más adelante en un lugar difícil de rastrear.",
            syntax: "function validar(dato) {\n  if (!dato) throw new Error('El dato es requerido');\n}",
            syntaxAsCode: true,
            example:
              "function crearUsuario(nombre, email) {\n  if (!nombre) throw new Error('El nombre es requerido');\n  if (!email) throw new Error('El email es requerido');\n  if (!email.includes('@')) throw new Error('El email no es válido');\n\n  return { nombre, email, creadoEn: new Date() };\n}\n\ntry {\n  const usuario = crearUsuario('Ana', 'correo-sin-arroba');\n} catch (error) {\n  console.log(error.message); // 'El email no es válido'\n}",
            commonError:
              "No lanzar errores en validaciones y dejar que datos incorrectos lleguen al resto del programa causando fallos confusos."
          }
        ]
      },
      {
        title: "Errores en código asíncrono",
        documentation:
          "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/try...catch#try_catch_y_async_await",
        items: [
          {
            title: "try/catch con async/await",
            description:
              "Cuando usas async/await, el try/catch funciona igual que con código síncrono. Cualquier error que ocurra dentro del try, ya sea un error de red, un throw tuyo o un error de JavaScript, será atrapado por el catch.\n\nEsta es la ventaja de async/await sobre promesas con .catch(): el manejo de errores se ve igual sin importar si el código es síncrono o asíncrono.",
            syntax: "async function nombre() {\n  try {\n    const datos = await fetch(url);\n    if (!datos.ok) throw new Error('Respuesta fallida');\n    return await datos.json();\n  } catch (error) {\n    console.log(error.message);\n  }\n}",
            syntaxAsCode: true,
            example:
              "async function obtenerUsuario(id) {\n  try {\n    const respuesta = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);\n\n    if (!respuesta.ok) {\n      throw new Error(`Usuario ${id} no encontrado`);\n    }\n\n    const usuario = await respuesta.json();\n    console.log('Usuario:', usuario.name);\n    return usuario;\n  } catch (error) {\n    console.log('Error:', error.message);\n    return null;\n  }\n}\n\nobtenerUsuario(1);    // funciona\nobtenerUsuario(9999); // error controlado",
            commonError:
              "Olvidar el await antes de una promesa dentro del try. Sin await, el error de la promesa no será atrapado por ese catch."
          }
        ]
      }
    ],
    exercises: [
      "Escribe un bloque try/catch que intente hacer JSON.parse de un string inválido. Imprime el tipo y mensaje del error.",
      "Crea una función calcularPromedio que reciba un array. Si el array está vacío, lanza un error con throw. Pruébala con try/catch.",
      "Crea una función validarContrasena que verifique que la contraseña tenga más de 8 caracteres. Usa throw para cada caso inválido.",
      "Agrega finally a un bloque try/catch para imprimir 'Proceso terminado' sin importar si hubo error o no.",
      "Crea una función async que haga fetch a una API. Si response.ok es false, lanza un error. Maneja todo con try/catch/finally."
    ]
  }
];
