export type ModuleStatus = "locked" | "in-progress" | "completed";

export interface Module {
  id: number;
  title: string;
  branch: string;
  description: string;
  documentation: string;
}