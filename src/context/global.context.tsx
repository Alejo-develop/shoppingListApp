import {createContext, ReactNode, useContext, useEffect, useState} from 'react';
import {UserInfoInterface} from '../interfaces/user.interface';
import {ContextProps} from '../interfaces/context.interface';
import { findUserServices, getIfUserIsNewServices } from '../services/user.services';

const GlobalContext = createContext<ContextProps>({
  isUpdate: false,
  userInfo: null,
  isFirstLaunch: false,
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
  const [isFirstLaunch, setIsFirstLaunch] = useState<boolean>(true)

  const getInfoUser = () => {
    return infoUser;
  };

  const fetchAuthUser = async () => {
    const status = await getIfUserIsNewServices()
    setIsFirstLaunch(status)
  }

  const findInfoUser = async () => {
    const userFound = await findUserServices()
    if(userFound) {
      setInfoUser(userFound);
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
    fetchAuthUser()
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        isUpdate,
        userInfo: infoUser,
        isFirstLaunch,
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
