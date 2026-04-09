import { useParams, Link } from "react-router-dom";
import { modulesData } from "../data/modulesData";
import { modulesStatus } from "../data/modulesStatus";
import StatusBadge from "../components/StatusBadge";
import CodeBlock from "../components/CodeBlock";
import { getModuleStatus } from "../utils/getModuleStatus";

export default function ModuleDetail() {
  const { id } = useParams();
  const module = modulesData.find((m) => m.id === Number(id));

  if (!module) {
    return <div className="p-6 text-sm text-gray-500">Módulo no encontrado.</div>;
  }

  const status = getModuleStatus(module.id, modulesStatus);

  if (status === "locked") {
    return (
      <div className="max-w-xl mx-auto py-20 px-6 text-center space-y-4">
        <p className="text-4xl">🔒</p>
        <h1 className="text-xl font-bold text-gray-900">Módulo bloqueado</h1>
        <p className="text-sm text-gray-500">Este módulo aún no está disponible.</p>
        <Link to="/" className="inline-block text-sm text-gray-900 underline underline-offset-4 hover:opacity-60 transition mt-2">
          Volver al inicio
        </Link>
      </div>
    );
  }

  const num = String(module.id).padStart(2, "0");

  return (
    <div className="max-w-5xl mx-auto px-2 sm:px-6 md:px-8 py-6 md:py-10">

      {/* Back */}
      <Link to="/" className="inline-block text-xs text-gray-400 hover:text-gray-700 transition mb-8">
        ← Módulos
      </Link>

      {/* Header */}
      <div className="bg-gray-50 border border-gray-100 rounded-xl px-4 py-6 sm:px-8 sm:py-10 mb-10 text-center">
        <div className="flex items-center justify-center gap-3 mb-3">
          <span className="font-mono text-xs bg-gray-900 text-white px-2 py-0.5 rounded">
            {num}
          </span>
          <StatusBadge status={status} />
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-snug mb-2">
          {module.title}
        </h1>

        <p className="text-gray-500 text-sm leading-relaxed max-w-xl mx-auto">
          {module.description}
        </p>

        {/* Meta row — apila en mobile, lado a lado en desktop */}
        <div className="flex flex-col sm:flex-row sm:justify-center gap-6 sm:gap-10 mt-7 pt-6 border-t border-gray-200 text-left sm:text-center">
          <div>
            <p className="text-xs text-gray-400 mb-1 uppercase tracking-wider font-medium">Objetivo</p>
            <p className="text-sm text-gray-700 leading-relaxed sm:max-w-sm">{module.objective}</p>
          </div>
          <div className="sm:border-l sm:border-gray-200 sm:pl-10">
            <p className="text-xs text-gray-400 mb-1 uppercase tracking-wider font-medium">Rama</p>
            <code className="text-sm font-mono text-indigo-600">{module.branch}</code>
          </div>
        </div>
      </div>

      {/* Resumen */}
      <div className="mb-10 pl-4 border-l-2 border-indigo-200">
        <p className="text-xs text-indigo-400 font-semibold uppercase tracking-widest mb-2">
          Resumen
        </p>
        <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">
          {module.summary.trim()}
        </p>
      </div>

      {/* Secciones */}
      <div className="space-y-12 md:space-y-16">
        {module.sections.map((section, sIndex) => (
          <section key={sIndex}>

            <div className="flex items-center justify-between mb-5">
              <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wide">
                {section.title}
              </h2>
              {section.documentation && (
                <a
                  href={section.documentation}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-indigo-500 hover:text-indigo-700 transition whitespace-nowrap ml-4"
                >
                  Docs →
                </a>
              )}
            </div>

            <div className="space-y-4">
              {section.items.map((item, iIndex) => (
                <div
                  key={iIndex}
                  className="bg-gray-50 rounded-lg border border-gray-100 overflow-hidden"
                >
                  {/* Item header */}
                  <div className="px-3 py-3 sm:px-5 border-b border-gray-100 bg-white">
                    <h3 className="text-sm font-semibold text-gray-900">{item.title}</h3>
                  </div>

                  <div className="px-3 py-4 sm:px-5 sm:py-5 space-y-4">

                    <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">
                      {item.description}
                    </p>

                    {item.syntax && (
                      <div>
                        <p className="text-xs text-gray-400 font-medium mb-2 uppercase tracking-wide">
                          Sintaxis
                        </p>
                        {item.syntaxAsCode ? (
                          <CodeBlock code={item.syntax} />
                        ) : (
                          <div className="bg-white border border-gray-100 rounded-lg p-3 sm:p-4 font-mono text-xs text-gray-700 whitespace-pre-line overflow-x-auto">
                            {item.syntax}
                          </div>
                        )}
                      </div>
                    )}

                    {item.example && (
                      <div>
                        <p className="text-xs text-gray-400 font-medium mb-2 uppercase tracking-wide">
                          Ejemplo
                        </p>
                        <CodeBlock code={item.example} />
                      </div>
                    )}

                    {item.commonError && (
                      <div className="flex gap-2 bg-amber-50 border border-amber-100 rounded-lg px-3 py-3 sm:px-4">
                        <span className="text-amber-400 text-xs font-bold flex-shrink-0 mt-0.5">!</span>
                        <p className="text-xs text-amber-800 leading-relaxed">
                          <span className="font-semibold">Error común: </span>
                          {item.commonError}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Ejercicios */}
      <div className="mt-12 md:mt-16 bg-indigo-50 border border-indigo-100 rounded-xl px-4 py-5 sm:px-8 sm:py-7">
        <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-5">
          Ejercicios
        </h2>
        <ol className="space-y-4">
          {module.exercises.map((exercise, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="text-xs font-mono text-indigo-400 mt-0.5 flex-shrink-0">
                {index + 1}.
              </span>
              <p className="text-sm text-gray-700 leading-relaxed">{exercise}</p>
            </li>
          ))}
        </ol>
      </div>

      {/* Documentación */}
      <div className="mt-8 pb-12">
        <a
          href={module.documentation}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-indigo-600 hover:text-indigo-800 transition underline underline-offset-4"
        >
          Ver documentación oficial →
        </a>
      </div>

    </div>
  );
}
