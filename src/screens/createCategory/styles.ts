import {StyleSheet} from 'react-native';
import {height, secondaryBlack, width} from '../../utils/style.constants';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    height: height * 0.85,
    width: width * 1,
    backgroundColor: secondaryBlack,
    alignItems: 'center',
    gap: 20,
  },
  containerFormColors: {
    height: height * 0.09,
    gap: 12
  }
});

export default styles;
