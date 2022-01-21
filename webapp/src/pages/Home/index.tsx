import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { CONFIG } from 'config';
import { ITool } from 'types';
import Fuse from 'fuse.js';
import { useHotkeys } from 'react-hotkeys-hook';
import { BsArrowReturnRight } from "react-icons/bs";
import { ClipboardCode } from 'components';


const Home = () => {
    const [fuse, setFuse] = useState<Fuse<ITool>>();
    const [tools, setTools] = useState<ITool[]>([])
    const [results, setResults] = useState<ITool[]>([]);
    const [showShortcutKeys, setShowShortcuteKeys] = useState<boolean>(false);
    const searchbarRef = useRef<any>();
    const houdiniDescriptionRef = useRef<any>();

    useHotkeys('shift+k', (event: KeyboardEvent) => {
        event.preventDefault();
        event.stopPropagation()
        const intersectionObserver = new IntersectionObserver((entries) => {
            let [entry] = entries;
            if (entry.isIntersecting) {
                searchbarRef.current.focus();
            }
        });
        intersectionObserver.observe(houdiniDescriptionRef.current);
        houdiniDescriptionRef.current.scrollIntoView({behavior: 'smooth' })        
        return false;
    }, {enableOnTags: ["INPUT"]});

    useEffect(() => {
        // Set search function
        const _tools = CONFIG.TOOLS.sort((a: ITool , b:ITool) => a.name > b.name ? 1 : -1 )
        const _fuse = new Fuse(_tools, {
            keys: [
                'fancy_name',
                'name',
                'organization'
            ]
        })
        // Set state
        setTools(_tools)
        setResults(_tools)
        setFuse(_fuse)
        // Handle shortcut keys positioning on screen
        const searchbarIntersectionObserver = new IntersectionObserver((entries) => {
            let [entry] = entries;
            if (!entry.isIntersecting) {
                setShowShortcuteKeys(true);
            }
            else {
                setShowShortcuteKeys(false)
            }
        })
        searchbarIntersectionObserver.observe(searchbarRef.current);
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

    return (
        <>


            <div ref={houdiniDescriptionRef}>
                <p className="text-justify">
                    <b>HOUDINI</b> (Hundreds of Offensive and Useful Docker Images for Network Intrusion)  is a curated list of <b>Network Security</b> related Docker Images for Network Intrusion purposes.
                    A lot of images are created and kept updated through our <b><a href="https://github.com/cybersecsi/RAUDI">RAUDI</a></b> project which is able to automatically update a Docker Image every time there is a new version. <br/>
                    HOUDINI is a collaborative project created by <b><a href="https://secsi.io" target="_blank" rel="noreferrer">SecSI</a></b> where everyone can contribute with new webapp features or just by adding a new tool. We are happy to share our knowledge with the <b>open source</b> community because we think that in this way we can all grow up and become better at our jobs.
                </p>
            </div>

            <div>
                <label className="relative block my-6">
                    <span className="sr-only">Search</span>
                    <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                        <svg className="h-5 w-5 fill-gray-300" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path>
                        </svg>
                    </span>
                    <input 
                        className="placeholder:italic placeholder:text-gray-400 block bg-white w-full border border-gray-300 rounded-md py-4 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" 
                        placeholder={`Search among ${CONFIG.TOOLS.length} tools...`}
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

                            <ClipboardCode fixedBtn>
                                {tool.run_command}
                            </ClipboardCode>
                        </div>
                    </>
                )
            })}

            {/* Shortcut for searchbar */}
            {showShortcutKeys && (
                <span className="fixed right-8 bottom-8 flex items-center pl-2 select-none mr-1 hidden lg:block">
                    <span className="border-2 border-gray-300 text-gray-400 rounded text-base p-1 mr-1">Shift</span>
                    <span className="border-2 border-gray-300 text-gray-400 rounded text-base p-1">K</span>
                </span>
            )}
        </>
    )
}

export default Home;