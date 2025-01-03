import {Text, TouchableOpacity} from 'react-native';
import styles from './style';
import {ButtonMenuProps} from '../../interfaces/button.interface';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

interface Props extends NativeStackScreenProps<any, any> {}
const ButtonMenuComponent = ({text, iconName, route, type, onPress}: ButtonMenuProps) => {
  const navigation = useNavigation<Props['navigation']>()  
  
  const handleSubmit = () => {
    if(!route) return
    navigation.navigate(`${route}`, {type})
  }

  return (
    <TouchableOpacity style={styles.container} onPress={route ? handleSubmit : onPress} >
      <Icon name={iconName} style={styles.icon} />
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default ButtonMenuComponent;
