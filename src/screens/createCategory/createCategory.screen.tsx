import {ScrollView, Text, View} from 'react-native';
import styles from './styles';
import HeaderComponent from '../../components/headerGeneric/headerGeneric.component';
import CategorySectionHook from './hook/categorySection.hook';
import ColorsContainer from './components/colorsContainer.component';
import {fontTitles, height} from '../../utils/style.constants';
import ButtonGenericComponent from '../../components/buttonGeneric/buttonGeneric.component';
import ButtonImg from './components/buttonImg.component';
import ImgBannerModal from '../../components/imgBannerModal/imgBanner.modal';
import InputComponent from '../../components/input/input.component';

const CreateCategoryScreen = () => {
  const {
    color,
    img,
    isOpen,
    form,
    handleSubmit,
    setIsOpen,
    setImg,
    setColor,
    onClose,
    handleFormChange,
  } = CategorySectionHook();

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled">
      <HeaderComponent color={color} text="Create Category" />

      <View style={{alignItems: 'center',gap: 25}}>
        <ButtonImg img={img} setImg={setImg} setIsOpen={setIsOpen} />

        <View style={styles.containerFormColors}>
          <Text
            style={{
              textAlign: 'center',
              fontFamily: fontTitles,
              fontSize: height * 0.017,
              color: color,
            }}>
            Select color
          </Text>
          <ColorsContainer onChange={setColor} />
        </View>

        <View style={{gap: height * 0.03}}>
          <InputComponent
            color={color}
            placeholder="Name of Category..."
            entry={false}
            onChangeText={text => handleFormChange('name', text)}
            value="Name"
          />
          <InputComponent
            color={color}
            placeholder="Description..."
            entry={false}
            value="Description"
            onChangeText={text => handleFormChange('description', text)}
          />
        </View>

        <ButtonGenericComponent
          text="Create"
          color={color}
          onPress={() => handleSubmit(form)}
        />

        <ImgBannerModal
          visibleModal={isOpen}
          onClose={onClose}
          color={color}
          setImg={setImg}
          img={img}
          onCloseWithImg={() => setIsOpen(false)}
        />
      </View>
    </ScrollView>
  );
};

export default CreateCategoryScreen;
