import {Text, Touchable, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import HeaderComponent from '../../components/headerGeneric/headerGeneric.component';
import CategorySectionHook from './hook/categorySection.hook';
import ColorsContainer from './components/colorsContainer.component';
import {fontTitles, height} from '../../utils/style.constants';
import ButtonGenericComponent from '../../components/buttonGeneric/buttonGeneric.component';
import ButtonImg from './components/buttonImg.component';
import ImgBannerModal from '../../components/imgBannerModal/imgBanner.modal';

const CreateCategoryScreen = () => {
  const {color, img, isOpen, setIsOpen, setImg, setColor,} = CategorySectionHook();

  return (
    <View style={styles.container}>
      <HeaderComponent color={color} text="Create Category" />

      <ButtonImg img={img} setImg={setImg} setIsOpen={setIsOpen}/>

      <View style={styles.containerFormColors}>
        <Text
          style={{
            textAlign: 'center',
            fontFamily: fontTitles,
            fontSize: height * 0.017,
            color: color
          }}>
          Select color
        </Text>
        <ColorsContainer onChange={setColor}/>
      </View>

      <ButtonGenericComponent text='Create' color={color}/>

      <ImgBannerModal visibleModal={isOpen} onClose={() => setIsOpen(false)} color={color} />
    </View>
  );
};

export default CreateCategoryScreen;
