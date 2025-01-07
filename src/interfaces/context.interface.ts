import {UserInfoInterface} from './user.interface';

export interface ContextProps {
  isUpdate: boolean;
  isFirstLaunch: boolean;
  userInfo: UserInfoInterface | null;
  setIsUpdate: React.Dispatch<React.SetStateAction<boolean>>;
  getInfoUser: () => UserInfoInterface;
  findInfoUser: () => Promise<void>;
  changeStatusUpdate: (status: boolean) => void;
}
