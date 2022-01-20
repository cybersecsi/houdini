import SecsiLogo from 'assets/secsi.png';
import { FaGithub, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <>
            <footer className="text-white body-font bg-gray-900 py-8">
                <div className="container lg:max-w-5xl px-5 py-8 mx-auto flex items-center md:flex-row flex-col">
                    <div className="flex title-font font-medium items-center text-gray-900 mb-0">
                        <img src={SecsiLogo} className="w-8 h-8" alt="SecSI Logo"/>
                        <span className="ml-3 text-sm font-bold uppercase tracking-tight text-white">HOUDINI</span>
                    </div>

                    <p className="text-sm sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
                        © 2022 — Made with ❤️ by
                        <a href="https://secsi.io" className="ml-1 underline" rel="noopener noreferrer" target="_blank">SecSI</a>
                    </p>

                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                        <a className="ml-3 text-gray-500 hover:text-white transition-colors duration-300" href="https://twitter.com/cybersecsi" target="_blank" rel="noopener noreferrer">
                            <FaTwitter size={24}/>
                        </a>

                        <a className="ml-3 text-gray-500 hover:text-white transition-colors duration-300" href="https://github.com/cybersecsi" target="_blank" rel="noopener noreferrer">
                            <FaGithub size={24}/>
                        </a>
                    </span>
                </div>
            </footer>
        </>
    )
}

export default Footer;