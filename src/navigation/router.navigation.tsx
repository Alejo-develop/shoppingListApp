import {NavigationContainer} from '@react-navigation/native';
import Stacks from './config/stacks.navigation';

const Router = () => {
  return (
    <NavigationContainer>
      <Stacks />
    </NavigationContainer>
  );
};

export default Router;
