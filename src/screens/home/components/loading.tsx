import {View} from 'react-native';
import {height, secondaryBlack, width} from '../../../utils/style.constants';

const LoadingScreen = () => {
  return (
    <View
      style={{
        backgroundColor: secondaryBlack,
        width: width * 1,
        height: height * 1,
      }}></View>
  );
};

export default LoadingScreen