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

    const parsedUser: UserInfoInterface = await JSON.parse(userFound)
    const newUser = {
        name: name ? name : parsedUser.name,
        email: email ? email : parsedUser.email
    }

    await AsyncStorage.setItem('infoUser', JSON.stringify(newUser))
    return
  } catch (err) {
    throw err;
  }
};
