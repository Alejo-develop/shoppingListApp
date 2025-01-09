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

export const wishToPurchasedServices = async (
  data: PurchaseResponseInterface,
) => {
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
};

export const getPurchasesServices = async () => {
  try {
    const purchases = await AsyncStorage.getItem('purchases');
    if (!purchases) {
      return []
    }

    const parsedPurchases: PurchaseResponseInterface[] = JSON.parse(purchases);

    return parsedPurchases;
  } catch (error) {
    throw error;
  }
};

export const getPurchasesByCategorieIdServices = async (id: number) => {
  try {
    const purchases = await getPurchasesServices();
    const filterPurchases = purchases.filter(item => item.categorieId === id);

    if (!filterPurchases) {
      throw new Error('There is not categories created yet');
    }

    return filterPurchases;
  } catch (err) {
    throw err;
  }
};

export const getPurchasesByMonthServices = async (
  month: number,
  year: number,
) => {
  try {
    const purchases = await getPurchasesServices();
    const filteredPurchases = purchases.filter(purchase => {
      const purchaseDate = new Date(purchase.date ? purchase.date : new Date());
      return (
        purchaseDate.getMonth() === month && purchaseDate.getFullYear() === year
      );
    });
    return filteredPurchases
  } catch (err) {
    throw err;
  }
};

export const getMostPurchasedCategoryByMonthServices = async (
  month: number,
  year: number,
) => {
  try {
    const purchases = await getPurchasesByMonthServices(month, year);
    const categoryCounts: {[key: string]: number} = {};
    purchases.forEach(purchase => {
      if (purchase.categorie) {
        if (!categoryCounts[purchase.categorie]) {
          categoryCounts[purchase.categorie] = 0;
        }
        categoryCounts[purchase.categorie]++;
      }
    });
    let mostPurchasedCategory = '';
    let maxCount = 0;
    for (const categorie in categoryCounts) {
      if (categoryCounts[categorie] > maxCount) {
        mostPurchasedCategory = categorie;
        maxCount = categoryCounts[categorie];
      }
    }
    return {mostPurchasedCategory, count: maxCount};
  } catch (err) {
    throw err;
  }
};

export const getTopCategoriesByPercentageServices = async () => {
  try {
    const purchases = await getPurchasesServices();
    const categoryCounts: { [key: string]: number } = {};

    purchases.forEach(purchase => {
      if (purchase.categorie) {
        if (!categoryCounts[purchase.categorie]) {
          categoryCounts[purchase.categorie] = 0;
        }
        categoryCounts[purchase.categorie]++;
      }
    });

    const totalPurchases = purchases.length;
    const sortedCategories = Object.entries(categoryCounts).sort(([, a], [, b]) => b - a);
    const topCategories = sortedCategories.slice(0, 4);

    const topCategoriesWithPercentage = topCategories.map(([category, count]) => ({
      category,
      percentage: Math.round((count / totalPurchases) * 100),
    }));

    return topCategoriesWithPercentage;
  } catch (err) {
    throw err;
  }
};
