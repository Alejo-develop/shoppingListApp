import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../../screens/home/home.screen';
import ShoppingListScreen from '../../screens/shoppingList/shoppingList.screen';
import MenuScreen from '../../screens/menu/menu.screen';
import CreateCategoryScreen from '../../screens/createCategory/createCategory.screen';
import MainScreen from '../../screens/main.screen';
import AddNewItemScreen from '../../screens/addPurchaseOrWish/purchaseOrWish.screen';

const Stack = createNativeStackNavigator();

const Stacks = () => {
  return (
      <Stack.Navigator initialRouteName="main">
        <Stack.Screen
          name="main"
          component={MainScreen}
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
        <Stack.Screen
          name="createCategory"
          component={CreateCategoryScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="addnewitem"
          component={AddNewItemScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
  );
};

export default Stacks;
