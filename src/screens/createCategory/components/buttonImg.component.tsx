import {Image, ImageStyle, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {ButtonImgProps} from '../../../interfaces/button.interface';
import {height, literataRegular, primaryBlack, width} from '../../../utils/style.constants';

const ButtonImg = ({img, customStylesButton, customStylesImg, customStylesText, setIsOpen}: ButtonImgProps) => {
  return (
    <TouchableOpacity onPress={() => setIsOpen(true)} style={customStylesButton ? customStylesButton : styles.button}>
      {img != null ? (
        <Image style={customStylesImg ? (customStylesImg as ImageStyle) : styles.img} source={{uri: img}} />
      ) : (
        <Text style={customStylesText ? customStylesText :styles.text}>Choose Img</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: width * 0.6,
    height: height * 0.38,
    backgroundColor: primaryBlack,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 6
  },
  img: {
    width: width * 0.6,
    height: height * 0.38,
  },
  text: {
    color: 'white',
    fontFamily: literataRegular
  }
});

export default ButtonImg;
