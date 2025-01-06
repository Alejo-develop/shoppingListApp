import {StyleSheet} from 'react-native';
import {
  height,
  literataRegular,
  primaryBlack,
  width,
} from '../../utils/style.constants';

const styles = StyleSheet.create({
  container: {
    height: height * 0.9,
    width: width * 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  modal: {
    backgroundColor: primaryBlack,
    height: height * 0.83,
    width: width * 1,
    elevation: 12,
    alignItems: 'center',
  },
  button: {
    width: width * 0.4,
    height: height * 0.2655,
    backgroundColor: primaryBlack,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 6,
  },
  img: {
    width: width * 0.4,
    height: height * 0.2655,
  },
  text: {
    color: 'white',
    width: width * 0.6,
    fontFamily: literataRegular,
  },
  containerDescription: {
    width: width * 0.94,
    height: height * 0.12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    elevation: 2,
  },
});

export default styles;
