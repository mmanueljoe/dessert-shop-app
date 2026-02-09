import type { CartState } from '@/types/cart'
import { initialCart } from '@/reducers/cartReducer'

const CART_KEY = 'dessert-shop-cart'

export function saveCartToStorage(cart: CartState): void {
  localStorage.setItem(CART_KEY, JSON.stringify(cart))
}

export function getCartFromStorage(): CartState {
  const storedCart = localStorage.getItem(CART_KEY)

  if (storedCart) {
    try {
      const parsed = JSON.parse(storedCart) as CartState
      if (parsed && Array.isArray(parsed.items) && typeof parsed.total === 'number') {
        return parsed
      }
    } catch {
      // fall through to return initial cart
    }
  }

  return initialCart
}
