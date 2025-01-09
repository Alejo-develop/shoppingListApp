import {StyleSheet} from 'react-native';
import {height, primaryBlack, secondaryBlack, width} from '../../utils/style.constants';

const styles = StyleSheet.create({
  scrollView: {
    width: width * 1,
    backgroundColor: secondaryBlack,
  },
  containerStatics: {
    height: height * 0.32,
    gap: 13,
  },
  containerError: {
    width: width * 0.84,
    height: height * 0.33,
    backgroundColor: primaryBlack,
    marginTop: height * 0.04,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 6,
  },
});

export default styles;
