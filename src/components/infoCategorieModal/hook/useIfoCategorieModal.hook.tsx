import {useEffect, useState} from 'react';
import {
  CategoryFormInterface,
  CategoryResponseInterface,
} from '../../../interfaces/cateogry.interface';
import {useGlobalContext} from '../../../context/global.context';
import {useNavigation} from '@react-navigation/native';
import MessageComponent from '../../message/message.component';
import {updateCategoryService} from '../../../services/category.services';

const UseInfoCategorieModal = (categorie: CategoryResponseInterface) => {
  const [imgSelected, setImgSelected] = useState<string | null>(
    categorie.img ? categorie.img : '',
  );
  const [form, setForm] = useState<CategoryFormInterface>({
    name: '',
    description: '',
  });
  const [isVisibleModal, setIsVisibleModal] = useState<boolean>(false);
  const [color, setColor] = useState<string>(categorie.color);

  const navigation = useNavigation();
  const globalContext = useGlobalContext();

  const handleFormChange = (
    field: keyof CategoryFormInterface,
    value: string,
  ) => {
    setForm(prevForm => ({
      ...prevForm,
      [field]: value,
    }));
  };

  const changeInfoCategorie = async (form: CategoryFormInterface) => {
    const hasChanges =
      form.name !== categorie.name ||
      form.description !== categorie.description ||
      imgSelected !== categorie.img ||
      color !== categorie.color;
    if (!hasChanges) {
      setIsVisibleModal(false);
      return;
    }

    const formattedData = {
      ...form,
      name: form.name ? form.name : categorie.name,
      description: form.description ? form.description : categorie.description,
      color,
      img: imgSelected,
    };

    try {
      await updateCategoryService(categorie.id, formattedData);

      MessageComponent({
        type: 'success',
        text1: 'Categorie Updated',
        text2: 'Your categorie has been successfully updated.',
        position: 'top',
        color: color,
      });
      globalContext.changeStatusUpdate(true);
      navigation.goBack();
    } catch (err) {
      MessageComponent({
        type: 'error',
        text1: 'Error',
        position: 'top',
        text2: 'Cannot posible updated categorie :C',
        color: color,
      });
    }
  };

  useEffect(() => {
    setColor(categorie.color);
    setImgSelected(categorie.img ? categorie.img : '');
  }, [categorie]);

  return {
    imgSelected,
    isVisibleModal,
    color,
    form,
    handleFormChange,
    setColor,
    setIsVisibleModal,
    setImgSelected,
    changeInfoCategorie,
  };
};

export default UseInfoCategorieModal;
