import {useNavigation} from '@react-navigation/native';
import {StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {height, width} from '../../utils/style.constants';

const ButtonBackComponent = ({color, handleClose}: {color: string, handleClose?: () => void}) => {
  const navigate = useNavigation();

  const handleSubmit = () => {
    navigate.goBack();
  };

  return (
    <TouchableOpacity onPress={handleClose ? handleClose : handleSubmit}>
      <Icon style={[styles.icon, {color: color}]} name="angle-left" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  icon: {
    fontSize: height * 0.05,
    right: width * 0.22
  },
});

export default ButtonBackComponent;
