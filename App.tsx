import Toast from 'react-native-toast-message';
import {GlobalProvider} from './src/context/global.context';
import Router from './src/navigation/router.navigation';
import toastConfig from './src/components/message/message.config';

const App = () => {
  return (
    <GlobalProvider>
      <Router />
      <Toast config={toastConfig}/>
    </GlobalProvider>
  );
};
export default App;
