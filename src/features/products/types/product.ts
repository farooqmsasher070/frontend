export interface Product {
  id: number;
  name: string;
  image: string;

  price: number;
  originalPrice: number;

  weight: string;

  rating: number;
  reviews: number;
  discount: number;

  description: string;
  nutrition: string;
  storage: string;

  category: string;

  inStock: boolean;
}