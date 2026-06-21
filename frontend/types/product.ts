export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  discount_price: number | null;
  image: string;
  category: string;
  rating: number;
  stock: number;
}