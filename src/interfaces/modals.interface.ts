import { SetStateAction } from "react";

export interface ImgBannerModalProps{
  visibleModal: boolean;
  onClose: () => void;
  onCloseWithImg?: () => void;
  color: string;
  img: string | null;
  setImg: React.Dispatch<SetStateAction<string | null>>
}

export interface InfoUserModalProps{
  visibleModal: boolean;
  onClose: () => void;
}
