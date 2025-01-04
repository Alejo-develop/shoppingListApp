import {FlatList, Text, View} from 'react-native';
import styles from './styles';
import UseShoppingList from './hooks/useShoppingList.hook';
import HeaderComponent from '../../components/headerGeneric/headerGeneric.component';
import ItemCardComponent from '../../components/itemCard/itemCard.component';

const ShoppingListScreen = () => {
  const {categorieColor, name, items, error} = UseShoppingList();
  return (
    <View style={styles.container}>
      <HeaderComponent color={categorieColor} text={name} />

      {error ? (
        <View>
          <Text>{error}</Text>
        </View>
      ) : (
        <View style={styles.containerShoppingList}>
          <FlatList
            data={items}
            contentContainerStyle={styles.list}
            renderItem={({item}) => (
              <ItemCardComponent
                categorie={item.categorie}
                color={categorieColor}
                id={item.id}
                date={item.formattedDate ? item.formattedDate : ''}
                price={item.price}
                title={item.name}
                description={item.description}
                img={item.img ? item.img : ''}
                key={item.id}
              />
            )}
            numColumns={1}
          />
        </View>
      )}
    </View>
  );
};

export default ShoppingListScreen;
