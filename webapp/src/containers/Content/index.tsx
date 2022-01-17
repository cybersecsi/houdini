import routes from 'routes'
import { useRoutes } from "react-router-dom";

const Content = () => {
    const content = useRoutes(routes)

    return (
        <main className="bg-slate-100 py-6 grow border-0 border-t-4 border-slate-200 border-solid">
            <div className="container mx-auto font-Karla h-full">
                <div className="w-full mx-auto h-full">
                    {content}
                </div>
            </div>
        </main>
    )
}

export default Content;