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
        flex items-start gap-4 py-4 border-b border-gray-100
        ${isLocked
          ? "opacity-40 cursor-not-allowed"
          : "hover:bg-gray-50 transition-colors duration-150 cursor-pointer"
        }
      `}
    >
      <span className="font-mono text-xs text-gray-400 mt-0.5 w-5 flex-shrink-0 hidden sm:block">
        {num}
      </span>

      <div className="flex-1 min-w-0">
        <p className={`text-sm font-semibold leading-snug ${isLocked ? "text-gray-400" : "text-gray-900"}`}>
          {module.title}
        </p>
        <p className="text-xs text-gray-400 mt-1 leading-relaxed">
          {module.description}
        </p>
        <p className="text-xs text-gray-300 font-mono mt-1.5 truncate">
          {module.branch}
        </p>
      </div>

      <div className="flex-shrink-0 pt-0.5">
        <StatusBadge status={status} />
      </div>
    </div>
  );

  if (isLocked) return inner;

  return (
    <Link to={`/modulo/${module.id}`} className="block">
      {inner}
    </Link>
  );
}
