import { Link } from "react-router-dom";

import StatusBadge from "./StatusBadge";
import type { Module, ModuleStatus } from "../types/modules";

interface Props {
  module: Module;
  status: ModuleStatus;
}

export default function ModuleCard({ module, status }: Props) {
  return (
    <Link
      to={`/modulo/${module.id}`}
      className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition block"
    >
      <div className="flex justify-between items-start">
        <h2 className="text-xl font-semibold">
          {module.title}
        </h2>

        <StatusBadge status={status} />
      </div>

      <p className="text-gray-600 mt-3">
        {module.description}
      </p>

      <div className="mt-4 text-sm text-gray-500">
        Rama: <code className="text-primary">{module.branch}</code>
      </div>
    </Link>
  );
}