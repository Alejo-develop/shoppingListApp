import {StyleSheet} from 'react-native';
import {height, secondaryBlack, width} from '../../utils/style.constants';

const styles = StyleSheet.create({
  scrollView: {
    width: width * 1,
    backgroundColor: secondaryBlack,
  },
  containerStatics: {
    height: height * 0.32,
    gap: 13,
  },
});

export default styles;
