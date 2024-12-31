import {useState} from 'react';
import {violet} from '../../../utils/style.constants';
import {CategoryFormInterface} from '../../../interfaces/cateogry.interface';
import {createCategoryService} from '../../../services/category.services';
import {useNavigation} from '@react-navigation/native';

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
      setError('The name is mandatory to create a categorie')
      return
    }
    
    const formatedData = {
      ...form,
      color,
      img,
    };

    try {
      await createCategoryService(formatedData);

      console.log('Created Succesfully');
      setError('')
      navigation.goBack();
    } catch (error) {
      console.log(error);
    }
  };

  return {
    color,
    isOpen,
    img,
    form,
    setImg,
    handleFormChange,
    setIsOpen,
    setColor,
    onClose,
    handleSubmit,
  };
};

export default CategorySectionHook;
