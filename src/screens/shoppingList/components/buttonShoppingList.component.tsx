import {StyleSheet} from 'react-native';
import {Text, TouchableOpacity} from 'react-native';
import { height, literataBold, primaryBlack, width } from '../../../utils/style.constants';

interface ButtonShopingListScreenProps {
  onPress: () => void;
  text: string;
  color: string;
}

const ButtonShopingListScreen = ({
  onPress,
  text,
  color,
}: ButtonShopingListScreenProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, {backgroundColor: color}]}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: width * 0.2,
    height: height * 0.05,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: primaryBlack,
    fontFamily: literataBold,
    fontSize: 12
  }
});

export default ButtonShopingListScreen;
