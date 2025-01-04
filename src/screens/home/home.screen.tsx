import {Text, View} from 'react-native';
import styles from './style';
import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = () => {
  // const borrar = async () => {
  //   await AsyncStorage.removeItem('purchases')
  //   await AsyncStorage.removeItem('wish')
  //   return
  // }

  // useEffect(() => {
  //   borrar()
  // }, [])
  return (
    <View style={styles.container}>
      <Text>Hola desde home</Text>
    </View>
  );
};

export default HomeScreen;
