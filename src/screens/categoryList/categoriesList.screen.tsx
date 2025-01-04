import {FlatList, Image, Text, View} from 'react-native';
import styles from './styles';
import UseCateogireList from './hooks/useCategorieList.hook';
import ButtonCategorieComponent from '../../components/buttonCategorie/buttonCategorie.component';
import {literataRegular} from '../../utils/style.constants';
import {img} from '../../utils/img.constants';

const CategoriesListScreen = () => {
  const {categories, error, handleSelectCategorie} = UseCateogireList();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shopping List</Text>
      {error ? (
        <View style={styles.errorView}>
          <Image style={styles.errorImg} source={{uri: img.hoguera}} />
          <View>
            <Text style={styles.textError}>{error}</Text>
            <Text style={styles.textError}>
              Create a categorie!
            </Text>
          </View>
        </View>
      ) : (
        <View style={styles.containerCategories}>
          <FlatList
            data={categories}
            contentContainerStyle={styles.list}
            renderItem={({item}) => (
              <ButtonCategorieComponent
                img={item.img ? item.img : ''}
                text={item.name}
                color={item.color}
                onPress={() =>
                  handleSelectCategorie(item.id, item.color, item.name, 'purchases')
                }
              />
            )}
            numColumns={2}
          />
        </View>
      )}
    </View>
  );
};

export default CategoriesListScreen;
