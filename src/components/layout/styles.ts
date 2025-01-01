import {StyleSheet} from 'react-native';
import { fontTitles, height,literataRegular,secondaryBlack, violet, width } from '../../utils/style.constants';

const styles = StyleSheet.create({
  containerHeader: {
    width: width * 1,
    height: height * 0.10,
    justifyContent: 'center',
    paddingLeft: width * 0.07,
    paddingTop: height * 0.02,
    backgroundColor: secondaryBlack
  },
  welcome: {
    fontSize: height * 0.032,
    color: violet,
    fontFamily: fontTitles
  },
  nameUser: {
    fontSize: height * 0.020,
    color: violet,
  },
  children: {
    height: height * 0.80,
  }
});

export default styles;
