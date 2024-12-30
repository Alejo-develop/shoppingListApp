import {Text, TouchableOpacity} from 'react-native';
import styles from './style';
import {ButtonMenuProps} from '../../interfaces/button.interface';
import Icon from 'react-native-vector-icons/FontAwesome';

const ButtonMenuComponent = ({text, iconName}: ButtonMenuProps) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Icon name={iconName} style={styles.icon} />
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default ButtonMenuComponent;
