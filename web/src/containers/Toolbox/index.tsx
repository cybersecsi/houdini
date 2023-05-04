import { useEffect } from 'react';
import { useForm, FormProvider } from 'react-hook-form'
import { useToolbox } from "@/context"
import { IHeaderType, IToolbox } from "@/types";
import { FaToolbox } from 'react-icons/fa';
import { useStyle } from '@/context/style';


// TODO:
// - responsive
// - overflow-y-scroll
// - hide & show

const Toolbox = () => {
  const { headerType, headerFixed } = useStyle();
  const formMethods = useForm({ mode: 'onChange' })
  const { toolbox, setToolboxInput, cleanToolbox, toolboxEmpty } = useToolbox();
  
  const clean = () => {
    for (const tool of toolbox) {
      formMethods.setValue(tool.inputName, '')
    }
    cleanToolbox()
  }

  return (
    <>
    <nav className={headerType === IHeaderType.minimal || headerFixed ? 'toolbox-minimal' : 'toolbox-scrollable'}>
      <div className='flex flex-col h-full gap-3 overflow-scroll p-4'>
        <FormProvider {...formMethods}>
            {toolbox.map((tool: IToolbox, key: number) => {
              return (
                <div key={key}>
                  <p>
                    Input name: <code className='inline bg-inherit'>{tool.inputName}</code>
                  </p>
                  <input 
                    className='textfield h-10'
                    {...formMethods.register(tool.inputName)}
                    type="text" 
                    onChange={(e: any) => setToolboxInput(tool.inputName, e.target.value)}/>
                </div>
              )
            })}
        </FormProvider>
      </div>
      <button 
        className='btn-common w-full bg-cyan-600 hover:bg-cyan-800 rounded-none'
        disabled={toolboxEmpty}
        onClick={() => clean()}>
        Clean
      </button>
    </nav>
    </>
  )
  
}

export default Toolbox;