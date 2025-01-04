import {Image, Text, TouchableOpacity, View} from 'react-native';
import {ButtonCategoriePorps} from '../../interfaces/button.interface';
import {StyleSheet} from 'react-native';
import {height, literataBold, primaryBlack, width} from '../../utils/style.constants';

const ButtonCategorieComponent = ({img, color, text, onPress}: ButtonCategoriePorps) => {
  return (
    <View style={{gap: 6}}>
      <TouchableOpacity style={[style.button, {borderWidth: 87, borderColor: color}]} onPress={onPress}>
        <Image style={style.img} source={{uri: img}} />
      </TouchableOpacity>

      <Text style={[style.text, {color: color}]}>
        {text}
      </Text>
    </View>
  );
};

const style = StyleSheet.create({
  button: {
    width: width * 0.42,
    height: height * 0.28,
    backgroundColor: primaryBlack,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 6,
    marginHorizontal: 15,
  },
  img: {
    width: width * 0.416,
    height: height * 0.278,
  },
  text: {
    textAlign: 'center',
    fontFamily: literataBold
  }
});
export default ButtonCategorieComponent;
