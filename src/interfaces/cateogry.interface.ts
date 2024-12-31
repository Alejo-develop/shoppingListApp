export interface CategoryInterface {
  name: string;
  description?: string;
  color: string;
  img?: string | null;
}

export interface CategoryFormInterface {
  name: string;
  description: string;
}
