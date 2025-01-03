import {Image, Text, View} from 'react-native';
import styles from './style';
import ButtonMenuComponent from '../../components/buttonMenu/buttonMenu.component';
import {img} from '../../utils/img.constants';
import InfoUserModal from '../../components/infoUserModal/infoUser.modal';
import { useState } from 'react';

const MenuScreen = () => {
  const [isVisible, setIsVisibleModal] = useState<boolean>(false)
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu</Text>

      <View style={styles.containerButtons}>
        <ButtonMenuComponent
          text="Add new purchase"
          iconName="cart-plus"
          route="addnewitem"
          type="purchase"
        />
        <ButtonMenuComponent
          text="Add Category"
          iconName="th-large"
          route="createCategory"
        />
      </View>

      <View style={styles.containerButtons}>
        <ButtonMenuComponent
          text="Add new Wish"
          iconName="heart"
          route="addnewitem"
          type="wish"
        />
        <ButtonMenuComponent
          text="Change Personal info"
          iconName="pied-piper-alt"
          onPress={() => setIsVisibleModal(true)}
        />
      </View>

      <Image
        source={{
          uri: img.reborn,
        }}
        style={styles.img}
      />

      <InfoUserModal visibleModal={isVisible} onClose={() => setIsVisibleModal(false)} />
    </View>
  );
};

export default MenuScreen;
