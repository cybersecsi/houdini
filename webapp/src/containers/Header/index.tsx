import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <header className="container mx-auto py-6 font-Karla">
                <h1 className="text-6xl text-center select-none">
                    <Link to={`/`} className='no-underline text-slate-600 hover:text-slate-900'>
                        🐳 <span className="font-semibold">HOUDINI</span>
                    </Link>

                </h1>
                <h2 className="text-3xl text-center mt-6 font-normal">Hundreds of Offensive and Useful Docker Images for Network Intrusion</h2>
            </header>

        </>
    )
}

export default Header;