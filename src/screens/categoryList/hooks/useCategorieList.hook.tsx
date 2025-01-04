import {useCallback, useEffect, useState} from 'react';
import {CategoryResponseInterface} from '../../../interfaces/cateogry.interface';
import {useGlobalContext} from '../../../context/global.context';
import MessageComponent from '../../../components/message/message.component';
import {violet} from '../../../utils/style.constants';
import {getCategoriesServices} from '../../../services/category.services';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

interface Props extends NativeStackScreenProps<any, any> {}
const UseCateogireList = () => {
  const [categories, setCategories] = useState<CategoryResponseInterface[]>([]);
  const globalContext = useGlobalContext();
  const navigation = useNavigation<Props['navigation']>();

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

  const handleSelectCategorie = (id: number, color: string, name: string) => {
    navigation.navigate('shoppingList', {
      id,
      color,
      name
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
      globalContext.changeStatusUpdate(false);
    }
  }, [globalContext.isUpdate]);

  return {
    categories,
    handleSelectCategorie
  };
};

export default UseCateogireList;
