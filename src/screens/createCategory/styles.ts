import {StyleSheet} from 'react-native';
import {height, secondaryBlack, width} from '../../utils/style.constants';

const styles = StyleSheet.create({
  container: {
    height: height * 1,
    width: width * 1,
    backgroundColor: secondaryBlack,
    alignItems: 'center',
    gap: 20
  },
  containerFormColors: {
    height: height * 0.09,
    gap: 12
  }
});

export default styles;
