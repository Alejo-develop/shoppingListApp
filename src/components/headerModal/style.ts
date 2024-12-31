import {StyleSheet} from 'react-native';
import {fontTitles, height, width} from '../../utils/style.constants';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: height * 0.1,
  },
  title: {
    fontSize: height * 0.025,
    fontFamily: fontTitles,
    paddingRight: 12,
  },
  icon: {
    fontSize: height * 0.05,
    right: width * 0.22,
  },
});

export default styles;
