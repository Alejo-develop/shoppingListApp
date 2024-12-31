import {Modal, View} from 'react-native';
import {ImgBannerModalProps} from '../../interfaces/modals.interface';
import styles from './style';
import HeaderModalComponent from '../headerModal/headerModal.component';

const ImgBannerModal = ({visibleModal, onClose, color}: ImgBannerModalProps) => {
  return (
    <Modal
      visible={visibleModal}
      onRequestClose={onClose}
      transparent={true}
      animationType="slide">
      <View style={styles.container}>
        <View style={styles.modal}>
            <HeaderModalComponent text='Select Image' color={color} hanldeClose={onClose} />
        </View>
      </View>
    </Modal>
  );
};

export default ImgBannerModal;
