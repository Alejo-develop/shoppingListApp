import {SetStateAction} from 'react';
import {UserInfoInterface} from './user.interface';

export interface ImgBannerModalProps {
  visibleModal: boolean;
  onClose: () => void;
  onCloseWithImg?: () => void;
  color: string;
  img: string | null;
  setImg: React.Dispatch<SetStateAction<string | null>>;
}

export interface InfoUserModalProps {
  visibleModal: boolean;
  onClose: () => void;
  onPress: () => void;
  handleFormChange: (field: keyof UserInfoInterface, value: string) => void;
}
