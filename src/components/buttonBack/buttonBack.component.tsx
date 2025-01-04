import {useNavigation} from '@react-navigation/native';
import {StyleProp, StyleSheet, ViewStyle} from 'react-native';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {height, width} from '../../utils/style.constants';

const ButtonBackComponent = ({color, customStyles, handleClose}: {color: string, handleClose?: () => void, customStyles?: StyleProp<ViewStyle>}) => {
  const navigate = useNavigation();

  const handleSubmit = () => {
    navigate.goBack();
  };

  return (
    <TouchableOpacity style={customStyles} onPress={handleClose ? handleClose : handleSubmit}>
      <Icon style={[{color: color, fontSize: height * 0.05}]} name="angle-left" />
    </TouchableOpacity>
  );
};

export default ButtonBackComponent;
