import {Text, View} from 'react-native';
import styles from './style';
import ButtonMenuComponent from '../../components/buttonMenu/buttonMenu.component';
import InfoUserModal from '../../components/infoUserModal/infoUser.modal';
import UseMenu from './hooks/useMenu.hook';

const MenuScreen = () => {
  const {isVisible, form, changeInfoUser, handleFormChange, setIsVisibleModal} =
    UseMenu();
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

      <InfoUserModal
        visibleModal={isVisible}
        onClose={() => setIsVisibleModal(false)}
        handleFormChange={handleFormChange}
        onPress={() => changeInfoUser(form)}
      />
    </View>
  );
};

export default MenuScreen;
