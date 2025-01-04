import {StyleSheet} from 'react-native';
import {height, secondaryBlack, width} from '../../utils/style.constants';

const styles = StyleSheet.create({
  container: {
    width: width * 1,
    height: height * 1,
    backgroundColor: secondaryBlack
  },
  containerShoppingList: {
    width: width * 1,
    height: height * 0.73,
    marginTop: height * 0.01,
    alignItems: 'center',
    zIndex: 2,
  },
  list: {
    width: width * 1,
    alignItems: 'center',
    gap: height * 0.02,
  }
});

export default styles;
