import {Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { height, literataRegular, width } from '../../../utils/style.constants';

interface ButtonTypeWishComponentProps {
  icon: string;
  color: string;
  text: string;
}

const ButtonTypeWishComponent = ({
  icon,
  color,
  text
}: ButtonTypeWishComponentProps) => {
  return (
    <TouchableOpacity style={{alignItems: 'center', width: width * 0.2}}>
      <Icon name={icon} color={color} size={height * 0.03}/>
      <Text style={{color: 'white', textAlign: 'center', fontSize: 12, fontFamily: literataRegular}}>{text}</Text>
    </TouchableOpacity>
  );
};

export default ButtonTypeWishComponent;
