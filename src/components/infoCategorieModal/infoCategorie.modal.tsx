import {Modal, ScrollView, Text, View} from 'react-native';
import styles from './styles';
import {ModalInfoCategorieProps} from '../../interfaces/modals.interface';
import HeaderModalComponent from '../headerModal/headerModal.component';
import ImgBannerModal from '../imgBannerModal/imgBanner.modal';
import ButtonImg from '../../screens/createCategory/components/buttonImg.component';
import UseInfoCategorieModal from './hook/useIfoCategorieModal.hook';
import ColorsContainer from '../../screens/createCategory/components/colorsContainer.component';
import InputComponent from '../input/input.component';
import {height, literataBold, width} from '../../utils/style.constants';
import ButtonGenericComponent from '../buttonGeneric/buttonGeneric.component';

const InfoCategorieModal = ({
  visibleModal,
  categorie,
  onClose,
}: ModalInfoCategorieProps) => {
  const {
    imgSelected,
    isVisibleModal,
    color,
    form,
    setColor,
    handleFormChange,
    setIsVisibleModal,
    changeInfoCategorie,
    setImgSelected,
  } = UseInfoCategorieModal(categorie);

  const handleCloseModal = () => {
    handleFormChange('name', categorie.name);
    handleFormChange(
      'name',
      categorie.description ? categorie.description : '',
    );
    setColor(categorie.color);
    setImgSelected(categorie.img ? categorie.img : '');
    onClose();
  };

  const handleCloseChildModal = () => {
    setIsVisibleModal(false);
    setImgSelected(categorie.img ? categorie.img : '');
  };

  return (
    <Modal
      visible={visibleModal}
      onRequestClose={handleCloseModal}
      animationType="slide"
      transparent={true}>
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled">
        <View style={styles.modal}>
          <HeaderModalComponent
            text="Settings"
            color={color}
            hanldeClose={handleCloseModal}
          />

          <ButtonImg
            img={imgSelected}
            setIsOpen={setIsVisibleModal}
            setImg={setImgSelected}
            customStylesButton={styles.button}
            customStylesImg={styles.img}
            customStylesText={styles.text}
          />

          <View style={{marginTop: height * 0.02}}>
            <ColorsContainer onChange={setColor} />
          </View>

          <ImgBannerModal
            color={color}
            onClose={handleCloseChildModal}
            setImg={setImgSelected}
            visibleModal={isVisibleModal}
            onCloseWithImg={() => setIsVisibleModal(false)}
            img={imgSelected}
          />

          <View style={{alignItems: 'center', gap: 25, top: 25}}>
            <InputComponent
              color={categorie.color}
              entry={true}
              placeholder={`${categorie.name}...`}
              value="Name"
              onChangeText={text => handleFormChange('name', text)}
            />
            <InputComponent
              color={categorie.color}
              entry={true}
              value="Description"
              placeholder={`Change description...`}
              onChangeText={text => handleFormChange('description', text)}
            />
            <View style={styles.containerDescription}>
              <View style={{width: width * 0.8}}>
                <Text
                  style={{
                    fontFamily: literataBold,
                    textAlign: 'center',
                    fontSize: 11,
                  }}>
                  {categorie.description
                    ? categorie.description
                    : 'Add a description...'}
                </Text>
              </View>
            </View>

            <ButtonGenericComponent
              color={color}
              text="Done"
              onPress={() => changeInfoCategorie(form)}
            />
          </View>
        </View>
      </ScrollView>
    </Modal>
  );
};

export default InfoCategorieModal;
