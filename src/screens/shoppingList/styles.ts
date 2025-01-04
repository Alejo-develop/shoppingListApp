import {StyleSheet} from 'react-native';
import {height, secondaryBlack, width} from '../../utils/style.constants';

const styles = StyleSheet.create({
  container: {
    height: height * 1,
    width: width * 1,
    backgroundColor: secondaryBlack,
  },
  list: {
    width: width * 1,
    height: 'auto'
  }
});

export default styles;
