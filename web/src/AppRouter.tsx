import { createBrowserRouter, Outlet } from 'react-router-dom';
import GithubCorner from 'react-github-corner';
import { Header, Content, Footer, Toolbox } from '@/containers';
import { Home, Tool, NoMatch } from '@/pages';


const GenericRoute = () => {
  return (
      <>
          <Header/>
          <Toolbox />
          <div className='workspace'>
            <Content>
              <Outlet />
            </Content>
            <Footer/>
          </div>
          <GithubCorner className='z-50 fixed right-0 top-0' href="https://github.com/cybersecsi/HOUDINI" bannerColor="#475569"/>
      </>
  )
}


const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <GenericRoute />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: '*',
        element: <NoMatch />,
      },
      {
        path: '/tool/:name',
        element: <Tool />
      }
    ]
  },
]);

export default AppRouter;