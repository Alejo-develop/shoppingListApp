import React, { SetStateAction } from "react";

export interface ButtonMenuProps {
  text: string;
  iconName: string;
  route?: string
  type?: string
  onPress?: () => void
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

export interface ButtonCategoriePorps{
  img: string; 
  onPress?: () => void;
  text: string;
  color: string;
}

export interface ButtonPurchaseCardProps{
  id: number;
  title: string,
  img?: string,
  color: string;
  categorie: string;
  price: number;
  description?: string;
  date: string;
  itemType: string;
}