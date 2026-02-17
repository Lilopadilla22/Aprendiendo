import { modulesData } from "../data/modulesData";
import { modulesStatus } from "../data/modulesStatus";
import ModuleCard from "../components/ModuleCard";
import ProgressBar from "../components/ProgressBar";

export default function Home() {
  const totalModules = modulesData.length;
  const completedModules = Object.values(modulesStatus).filter(
    (status) => status === "completed"
  ).length;

  const percentage = Math.round(
    (completedModules / totalModules) * 100
  );

  return (
    <div className="max-w-5xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4">
        Aprendiendo 🚀
      </h1>

      <p className="text-gray-600 mb-8">
        Aprende JavaScript y Git como en un equipo real.
      </p>

      <ProgressBar percentage={percentage} />

      <div className="grid gap-6">
        {modulesData.map((module) => (
          <ModuleCard
            key={module.id}
            module={module}
            status={modulesStatus[module.id]}
          />
        ))}
      </div>
    </div>
  );
}