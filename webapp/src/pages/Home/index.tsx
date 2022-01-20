import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { CONFIG } from 'config';
import { ITool } from 'types';
import Fuse from 'fuse.js';
import { useHotkeys } from 'react-hotkeys-hook';
import { BsArrowReturnRight } from "react-icons/bs";


const Home = () => {
    const [fuse, setFuse] = useState<Fuse<ITool>>();
    const [tools, setTools] = useState<ITool[]>([])
    const [results, setResults] = useState<ITool[]>([]);
    const searchbarRef = useRef<any>();

    useHotkeys('shift+k', (event: KeyboardEvent) => {
        event.preventDefault();
        event.stopPropagation()
        const intersectionObserver = new IntersectionObserver((entries) => {
            let [entry] = entries;
            if (entry.isIntersecting) {
                searchbarRef.current.focus();
            }
        });
        intersectionObserver.observe(searchbarRef.current);
        searchbarRef.current.scrollIntoView({behavior: 'smooth' })        
        return false;
    }, {enableOnTags: ["INPUT"]});

    useEffect(() => {
        const _tools = CONFIG.TOOLS.sort((a: ITool , b:ITool) => a.name > b.name ? 1 : -1 )
        const _fuse = new Fuse(_tools, {
            keys: [
                'fancy_name',
                'name',
            ]
        })
        setTools(_tools)
        setResults(_tools)
        setFuse(_fuse)
    }, [])

    const searchWithFuse = (ev: any) => {
        //ev.preventDefault();
        const query = ev.target.value
        if (!query || !fuse) {
            setResults(tools)
            return;
        }
        
        setResults(fuse.search(query).map((result) => result.item));
    }

    const setClipboard = (cmd: string) => {
        navigator.clipboard.writeText(cmd);
    }

    return (
        <>
            <div className="flex mb-8">
                <a className="mx-auto" href="https://github.com/cybersecsi/HOUDINI">
                    <button className="text-white rounded bg-cyan-600 p-3 mt-4 hover:bg-cyan-800 transition-colors duration-300 uppercase">View Source Code</button>
                </a>
            </div>

            <div>
                <p className="text-justify">
                    <b>HOUDINI</b> (Hundreds of Offensive and Useful Docker Images for Network Intrusion)  is a curated list of <b>Network Security</b> related Docker Images for Network Intrusion purposes.
                    A lot of images are created and kept updated through our <b><a href="https://github.com/cybersecsi/RAUDI">RAUDI</a></b> project which is able to automatically update a Docker Image every time there is a new version.
                </p>

                <label className="relative block my-6">
                    <span className="sr-only">Search</span>
                    <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                        <svg className="h-5 w-5 fill-gray-300" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path>
                        </svg>
                    </span>
                    <input className="placeholder:italic placeholder:text-gray-400 block bg-white w-full border border-gray-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for a tool..." type="text" name="search" ref={searchbarRef} onChange={searchWithFuse}/>


                    <span className="absolute inset-y-0 right-0 flex items-center pl-2 select-none mr-1">
                        <span className="border-2 border-gray-200 text-gray-300 rounded text-xs p-1 mr-1">Shift</span>
                        <span className="border-2 border-gray-200 text-gray-300 rounded text-xs p-1">K</span>
                    </span>
                </label>
            </div>


            {results.map((tool: ITool) => {
                return (
                    <>
                        <h3 className="text-center">
                            <Link to={`/tool/${tool.name}`} className='no-underline'>
                                {tool.fancy_name} 
                                <BsArrowReturnRight className="inline ml-1 pt-1"/>
                            </Link>
                        </h3>
                        <div className="block rounded-lg shadow-lg bg-white w-full mb-16 p-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center md:text-left">
                                {/* Docker Image */}
                                <div className="break-words"><b>Docker Image</b>: {tool.organization ?? CONFIG.ORGANIZATION}/{tool.name}</div>
                                {/* Official Doc */}
                                <div className="break-words">
                                    <b>Official Doc</b>: <a href={tool.official_doc} target="_blank" rel="noreferrer">{tool.official_doc}</a>
                                </div>
                                {/* Labels */}
                                {/*
                                <div className="font-bold break-words">
                                    <b>Labels</b>:
                                </div>
                                */}
                            </div>
                            <div className="relative">
                                <pre className="relative">
                                    <code>{tool.run_command}</code>
                                </pre>     
                                                      
                                <div className='group'>
                                    <button className="absolute inset-y-0 right-0 flex items-center p-2 rounded bg-cyan-600 hover:bg-cyan-800 active:bg-cyan-400 transition-colors duration-300" onClick={() => setClipboard(tool.run_command)}>
                                        {/* Copy Icon */}
                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14.89" viewBox="0 0 15 14.89" fill="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                                            <path d="M10,14.89H0v-10H10Zm-9-1H9v-8H1Z" />
                                            <polygon points="15 9.89 10 9.89 10 8.89 14 8.89 14 0.89 6 0.89 6 4.89 5 4.89 5 -0.11 15 -0.11 15 9.89"/>
                                        </svg>
                                    </button>
                                    {/* Tooltip */}
                                    <div className="absolute mx-2 right-0 bottom-11 z-0 opacity-0 group-active:opacity-100 group-active:transition-opacity duration-1000 cursor-default">
                                        <div className="bg-black text-white text-xs rounded py-1 px-4 bottom-full">
                                            Copied!
                                            <svg className="absolute text-black h-2 w-full left-7 top-full" x="0px" y="0px" viewBox="0 0 255 255"><polygon className="fill-current" points="0,0 127.5,127.5 255,0"/></svg>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </>
                )
            })}
        </>
    )
}

export default Home;