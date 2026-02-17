import { useParams } from "react-router-dom";
import { modulesData } from "../data/modulesData";
import { modulesStatus } from "../data/modulesStatus";
import StatusBadge from "../components/StatusBadge";
import CodeBlock from "../components/CodeBlock";
import { getModuleStatus } from "../utils/getModuleStatus";

export default function ModuleDetail() {
  const { id } = useParams();
  const module = modulesData.find((m) => m.id === Number(id));

  if (!module) {
    return <div className="p-8">Módulo no encontrado</div>;
  }

  const status = getModuleStatus(module.id, modulesStatus);

  if (status === "locked") {
    return (
      <div className="max-w-3xl mx-auto py-20 text-center space-y-6">
        <h1 className="text-4xl font-bold">🔒 Módulo bloqueado</h1>
        <p className="text-gray-600 text-lg">
          Debes completar el módulo anterior antes de acceder a este contenido.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 space-y-16">

      {/* HERO */}
      <div className="space-y-6">
        <div className="flex justify-between items-start">
          <div className="space-y-2">
            <h1 className="text-5xl font-bold tracking-tight">
              {module.title}
            </h1>

            <p className="text-xl text-gray-500">
              {module.description}
            </p>
          </div>

          <StatusBadge status={status} />
        </div>
      </div>

      <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      {/* RESUMEN */}
      <section className="space-y-4 text-center">
        <h2 className="text-2xl font-semibold">📖 Resumen</h2>
        <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
          {module.summary}
        </p>
      </section>

      {/* RAMA + OBJETIVO EN GRID */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-8 rounded-3xl shadow-md border border-gray-100">
          <h3 className="font-semibold mb-3 text-lg">
            🌿 Rama obligatoria
          </h3>
          <code className="text-primary font-semibold text-xl">
            {module.branch}
          </code>
        </div>

        <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100">
          <h3 className="font-semibold mb-3 text-lg">
            🎯 Objetivo Profesional
          </h3>
          <p className="text-gray-700">
            {module.objective}
          </p>
        </div>
      </div>

      <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      {/* SECCIONES */}
      {module.sections.map((section, index) => (
        <section key={index} className="space-y-8">
          <h2 className="text-2xl font-semibold">
            {section.title}
          </h2>

          <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Estos conceptos son fundamentales para trabajar correctamente en el flujo del proyecto.
          </p>

          <div className="space-y-8">
            {section.items.map((item, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-3xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 space-y-6"
              >
                {/* Título */}
                <h3 className="text-xl font-semibold">
                  {item.title}
                </h3>

                {/* Descripción */}
                <p className="text-gray-700 leading-relaxed">
                  {item.description}
                </p>

                {/* Sintaxis */}
                {item.syntax && (
                  <div className="space-y-3">
                    <p className="uppercase text-xs tracking-wider text-gray-400 font-semibold">
                      Sintaxis
                    </p>

                    {item.syntaxAsCode ? (
                      <CodeBlock code={item.syntax} />
                    ) : (
                      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 font-mono text-sm text-gray-800 whitespace-pre-line">
                        {item.syntax}
                      </div>
                    )}
                  </div>
                )}

                {/* Ejemplo */}
                {item.example && (
                  <div className="space-y-2">
                    <p className="font-medium text-gray-800">
                      💡 Ejemplo práctico
                    </p>
                    <CodeBlock code={item.example} />
                  </div>
                )}

                {/* Error común */}
                {item.commonError && (
                  <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-xl">
                    <p className="text-red-700 text-sm font-medium">
                      ⚠ {item.commonError}
                    </p>
                  </div>
                )}

                {/* Documentacion personalizada*/}

                {(section?.documentation) && (
                  <div className="mb-6">
                    <a
                      href={section.documentation ?? module.documentation}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-600 hover:text-blue-800 transition font-medium"
                    >
                      Profundizar en documentación oficial →
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      ))}

      <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      {/* EJERCICIOS */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">
          🧪 Ejercicios
        </h2>

        <div className="bg-white p-8 rounded-3xl shadow-md border border-gray-100">
          <ol className="list-decimal list-inside space-y-4 text-gray-700">
            {module.exercises.map((exercise, index) => (
              <li key={index} className="leading-relaxed">
                {exercise}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* DOCUMENTACIÓN */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          🔗 Documentación Oficial
        </h2>

        <a
          href={module.documentation}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-primary font-medium hover:underline"
        >
          Ver documentación para profundizar →
        </a>
      </section>

    </div>
  );
}