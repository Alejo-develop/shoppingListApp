import {useState} from 'react';
import {violet} from '../../../utils/style.constants';
import {CategoryFormInterface} from '../../../interfaces/cateogry.interface';
import {createCategoryService} from '../../../services/category.services';
import {useNavigation} from '@react-navigation/native';
import MessageComponent from '../../../components/message/message.component';

const CategorySectionHook = () => {
  const [color, setColor] = useState<string>(violet);
  const [img, setImg] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [form, setForm] = useState<CategoryFormInterface>({
    name: '',
    description: '',
  });
  const [error, setError] = useState<string>('')

  const navigation = useNavigation();

  const handleFormChange = (
    field: keyof CategoryFormInterface,
    value: string,
  ) => {
    setForm(prevForm => ({
      ...prevForm,
      [field]: value,
    }));
  };

  const onClose = () => {
    setImg(null);
    setIsOpen(false);
  };

  const handleSubmit = async (form: CategoryFormInterface) => {
    if(!form.name){    
      const erroMsg = 'The name is mandatory to create a categorie' 
      setError(erroMsg)
      MessageComponent({
        type: 'error',
        text1: 'Error',
        text2: erroMsg,
        position: 'top',
        color: color
      })
      return
    }
    
    const formatedData = {
      ...form,
      color,
      img,
    };

    try {
      await createCategoryService(formatedData);

      setError('')
      MessageComponent({
        type: 'success',
        text1: 'Categorie created',
        text2: 'Your categorie has been successfully created.',
        position: 'top',
        color: color
      })
      navigation.goBack();
    } catch (error) {
      const errorString = JSON.stringify(error);
      MessageComponent({
        type: 'error',
        text1: 'Error',
        position: 'top',
        text2: error ? errorString : 'An error unexpected occurred',
        color: color
      })
    }
  };

  return {
    color,
    isOpen,
    img,
    form,
    error,
    setImg,
    handleFormChange,
    setIsOpen,
    setColor,
    onClose,
    handleSubmit,
  };
};

export default CategorySectionHook;
