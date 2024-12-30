import {Image, Text, View} from 'react-native';
import styles from './style';
import ButtonMenuComponent from '../../components/buttonMenu/buttonMenu.component';
import { img } from '../../utils/img.constants';

const MenuScreen = () => {
  return (
    <View style={styles.container}>
      <Text
        style={styles.title}>
        Menu
      </Text>

      <View style={styles.containerButtons}>
        <ButtonMenuComponent text="Add new purchase" iconName="cart-plus" route='createCategory' />
        <ButtonMenuComponent text="Add Category" iconName="th-large" route='createCategory' />
      </View>

      <View style={styles.containerButtons}>
        <ButtonMenuComponent text="Add new Wish" iconName="heart" route='createCategory' />
        <ButtonMenuComponent
          text="Change Personal info"
          iconName="pied-piper-alt"
          route='createCategory'
        />
      </View>

      <Image
        source={{
          uri: img.reborn,
        }}
        style={styles.img}
      />
    </View>
  );
};

export default MenuScreen;
