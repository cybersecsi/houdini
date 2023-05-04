import AppRouter from '@/AppRouter';
import { RouterProvider } from 'react-router-dom';
import { ToolboxProvider } from '@/context';
import { StyleProvider } from './context/style';

function App() {
  return (
    <StyleProvider>
      <ToolboxProvider>
        <RouterProvider router={AppRouter} />
      </ToolboxProvider>
    </StyleProvider>
  );
}

export default App;