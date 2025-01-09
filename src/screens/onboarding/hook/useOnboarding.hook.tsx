import React, {SetStateAction, useState} from 'react';
import {UserInfoInterface} from '../../../interfaces/user.interface';
import {
  saveUserInfoServices,
  setFirstLaunchServices,
} from '../../../services/user.services';
import MessageComponent from '../../../components/message/message.component';
import {violet} from '../../../utils/style.constants';
import { useNavigation } from '@react-navigation/native';
import { useGlobalContext } from '../../../context/global.context';

const UseOnboarding = () => {
  const [form, setForm] = useState<UserInfoInterface>({
    name: '',
    email: '',
  });

  const globalContext = useGlobalContext()
  const navigate = useNavigation()

  const handleFormChange = (field: keyof UserInfoInterface, value: string) => {
    setForm(prevForm => ({
      ...prevForm,
      [field]: value,
    }));
  };

  const setFirstLaunch = async () => {
    try {
      await setFirstLaunchServices();
    } catch (err) {
      MessageComponent({
        color: violet,
        text1: 'Error',
        type: 'error',
        position: 'top',
        text2: 'It was not possible to complete the onboarding',
      });
    }
  }

    const saveUserInfo = async (form: UserInfoInterface, modal: React.Dispatch<SetStateAction<boolean>>) => {
      if(!form.name || !form.email){
        MessageComponent({
          color: violet,
          text1: 'Error',
          type: 'error',
          position: 'top',
          text2: 'All Inputs are required',
        });
        return
      }

      try {
        await saveUserInfoServices(form);
        await setFirstLaunch()
        globalContext.changeStatusUpdate(true)
        modal(false)

        MessageComponent({
          color: violet,
          text1: 'Save info succes',
          type: 'error',
          position: 'top',
          text2: 'Your information has been successfully saved',
        });
        navigate.navigate('main' as never)
      } catch (err) {
        MessageComponent({
          color: violet,
          text1: 'Error',
          type: 'error',
          position: 'top',
          text2: 'Cannot posible save user Info',
        });
      }
    };

  return {
    form,
    saveUserInfo,
    handleFormChange,
  };
};

export default UseOnboarding;
