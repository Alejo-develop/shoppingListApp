import {FlatList, Text, View} from 'react-native';
import styles from './styles';
import UseCateogireList from './hooks/useCategorieList.hook';
import ButtonCategorieComponent from '../../components/buttonCategorie/buttonCategorie.component';

const CategoriesListScreen = () => {
  const {categories, handleSelectCategorie} = UseCateogireList();

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
              onPress={() => handleSelectCategorie(item.id, item.color, item.name)}
            />
          )}
          numColumns={2}
        />
      </View>
    </View>
  );
};

export default CategoriesListScreen;
