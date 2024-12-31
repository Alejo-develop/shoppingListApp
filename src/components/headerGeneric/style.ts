import {StyleSheet} from 'react-native';
import {fontTitles, height} from '../../utils/style.constants';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: height * 0.1,
  },
  title: {
    fontSize: height * 0.029,
    fontFamily: fontTitles
  }
});

export default styles;
