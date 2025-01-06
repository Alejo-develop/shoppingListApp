import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  CategoryInterface,
  CategoryResponseInterface,
} from '../interfaces/cateogry.interface';

export const createCategoryService = async (data: CategoryInterface) => {
  try {
    const categories = await AsyncStorage.getItem('categories');

    let parsedCategories: CategoryInterface[] = [];
    if (categories) {
      parsedCategories = JSON.parse(categories);
    }

    const formatedData = {
      ...data,
      img: data.img || '',
      id: parsedCategories.length + 1,
      date: new Date(),
    };

    parsedCategories.push(formatedData);
    await AsyncStorage.setItem('categories', JSON.stringify(parsedCategories));
  } catch (error) {
    throw error;
  }
};

export const getCategoriesServices = async () => {
  try {
    const categories = await AsyncStorage.getItem('categories');
    if (!categories) {
      throw new Error('Categories not found');
    }

    const parsedCategories: CategoryResponseInterface[] =
      JSON.parse(categories);

    return parsedCategories;
  } catch (error) {
    throw error;
  }
};

export const getCategorieByIdServices = async (id: number) => {
  try {
    const categories = await AsyncStorage.getItem('categories');

    if (!categories) {
      throw new Error('Cateogies not found');
    }

    const parsedCategories: CategoryResponseInterface[] =
      JSON.parse(categories);
    const categorieFound = parsedCategories.find(
      categorie => categorie.id === id,
    );

    if (!categorieFound) {
      throw new Error('Categorie not found');
    }

    return categorieFound;
  } catch (err) {
    throw err;
  }
};

export const updateCategoryService = async (
  id: number,
  updatedData: Partial<CategoryInterface>,
) => {
  try {
    const categories = await AsyncStorage.getItem('categories');
    if (!categories) {
      throw new Error('Categories not found');
    }
    const parsedCategories: CategoryResponseInterface[] = JSON.parse(categories);
    
    const categoryIndex = parsedCategories.findIndex(
      category => category.id === id,
    );
    if (categoryIndex === -1) {
      throw new Error('Categorie not found');
    }
    
    const updatedCategory = {
      ...parsedCategories[categoryIndex],
      ...updatedData,
      id,
      date: new Date(),
    };
    parsedCategories[categoryIndex] = updatedCategory;
    await AsyncStorage.setItem('categories', JSON.stringify(parsedCategories));
    return updatedCategory;
  } catch (error) {
    throw error;
  }
};
