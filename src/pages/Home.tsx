import { modulesData } from "../data/modulesData";
import { modulesStatus } from "../data/modulesStatus";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">
        Aprendiendo 🚀
      </h1>

      <div className="grid gap-6">
        {modulesData.map((module) => (
          <Link
            key={module.id}
            to={`/modulo/${module.id}`}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold">
              {module.title}
            </h2>
            <p className="text-gray-600 mt-2">
              {module.description}
            </p>
            <p className="mt-4 text-sm font-medium">
              Estado: {modulesStatus[module.id]}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}