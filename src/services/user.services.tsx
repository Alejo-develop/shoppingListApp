import AsyncStorage from '@react-native-async-storage/async-storage';
import {UserInfoInterface} from '../interfaces/user.interface';

export const findUserServices = async () => {
  try {
    const userFound = await AsyncStorage.getItem('infoUser');

    if (!userFound) {
      throw new Error('user not found');
    }

    return JSON.parse(userFound);
  } catch (err) {
    throw err;
  }
};

export const changeUserServices = async ({name, email}: UserInfoInterface) => {
  try {
    const userFound = await AsyncStorage.getItem('infoUser');
    if (!userFound) {
      throw new Error('user not found');
    }

    const parsedUser: UserInfoInterface = await JSON.parse(userFound);
    const newUser = {
      name: name ? name : parsedUser.name,
      email: email ? email : parsedUser.email,
    };

    await AsyncStorage.setItem('infoUser', JSON.stringify(newUser));
    return;
  } catch (err) {
    throw err;
  }
};

export const saveUserInfoServices = async (user: UserInfoInterface) => {
  try {
    if (!user)
      throw new Error(
        'Cannot posible save a user cause there is not information that save',
      );

    return await AsyncStorage.setItem('infoUser', JSON.stringify(user));
  } catch (err) {
    throw err;
  }
};

export const getIfUserIsNewServices = async () => {
  try {
    const status = await AsyncStorage.getItem('isFirstLaunch');
    if (status === null) {
      return true;
    }
    return false;
  } catch (err) {
    throw err;
  }
};

export const setFirstLaunchServices = async () => {
  try {
    return await AsyncStorage.setItem('isFirstLaunch', JSON.stringify(true));
  } catch (err) {
    throw err;
  }
};
