import {Text, View} from 'react-native';
import styles from './styles';
import UseShoppingList from './hooks/useShoppingList.hook';
import HeaderComponent from '../../components/headerGeneric/headerGeneric.component';

const ShoppingListScreen = () => {
  const {categorieColor, name} = UseShoppingList();
  return (
    <View style={styles.container}>
      <View>
        <HeaderComponent color={categorieColor} text={name} />
        <Text>{name}</Text>
      </View>
    </View>
  );
};

export default ShoppingListScreen;
