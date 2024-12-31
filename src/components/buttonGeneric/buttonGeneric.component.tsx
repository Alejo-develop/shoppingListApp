import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {
  height,
  literataBold,
  primaryBlack,
  width,
} from '../../utils/style.constants';
import { ButtonGenericProps } from '../../interfaces/button.interface';

const ButtonGenericComponent = ({
  text,
  color,
}: ButtonGenericProps) => {
  return (
    <TouchableOpacity style={[style.button, {backgroundColor: color}]}>
      <Text style={style.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  button: {
    borderWidth: 1,
    width: width * 0.4,
    height: height * 0.06,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 6,
  },
  text: {
    fontSize: height * 0.018,
    fontFamily: literataBold,
    color: primaryBlack
  },
});

export default ButtonGenericComponent;
