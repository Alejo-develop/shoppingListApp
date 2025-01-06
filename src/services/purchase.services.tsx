import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  CreatePurchaseInterface,
  PurchaseResponseInterface,
} from '../interfaces/item.interface';

export const createPurchaseServices = async (data: CreatePurchaseInterface) => {
  try {
    const purchases = await AsyncStorage.getItem('purchases');

    let parsedPurchase: PurchaseResponseInterface[] = [];
    if (purchases) {
      parsedPurchase = JSON.parse(purchases);
    }
    const formatedData = {
      ...data,
      img: data.img || '',
      id: parsedPurchase.length + 1,
      date: new Date(),
    };

    parsedPurchase.push(formatedData);
    await AsyncStorage.setItem('purchases', JSON.stringify(parsedPurchase));

    return;
  } catch (err) {
    throw err;
  }
};

export const wishToPurchasedServices = async (data: PurchaseResponseInterface) => {
  try {
    const purchases = await AsyncStorage.getItem('purchases');

    let parsedPurchase: PurchaseResponseInterface[] = [];
    if (purchases) {
      parsedPurchase = JSON.parse(purchases);
    }
    const formatedData = {
      ...data,
      id: parsedPurchase.length + 1,
    };

    parsedPurchase.push(formatedData);
    await AsyncStorage.setItem('purchases', JSON.stringify(parsedPurchase));

    return;
  } catch (err) {
    throw err;
  }
}

export const getPurchasesServices = async () => {
  try {
    const purchases = await AsyncStorage.getItem('purchases');
    if (!purchases) {
      throw new Error('Purchases not found');
    }

    const parsedPurchases: PurchaseResponseInterface[] = JSON.parse(purchases);

    return parsedPurchases;
  } catch (error) {
    throw error;
  }
};

export const getPurchasesByCategorieIdServices = async (id: number) => {
  try {
    const purchases = await getPurchasesServices()
    const filterPurchases = purchases.filter((item) => item.categorieId === id)

    if(!filterPurchases){
      throw new Error('There is not categories created yet')
    }

    return filterPurchases
  } catch (err) {
    throw err
  }
}
