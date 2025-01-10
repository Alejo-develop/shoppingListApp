import {ScrollView, View, Image, Text} from 'react-native';
import styles from './style';
import NumPurchasesContainerComponent from './components/containerNumPurchase.component';
import ContainerPurchaseByCategorie from './components/containerPurchaseByCategorie.component';
import ContainerGraphicsComponent from './components/containerGrafics.component';
import UseHome from './hook/useHome.hook';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {height, literataBold, width} from '../../utils/style.constants';
import ContainerWishes from './components/containerWishes.component';
import React from 'react';
import { img } from '../../utils/img.constants';

const HomeScreen = () => {
  // const borrar = async () => {
  //   await AsyncStorage.removeItem('purchases')
  //   await AsyncStorage.removeItem('wish')
  //   await AsyncStorage.removeItem('categories')
  //   await AsyncStorage.removeItem('infoUser')
  //   await AsyncStorage.removeItem('isFirstLaunch')
  //   return
  // }

  // useEffect(() => {
  //   borrar()
  // }, [])
  const {
    wishes,
    purchasesByMonth,
    categorieMoreRaiting,
    imgBanner,
    topCategories,
  } = UseHome();

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
              gap: wishes.length === 0 ? 40 : 0
            }}>
            <View style={styles.containerStatics}>
              <NumPurchasesContainerComponent
                num={purchasesByMonth}
                imgForComponent={imgBanner}
              />
              <ContainerPurchaseByCategorie
                count={categorieMoreRaiting.count}
                title={categorieMoreRaiting.mostPurchasedCategory}
              />
            </View>

            {purchasesByMonth && topCategories?.length > 0 ? (
              <ContainerGraphicsComponent item={topCategories} />
            ) : (
              <View style ={styles.containerError}>
                <Image style={{width: width * 0.5, height: height * 0.17}} source={{uri: img.perro2}}/>
                <Text style={{color: 'white', fontFamily: literataBold}}>Nothing to see here for now</Text>
              </View>
            )}

            {wishes.length > 0 && <ContainerWishes items={wishes} />}
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default HomeScreen;
