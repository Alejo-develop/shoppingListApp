import {Modal, View} from 'react-native';
import styles from './styles';
import {InfoUserModalProps} from '../../interfaces/modals.interface';
import HeaderModalComponent from '../headerModal/headerModal.component';
import {height, violet} from '../../utils/style.constants';
import InputComponent from '../input/input.component';
import ButtonGenericComponent from '../buttonGeneric/buttonGeneric.component';

const InfoUserModal = ({visibleModal, onClose}: InfoUserModalProps) => {
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
              placeholder="Name..."
              value="Name"
              color={violet}
              entry={true}
            />

            <InputComponent
              placeholder="Email..."
              value="Email"
              color={violet}
              entry={true}
            />
          </View>

          <View style={{paddingTop: height * 0.04}}>
            <ButtonGenericComponent color={violet} text="Done" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default InfoUserModal;
