import {useEffect, useState} from 'react';
import {useGlobalContext} from '../../../context/global.context';
import {UserInfoInterface} from '../../../interfaces/user.interface';
import {changeUserServices} from '../../../services/user.services';
import MessageComponent from '../../../components/message/message.component';
import {violet} from '../../../utils/style.constants';

const UseMenu = () => {
  const [isVisible, setIsVisibleModal] = useState<boolean>(false);
  const [form, setForm] = useState<UserInfoInterface>({
    name: '',
    email: '',
  });
  const globalContext = useGlobalContext();

  const handleFormChange = (field: keyof UserInfoInterface, value: string) => {
    setForm(prevForm => ({
      ...prevForm,
      [field]: value,
    }));
  };

  const changeInfoUser = async (form: UserInfoInterface) => {
    if (!form.name && !form.email) {
      setIsVisibleModal(false);
      return;
    }

    try {
      await changeUserServices(form);
      MessageComponent({
        type: 'success',
        text1: 'Info updated',
        text2: 'Your info has been successfully updated.',
        position: 'top',
        color: violet,
      });
      globalContext.changeStatusUpdate(true);
      setIsVisibleModal(false);
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

  useEffect(() => {
    if (globalContext.isUpdate) {
      globalContext.findInfoUser();
      globalContext.changeStatusUpdate(false);
    }
  }, [globalContext.isUpdate]);

  return {form, isVisible, setIsVisibleModal, handleFormChange, changeInfoUser};
};

export default UseMenu;
