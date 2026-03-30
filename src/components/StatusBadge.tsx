import type { ModuleStatus } from "../types/modules";


interface Props {
  status: ModuleStatus;
}

export default function StatusBadge({ status }: Props) {
  const statusConfig = {
    locked: {
      label: "Locked",
      icon: "🔒",
      styles: "bg-gray-200 text-gray-700",
    },
    "in-progress": {
      label: "In Progress",
      icon: "🟡",
      styles: "bg-blue-100 text-blue-800",
    },
    completed: {
      label: "Completed",
      icon: "✅",
      styles: "bg-green-100 text-green-800",
    },
    construction: {
    label: "Construction",
    icon: "🚧",
    styles: "bg-orange-100 text-orange-800",
  },
  };

  const config = statusConfig[status];

  return (
    <span
      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${config.styles}`}
    >
      <span>{config.icon}</span>
      {config.label}
    </span>
  );
}