import {Modal, StyleSheet, View} from 'react-native';
import { InfoItemModalProps } from '../../../interfaces/modals.interface';
import { height, primaryBlack, width } from '../../../utils/style.constants';

const InfoCardModal = ({visibleModal, onClose}: InfoItemModalProps) => {
  return (
    <Modal
      visible={visibleModal}
      onRequestClose={onClose}
      transparent={true}
      animationType="slide">
      <View style={styles.container}>
        <View style={styles.modal}></View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
     container: {
        height: height * 1,
        width: width * 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: height * 0.08,
        backgroundColor: 'rgba(0, 0, 0, 0.7)'
      },
      modal: {
        backgroundColor: primaryBlack,
        height: height * 0.7,
        width: width * 0.9,
        elevation: 12,
        alignItems: 'center',
      }
})
export default InfoCardModal;
