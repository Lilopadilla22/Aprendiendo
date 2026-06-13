import { Link } from "react-router-dom";

export default function Patrones() {
  return (
    <div className="bg-white min-h-screen">

      {/* Hero */}
      <div className="bg-gray-950 text-white px-6 py-16 sm:py-24">
        <div className="max-w-2xl mx-auto">
          <Link to="/estructura" className="text-xs text-gray-500 hover:text-gray-300 transition mb-6 inline-block">
            ← Estructura de software
          </Link>
          <p className="text-xs font-mono text-gray-500 mb-4 uppercase tracking-widest">
            Lectura complementaria
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-5">
            Patrones de arquitectura
          </h1>
          <p className="text-gray-400 text-base leading-relaxed">
            Un patrón de arquitectura es una forma probada de organizar el código de una aplicación.
            No son reglas absolutas — son guías que han funcionado en muchos proyectos
            y que puedes adaptar según el contexto.
          </p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-10 space-y-10">

        {/* MVC */}
        <article>
          <SectionNumber n="01" />
          <div className="flex items-baseline gap-3 mb-3">
            <span className="font-mono text-xs font-bold bg-gray-900 text-white px-2 py-0.5 rounded">MVC</span>
            <h2 className="text-xl font-bold text-gray-900">Model — View — Controller</h2>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed mb-5">
            Es el patrón más clásico y el más enseñado. Divide la aplicación en tres partes
            con responsabilidades claras y separadas.
          </p>

          <div className="space-y-2 mb-5">
            <PatternLayer name="Model" color="bg-indigo-50 border-indigo-100 text-indigo-700">
              Representa los datos y la lógica de negocio. No sabe nada de cómo se ve la aplicación.
              Se encarga de obtener, validar y transformar datos.
            </PatternLayer>
            <PatternLayer name="View" color="bg-green-50 border-green-100 text-green-700">
              Es lo que el usuario ve. Solo muestra datos, no los procesa ni los obtiene directamente.
              Recibe instrucciones del Controller sobre qué mostrar.
            </PatternLayer>
            <PatternLayer name="Controller" color="bg-amber-50 border-amber-100 text-amber-700">
              Es el intermediario. Recibe las acciones del usuario desde la View,
              le pide datos al Model y le dice a la View qué mostrar.
            </PatternLayer>
          </div>

          <FileTree tree={[
            "src/",
            "  models/      → Usuario.js, Producto.js",
            "  views/       → usuario.html, producto.html",
            "  controllers/ → usuarioController.js",
          ]} />

          <p className="text-xs text-gray-400 leading-relaxed mt-4">
            MVC es muy común en backend con frameworks como Express, Django o Laravel.
            En frontend puro se usa menos porque la separación View/Controller se vuelve difusa.
          </p>
        </article>

        <Divider />

        {/* MVP */}
        <article>
          <SectionNumber n="02" />
          <div className="flex items-baseline gap-3 mb-3">
            <span className="font-mono text-xs font-bold bg-gray-900 text-white px-2 py-0.5 rounded">MVP</span>
            <h2 className="text-xl font-bold text-gray-900">Model — View — Presenter</h2>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed mb-5">
            Es una evolución de MVC pensada para interfaces de usuario más complejas.
            La diferencia principal es que la View es completamente pasiva: no toma ninguna decisión.
          </p>

          <div className="space-y-2 mb-5">
            <PatternLayer name="Model" color="bg-indigo-50 border-indigo-100 text-indigo-700">
              Igual que en MVC: maneja los datos y la lógica de negocio.
            </PatternLayer>
            <PatternLayer name="View" color="bg-green-50 border-green-100 text-green-700">
              Solo muestra lo que el Presenter le dice. No tiene lógica propia.
              Cuando el usuario hace algo, se lo notifica al Presenter y espera instrucciones.
            </PatternLayer>
            <PatternLayer name="Presenter" color="bg-purple-50 border-purple-100 text-purple-700">
              Tiene toda la lógica de presentación. Decide qué datos mostrar y cómo.
              A diferencia del Controller en MVC, conoce la View directamente y la manipula.
            </PatternLayer>
          </div>

          <p className="text-xs text-gray-400 leading-relaxed">
            MVP es popular en aplicaciones Android y en proyectos donde se necesita
            que la lógica de presentación sea fácil de probar de forma aislada.
          </p>
        </article>

        <Divider />

        {/* MVVM */}
        <article>
          <SectionNumber n="03" />
          <div className="flex items-baseline gap-3 mb-3">
            <span className="font-mono text-xs font-bold bg-gray-900 text-white px-2 py-0.5 rounded">MVVM</span>
            <h2 className="text-xl font-bold text-gray-900">Model — View — ViewModel</h2>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed mb-5">
            Es el patrón más relevante para el desarrollo frontend moderno.
            Lo usan Vue, Angular y es la idea detrás de cómo funciona React
            con su estado y componentes.
          </p>

          <div className="space-y-2 mb-5">
            <PatternLayer name="Model" color="bg-indigo-50 border-indigo-100 text-indigo-700">
              Los datos de la aplicación: lo que viene de una API, el estado global, etc.
            </PatternLayer>
            <PatternLayer name="View" color="bg-green-50 border-green-100 text-green-700">
              La interfaz de usuario. En React son tus componentes JSX.
              Se actualiza automáticamente cuando el ViewModel cambia.
            </PatternLayer>
            <PatternLayer name="ViewModel" color="bg-rose-50 border-rose-100 text-rose-700">
              El puente entre el Model y la View. Expone los datos en un formato
              que la View puede consumir directamente y reacciona a los cambios automáticamente.
              En React esto se traduce al estado (useState) y la lógica en hooks personalizados.
            </PatternLayer>
          </div>

          <FileTree tree={[
            "src/",
            "  models/      → tipos, interfaces, llamadas a API",
            "  viewmodels/  → hooks con lógica y estado (useUsuario.ts)",
            "  views/       → componentes React que consumen los hooks",
          ]} />

          <p className="text-xs text-gray-400 leading-relaxed mt-4">
            MVVM brilla cuando la interfaz necesita reaccionar a cambios de datos en tiempo real.
            Es por eso que Vue y Angular lo adoptan de forma explícita, y React lo implementa
            de manera implícita con su modelo de estado reactivo.
          </p>
        </article>

        <Divider />

        {/* Comparativa */}
        <article>
          <SectionNumber n="04" />
          <h2 className="text-xl font-bold text-gray-900 mb-5">¿Cuál usar?</h2>

          <div className="border border-gray-100 rounded-lg overflow-hidden">
            {[
              { pattern: "MVC", use: "Backend con Node/Express, APIs REST, aplicaciones servidor." },
              { pattern: "MVP", use: "Aplicaciones Android o cuando necesitas probar la lógica de presentación de forma aislada." },
              { pattern: "MVVM", use: "Frontend moderno con React, Vue o Angular. El más natural para interfaces reactivas." },
            ].map((row, i, arr) => (
              <div key={row.pattern} className={`flex items-start gap-4 px-4 py-4 ${i < arr.length - 1 ? "border-b border-gray-100" : ""}`}>
                <span className="font-mono text-xs font-bold text-gray-900 w-12 flex-shrink-0 mt-0.5">
                  {row.pattern}
                </span>
                <p className="text-xs text-gray-500 leading-relaxed">{row.use}</p>
              </div>
            ))}
          </div>

          <p className="text-xs text-gray-400 leading-relaxed mt-5">
            En la práctica los proyectos mezclan ideas de varios patrones.
            Lo importante no es seguir uno al pie de la letra, sino entender
            el principio detrás: separar los datos, la presentación y lo que conecta ambos.
          </p>
        </article>

        {/* Cierre */}
        <div className="border-t border-gray-100 pt-8 pb-6">
          <Link
            to="/estructura"
            className="text-sm text-gray-400 hover:text-gray-700 transition underline underline-offset-4"
          >
            ← Volver a Estructura de software
          </Link>
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

function PatternLayer({ name, color, children }: { name: string; color: string; children: React.ReactNode }) {
  return (
    <div className={`border rounded-lg px-4 py-3 flex items-start gap-3 ${color}`}>
      <span className="text-xs font-bold w-20 flex-shrink-0 mt-0.5">{name}</span>
      <p className="text-xs leading-relaxed opacity-80">{children}</p>
    </div>
  );
}

function FileTree({ tree }: { tree: string[] }) {
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 font-mono text-xs text-gray-600 leading-6">
      {tree.map((line, i) => <p key={i}>{line}</p>)}
    </div>
  );
}
