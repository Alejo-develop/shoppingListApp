import AsyncStorage from '@react-native-async-storage/async-storage';
import {CategoryInterface} from '../interfaces/cateogry.interface';

export const createCategoryService = async (data: CategoryInterface) => {
  try {
    const categories = await AsyncStorage.getItem('categories');

    let parsedCategories: CategoryInterface[] = [];
    if (categories) {
      parsedCategories = JSON.parse(categories);
    }

    parsedCategories.push(data);
    await AsyncStorage.setItem('categories', JSON.stringify(parsedCategories));
  } catch (error) {
   throw error
  }
};

export const getCategoriesServices = async () => {
  try {
    const categories = await AsyncStorage.getItem('categories');
    if(!categories){
      throw new Error('Categories not found')
    }

    const parsedCategories = JSON.parse(categories)

    return parsedCategories
  } catch (error) {
    throw error
  }
}