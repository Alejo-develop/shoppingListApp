import {StyleSheet} from 'react-native';
import {height, literataRegular, primaryBlack, width} from '../../utils/style.constants';

const styles = StyleSheet.create({
  container: {
    backgroundColor: primaryBlack,
    width: width * 0.4,
    height: height * 0.2,
    elevation: 12,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12
  },
  text: {
    fontSize: height * 0.013,
    fontFamily: literataRegular
    
  },
  icon: {
    fontSize: height * 0.07,
  },
});

export default styles;
