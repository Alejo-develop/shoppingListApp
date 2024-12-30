import { GlobalProvider } from './src/context/global.context';
import Router from './src/navigation/router.navigation';

const App = () => {
  return (
    <GlobalProvider>
      <Router />
    </GlobalProvider>
  )
};
export default App;
