import {StyleSheet} from 'react-native';
import {Text, TouchableOpacity} from 'react-native';
import { height, literataBold, primaryBlack, width } from '../../../utils/style.constants';

interface ButtonShopingListScreenProps {
  onPress: () => void;
  text: string;
  color: string;
  isFocused: boolean
}

const ButtonShopingListScreen = ({
  onPress,
  text,
  color,
  isFocused
}: ButtonShopingListScreenProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, isFocused ? {backgroundColor: color} : {backgroundColor: primaryBlack, borderColor: color, borderWidth: 1}]}>
      <Text style={[styles.text, isFocused ? {} : {color: color},]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: width * 0.2,
    height: height * 0.05,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1
  },
  text: {
    color: primaryBlack,
    fontFamily: literataBold,
    fontSize: 12
  }
});

export default ButtonShopingListScreen;
