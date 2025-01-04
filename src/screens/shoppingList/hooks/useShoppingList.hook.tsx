import {useCallback, useEffect, useState} from 'react';
import {CategoryResponseInterface} from '../../../interfaces/cateogry.interface';
import {useGlobalContext} from '../../../context/global.context';
import MessageComponent from '../../../components/message/message.component';
import {violet} from '../../../utils/style.constants';
import {getCategoriesServices} from '../../../services/category.services';
import { useFocusEffect } from '@react-navigation/native';

const UseShoppingList = () => {
  const [categories, setCategories] = useState<CategoryResponseInterface[]>([]);
  const globalContext = useGlobalContext();

  const getCategories = async () => {
    try {
      const categoriesFound = await getCategoriesServices();

      if (!categories) return;

      setCategories(categoriesFound);
    } catch (err) {
      const errorString = JSON.stringify(err);
      MessageComponent({
        type: 'error',
        text1: 'Error',
        position: 'top',
        text2: err ? errorString : 'An error unexpected occurred',
        color: violet,
      });
    }
  };

  useFocusEffect( 
    useCallback(() => {   
        getCategories()
    }, []),   
  ); 

  useEffect(() => {
    if (globalContext.isUpdate) {
      globalContext.changeStatusUpdate(false);
    }
  }, [globalContext.isUpdate]);

  return {
    categories,
  };
};

export default UseShoppingList;
