export interface CartItem {
  name: string
  price: number
  image?: {
    mobile?: string
    thumbnail?: string
    [key: string]: string | undefined
  }
  category?: string
  quantity: number
}

export interface CartState {
  items: CartItem[]
  total: number
}

export type CartAction =
  | { type: 'ADD_ITEM'; item: Omit<CartItem, 'quantity'> }
  | { type: 'REMOVE_ITEM'; itemName: string; item: CartItem }
  | { type: 'INCREMENT'; item: Omit<CartItem, 'quantity'> }
  | { type: 'DECREMENT'; item: Omit<CartItem, 'quantity'> }
  | { type: 'CLEAR_CART' }
