import {useCallback, useEffect, useState} from 'react';
import {CategoryResponseInterface} from '../../../interfaces/cateogry.interface';
import {useGlobalContext} from '../../../context/global.context';
import {getCategoriesServices} from '../../../services/category.services';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

interface Props extends NativeStackScreenProps<any, any> {}
const UseCateogireList = () => {
  const [categories, setCategories] = useState<CategoryResponseInterface[]>([]);
  const [error, setError] = useState<string>('')
  const globalContext = useGlobalContext();
  const navigation = useNavigation<Props['navigation']>();

  const getCategories = async () => {
    try {
      const categoriesFound = await getCategoriesServices();

      if (!categories) return;

      setCategories(categoriesFound);
      setError('')
    } catch (err) {
      setError("You Don't have categories yet :(")
    }
  };

  const handleSelectCategorie = (id: number, color: string, name: string, type: string) => {
    navigation.navigate('shoppingList', {
      id,
      color,
      name,
      type
    });

    return
  };

  useFocusEffect(
    useCallback(() => {
      getCategories();
    }, []),
  );

  useEffect(() => {
    if (globalContext.isUpdate) {
      getCategories()
      globalContext.changeStatusUpdate(false);
    }
  }, [globalContext.isUpdate]);

  return {
    categories,
    error,
    handleSelectCategorie
  };
};

export default UseCateogireList;
