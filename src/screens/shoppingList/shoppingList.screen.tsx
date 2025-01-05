import {FlatList, Image, Text, View} from 'react-native';
import styles from './styles';
import UseShoppingList from './hooks/useShoppingList.hook';
import HeaderComponent from '../../components/headerGeneric/headerGeneric.component';
import ItemCardComponent from '../../components/itemCard/itemCard.component';
import ButtonShopingListScreen from './components/buttonShoppingList.component';
import { img } from '../../utils/img.constants';

const ShoppingListScreen = () => {
  const {categorieColor, name, items, error, itemType, handleButtonPress} =
    UseShoppingList();
  return (
    <View style={styles.container}>
      <HeaderComponent color={categorieColor} text={name} />

      <View style={styles.containerButtonsNav}>
        <ButtonShopingListScreen
          text="Purchases"
          color={categorieColor}
          onPress={() => handleButtonPress('purchase')}
        />
        <ButtonShopingListScreen
          text="Wishes"
          color={categorieColor}
          onPress={() => handleButtonPress('wish')}
        />
      </View>
      {error || items?.length === 0 ? (
        <View style={styles.containerError}>
          <Image source={{uri: itemType === 'purchase' ? img.perro1 : img.perro2}} style={styles.imgError}/>
          <Text style={styles.textError}>{error}</Text>
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
                itemType={itemType}
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
