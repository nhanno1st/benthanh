export interface ProductCategory {
  id: string;
  name: string;
}

export interface Product {
  id: string;
  name: string;
  categoryId: string;
  description: string;
  unit: string;
  imageUrl?: string;
}
