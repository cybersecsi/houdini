import { Link } from 'react-router-dom';
import GitHubButton from "react-github-btn";
import WhaleIcon from '@/assets/whale.png';
// import { Ads } from '@/components';
import { useStyle } from '@/context/style';
import { IHeaderType } from '@/types';

const Header = () => {
  const { headerType, headerFixed } = useStyle(); 

    return (
        <>
            <header className={headerFixed || headerType === IHeaderType.minimal ? 'blur-bg-white h-auto' : 'h-56'}>
              <div className="w-4/5 md:w-full container mx-auto py-3 font-Karla">
                  <h1 className="text-6xl text-center select-none flex justify-center align-center">
                      <Link to={`/`} className='no-underline text-slate-600 hover:text-slate-900'>
                          <img src={WhaleIcon} className="inline h-12" alt="Whale" />
                          <span className="font-semibold ml-2">HOUDINI</span>
                      </Link>

                  </h1>
                  
                  <div className={headerFixed || headerType === IHeaderType.minimal ? 'hidden' : 'flex justify-center mt-2'}>
                      <GitHubButton href="https://github.com/cybersecsi/HOUDINI" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star cybersecsi/HOUDINI on GitHub">Star</GitHubButton>
                  </div>
                  
                  <h2 className={headerFixed || headerType === IHeaderType.minimal ? 'hidden' : "text-xl md:text-2xl lg:text-3xl text-center mt-6 font-normal"}>Hundreds of Offensive and Useful Docker Images for Network Intrusion</h2>

                  {/*<Ads/>*/}
              </div>
            </header>

        </>
    )
}

export default Header;