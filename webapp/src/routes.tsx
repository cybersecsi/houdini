import { Home, Tool, NoMatch } from 'pages';
import type { RouteObject } from "react-router-dom";

const routes: RouteObject[] = [
    {
      path: "/",
      children: [
        { index: true, element: <Home /> },
        { path: "/tool/:name", element: <Tool/> },
        { path: "*", element: <NoMatch /> }
      ]
    }
];

export default routes;