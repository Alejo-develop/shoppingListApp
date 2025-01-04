import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import UseShoppingList from './hooks/useShoppingList.hook';
import ButtonCategorieComponent from '../../components/buttonCategorie/buttonCategorie.component';

const ShoppingListScreen = () => {
  const {categories} = UseShoppingList();

  return (
    <View style={styles.container}>
      <FlatList data={categories} contentContainerStyle={styles.list} 
      renderItem={({item}) => (
        <ButtonCategorieComponent img={item.img ? item.img : ''}/>
      )}
      numColumns={2}/>
    </View>
  );
};

export default ShoppingListScreen;
