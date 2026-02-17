export type ModuleStatus = "locked" | "in-progress" | "completed" ;

export interface SectionItem {
  title: string;
  syntax?: string;
  example?: string;
  description: string;
  commonError?: string;
  syntaxAsCode?: boolean;
}

export interface ModuleSection {
  title: string;
  items: SectionItem[];
  documentation?: string;
}

export interface Module {
  id: number;
  title: string;
  branch: string;
  description: string;
  documentation: string;
  summary: string;
  sections: ModuleSection[];
  exercises: string[];
  objective: string;
}