import { TOOLS_LIST } from "@/config";
import { ITool, IToolbox } from "@/types";

export const getTool = async (toolName: string): Promise<ITool | undefined> => {
  try {
    const tool: ITool = await import(`@/library/${toolName}/config.json`);
    return tool;
  } catch (err) {
    return undefined;
  }
};

export const getTools = async (): Promise<ITool[]> => {
  const tools = (await Promise.all(
    TOOLS_LIST.tools.map(async (toolName: string) => await getTool(toolName))
  )) as ITool[];
  return tools;
};

export const replaceHoudiniVariables = (
  initialRunCmd: string,
  currentToolbox: IToolbox[]
) => {
  const inputRegex = /<(\w+)>/g;
  const matches = [...initialRunCmd.matchAll(inputRegex)];
  const toolInputs: string[] = matches.map((input: RegExpMatchArray) => {
    return input[0];
  });
  const inputValues = toolInputs.reduce(
    (prev: { [inputName: string]: string }, curr: string) => {
      const inputName = curr.replace(/<|>/g, "");
      const inputValue =
        currentToolbox.find((v: IToolbox) => v.inputName === inputName)
          ?.value ?? curr;
      return {
        ...prev,
        [curr]: inputValue,
      };
    },
    {}
  );
  let runCmd = initialRunCmd;
  for (const toolInput of toolInputs) {
    runCmd = runCmd.replace(toolInput, inputValues[toolInput]);
  }
  return runCmd;
};
