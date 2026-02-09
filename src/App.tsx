import { useReducer, useEffect, useState } from 'react'
import './App.css'
import { Card } from '@components/Card'
import { Cart } from '@components/Cart'
import data from '@data/data.json'
import { itemReducer } from '@reducers/cartReducer'
import { saveCartToStorage, getCartFromStorage } from '@utils/cartStorage'
import { OrderConfirmed } from '@components/OrderConfirmed'
import type { CartItem } from '@/types/cart'

function App() {
  const [cart, dispatch] = useReducer(itemReducer, getCartFromStorage())
  useEffect(() => {
    saveCartToStorage(cart)
  }, [cart])
  const [isOrderConfirmed, setIsOrderConfirmed] = useState(false)

  function addToCart(item: Omit<CartItem, 'quantity'>) {
    dispatch({ type: 'ADD_ITEM', item })
  }

  function removeFromCart(item: CartItem) {
    dispatch({ type: 'REMOVE_ITEM', itemName: item.name, item })
  }

  function increment(item: Omit<CartItem, 'quantity'>) {
    dispatch({ type: 'INCREMENT', item })
  }

  function decrement(item: Omit<CartItem, 'quantity'>) {
    dispatch({ type: 'DECREMENT', item })
  }

  function orderConfirmation() {
    setIsOrderConfirmed(true)
  }

  function closeOrderModal() {
    dispatch({ type: 'CLEAR_CART' })
    setIsOrderConfirmed(false)
  }

  return (
    <div className="grid grid-cols-1 bg-rose-50 p-300 md:p-500 md:gap-500 lg:grid-cols-2 lg:gap-400 relative">
      <div className="grid grid-cols-1 gap-400">
        <h2 className="text-preset1 mb-400 font-bold col-span-full">Desserts</h2>
        <div className="grid grid-cols-1 gap-400 md:grid-cols-2 lg:grid-cols-3 lg:gap-200">
          {data.map(item => (
            <Card
              key={item.name}
              {...item}
              addToCart={addToCart}
              increment={increment}
              decrement={decrement}
              cart={cart.items}
            />
          ))}
        </div>
      </div>
      <div>
        <Cart cart={cart} removeFromCart={removeFromCart} orderConfirmation={orderConfirmation} />
      </div>
      <OrderConfirmed isOrderConfirmed={isOrderConfirmed} cart={cart} onClose={closeOrderModal} />
    </div>
  )
}

export default App
