export interface CreatePurchaseInterface {
  name: string;
  img: string | null;
  categorie: string;
  price: number;
  description: string;
}

export interface PurchaseResponseInterface{
  id: number;
  name: string;
  img: string | null;
  categorie: string;
  price: number;
  description: string;
  date: Date
}

export interface WishResponseInterface{
  id: number;
  name: string;
  img: string | null;
  categorie: string;
  price: number;
  description: string;
  date: Date
}

export interface CreateWishInterface {
  name: string;
  img: string | null;
  categorie: string;
  price: number;
  description: string;
}

export interface createItemInterface{
  item: CreatePurchaseInterface | CreateWishInterface;
  type: 'wish' | 'purchase'
}
