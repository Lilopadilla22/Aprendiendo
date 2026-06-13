import { Link } from "react-router-dom";
import CodeBlock from "../components/CodeBlock";

export default function Estructura() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero — fondo oscuro */}
      <div className="bg-gray-950 text-white px-6 py-16 sm:py-24">
        <div className="max-w-2xl mx-auto">
          <p className="text-xs font-mono text-gray-500 mb-6 uppercase tracking-widest">
            Lectura complementaria
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-5">
            Estructura en el
            <br />
            desarrollo de software
          </h1>
          <p className="text-gray-400 text-base leading-relaxed">
            Escribir código que funciona es solo el primer paso. Lo que
            realmente importa es escribir código que otras personas — y tu yo
            del futuro — puedan entender, modificar y escalar.
          </p>
        </div>
      </div>

      {/* Contenido */}
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-10 space-y-10">
        {/* 01 */}
        <article>
          <SectionNumber n="01" />
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            ¿Por qué importa la estructura?
          </h2>
          <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
            <p>
              Cuando empiezas a programar, lo único que importa es que el código
              funcione. Pero en proyectos reales el código lo leen y modifican
              varias personas a lo largo del tiempo. Tú mismo, tres meses
              después, serás una persona diferente que no recuerda por qué
              escribiste algo de cierta forma.
            </p>
            <p>
              Un código sin estructura funciona, pero se vuelve imposible de
              mantener. Agregar una funcionalidad nueva rompe otra. Corregir un
              bug crea dos más. Nadie entiende dónde está cada cosa.
            </p>
          </div>

          <p className="text-sm text-gray-700 leading-relaxed mt-4 font-medium">
            La estructura no es un lujo ni un detalle estético. Es lo que
            diferencia un proyecto que puede crecer de uno que hay que
            reescribir desde cero cada vez que cambia algo.
          </p>
        </article>

        <Divider />

        {/* 02 */}
        <article>
          <SectionNumber n="02" />
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Separación de responsabilidades
          </h2>
          <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
            <p>
              El principio más importante en desarrollo de software es que cada
              parte del código debe tener una sola responsabilidad clara.
            </p>
            <p>
              Una función que valida un formulario no debería también hacer un
              fetch y actualizar la pantalla. Cuando cada pieza hace una sola
              cosa, puedes cambiarla sin miedo a romper el resto, probarla de
              forma aislada y reutilizarla en otros contextos.
            </p>
            <p className="text-gray-500 italic">
              Pregúntate siempre: ¿esta función tiene más de una razón para
              cambiar? Si la respuesta es sí, probablemente está haciendo
              demasiado.
            </p>
          </div>

          <div className="mt-6 space-y-3">
            <Label bad>Sin separación</Label>
            <CodeBlock
              light
              code={`async function botonGuardar() {
                const nombre = document.getElementById('nombre').value;

                if (!nombre) {
                  alert('El nombre es requerido');
                  return;
                }

                const res = await fetch('/api/usuarios', {
                  method: 'POST',
                  body: JSON.stringify({ nombre })
                });

                const data = await res.json();
                document.getElementById('lista').innerHTML += '<li>' + data.nombre + '</li>';
              }`}
            />
          </div>

          <div className="mt-4 space-y-3">
            <Label>Con separación</Label>
            <CodeBlock
              light
              code={`function obtenerFormulario() {
                return document.getElementById('nombre').value;
              }

              function validarNombre(nombre) {
                if (!nombre) throw new Error('El nombre es requerido');
              }

              async function guardarUsuario(nombre) {
                const res = await fetch('/api/usuarios', {
                  method: 'POST',
                  body: JSON.stringify({ nombre })
                });
                return res.json();
              }

              function agregarALista(usuario) {
                document.getElementById('lista').innerHTML += '<li>' + usuario.nombre + '</li>';
              }`}
            />
          </div>
        </article>

        <Divider />

        {/* 03 */}
        <article>
          <SectionNumber n="03" />
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            No te repitas — DRY
          </h2>
          <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
            <p>
              DRY viene de{" "}
              <span className="font-medium text-gray-800">
                Don't Repeat Yourself
              </span>
              . Si escribes la misma lógica en dos lugares, cuando esa lógica
              cambie tendrás que recordar cambiarla en ambos. Y eventualmente
              olvidarás uno.
            </p>
            <p>
              La solución no es copiar y pegar con cuidado. Es extraer esa
              lógica a una función reutilizable y llamarla desde donde la
              necesites.
            </p>
          </div>

          <p className="text-sm text-gray-700 leading-relaxed mt-4 font-medium">
            DRY no significa eliminar cualquier similitud entre dos líneas.
            Abstrae cuando la repetición representa la misma intención, no solo
            la misma sintaxis.
          </p>

          <div className="mt-6 space-y-3">
            <Label bad>Lógica repetida</Label>
            <CodeBlock
              light
              code={`function mostrarUsuario(usuario) {
  const nombre = usuario.nombre.trim().toLowerCase();
  const formateado = nombre[0].toUpperCase() + nombre.slice(1);
  console.log('Usuario:', formateado);
}

function mostrarCliente(cliente) {
  const nombre = cliente.nombre.trim().toLowerCase();
  const formateado = nombre[0].toUpperCase() + nombre.slice(1);
  console.log('Cliente:', formateado);
}`}
            />
          </div>

          <div className="mt-4 space-y-3">
            <Label>Lógica extraída</Label>
            <CodeBlock
              light
              code={`function capitalizar(texto) {
  const limpio = texto.trim().toLowerCase();
  return limpio[0].toUpperCase() + limpio.slice(1);
}

function mostrarUsuario(usuario) {
  console.log('Usuario:', capitalizar(usuario.nombre));
}

function mostrarCliente(cliente) {
  console.log('Cliente:', capitalizar(cliente.nombre));
}`}
            />
          </div>
        </article>

        <Divider />

        {/* 04 */}
        <article>
          <SectionNumber n="04" />
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Los nombres lo son todo
          </h2>
          <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
            <p>
              El nombre de una variable, función o archivo es la primera
              documentación que tiene tu código. Un buen nombre hace que el
              código se explique solo. Un mal nombre obliga a leer el cuerpo
              completo para entender qué está pasando.
            </p>
          </div>

          <div className="mt-6 grid sm:grid-cols-2 gap-3 text-xs">
            <NamingRule label="Funciones — describen acciones">
              {`obtenerUsuario\nvalidarEmail\ncalcularTotal`}
            </NamingRule>
            <NamingRule label="Variables — describen datos">
              {`usuarioActivo\nprecioConDescuento\nlistaDeErrores`}
            </NamingRule>
            <NamingRule label="Booleanos — responden preguntas">
              {`esMayorDeEdad\ntienePermiso\nestaDisponible`}
            </NamingRule>
            <NamingRule label="Evitar abreviaciones opacas">
              {`// ❌  usr, tmp, val, res2\n// ✅  usuario, temporal, valor, segundaRespuesta`}
            </NamingRule>
          </div>

          <div className="mt-6 space-y-3">
            <Label bad>Nombres que no comunican</Label>
            <CodeBlock
              light
              code={`function proc(d) {
  const r = d.filter(x => x.a && x.p > 0);
  return r.map(x => x.p * 1.16);
}`}
            />
          </div>

          <div className="mt-4 space-y-3">
            <Label>El código se explica solo</Label>
            <CodeBlock
              light
              code={`function calcularPreciosConIVA(productos) {
  const productosDisponibles = productos.filter(
    p => p.disponible && p.precio > 0
  );
  return productosDisponibles.map(p => p.precio * 1.16);
}`}
            />
          </div>
        </article>

        <Divider />

        {/* 05 */}
        <article>
          <SectionNumber n="05" />
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Cómo organizar los archivos
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-6">
            Un proyecto bien estructurado no tiene un archivo gigante con todo.
            Cada archivo tiene una responsabilidad clara y un nombre que lo
            refleja. Una organización común en proyectos JavaScript modernos:
          </p>

          <div className="bg-gray-50 border border-gray-200 rounded-xl px-5 py-5 font-mono text-xs leading-7 overflow-x-auto">
            <p>
              <span className="text-gray-400">src/</span>
            </p>
            <p>
              &nbsp;{" "}
              <span className="text-gray-900 font-semibold">components/</span>
              <span className="text-gray-400">
                {" "}
                &nbsp;→ piezas de interfaz reutilizables
              </span>
            </p>
            <p>
              &nbsp; <span className="text-gray-900 font-semibold">pages/</span>
              <span className="text-gray-400">
                {" "}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;→ vistas completas de la app
              </span>
            </p>
            <p>
              &nbsp;{" "}
              <span className="text-gray-900 font-semibold">services/</span>
              <span className="text-gray-400">
                {" "}
                &nbsp;&nbsp;→ lógica para hablar con APIs
              </span>
            </p>
            <p>
              &nbsp; <span className="text-gray-900 font-semibold">utils/</span>
              <span className="text-gray-400">
                {" "}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;→ funciones pequeñas reutilizables
              </span>
            </p>
            <p>
              &nbsp; <span className="text-gray-900 font-semibold">hooks/</span>
              <span className="text-gray-400">
                {" "}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;→ lógica con estado (React)
              </span>
            </p>
            <p>
              &nbsp; <span className="text-gray-900 font-semibold">types/</span>
              <span className="text-gray-400">
                {" "}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;→ definiciones de TypeScript
              </span>
            </p>
            <p>
              &nbsp; <span className="text-gray-900 font-semibold">data/</span>
              <span className="text-gray-400">
                {" "}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;→ datos estáticos o
                configuración
              </span>
            </p>
          </div>

          <p className="text-sm text-gray-500 leading-relaxed mt-5">
            El criterio para separar archivos no es el tamaño sino la
            responsabilidad. Un archivo de 300 líneas que hace una sola cosa
            puede estar bien. Un archivo de 50 líneas que mezcla validación,
            fetch y lógica de interfaz ya es un problema.
          </p>
        </article>

        <Divider />

        {/* 06 */}
        <article>
          <SectionNumber n="06" />
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            Señales de que algo está mal
          </h2>

          <div className="space-y-4">
            {[
              {
                signal:
                  "Tienes miedo de tocar cierta parte del código porque no sabes qué puede romper.",
                meaning:
                  "Esa parte tiene demasiadas dependencias ocultas o responsabilidades mezcladas.",
              },
              {
                signal:
                  "Para agregar algo nuevo tienes que modificar muchos archivos sin relación aparente.",
                meaning: "La lógica está distribuida sin un criterio claro.",
              },
              {
                signal:
                  "Cada vez que corriges un bug aparece otro en un lugar diferente.",
                meaning:
                  "Las partes del código están demasiado acopladas entre sí.",
              },
              {
                signal:
                  "No puedes explicar qué hace un archivo sin leer todo el código.",
                meaning:
                  "Los nombres o la estructura no comunican la intención.",
              },
              {
                signal:
                  "Copias y pegas bloques de código entre archivos con pequeñas variaciones.",
                meaning:
                  "Hay lógica que debería estar en una función reutilizable.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="border border-gray-100 rounded-lg overflow-hidden"
              >
                <div className="flex gap-3 px-4 py-3 bg-amber-50">
                  <span className="font-mono text-xs text-amber-400 flex-shrink-0 mt-0.5">
                    !
                  </span>
                  <p className="text-xs text-amber-900 leading-relaxed">
                    {item.signal}
                  </p>
                </div>
                <div className="px-4 py-3">
                  <p className="text-xs text-gray-500 leading-relaxed">
                    <span className="font-semibold text-gray-700">
                      Qué significa:{" "}
                    </span>
                    {item.meaning}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </article>

        <Divider />

        {/* 07 — entrada a patrones */}
        <article>
          <SectionNumber n="07" />
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            Patrones de arquitectura
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-6">
            MVC, MVP y MVVM son las formas más comunes de organizar una
            aplicación completa. Cada uno propone cómo separar los datos, la
            interfaz y la lógica que los conecta. Entenderlos te ayuda a leer
            proyectos de otros, tomar mejores decisiones de diseño y hablar el
            mismo idioma que el resto del equipo.
          </p>
          <Link
            to="/patrones"
            className="inline-flex items-center gap-2 border border-gray-200 rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all"
          >
            <span>Ver MVC, MVP y MVVM</span>
            <span className="text-gray-400">→</span>
          </Link>
        </article>

        {/* Cierre */}
        <div className="border-t border-gray-100 pt-10 pb-6">
          <p className="text-sm text-gray-400 leading-relaxed">
            La estructura no se aprende de golpe. Se va construyendo con la
            práctica y con el hábito de preguntarse constantemente:{" "}
            <span className="text-gray-900 font-semibold">
              ¿esto podría ser más claro?
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

/* — Componentes internos — */

function SectionNumber({ n }: { n: string }) {
  return <p className="font-mono text-xs text-gray-300 mb-1">{n}</p>;
}

function Divider() {
  return <hr className="border-gray-100" />;
}

function Label({
  children,
  bad,
}: {
  children: React.ReactNode;
  bad?: boolean;
}) {
  return (
    <p
      className={`text-xs font-medium ${bad ? "text-red-400" : "text-green-600"}`}
    >
      {bad ? "✗" : "✓"} {children}
    </p>
  );
}

function NamingRule({ label, children }: { label: string; children: string }) {
  return (
    <div className="bg-gray-50 border border-gray-100 rounded-lg p-3">
      <p className="text-xs text-gray-400 mb-2">{label}</p>
      <pre className="text-xs text-gray-700 font-mono whitespace-pre-line leading-relaxed">
        {children}
      </pre>
    </div>
  );
}
