import { useParams } from "react-router-dom";
import { modulesData } from "../data/modulesData";

export default function ModuleDetail() {
  const { id } = useParams();
  const module = modulesData.find((m) => m.id === Number(id));

  if (!module) {
    return <div className="p-8">Módulo no encontrado</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">
        {module.title}
      </h1>

      <p className="mb-4">{module.description}</p>

      <div className="bg-white p-4 rounded-xl shadow">
        <p className="font-semibold">Rama obligatoria:</p>
        <code className="text-primary">
          {module.branch}
        </code>
      </div>

      <a
        href={module.documentation}
        target="_blank"
        className="inline-block mt-6 text-primary underline"
      >
        Ver documentación oficial
      </a>
    </div>
  );
}