import type { ModuleStatus } from "../types/modules";

export function getModuleStatus(
  moduleId: number,
  statusMap: Record<number, ModuleStatus>
): ModuleStatus {
  const previousModule = moduleId - 1;

  if (moduleId === 1) {
    return statusMap[moduleId];
  }

  if (statusMap[previousModule] === "completed") {
    return statusMap[moduleId] === "completed"
      ? "completed"
      : "in-progress";
  }

  return "locked";
}