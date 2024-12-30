import {StyleSheet} from 'react-native';
import { height,secondaryBlack, violet, width } from '../../utils/style.constants';

const styles = StyleSheet.create({
  containerHeader: {
    width: width * 1,
    height: height * 0.08,
    justifyContent: 'center',
    paddingLeft: width * 0.07,
    paddingTop: height * 0.01,
    backgroundColor: secondaryBlack
  },
  welcome: {
    fontSize: height * 0.031,
    color: violet,
  },
  nameUser: {
    fontSize: height * 0.016,
    color: violet
  },
  children: {
    height: height * 0.83,
  }
});

export default styles;
