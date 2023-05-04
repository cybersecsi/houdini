import AppRouter from '@/AppRouter';
import { RouterProvider } from 'react-router-dom';
import { ToolboxProvider } from '@/context';

function App() {
  return (
    <ToolboxProvider>
      <RouterProvider router={AppRouter} />
    </ToolboxProvider>
  );
}

export default App;