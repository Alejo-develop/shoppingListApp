import {Modal, StyleSheet, Text, View} from 'react-native';
import HeaderModalComponent from '../../../components/headerModal/headerModal.component';
import {
  fontTitles,
  height,
  literataBold,
  primaryBlack,
  violet,
  width,
} from '../../../utils/style.constants';
import InputComponent from '../../../components/input/input.component';
import ButtonGenericComponent from '../../../components/buttonGeneric/buttonGeneric.component';
import UseOnboarding from '../hook/useOnboarding.hook';
import { SetStateAction } from 'react';

interface StartedFormModalProps {
  visibleModal: boolean;
  onClose: () => void;
  modal: React.Dispatch<SetStateAction<boolean>>;
}

const StartedFormModal = ({visibleModal, onClose, modal}: StartedFormModalProps) => {
  const {form, handleFormChange, saveUserInfo} = UseOnboarding();

  return (
    <Modal
      visible={visibleModal}
      onRequestClose={onClose}
      transparent={true}
      animationType="slide">
      <View style={styles.container}>
        <View style={styles.modal}>
          <Text
            style={{
              fontFamily: literataBold,
              color: violet,
              fontSize: 19,
              padding: 31,
            }}>
            To start, fill in these data!
          </Text>

          <View style={{gap: 25}}>
            <InputComponent
              placeholder="User"
              value="Name"
              color={violet}
              entry={true}
              onChangeText={text => handleFormChange('name', text)}
            />

            <InputComponent
              placeholder="Email"
              value="Email"
              color={violet}
              entry={true}
              onChangeText={text => handleFormChange('email', text)}
            />
          </View>

          <View style={{paddingTop: height * 0.04}}>
            <ButtonGenericComponent
              color={violet}
              text="Save"
              onPress={() => saveUserInfo(form, modal)}
            />
          </View>
        </View>
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
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  modal: {
    backgroundColor: primaryBlack,
    height: height * 0.35,
    width: width * 0.9,
    elevation: 12,
    alignItems: 'center',
  },
});

export default StartedFormModal;
