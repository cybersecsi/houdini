import { Header, Content, Footer, Toolbox } from '@/containers';
import GithubCorner from 'react-github-corner';

const AppRouter = () => {

    return (
        <>
            <Header/>
            <Toolbox />
            <Content/>
            <Footer/>
            <GithubCorner href="https://github.com/cybersecsi/HOUDINI" bannerColor="#475569"/>
        </>
    )
}

export default AppRouter;