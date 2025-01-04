import {FlatList, Text, View} from 'react-native';
import styles from './styles';
import UseShoppingList from './hooks/useShoppingList.hook';
import ButtonCategorieComponent from '../../components/buttonCategorie/buttonCategorie.component';

const ShoppingListScreen = () => {
  const {categories} = UseShoppingList();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shopping List</Text>
      <View style={styles.containerCategories}>
        <FlatList
          data={categories}
          contentContainerStyle={styles.list}
          renderItem={({item}) => (
            <ButtonCategorieComponent
              img={item.img ? item.img : ''}
              text={item.name}
              color={item.color}
            />
          )}
          numColumns={2}
        />
      </View>
    </View>
  );
};

export default ShoppingListScreen;
