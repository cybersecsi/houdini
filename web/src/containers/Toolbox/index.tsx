import { useEffect, useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form'
import { useToolbox } from "@/context"
import { IToolbox } from "@/types";
import { FaToolbox } from 'react-icons/fa';


// TODO:
// - responsive
// - overflow-y-scroll
// - hide & show

const Toolbox = () => {
  const [toolboxOpen, setToolboxOpen] = useState<boolean>(false);
  const formMethods = useForm({ mode: 'onChange' })
  const { toolbox, setToolboxInput, cleanToolbox } = useToolbox();
  
  const clean = () => {
    for (const tool of toolbox) {
      formMethods.setValue(tool.inputName, '')
    }
    cleanToolbox()
  }

  const allowOverflow = () => {
    document.body.style.overflowY = 'scroll';
  };

  useEffect(() => {
    if (toolboxOpen) {
      window.scrollTo(0, 0);
      document.body.style.overflowY = 'hidden';
    } else {
      allowOverflow()
    }
  }, [toolboxOpen]);

  if (!toolboxOpen) {
    return (
      <button className='btn-common fixed left-4 top-4 font-Karla flex items-center gap-2' onClick={() => setToolboxOpen(true)}>
        Toolbox <FaToolbox />
      </button>
    )
  } else return (
    <div className='w-full h-full backdrop-blur-sm flex justify-start absolute bottom-0 left-0 blur-bg z-50'>

    <nav className='w-14 md:w-72 z-30 fixed text-slate-800 toolbox bg-gray-200 flex flex-col shadow-lg'>
        <button 
          className='btn-common w-full bg-rose-600 hover:bg-rose-800 rounded-b-none'
          onClick={() => setToolboxOpen(false)}>
          Close
        </button>
        <button 
          className='btn-common w-full bg-cyan-600 hover:bg-cyan-800 rounded-none'
          onClick={() => clean()}>
          Clean
        </button>
        <div className='flex flex-col h-full gap-3 overflow-scroll p-4'>
          <FormProvider {...formMethods}>
              {toolbox.map((tool: IToolbox, key: number) => {
                return (
                  <div className='last:pb-4' key={key}>
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
    </nav>
    </div>
  )
  
}

export default Toolbox;