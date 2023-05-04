export interface IToolsList {
  tools: string[];
}

export interface ITool {
  fancy_name: string;
  name: string; // Used to load the .md file (name MUST be the same as the filename)
  description?: string;
  official_doc: string;
  categories: string[];
  organization?: string;
  run_command: string;
}

export interface IDynamicTool extends ITool {
  current_run_command: string;
}
