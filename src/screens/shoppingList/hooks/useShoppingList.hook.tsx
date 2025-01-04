import {RouteProp, useRoute} from '@react-navigation/native';
import { useState } from 'react';

type RootStackParamList = {shoppingList: {color: string, id: number, name: string}};

const UseShoppingList = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'shoppingList'>>();
  const {color, id, name} = route.params;

  const [categorieColor, setCategorieColor] = useState<string>(color)

  return {
    categorieColor,
    name
  }
};

export default UseShoppingList;
