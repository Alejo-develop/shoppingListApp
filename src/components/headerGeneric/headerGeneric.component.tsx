import {Text, View} from 'react-native';
import ButtonBackComponent from '../buttonBack/buttonBack.component';
import styles from './style';

const HeaderComponent = ({color, text}: {color: string, text: string}) => {
  return (
    <View style={styles.container}>
      <ButtonBackComponent color={color} />

      <Text style={[styles.title, {color: color}]}>{text}</Text>
    </View>
  );
};

export default HeaderComponent;
