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
    return <div className="p-8 text-sm text-gray-500">Módulo no encontrado.</div>;
  }

  const status = getModuleStatus(module.id, modulesStatus);

  if (status === "locked") {
    return (
      <div className="max-w-xl mx-auto py-24 px-6 text-center space-y-4">
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
    <div className="max-w-5xl mx-auto px-8 py-10">
      <Link to="/" className="inline-block text-xs text-gray-400 hover:text-gray-700 transition mb-10">
        ← Módulos
      </Link>
      <div className="bg-gray-50 border border-gray-100 rounded-xl px-8 py-10 mb-12 text-center">
        <div className="flex items-center justify-between gap-3 mb-3">
          <span className="font-mono text-xs bg-gray-900 text-white px-2 py-0.5 rounded">
            {num}
          </span>
          <StatusBadge status={status} />
        </div>

        <h1 className="text-3xl font-bold text-gray-900 leading-snug mb-2">
          {module.title}
        </h1>

        <p className="text-gray-500 text-sm leading-relaxed max-w-xl mx-auto">
          {module.description}
        </p>
        <div className="flex flex-wrap justify-between gap-10 mt-8 pt-6 border-t border-gray-200">
          <div className="text-center">
            <p className="text-xs text-gray-400 mb-1 uppercase tracking-wider font-medium">Objetivo</p>
            <p className="text-sm text-gray-700 max-w-lg leading-relaxed">{module.objective}</p>
          </div>
          <div className="text-center">
            <p className="text-xs text-gray-400 mb-1 uppercase tracking-wider font-medium">Rama</p>
            <code className="text-sm font-mono text-indigo-600">{module.branch}</code>
          </div>
        </div>
      </div>
      <div className="mb-12 pl-4 border-l-2 border-indigo-200">
        <p className="text-xs text-indigo-400 font-semibold uppercase tracking-widest mb-2">
          Resumen
        </p>
        <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">
          {module.summary.trim()}
        </p>
      </div>
      <div className="space-y-16">
        {module.sections.map((section, sIndex) => (
          <section key={sIndex}>

            {/* Section title */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-base font-bold text-gray-900 uppercase tracking-wide">
                {section.title}
              </h2>
              {section.documentation && (
                <a
                  href={section.documentation}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-indigo-500 hover:text-indigo-700 transition"
                >
                  Docs oficiales →
                </a>
              )}
            </div>

            <div className="space-y-6">
              {section.items.map((item, iIndex) => (
                <div
                  key={iIndex}
                  className="bg-gray-50 rounded-lg border border-gray-100 overflow-hidden"
                >
                  <div className="px-5 py-3 border-b border-gray-100 bg-white">
                    <h3 className="text-sm font-semibold text-gray-900">{item.title}</h3>
                  </div>

                  <div className="px-5 py-5 space-y-5">
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
                          <div className="bg-white border border-gray-100 rounded-lg p-4 font-mono text-xs text-gray-700 whitespace-pre-line">
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
                      <div className="flex gap-3 bg-amber-50 border border-amber-100 rounded-lg px-4 py-3">
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

      <div className="mt-16 bg-indigo-50 border border-indigo-100 rounded-xl px-8 py-7">
        <h2 className="text-base font-bold text-gray-900 mb-5">Ejercicios</h2>
        <ol className="space-y-3">
          {module.exercises.map((exercise, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="text-xs font-mono text-indigo-400 mt-0.5 w-4 flex-shrink-0">
                {index + 1}.
              </span>
              <p className="text-sm text-gray-700 leading-relaxed">{exercise}</p>
            </li>
          ))}
        </ol>
      </div>
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
