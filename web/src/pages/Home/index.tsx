import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { CONFIG, TOOLS_LIST } from '@/config';
import { ITool, ICategory, IHeaderType } from '@/types';
import Fuse from 'fuse.js';
import { useHotkeys } from 'react-hotkeys-hook';
import { Helmet } from "react-helmet";
import { BsArrowReturnRight } from "react-icons/bs";
import { ClipboardCode } from '@/components';
import { replaceHoudiniVariables, getTools } from '@/utils/helper';
import { useToolbox } from '@/context';
import { IDynamicTool } from '@/types/ITool';
import { useStyle } from '@/context/style';

const Home = () => {
    const {setHeaderType} = useStyle();
    const { toolbox } = useToolbox();
    const [fuse, setFuse] = useState<Fuse<IDynamicTool>>();
    const [tools, setTools] = useState<IDynamicTool[]>([]);
    const [categories, setCategories] = useState<ICategory[]>([]);
    const [results, setResults] = useState<IDynamicTool[]>([]);
    const [showShortcutKeys, setShowShortcuteKeys] = useState<boolean>(false);
    const searchbarRef = useRef<any>();
    const houdiniDescriptionRef = useRef<any>();

    useHotkeys('shift+k', (event: KeyboardEvent) => {
        event.preventDefault();
        event.stopPropagation();
        const intersectionObserver = new IntersectionObserver((entries) => {
            const [entry] = entries;
            if (entry.isIntersecting) {
                searchbarRef.current.focus();
            }
        });
        intersectionObserver.observe(houdiniDescriptionRef.current);
        houdiniDescriptionRef.current.scrollIntoView({behavior: 'smooth' })        
        return false;
    }, {enableOnFormTags: ["INPUT"]});

    useEffect(() => {
      const setup = async () => {
        let _tools = await getTools();
        _tools = _tools.sort((a: ITool , b: ITool) => a.name > b.name ? 1 : -1 )
        const dynamicTools = _tools.map((t: ITool): IDynamicTool => {
          return {
            ...t,
            current_run_command: t.run_command,
          }
        })
        const _categories: ICategory[] = [...new Set(_tools.map((tool: ITool) => tool.categories).flat())].map((category: string) => {return {name:category, active: false}})
          const _fuse = new Fuse(dynamicTools, {
            keys: [
                'fancy_name',
                'name',
                'organization'
            ]
        })
        // Set state
        setTools(dynamicTools);
        setResults(dynamicTools);
        setFuse(_fuse);
        setCategories(_categories);
        // Handle shortcut keys positioning on screen
        const searchbarIntersectionObserver = new IntersectionObserver((entries) => {
            const [entry] = entries;
            if (!entry.isIntersecting) {
                setShowShortcuteKeys(true);
            }
            else {
                setShowShortcuteKeys(false)
            }
        })
        searchbarIntersectionObserver.observe(searchbarRef.current);
      }

      setHeaderType(IHeaderType.scrollable);
      setup();
    }, [])

    useEffect(() => {    
      const updatedTools = tools.map((t: IDynamicTool) => {
        return {
          ...t,
          current_run_command: replaceHoudiniVariables(t.run_command, toolbox)
        }
      })
      setTools(updatedTools)
      setResults(updatedTools);
      
    }, [toolbox])

    const searchWithFuse = (ev: any) => {
        const query = ev.target.value
        if (!query || !fuse) {
            setResults(tools)
            return;
        }
        
        setResults(fuse.search(query).map((result) => result.item));
        
        //Reset categories when searching
        const _categories = categories.map((category: ICategory) => { return  {name: category.name, active: false} })
        setCategories(_categories);
    }

    const toggleCategory = (targetCategory: ICategory) => {
        const _categories = categories.map((category: ICategory) => {
            if (category.name === targetCategory.name) {
                return {
                    name: category.name,
                    active: !category.active,
                }
            }
            else {
                return category
            }
        })

        const activeCategories = _categories.filter((category: ICategory) => category.active).map((category: ICategory) => category.name);
        if (activeCategories.length > 0) {
            const _results = tools.filter((result: IDynamicTool) => {
                return result.categories.some((category: string) => {
                    return activeCategories.indexOf(category) >= 0;
                })
            })
            setResults(_results);
        }
        else {
            setResults(tools)
        }
        setCategories(_categories);
    }

    return (
        <>
            <Helmet>
              <title>HOUDINI: Hundreds of Offensive and Useful Docker Images for Network Intrusion</title>
              <meta name="description" content="HOUDINI (Hundreds of Offensive and Useful Docker Images for Network Intrusion) is a curated list of Network Security related Docker Images for Network Intrusion purposes. A lot of images are created and kept updated through our RAUDI project which is able to automatically update a Docker Image every time there is a new version." />
            </Helmet>
            <div ref={houdiniDescriptionRef}>
                <p className="text-justify">
                    <b>HOUDINI</b> (Hundreds of Offensive and Useful Docker Images for Network Intrusion)  is a curated list of <b>Network Security</b> related Docker Images for Network Intrusion purposes.
                    A lot of images are created and kept updated through our <b><a href="https://github.com/cybersecsi/RAUDI">RAUDI</a></b> project which is able to automatically update a Docker Image every time there is a new version. <br/>
                    HOUDINI is a collaborative project created by <b><a href="https://secsi.io" target="_blank" rel="noreferrer">SecSI</a></b> where everyone can contribute with new webapp features or just by adding a new tool. We are happy to share our knowledge with the <b>open source</b> community because we think that in this way we can all grow up and become better at our jobs.
                </p>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap justify-center mt-4">
                {categories.map((category: ICategory, key: number) => {
                    const spanClasses = category.active ? "border-sky-600 text-sky-700 hover:border-sky-400 hover:text-sky-500" : "border-gray-300 text-gray-400 hover:border-gray-500 hover:text-gray-600"
                    return (
                        <span key={`category-${key}`} className={`border-2 p-1 rounded m-1 cursor-pointer transition-colors duration-300 ${spanClasses}`} onClick={() => toggleCategory(category)}>
                            {category.name}
                        </span>
                    )
                })}
            </div>

            {/* Search bar */}
            <div>
                <label className="relative block my-6">
                    <span className="sr-only">Search</span>
                    <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                        <svg className="h-5 w-5 fill-gray-300" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
                        </svg>
                    </span>
                    <input 
                        className="placeholder:italic placeholder:text-gray-400 block bg-white w-full border border-gray-300 rounded-md py-4 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" 
                        placeholder={`Search among ${TOOLS_LIST.tools.length} tools...`}
                        type="text" 
                        name="search" 
                        ref={searchbarRef} 
                        onChange={searchWithFuse}
                    />

                    <span className="absolute inset-y-0 right-0 flex items-center pl-2 select-none mr-1">
                        <span className="border-2 border-gray-200 text-gray-300 rounded text-xs p-1 mr-1">Shift</span>
                        <span className="border-2 border-gray-200 text-gray-300 rounded text-xs p-1">K</span>
                    </span>
                </label>
            </div>

            {results.map((tool: IDynamicTool) => {
                return (
                    <div key={tool.name}>
                        <h3 className="text-center">
                            <Link to={`/tool/${tool.name}`} className='no-underline'>
                                {tool.fancy_name} 
                                <BsArrowReturnRight className="inline ml-1 pt-1"/>
                            </Link>
                        </h3>
                        {tool.description && (
                            <h5 className="text-center mt-2 mb-6">{tool.description}</h5>
                        )}
                        <div className="block rounded-lg shadow-lg bg-white w-full mb-16 p-4">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center md:text-left items-center">
                                {/* Docker Image */}
                                <div className="break-words"><b>Docker Image</b>: {tool.organization ?? CONFIG.ORGANIZATION}/{tool.name}</div>
                                {/* Official Doc */}
                                <div className="break-words">
                                    <b>Official Doc</b>: <a href={tool.official_doc} target="_blank" rel="noreferrer">{tool.official_doc}</a>
                                </div>
                                {/* Categories */}
                                <div className="break-words flex flex-wrap items-center md:justify-left justify-center">
                                    <b>Categories</b>:
                                        {tool.categories?.map((category: string) => {
                                            return (
                                                <span key={`${tool.name}-${category}`} className="border-2 border-gray-300 text-gray-400 p-1 rounded m-1">
                                                    {category}
                                                </span>
                                            )
                                        })}
                                </div>
                                
                            </div>

                            <ClipboardCode fixedBtn>
                                {tool.current_run_command}
                            </ClipboardCode>
                        </div>
                    </div>
                )
            })}

            {/* Shortcut for searchbar */}
            {showShortcutKeys && (
                <span className="fixed right-8 bottom-8 flex items-center pl-2 select-none mr-1 hidden lg:block bg-white p-2 shadow-md rounded-md">
                    <span className="border-2 border-gray-300 text-gray-400 rounded text-base p-1 mr-1">Shift</span>
                    <span className="border-2 border-gray-300 text-gray-400 rounded text-base p-1">K</span>
                </span>
            )}
        </>
    )
}

export default Home;