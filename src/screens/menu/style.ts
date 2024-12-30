import {StyleSheet} from 'react-native';
import {height, literataBold, literataRegular, secondaryBlack, violet, width} from '../../utils/style.constants';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: width * 1,
    backgroundColor: secondaryBlack,
    gap: 22,
  },
  containerButtons: {
    width: width * 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  title: {
    textAlign: 'center',
    color: violet,
    fontSize: height * 0.024,
    marginBottom: 10,
    fontFamily: literataBold,
  },
  img: {
    height: height * 0.2,
    width: width * 0.35,
  },
});

export default styles;
