import { createContext, useContext, useState, useEffect } from "react";
import { IToolbox } from "@/types";
import { getTools } from "@/utils/helper";

interface ProviderInterface {
  toolbox: IToolbox[];
  setToolboxInput: (inputName: string, value: string) => void;
  toolboxEmpty: boolean;
  cleanToolbox: () => void;
}

const ToolboxContext = createContext<ProviderInterface | null>(null);

const ToolboxProvider = ({ children }: any): any => {
  const [toolboxEmpty, setToolboxEmpty] = useState<boolean>(true);
  const [toolbox, setToolbox] = useState<IToolbox[]>([]);

  useEffect(() => {
    const setInputs = async () => {
      try {
        const inputRegex = /<(\w+)>/g;
        const tools = await getTools();
        let allInputs: string[] = [];
        for (const tool of tools) {
          const matches = [...tool.run_command.matchAll(inputRegex)];
          const toolInputs: string[] = matches.map(
            (input: RegExpMatchArray) => {
              return input[1];
            }
          );
          allInputs = allInputs.concat(toolInputs);
        }
        setToolbox(() => {
          const uniqueInputs = [...new Set(allInputs)];
          return uniqueInputs.map((input: string): IToolbox => {
            return {
              inputName: input,
              value: `<${input}>`,
            };
          });
        });
      } catch (err) {
        console.log(err);
        // TODO: add 'handleErr' fn and toast
      }
    };

    setInputs();
  }, []);

  const setToolboxInput = (inputName: string, value: string) => {
    setToolbox((old: IToolbox[]) => {
      return old.map((currTool: IToolbox): IToolbox => {
        if (currTool.inputName === inputName) {
          return { inputName: inputName, value: value };
        } else {
          return currTool;
        }
      });
    });
    setToolboxEmpty(false);
  };

  const cleanToolbox = () => {
    setToolbox((old: IToolbox[]) => {
      return old.map((t: IToolbox) => {
        return {
          inputName: t.inputName,
          value: `<${t.inputName}>`,
        };
      });
    });
    setToolboxEmpty(true);
  };

  return (
    <ToolboxContext.Provider
      value={{
        toolbox: toolbox,
        setToolboxInput: setToolboxInput,
        cleanToolbox: cleanToolbox,
        toolboxEmpty: toolboxEmpty,
      }}
    >
      {children}
    </ToolboxContext.Provider>
  );
};

const useToolbox = () => {
  const context = useContext(ToolboxContext);
  if (!context) {
    throw new Error("useToolbox must be used within ToolboxProvider");
  }
  return context;
};

export { ToolboxProvider, useToolbox };
