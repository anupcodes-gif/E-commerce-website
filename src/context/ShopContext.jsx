import { createContext, useState } from 'react'
import allProductData from '../assets/all_product'
import PropTypes from 'prop-types'

export const ShopContext = createContext(null)
const getDefaultCart = () => {
  let cart = {}
  for (let index = 0; index < allProductData.length + 1; index++) {
    cart[index] = 0
  }
  return cart
}

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart())

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
  }
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
  }

  const getTotalCartAmount = () => {
    let totalAmount = 0
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = allProductData.find(
          (product) => product.id === Number(item)
        )
        totalAmount += itemInfo.new_price * cartItems[item]
      }
    }
    return totalAmount
  }
  const getTotalCartitems = () => {
    let totalItem = 0
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item]
      }
    }
    return totalItem
  }
  const contextValue = {
    getTotalCartitems,
    getTotalCartAmount,
    allProductData,
    cartItems,
    addToCart,
    removeFromCart,
  }

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  )
}

ShopContextProvider.propTypes = {
  children: PropTypes.any,
}

export default ShopContextProvider
