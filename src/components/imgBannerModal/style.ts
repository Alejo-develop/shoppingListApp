import {StyleSheet} from 'react-native';
import {height, primaryBlack, width} from '../../utils/style.constants';

const styles = StyleSheet.create({
  container: {
    height: height * 1,
    width: width * 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: height * 0.08,
    backgroundColor: 'rgba(0, 0, 0, 0.7)'
  },
  modal: {
    backgroundColor: primaryBlack,
    height: height * 0.7,
    width: width * 0.9,
    elevation: 12,
    alignItems: 'center',
  },
  containerBanners: {
    width: width * 1, 
    justifyContent: 'center',
    height: height * 0.46,
  },
  list: {
    width: '95%',
    alignItems: 'center',
    gap: height * 0.03,
    marginLeft: 11,
  },
  banner: {
    width: width * 0.3,
    height: height * 0.2,
    elevation: 12,
    marginHorizontal: 20
  },
  img: {
    width: width * 0.3,
    height: height * 0.2,
  },
  containerButton: {
    marginTop: height * 0.04
  }
});

export default styles;
