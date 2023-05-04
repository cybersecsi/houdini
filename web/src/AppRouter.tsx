import { createBrowserRouter, Outlet } from 'react-router-dom';
import GithubCorner from 'react-github-corner';
import { Header, Content, Footer, Toolbox } from '@/containers';
import { Home, Tool, NoMatch } from '@/pages';


const ScrollableRoute = () => {

  return (
      <>
          <Header type='scrollable'/>
          <Toolbox />
          <Content type='scrollable'>
            <Outlet />
          </Content>
          <Footer/>
          <GithubCorner className='z-50 fixed right-0 top-0' href="https://github.com/cybersecsi/HOUDINI" bannerColor="#475569"/>
      </>
  )
}

const MinimalRoute = () => {
    return (
        <>
            <Header type='minimal'/>
            <Toolbox />
            <Content type='minimal'>
              <Outlet />
            </Content>
            <Footer/>
            <GithubCorner className='z-50 fixed right-0 top-0' href="https://github.com/cybersecsi/HOUDINI" bannerColor="#475569"/>
        </>
    )
}



const AppRouter = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        element: <ScrollableRoute />,
        children: [
          {
            path: '',
            element: <Home />,
          },
          {
            path: '*',
            element: <NoMatch />,
          }
        ]

      },
      {
        element: <MinimalRoute />,
        children: [
          {
            path: '/tool/:name',
            element: <Tool />
          }
        ]
      }
    ]
  },

]);

export default AppRouter;