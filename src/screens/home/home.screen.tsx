import {ScrollView, StatusBar, View} from 'react-native';
import styles from './style';
import {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NumPurchasesContainerComponent from './components/containerNumPurchase.component';
import ContainerPurchaseByCategorie from './components/containerPurchaseByCategorie.component';
import ContainerGraphicsComponent from './components/containerGrafics.component';
import UseHome from './hook/useHome.hook';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {height} from '../../utils/style.constants';
import ContainerWishes from './components/containerWishes.component';

const HomeScreen = () => {
  // const borrar = async () => {
  //   await AsyncStorage.removeItem('purchases')
  //   await AsyncStorage.removeItem('wish')
  //   await AsyncStorage.removeItem('categories')
  //   await AsyncStorage.removeItem('infoUser')
  //   return
  // }

  // useEffect(() => {
  //   borrar()
  // }, [])
  const {wishes} = UseHome();

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex: 1, paddingTop: -10}} edges={['top']}>
        <ScrollView
          style={[styles.scrollView, {flexGrow: 1}]}
          keyboardShouldPersistTaps="handled"
          stickyHeaderHiddenOnScroll={false}
          contentInset={{top: 0, bottom: 0}}>
          <View
            style={{
              alignItems: 'center',
              height: wishes.length === 0 ? height * 0.8 : height * 1.05,
            }}>
            <View style={styles.containerStatics}>
              <NumPurchasesContainerComponent />
              <ContainerPurchaseByCategorie />
            </View>

            <ContainerGraphicsComponent />

            <ContainerWishes 
            items={wishes}/>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default HomeScreen;
