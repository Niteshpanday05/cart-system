export interface CartItem {
  id: number;
  name: string;
  slug?: string;
  price: number;
  image: string;
  stock?: number;
  quantity: number;
}

export interface CartState {
  items: CartItem[];
}