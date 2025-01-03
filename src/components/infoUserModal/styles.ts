import {StyleSheet} from 'react-native';
import {height, primaryBlack, width} from '../../utils/style.constants';

const styles = StyleSheet.create({
  container: {
    height: height * 1,
    width: width * 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: height * 0.08,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  modal: {
    backgroundColor: primaryBlack,
    height: height * 0.35,
    width: width * 0.9,
    elevation: 12,
    alignItems: 'center',
  },
});

export default styles;
