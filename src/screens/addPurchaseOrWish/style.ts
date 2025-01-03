import {StyleSheet} from 'react-native';
import {
  height,
  literataBold,
  primaryBlack,
  secondaryBlack,
  width,
} from '../../utils/style.constants';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    height: height * 0.85,
    width: width * 1,
    backgroundColor: secondaryBlack,
  },
  containerPage: {
    justifyContent: 'center',
    alignItems: 'center',
    width: width * 1,
    height: height * 0.79,
    gap: height * 0.03,
    paddingBottom: 20
  },
  title: {
    fontFamily: literataBold,
  },
  containerAvatars: {
    width: width * 0.9,
    height: height * 0.28,
    backgroundColor: primaryBlack,
    elevation: 6,
  },
  list: {
    width: '86%',
    alignItems: 'center',
    gap: height * 0.03,
    marginLeft: 11,
  },
  containerAvatar: {
    backgroundColor: primaryBlack,
    height: height * 0.06,
    width: width * 0.1,
    marginHorizontal: width * 0.13,
  },
  img: {
    height: height * 0.07,
    width: width * 0.18,
  },
  form: {
    gap: height * 0.03,
  },
});

export default styles;
