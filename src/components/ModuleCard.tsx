import { Link } from "react-router-dom";
import StatusBadge from "./StatusBadge";
import type { Module, ModuleStatus } from "../types/modules";

interface Props {
  module: Module;
  status: ModuleStatus;
}

export default function ModuleCard({ module, status }: Props) {
  const isLocked = status === "locked";
  const num = String(module.id).padStart(2, "0");

  const inner = (
    <div
      className={`
        flex items-start gap-5 py-5 border-b border-gray-100
        ${isLocked
          ? "opacity-40 cursor-not-allowed"
          : "hover:bg-gray-50 transition-colors duration-150 -mx-6 px-6 cursor-pointer"
        }
      `}
    >
      <span className="font-mono text-xs text-gray-400 mt-0.5 w-5 flex-shrink-0">
        {num}
      </span>

      <div className="flex-1 min-w-0">
        <p className={`text-sm font-semibold ${isLocked ? "text-gray-400" : "text-gray-900"}`}>
          {module.title}
        </p>
        <p className="text-xs text-gray-400 mt-0.5 leading-relaxed">
          {module.description}
        </p>
        <p className="text-xs text-gray-300 font-mono mt-1.5">
          {module.branch}
        </p>
      </div>

      <StatusBadge status={status} />
    </div>
  );

  if (isLocked) return inner;

  return (
    <Link to={`/modulo/${module.id}`} className="block -mx-6 px-6">
      {inner}
    </Link>
  );
}