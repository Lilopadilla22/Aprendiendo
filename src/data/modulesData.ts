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
    objective: "Este módulo te prepara para trabajar en equipo usando Git con flujo profesional y revisión de código.",
    sections: [
      {
        title: "Comandos Esenciales de Git",
        items: [
          {
            title: "git init",
            description:
              "Inicializa un repositorio Git en la carpeta actual. Se usa una sola vez al comenzar un proyecto.",
            syntax: "git init",
            example: "cd mi-proyecto\ngit init",
            commonError:
              "Error común: Ejecutarlo dentro de una carpeta equivocada y terminar inicializando Git en el lugar incorrecto."
          },
          {
            title: "git add",
            description:
              "Agrega archivos al área de preparación (staging) antes de hacer commit.",
            syntax: "git add <archivo>\ngit add .",
            example:
              "git add index.html\ngit add src/App.tsx\ngit add .",
            commonError:
              "Error común: Hacer commit sin ejecutar git add antes, lo que provoca que los cambios no se guarden."
          },
          {
            title: "git commit",
            description:
              "Guarda los cambios previamente agregados con un mensaje descriptivo.",
            syntax: "git commit -m \"mensaje\"",
            example:
              "git commit -m \"feat: agregar estructura inicial del modulo 1\"",
            commonError:
              "Error común: Usar mensajes como 'cambios' o 'update'. Los commits deben explicar claramente qué se hizo."
          },
          {
            title: "git checkout -b",
            description:
              "Crea una nueva rama y cambia automáticamente a ella.",
            syntax: "git checkout -b <nombre-rama>",
            example:
              "git checkout -b modulo-1-git",
            commonError:
              "Error común: Crear una rama pero olvidar cambiarse a ella, trabajando accidentalmente en main."
          },
          {
            title: "git pull",
            description:
              "Descarga y fusiona cambios desde un repositorio remoto.",
            syntax: "git pull <remote> <branch>",
            example:
              "git pull origin main\ngit pull upstream develop",
            commonError:
              "Error común: No hacer pull antes de trabajar y luego generar conflictos innecesarios."
          },
          {
            title: "git merge",
            description:
              "Fusiona otra rama dentro de la rama actual.",
            syntax: "git merge <rama>",
            example:
              "git checkout main\ngit merge modulo-1-git",
            commonError:
              "Error común: Hacer merge desde la rama equivocada y mezclar cambios en la dirección incorrecta."
          }
        ]
      }
    ]
  },

];
