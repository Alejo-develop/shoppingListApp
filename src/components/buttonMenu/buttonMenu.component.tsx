import {Text, TouchableOpacity} from 'react-native';
import styles from './style';
import {ButtonMenuProps} from '../../interfaces/button.interface';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const ButtonMenuComponent = ({text, iconName, route}: ButtonMenuProps) => {
  const navigation = useNavigation()
  
  const handleSubmit = () => {
    navigation.navigate(`${route}` as never)
  }

  return (
    <TouchableOpacity style={styles.container} onPress={handleSubmit}>
      <Icon name={iconName} style={styles.icon} />
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default ButtonMenuComponent;
