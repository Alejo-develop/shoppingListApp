import {RouteProp, useFocusEffect, useRoute} from '@react-navigation/native';
import {useCallback, useEffect, useState} from 'react';
import {
  PurchaseResponseInterface,
  WishResponseInterface,
} from '../../../interfaces/item.interface';
import {getPurchasesByCategorieIdServices} from '../../../services/purchase.services';
import {useGlobalContext} from '../../../context/global.context';
import {getWishByCategorieIdServices} from '../../../services/wish.services';

type RootStackParamList = {
  shoppingList: {color: string; id: number; name: string; type: string};
};

const UseShoppingList = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'shoppingList'>>();
  const {color, id, name, type} = route.params;

  const [categorieColor, setCategorieColor] = useState<string>(color);
  const [items, setItems] = useState<
    PurchaseResponseInterface[] | WishResponseInterface[] | undefined
  >([]);
  const [error, setError] = useState<string>('');
  const [itemType, setItemType] = useState<string>(type);
  const [focused, setFocused] = useState<string>(type)

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
        return;
      }

      const formattedPurchases = purchasesFound.map(purchase => ({
        ...purchase,
        formattedDate: formatDate(
          new Date(purchase.date ? purchase.date : '').toISOString(),
        ),
      }));

      setError('');
      return formattedPurchases.reverse();
    } catch (err) {
      console.log(err);

      setError('An unexpected error occurred');
    }
  };

  const getWishes = async (idCategorie: number) => {
    try {
      const wishesFound = await getWishByCategorieIdServices(idCategorie);

      if (!wishesFound || wishesFound.length === 0) {
        setError('There is not wishes created yet :(');
        return;
      }

      const formattedWishes = wishesFound.map(wish => ({
        ...wish,
        formattedDate: formatDate(
          new Date(wish.date ? wish.date : '').toISOString(),
        ),
      }));

      setError('');
      return formattedWishes.reverse();
    } catch (err) {
      if (typeof err === 'string') setError(err);
    }
  };

  const getItem = async (idCategorie: number, type: string) => {
    let items_;
    if (type === 'purchase') {
      items_ = await getPurchases(idCategorie);
    } else {
      items_ = await getWishes(idCategorie);
    }
    setItems(items_);
    return items_;
  };

  useEffect(() => {
    if (globalContext.isUpdate) {  
      getItem(id, itemType);
      globalContext.changeStatusUpdate(false);
    }
  }, [globalContext.isUpdate, itemType]);

  useFocusEffect(
    useCallback(() => {
      getItem(id, itemType);
    }, [type, id, itemType]),
  );

  const handleButtonPress = (type: string) => {
    setFocused(type)
    setItemType(type);
  };

  return {
    categorieColor,
    name,
    items,
    error,
    itemType,
    focused,
    handleButtonPress,
  };
};

export default UseShoppingList;
