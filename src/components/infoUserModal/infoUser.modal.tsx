import {Modal, View} from 'react-native';
import styles from './styles';
import {InfoUserModalProps} from '../../interfaces/modals.interface';
import HeaderModalComponent from '../headerModal/headerModal.component';
import {height, violet} from '../../utils/style.constants';
import InputComponent from '../input/input.component';
import ButtonGenericComponent from '../buttonGeneric/buttonGeneric.component';
import {useGlobalContext} from '../../context/global.context';

const InfoUserModal = ({
  visibleModal,
  onClose,
  handleFormChange,
  onPress,
}: InfoUserModalProps) => {
  const globlaContext = useGlobalContext();
  const user = globlaContext.getInfoUser();

  return (
    <Modal
      visible={visibleModal}
      onRequestClose={onClose}
      transparent={true}
      animationType="slide">
      <View style={styles.container}>
        <View style={styles.modal}>
          <HeaderModalComponent
            text="Personal Info"
            color={violet}
            hanldeClose={onClose}
          />

          <View style={{gap: 25}}>
            <InputComponent
              placeholder={user.name ? `${user.name}...` : 'User'}
              value="Name"
              color={violet}
              entry={true}
              onChangeText={text => handleFormChange('name', text)}
            />

            <InputComponent
              placeholder={user.email ? `${user.email}...` : 'Email'}
              value="Email"
              color={violet}
              entry={true}
              onChangeText={text => handleFormChange('email', text)}
            />
          </View>

          <View style={{paddingTop: height * 0.04}}>
            <ButtonGenericComponent
              color={violet}
              text="Done"
              onPress={onPress}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default InfoUserModal;
