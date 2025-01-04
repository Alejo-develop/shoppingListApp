import {Image, Text, TouchableOpacity} from 'react-native';
import {ButtonCategoriePorps} from '../../interfaces/button.interface';
import {StyleSheet} from 'react-native';
import {height, primaryBlack, width} from '../../utils/style.constants';

const ButtonCategorieComponent = ({img, onPress}: ButtonCategoriePorps) => {
  return (
    <TouchableOpacity style={style.button} onPress={onPress}>
      <Image style={style.img} source={{uri: img}} />
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  button: {
    width: width * 0.6,
    height: height * 0.38,
    backgroundColor: primaryBlack,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 6,
  },
  img: {
    width: width * 0.6,
    height: height * 0.38,
  },
});
export default ButtonCategorieComponent;
