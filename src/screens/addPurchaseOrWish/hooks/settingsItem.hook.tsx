import {useEffect, useState} from 'react';
import {CategoryResponseInterface} from '../../../interfaces/cateogry.interface';
import {getCategoriesServices} from '../../../services/category.services';
import {violet} from '../../../utils/style.constants';
import MessageComponent from '../../../components/message/message.component';
import {
  createItemInterface,
  CreatePurchaseInterface,
  CreateWishInterface,
} from '../../../interfaces/item.interface';
import {createWishServices} from '../../../services/wish.services';
import {createPurchaseServices} from '../../../services/purchase.services';
import {useNavigation} from '@react-navigation/native';

const SettingsItemHook = () => {
  const [nameCategory, setNameCategory] = useState<string | null>(null);
  const [categories, setCategories] = useState<
    CategoryResponseInterface[] | []
  >([]);
  const [imgSelected, setImg] = useState<string | null>(null);
  const [color, setColor] = useState<string>(violet);
  const [error, setError] = useState<string>('');
  const [form, setForm] = useState<
    CreatePurchaseInterface | CreateWishInterface
  >({
    name: '',
    img: '',
    categorie: '',
    price: 0,
    description: '',
  });

  const navigation = useNavigation();

  const handleFormChange = (
    field: keyof CreateWishInterface,
    value: string,
  ) => {
    setForm(prevForm => ({
      ...prevForm,
      [field]: field === 'price' ? Number(value) : value ?? '',
    }));
  };

  const getCategories = async () => {
    try {
      const categories = await getCategoriesServices();

      if (!categories) return;

      setCategories(categories);
    } catch (err) {
      const errorString = JSON.stringify(err);
      MessageComponent({
        type: 'error',
        text1: 'Error',
        position: 'top',
        text2: err ? errorString : 'An error unexpected occurred',
        color: color,
      });
    }
  };

  const createItem = async ({item, type}: createItemInterface) => {
    if (!item.name) {
      MessageComponent({
        type: 'error',
        text1: 'Error',
        text2: `Name is mandatory to create a ${type}.`,
        position: 'top',
        color: color,
      });
      return;
    }
    if (!nameCategory) {
      MessageComponent({
        type: 'error',
        text1: 'Error',
        text2: `Categorie is mandatory to create a ${type}.`,
        position: 'top',
        color: color,
      });
      return;
    }
    if (!item.img) {
      MessageComponent({
        type: 'error',
        text1: 'Error',
        text2: `Image is mandatory to create a ${type}.`,
        position: 'top',
        color: color,
      });
      return;
    }

    const formatedItem = {
      ...item,
      img: imgSelected,
      categorie: nameCategory || 'defaultCategory',
    };

    try {
      if (type === 'wish') {
        setError('');
        await createWishServices(formatedItem);
        MessageComponent({
          type: 'success',
          text1: 'Wish created',
          text2: 'Your Wish has been successfully created.',
          position: 'top',
          color: color,
        });
        navigation.goBack();
      } else {
        setError('');
        await createPurchaseServices(formatedItem);
        MessageComponent({
          type: 'success',
          text1: 'Purchase created',
          text2: 'Your purchase has been successfully created.',
          position: 'top',
          color: color,
        });
        navigation.goBack();
      }
    } catch (err) {
      const errorString = JSON.stringify(error);
      MessageComponent({
        type: 'error',
        text1: 'Error',
        position: 'top',
        text2: error ? errorString : 'An error unexpected occurred',
        color: color,
      });
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return {
    nameCategory,
    categories,
    img: imgSelected,
    color,
    form,
    setColor,
    handleFormChange,
    setImg,
    createItem,
    setNameCategory,
    getCategories,
  };
};

export default SettingsItemHook;
