import {useEffect, useState} from 'react';
import {CategoryResponseInterface} from '../../../interfaces/cateogry.interface';
import {getCategoriesServices} from '../../../services/category.services';
import { violet } from '../../../utils/style.constants';
import MessageComponent from '../../../components/message/message.component';

const SettingsItemHook = () => {
  const [nameCategory, setNameCategory] = useState<string | null>(null);
  const [categories, setCategories] = useState<
    CategoryResponseInterface[] | []
  >([]);
  const [img, setImg] = useState<string | null>(null)
  const [color, setColor] = useState<string>(violet)

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
        color: color
      })
    }
  };

  useEffect(() => {
    getCategories()
  }, [])

  return {nameCategory, categories, img, setImg, setNameCategory, getCategories};
};

export default SettingsItemHook;
