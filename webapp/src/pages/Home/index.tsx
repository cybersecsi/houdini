import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CONFIG } from 'config';
import { ITool } from 'types';
import Fuse from 'fuse.js';

const fuse = new Fuse(CONFIG.TOOLS, {
    keys: [
        'fancy_name',
        'name',
        'official_doc'
    ]
});


const Home = () => {
    const [results, setResults] = useState<ITool[]>(CONFIG.TOOLS);

    const searchWithFuse = (ev: any) => {
        const query = ev.target.value
        if (!query) {
            setResults(CONFIG.TOOLS)
            return;
        }

        setResults(fuse.search(query).map((result) => result.item));
    }

    const setClipboard = (name: string) => {
        navigator.clipboard.writeText(`docker pull ${CONFIG.ORGANIZATION}/${name}`);
    }

    return (
        <>
            <div className="flex mb-8">
                <a className="mx-auto" href="https://github.com/cybersecsi/HOUDINI">
                    <button className="text-white rounded bg-cyan-600 p-3 mt-4 hover:bg-cyan-800 uppercase">View Source Code</button>
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
                    <input className="placeholder:italic placeholder:text-gray-400 block bg-white w-full border border-gray-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for a tool..." type="text" name="search" onChange={searchWithFuse}/>
                </label>
            </div>

            <div className="grid grid-cols-4 gap-4 text-center my-4">
                <div><b>Tool</b></div>
                <div><b>Docker Image</b></div>
                <div><b>Official Doc</b></div>
                <div><b>Quick Pull</b></div>
                {results.map((tool: ITool) => {
                    return (
                        <>
                            <div className="text-sky-400 font-bold underline break-words">
                                <Link to={`/tool/${tool.name}`}>{tool.fancy_name}</Link>
                            </div>
                            <div className="break-words">{tool.organization ?? CONFIG.ORGANIZATION}/{tool.name}</div>
                            <div className="text-sky-400 font-bold underline break-words">
                                <a href={tool.official_doc}>{tool.official_doc}</a>
                            </div>
                            <div className="mx-auto">
                                <div className="p-2 rounded bg-cyan-600 text-white hover:bg-cyan-800 active:bg-cyan-400 cursor-pointer" onClick={() => setClipboard(tool.name)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14.89" viewBox="0 0 15 14.89" fill="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                                    <path d="M10,14.89H0v-10H10Zm-9-1H9v-8H1Z" />
                                    <polygon points="15 9.89 10 9.89 10 8.89 14 8.89 14 0.89 6 0.89 6 4.89 5 4.89 5 -0.11 15 -0.11 15 9.89"/>
                                </svg>
                                </div>
                            </div>
                        </>
                    )
                })}
            </div>
        </>
    )
}

export default Home;