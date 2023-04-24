import { TOOLS_LIST } from "@/config";
import { ITool } from "@/types";

export const getTool = async (toolName: string): Promise<ITool | undefined> => {
  try {
    const tool: ITool = await import(`@/library/${toolName}/config.json`);
    return tool
  } catch (err) {
    return undefined;
  }
}

export const getTools = async (): Promise<ITool[]> => {
  const tools = await Promise.all(TOOLS_LIST.tools.map(async (toolName: string) => await getTool(toolName))) as ITool[];
  return tools;
}