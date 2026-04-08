import type { ModuleStatus } from "../types/modules";

export function getModuleStatus(
  moduleId: number,
  statusMap: Record<number, ModuleStatus>
): ModuleStatus {
  return statusMap[moduleId] ?? "locked";
}