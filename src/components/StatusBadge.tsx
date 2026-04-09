import type { ModuleStatus } from "../types/modules";

interface Props {
  status: ModuleStatus;
}

const config: Record<ModuleStatus, { label: string; dot: string; text: string }> = {
  completed:    { label: "Completado",  dot: "bg-green-500",  text: "text-green-700" },
  "in-progress":{ label: "En progreso", dot: "bg-amber-400",  text: "text-amber-700" },
  locked:       { label: "Pendiente",   dot: "bg-gray-300",   text: "text-gray-400"  },
};

export default function StatusBadge({ status }: Props) {
  const { label, dot, text } = config[status];

  return (
    <span className={`inline-flex items-center gap-1.5 text-xs font-medium ${text}`}>
      <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${dot}`} />
      {label}
    </span>
  );
}
