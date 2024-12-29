import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { View, StyleSheet } from 'react-native';
import ShoppingListScreen from '../../screens/shoppingList/shoppingList.screen';
import HomeScreen from '../../screens/home/home.screen';
import MenuScreen from '../../screens/menu/menu.screen';
import { height, primaryBlack, violet, width } from '../../utils/style.constants';
import TabBarIcon from './tab.icon';

const Tab = createBottomTabNavigator()

const 
TabIcon = () => (
  <Tab.Navigator
  initialRouteName='home'
    screenOptions={({route}) => ({
      tabBarIcon: ({color, size}) => (
        <View>
          <TabBarIcon color={color} routeName={route.name} size={height * 0.025}/>
        </View>
      ),

      tabBarInactiveTintColor: 'white',
      tabBarActiveTintColor: violet,
      tabBarStyle: styles.tabBarStyle,
      tabBarLabelStyle: styles.tabBarLabelStyle,
      tabBarItemStyle: styles.tabBarItemStyle,
      headerShown: false,
    })}>
    <Tab.Screen name="shopping" component={ShoppingListScreen} />
    <Tab.Screen name="home" component={HomeScreen} />
    <Tab.Screen name="menu" component={MenuScreen} />
  </Tab.Navigator>
);

const styles = StyleSheet.create({
  tabBarStyle: {
    position: 'absolute',
    backgroundColor: primaryBlack,
    width: width * 0.6, 
    height: 55,
    alignSelf: 'center',
    bottom: 19, 
    left: width * 0.2,
  },
  tabBarLabelStyle: {
    fontSize: 0,
  },
  tabBarItemStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default TabIcon