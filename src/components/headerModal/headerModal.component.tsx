import {Text, View} from 'react-native';
import ButtonBackComponent from '../buttonBack/buttonBack.component';
import styles from './style';

const HeaderModalComponent = ({color, text, hanldeClose}: {color: string, text: string, hanldeClose: () => void}) => {
  return (
    <View style={styles.container}>
      <ButtonBackComponent color={color} handleClose={hanldeClose}/>

      <Text style={[styles.title, {color: color}]}>{text}</Text>
    </View>
  );
};

export default HeaderModalComponent;