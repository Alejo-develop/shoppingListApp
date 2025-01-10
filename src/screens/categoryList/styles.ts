import {StyleSheet} from 'react-native';
import {
  height,
  literataBold,
  literataRegular,
  secondaryBlack,
  violet,
  width,
} from '../../utils/style.constants';

const styles = StyleSheet.create({
  container: {
    height: height * 1,
    width: width * 1,
    backgroundColor: secondaryBlack,
  },
  title: {
    fontFamily: literataBold,
    color: violet,
    textAlign: 'center',
    fontSize: height * 0.024,
    marginBottom: height * 0.03,
  },
  containerCategories: {
    width: width * 1,
    height: height * 0.96,
    marginTop: height * 0.01,
    alignItems: 'center',
    zIndex: 2,
    paddingBottom: height * 0.3,
  },
  list: {
    width: width * 1,
    alignItems: 'center',
    gap: height * 0.03,
  },
  errorView: {
    width: width * 1,
    height: height * 0.55,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },
  errorImg: {
    width: width * 0.34,
    height: height * 0.15,
  },
  textError: {
    fontFamily: literataRegular,
    textAlign: 'center',
    color: 'white',
  },
});

export default styles;
