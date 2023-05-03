import AppRouter from '@/AppRouter';
import { BrowserRouter } from 'react-router-dom';
import { ToolboxProvider } from '@/context';

function App() {
  return (
    <ToolboxProvider>
      <BrowserRouter>
        <AppRouter/>
      </BrowserRouter>
    </ToolboxProvider>
  );
}

export default App;