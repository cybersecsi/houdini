import { useState } from 'react';
import { Link } from 'react-router-dom';
import GitHubButton from "react-github-btn";
import WhaleIcon from '@/assets/whale.png';
// import { Ads } from '@/components';
import { useScroll } from '@/utils/hooks';

interface IHeaderProps {
  type: "minimal" | "scrollable"
}

const Header = ({type}: IHeaderProps) => {
  const [headerFixed, setHeaderFixed] = useState<boolean>(false);
  const handleScroll = () => {
    const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollPosition > 224 && type === 'scrollable') {
      setHeaderFixed(true);
    } else {
      setHeaderFixed(false);
    }
  };
  useScroll(handleScroll);

    return (
        <>
            <header className={headerFixed || type === "minimal" ? 'blur-bg-white h-auto' : 'h-56'}>
              <div className="w-4/5 md:w-full container mx-auto py-3 font-Karla">
                  <h1 className="text-6xl text-center select-none flex justify-center align-center">
                      <Link to={`/`} className='no-underline text-slate-600 hover:text-slate-900'>
                          <img src={WhaleIcon} className="inline h-12" alt="Whale" />
                          <span className="font-semibold ml-2">HOUDINI</span>
                      </Link>

                  </h1>
                  
                  <div className={headerFixed || type === 'minimal' ? 'hidden' : 'flex justify-center mt-2'}>
                      <GitHubButton href="https://github.com/cybersecsi/HOUDINI" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star cybersecsi/HOUDINI on GitHub">Star</GitHubButton>
                  </div>
                  
                  <h2 className={headerFixed || type === 'minimal' ? 'hidden' : "text-3xl text-center mt-6 font-normal"}>Hundreds of Offensive and Useful Docker Images for Network Intrusion</h2>

                  {/*<Ads/>*/}
              </div>
            </header>

        </>
    )
}

export default Header;