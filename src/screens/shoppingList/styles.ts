import {StyleSheet} from 'react-native';
import {height, literataRegular, secondaryBlack, width} from '../../utils/style.constants';

const styles = StyleSheet.create({
  container: {
    width: width * 1,
    height: height * 1,
    backgroundColor: secondaryBlack,
    gap: 12,
  },
  containerShoppingList: {
    width: width * 1,
    height: height * 0.69,
    marginTop: height * 0.01,
    alignItems: 'center',
    zIndex: 2,
  },
  containerButtonsNav: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: width * 0.1,
    height: height * 0.05,
  },
  list: {
    width: width * 1,
    alignItems: 'center',
    gap: height * 0.02,
  },
  containerError: {
    width: width * 1,
    height: height * 0.55,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },
  imgError: {
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
