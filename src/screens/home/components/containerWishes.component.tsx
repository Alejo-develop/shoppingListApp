import {FlatList, Text, View} from 'react-native';
import {WishResponseInterface} from '../../../interfaces/item.interface';
import {StyleSheet} from 'react-native';
import ItemCardComponent from '../../../components/itemCard/itemCard.component';
import {
  height,
  literataBold,
  secondaryBlack,
  violet,
  width,
} from '../../../utils/style.constants';

interface ContainerWishesProps {
  items: WishResponseInterface[];
}

const ContainerWishes = ({items}: ContainerWishesProps) => {
  return (
    <View style={styles.containerSection}>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>Don't forget your Wishes</Text>
      </View>

      <View style={styles.containerList}>
        <FlatList
          contentContainerStyle={styles.list}
          data={items}
          renderItem={({item}) => (
            <ItemCardComponent
              categorie={item.categorie}
              categorieId={item.categorieId ? item.categorieId : 0}
              color={violet}
              id={item.id}
              date={item.date}
              price={item.price}
              formattedDate={item.formattedDate ? item.formattedDate : ''}
              title={item.name}
              description={item.description}
              img={item.img ? item.img : ''}
              key={item.id}
              itemType={'wish'}
            />
          )}
          keyExtractor={item => item.id.toString()}
          numColumns={1}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerSection: {
    paddingBottom: 10,
  },
  containerTitle: {
    height: height * 0.075,
    justifyContent: 'center',
    paddingBottom: 7,
  },
  title: {
    fontFamily: literataBold,
    color: violet,
    fontSize: 15,
    paddingLeft: 35,
  },
  containerList: {
    height: height * 0.22,
    zIndex: 2
  },
  list: {
    width: width,
    alignItems: 'center',
    gap: height * 0.02,
  },
});

export default ContainerWishes;
