import {FlatList, Image, Text, View} from 'react-native';
import styles from './styles';
import UseShoppingList from './hooks/useShoppingList.hook';
import HeaderComponent from '../../components/headerGeneric/headerGeneric.component';
import ItemCardComponent from '../../components/itemCard/itemCard.component';
import ButtonShopingListScreen from './components/buttonShoppingList.component';
import {img} from '../../utils/img.constants';
import InfoCategorieModal from '../../components/infoCategorieModal/infoCategorie.modal';

const ShoppingListScreen = () => {
  const {
    categorieColor,
    name,
    items,
    error,
    itemType,
    focused,
    categorie,
    isModalInfoVisible,
    onCloseModal,
    handleButtonPress,
  } = UseShoppingList();

  return (
    <View style={styles.container}>
      <HeaderComponent color={categorieColor} text={name} />

      <View style={styles.containerButtonsNav}>
        <ButtonShopingListScreen
          text="Purchases"
          color={categorieColor}
          onPress={() => handleButtonPress('purchase')}
          isFocused={focused === 'purchase'}
        />
        <ButtonShopingListScreen
          text="Wishes"
          color={categorieColor}
          onPress={() => handleButtonPress('wish')}
          isFocused={focused === 'wish'}
        />
        <ButtonShopingListScreen
          text="Settings"
          color={categorieColor}
          onPress={() => handleButtonPress('settings')}
          isFocused={focused === 'settings'}
        />
      </View>
      {error || items?.length === 0 ? (
        <View style={styles.containerError}>
          <Image
            source={{uri: itemType === 'purchase' ? img.perro1 : img.perro2}}
            style={styles.imgError}
          />
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
                categorieId={item.categorieId ? item.categorieId : 0}
                color={categorieColor}
                id={item.id}
                date={item.date}
                price={item.price}
                formattedDate={item.formattedDate ? item.formattedDate : ''}
                title={item.name}
                description={item.description}
                img={item.img ? item.img : ''}
                key={item.id}
                itemType={itemType}
              />
            )}
            numColumns={1}
          />

          <InfoCategorieModal 
          visibleModal={isModalInfoVisible}
          onClose={onCloseModal}
          categorie={categorie}
          />
        </View>
      )}
    </View>
  );
};

export default ShoppingListScreen;
