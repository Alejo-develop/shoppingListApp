import React, { SetStateAction } from "react";

export interface ButtonMenuProps {
  text: string;
  iconName: string;
  route: string
}

export interface ButtonGenericProps{
  text: string;
  color: string
  onPress?: () => void;
}

export interface ButtonImgProps{
  img: string | null,
  setImg: React.Dispatch<SetStateAction<string | null>>
  setIsOpen: React.Dispatch<SetStateAction<boolean>>
}