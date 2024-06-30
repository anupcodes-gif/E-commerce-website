import { useContext } from 'react'
import '../CartItems/cartitem.css'
import { ShopContext } from '../../context/ShopContext'
function CartItems() {
  const { getTotalCartAmount, allProductData, cartItems, removeFromCart } =
    useContext(ShopContext)
  return (
    <div className='cartItems'>
      <div className='cartItems-top'>
        <div className='cartItems-format-main'>
          <p>Product</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr />

        {allProductData.map((e) => {
          if (cartItems[e.id] > 0) {
            return (
              <div key={e.id}>
                <div className='cartItems-format cartItems-format-main'>
                  <img src={e.image} alt='' className='cartItems-images' />
                  <p className='name'>{e.name}</p>
                  <p className='price'>${e.new_price}</p>
                  <button className='cartItems-quantity-btn'>
                    {cartItems[e.id]}
                  </button>
                  <p className='total-price'>
                    ${e.new_price * cartItems[e.id]}
                  </p>
                  <p
                    className='remove-btn'
                    onClick={() => {
                      removeFromCart(e.id)
                    }}
                  >
                    X
                  </p>
                </div>
                <hr />
              </div>
            )
          }
          return null
        })}
      </div>
      <div className='cartItems-down'>
        <div className='cartItems-total'>
          <h1>Cart Totals</h1>
          <div>
            <div className='cartItems-total-item'>
              <p>SubTotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className='cartItems-total-item'>
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className='cartItems-total-item'>
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
          <button>Proceed To Checkout</button>
        </div>
        <div className='cartItems-promoCode'>
          <p>If you have a promo code, Enter here</p>
          <div className='cartItems-PromoBox'>
            <input type='text' placeholder='Promo Code' />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItems
