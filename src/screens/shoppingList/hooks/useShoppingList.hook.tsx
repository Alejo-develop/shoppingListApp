import {RouteProp, useFocusEffect, useRoute} from '@react-navigation/native';
import {useCallback, useEffect, useState} from 'react';
import {
  PurchaseResponseInterface,
  WishResponseInterface,
} from '../../../interfaces/item.interface';
import {getPurchasesByCategorieIdServices} from '../../../services/purchase.services';
import {useGlobalContext} from '../../../context/global.context';

type RootStackParamList = {
  shoppingList: {color: string; id: number; name: string; type: string};
};

const UseShoppingList = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'shoppingList'>>();
  const {color, id, name, type} = route.params;

  const [categorieColor, setCategorieColor] = useState<string>(color);
  const [items, setItems] = useState<
    PurchaseResponseInterface[] | WishResponseInterface[]
  >([]);
  const [error, setError] = useState<string>('');

  const globalContext = useGlobalContext();

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    return date.toLocaleDateString('es-ES', options);
  };

  const getPurchases = async (idCategorie: number) => {
    try {
      const purchasesFound = await getPurchasesByCategorieIdServices(
        idCategorie,
      );

      if (!purchasesFound || purchasesFound.length === 0) {
        setError('There is not purchases created yet :(');
      }

      const formattedPurchases = purchasesFound.map(purchase => ({
        ...purchase,
        formattedDate: formatDate(new Date(purchase.date).toISOString()),
      }));

      setItems(formattedPurchases.reverse())
      setError('');
    } catch (err) {
      setError('A unexpected error ocurred');
    }
  };

  const getItem = async (type: string, idCategorie: number) => {
    if (type === 'purchases') {
      await getPurchases(idCategorie);
    } else {
      console.log('wish');
    }
    return;
  };

  useEffect(() => {
    if (globalContext.isUpdate) {
      getItem(type, id);
      globalContext.changeStatusUpdate(false);
    }
  }, [globalContext.isUpdate]);

  useFocusEffect(
    useCallback(() => {
      getItem(type, id);
    }, [type, id]),
  );

  return {
    categorieColor,
    name,
    items,
    error,
  };
};

export default UseShoppingList;
