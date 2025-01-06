import {useCallback, useEffect, useState} from 'react';
import {WishResponseInterface} from '../../../interfaces/item.interface';
import {useFocusEffect} from '@react-navigation/native';
import MessageComponent from '../../../components/message/message.component';
import {violet} from '../../../utils/style.constants';
import {getWishServices} from '../../../services/wish.services';
import {useGlobalContext} from '../../../context/global.context';

const UseHome = () => {
  const [wishes, setWishes] = useState<WishResponseInterface[]>([]);
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

  const getWishes = async () => {
    try {
      const wishes = await getWishServices();
      const formattedWishes = wishes.map(wish => ({
        ...wish,
        formattedDate: formatDate(
          new Date(wish.date ? wish.date : '').toISOString(),
        ),
      }));

      setWishes(formattedWishes.reverse());
    } catch (err) {
      MessageComponent({
        type: 'error',
        text1: 'Error',
        color: violet,
        position: 'top',
        text2: 'Cannot posible get your categories :(',
      });
    }
  };

  useEffect(() => {
    if (globalContext.isUpdate) {
      getWishes();
      globalContext.changeStatusUpdate(false);
    }
  }, [globalContext.isUpdate]);

  useFocusEffect(
    useCallback(() => {
      getWishes();
    }, []),
  );

  return {
    wishes,
  };
};

export default UseHome;
