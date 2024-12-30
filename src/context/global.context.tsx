import {createContext, ReactNode, useContext, useEffect, useState} from 'react';
import {UserInfoInterface} from '../interfaces/user.interface';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ContextProps} from '../interfaces/context.interface';

const GlobalContext = createContext<ContextProps>({
  isUpdate: false,
  userInfo: null,
  setIsUpdate: () => {},
  getInfoUser: () => ({name: null, email: null}),
  findInfoUser: async () => {},
  changeStatusUpdate: () => {},
});

export const GlobalProvider = ({children}: {children: ReactNode}) => {
  const [isUpdate, setIsUpdate] = useState<boolean>(false);
  const [infoUser, setInfoUser] = useState<UserInfoInterface>({
    name: '',
    email: '',
  });

  const getInfoUser = () => {
    return infoUser;
  };

  const findInfoUser = async () => {
    const userFound = await AsyncStorage.getItem('infoUser');
    if (userFound) {
      setInfoUser(JSON.parse(userFound));
      return;
    }

    const formateData = {
      name: 'User',
      email: 'Email@example.com',
    };

    setInfoUser(formateData);
  };

  const changeStatusUpdate = (status: boolean) => {
    setIsUpdate(status);
  };

  useEffect(() => {
    findInfoUser();
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        isUpdate,
        userInfo: infoUser,
        setIsUpdate,
        getInfoUser,
        findInfoUser,
        changeStatusUpdate,
      }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
