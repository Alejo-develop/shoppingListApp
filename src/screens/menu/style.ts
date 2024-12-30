import {StyleSheet} from 'react-native';
import {height, secondaryBlack, width} from '../../utils/style.constants';

const styles = StyleSheet.create({
  container: {
    height: height * 1,
    width: width * 1,
    paddingTop: height * 0.05,
    backgroundColor: secondaryBlack,
    gap: 22
  },
  containerButtons: {
    width: width * 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  img: {
    height: height * 0.2,
    width: width * 0.35
  }
});

export default styles;
