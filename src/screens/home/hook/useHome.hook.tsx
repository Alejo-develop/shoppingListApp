import {useCallback, useEffect, useState} from 'react';
import {WishResponseInterface} from '../../../interfaces/item.interface';
import {useFocusEffect} from '@react-navigation/native';
import MessageComponent from '../../../components/message/message.component';
import {violet} from '../../../utils/style.constants';
import {getWishServices} from '../../../services/wish.services';
import {useGlobalContext} from '../../../context/global.context';
import {
  getMostPurchasedCategoryByMonthServices,
  getPurchasesByMonthServices,
} from '../../../services/purchase.services';
import { ImageKeys, imgCardHome } from '../../../utils/img.constants';

const UseHome = () => {
  const [wishes, setWishes] = useState<WishResponseInterface[]>([]);
  const [purchasesByMonth, setPurchasesByMonth] = useState<number>(0);
  const [categorieMoreRaiting, setCategorieMoreRaiting] = useState({
    mostPurchasedCategory: '',
    count: 0,
  });
  const [imgBanner, setImgBanner] = useState<string>('')

  const img = imgCardHome
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

  const getRandomImage = () => {
    const keys = Object.keys(img) as Array<ImageKeys>;
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    return img[randomKey];
  };

  const getInitialImg = () => {
    const img = getRandomImage()
    setImgBanner(img)
  }

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

  const getPurchasesByMonth = async () => {
    try {
      const currentMonth = new Date().getMonth();
      const currentyear = new Date().getFullYear();

      const purchases = await getPurchasesByMonthServices(
        currentMonth,
        currentyear,
      );
      setPurchasesByMonth(purchases.length);
    } catch (err) {
      MessageComponent({
        type: 'error',
        text1: 'Error',
        color: violet,
        position: 'top',
        text2: 'Cannot possible get your purchases :(',
      });
    }
  };

  const getPurchasesCategorieByMoth = async () => {
    try {
      const currentMonth = new Date().getMonth();
      const currentyear = new Date().getFullYear();

      const categorie = await getMostPurchasedCategoryByMonthServices(
        currentMonth,
        currentyear,
      );
      setCategorieMoreRaiting(categorie);
    } catch (err) {
      MessageComponent({
        type: 'error',
        text1: 'Error',
        color: violet,
        position: 'top',
        text2: 'Cannot possible get your categorie more rating :(',
      });
    }
  };

  useEffect(() => {
    if (globalContext.isUpdate) {
      getWishes();
      getPurchasesByMonth();
      getPurchasesCategorieByMoth();
      globalContext.changeStatusUpdate(false);
    }
  }, [globalContext.isUpdate]);

  useFocusEffect(
    useCallback(() => {
      getInitialImg()
      getWishes();
      getPurchasesByMonth();
      getPurchasesCategorieByMoth();
    }, []),
  );

  return {
    wishes,
    purchasesByMonth,
    imgBanner,
    categorieMoreRaiting,
  };
};

export default UseHome;
