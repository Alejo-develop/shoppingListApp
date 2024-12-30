import {Image, Text, View} from 'react-native';
import styles from './style';
import ButtonMenuComponent from '../../components/buttonMenu/buttonMenu.component';
import {height, violet} from '../../utils/style.constants';
import { img } from '../../utils/img.constants';

const MenuScreen = () => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          textAlign: 'center',
          color: violet,
          fontSize: height * 0.022,
          marginBottom: 20,
        }}>
        Menu
      </Text>

      <View style={styles.containerButtons}>
        <ButtonMenuComponent text="Add new purchase" iconName="cart-plus" />
        <ButtonMenuComponent text="Add Category" iconName="th-large" />
      </View>

      <View style={styles.containerButtons}>
        <ButtonMenuComponent text="Add new Wish" iconName="heart" />
        <ButtonMenuComponent
          text="Change Personal info"
          iconName="pied-piper-alt"
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
