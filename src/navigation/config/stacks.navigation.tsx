import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../../screens/home/home.screen';
import ShoppingListScreen from '../../screens/shoppingList/shoppingList.screen';
import MenuScreen from '../../screens/menu/menu.screen';
import TabIcon from './tab.navigation';
import LayoutComponent from '../../components/layout/layout.component';

const Stack = createNativeStackNavigator();

const Stacks = () => {
  return (
    <LayoutComponent>
      <Stack.Navigator initialRouteName="main">
        <Stack.Screen
          name="main"
          component={TabIcon}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="shopping"
          component={ShoppingListScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="menu"
          component={MenuScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </LayoutComponent>
  );
};

export default Stacks;
