import React, { SetStateAction } from "react";
import { StyleProp, ViewStyle } from "react-native";

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
  customStylesButton?: StyleProp<ViewStyle>
  customStylesImg?: StyleProp<ViewStyle>
  customStylesText?: StyleProp<ViewStyle>
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
  categorieId: number;
  price: number;
  description?: string;
  date: Date | undefined;
  formattedDate: string;
  itemType: string;
}