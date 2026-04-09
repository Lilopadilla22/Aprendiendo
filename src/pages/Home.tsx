import { modulesData } from "../data/modulesData";
import { modulesStatus } from "../data/modulesStatus";
import ModuleCard from "../components/ModuleCard";
import ProgressBar from "../components/ProgressBar";

export default function Home() {
  const totalModules = modulesData.length;
  const completed = Object.values(modulesStatus).filter(s => s === "completed").length;
  const percentage = Math.round((completed / totalModules) * 100);

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-10 sm:py-16">

      <div className="mb-10">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
          Guía de repaso JavaScript
        </h1>
        <p className="text-sm text-gray-500 leading-relaxed">
          Para desarrolladores que quieren consolidar su base con ejemplos claros
          y ejercicios prácticos.
        </p>
      </div>

      <ProgressBar
        percentage={percentage}
        completed={completed}
        total={totalModules}
      />

      <div>
        {modulesData.map((module) => (
          <ModuleCard
            key={module.id}
            module={module}
            status={modulesStatus[module.id] ?? "locked"}
          />
        ))}
      </div>
    </div>
  );
}
