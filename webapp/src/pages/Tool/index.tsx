import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm'
import { CONFIG } from 'config';
import { ITool } from 'types';

const Loading = () => {
    return (
        <div className="flex items-center justify-center space-x-2 animate-bounce mt-16">
            <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
            <div className="w-8 h-8 bg-red-400 rounded-full"></div>
            <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
            <div className="w-8 h-8 bg-red-400 rounded-full"></div>
        </div>
    )
}

const Tool = () => {
    const { name } = useParams();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [currentTool, setCurrentTool] = useState<ITool>()
    const [md, setMd] = useState<string>()

    useEffect(() => {
        const setup = async () => {
            const _currentTool = CONFIG.TOOLS.find((tool: ITool) => tool.name === name)
            if (!_currentTool) {
                navigate('/');
                return;
            }

            //Set the Tool content
            try {
                const file = await import(`_tools/${_currentTool.name}.md`)
                const response = await fetch(file.default);
                const _md = await response.text();
                console.log(_md)
                setMd(_md);
                setCurrentTool(_currentTool)
                setTimeout(() => {
                    setIsLoading(false);
                }, 500)
            }
            catch (e) {
                navigate('/');
                return;
            }

        }
        setup()

    }, [name, navigate])

    if (isLoading || !md) {
        return (<Loading/>)
    }

    return (
        <>
            <h1 className="font-semibold">
                <Link className="text-sky-400 underline" to="/">..</Link> /{currentTool?.fancy_name}
            </h1>

            <h2>
                Quick Usage
            </h2>
            <p>
                For this tool the run command is:
            </p>
            <pre>
                <code>
                    {currentTool?.run_command}
                </code>
            </pre>

            <ReactMarkdown className="markdown-content" remarkPlugins={[gfm]}>{md}</ReactMarkdown>

            <h2>
                Official Documentation
            </h2>
            <p>
                Reference: <a className="text-sky-400 underline" href={currentTool?.official_doc}>{currentTool?.official_doc}</a>
            </p>
        </>
    )
}

export default Tool;