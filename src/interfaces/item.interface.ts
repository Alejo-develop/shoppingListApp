export interface CreatePurchaseInterface {
  name: string;
  img: string | null;
  categorie: string;
  categorieId: number;
  price: number;
  description: string;
}

export interface PurchaseResponseInterface{
  id: number;
  name: string;
  img: string | null;
  categorie: string;
  categorieId?: number;
  price: number;
  description: string;
  date?: Date
  formattedDate?: string;
}

export interface WishResponseInterface{
  id: number;
  name: string;
  img: string | null;
  categorie: string;
  categorieId?: number;
  price: number;
  description: string;
  date?: Date;
  formattedDate?: string;
}

export interface CreateWishInterface {
  name: string;
  img: string | null;
  categorie: string;
  categorieId: number;
  price: number;
  description: string;
}

export interface createItemInterface{
  item: CreatePurchaseInterface | CreateWishInterface;
  type: 'wish' | 'purchase'
}

export interface PuchasesMostRaqtedInterface{
  category: string;
  percentage: number;
}
