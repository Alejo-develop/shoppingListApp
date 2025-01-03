import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  CreateWishInterface,
  WishResponseInterface,
} from '../interfaces/item.interface';

export const createWishServices = async (data: CreateWishInterface) => {
  try {
    const wish = await AsyncStorage.getItem('wish');

    let parsedWish: WishResponseInterface[] = [];
    if (wish) {
      parsedWish = JSON.parse(wish);
    }
    const formatedData = {
      ...data,
      id: parsedWish.length + 1,
      date: new Date()
    };

    parsedWish.push(formatedData);
    await AsyncStorage.setItem('wish', JSON.stringify(parsedWish))
    
    return
  } catch (err) {
    throw err;
  }
};

export const getWishServices = async () => {
  try {
    const wishList = await AsyncStorage.getItem('wish');
    if (!wishList) {
      throw new Error('Wish not found');
    }

    const parsedWish = JSON.parse(wishList);

    return parsedWish;
  } catch (error) {
    throw error;
  }
};
