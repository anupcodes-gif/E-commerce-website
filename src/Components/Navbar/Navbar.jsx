import '../Navbar/navbar.css'
import Logo from '../../assets/logo.png'
import CartIcon from '../../assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { useContext, useState } from 'react'
import { ShopContext } from '../../context/ShopContext'
function Navbar() {
  const [menu, setMenu] = useState('')
  const { getTotalCartitems } = useContext(ShopContext)
  return (
    <>
      <div className='navbar-container'>
        <div className='navbar'>
          <Link to='/'>
            <div className='logo'>
              <img src={Logo} alt='logo-pic' />
              <h1>Hamro pasal</h1>
            </div>
          </Link>
          <ul className='nav-links'>
            <Link to='/'>
              <li
                onClick={() => {
                  setMenu('shop')
                }}
              >
                Shop
              </li>
              {menu === 'shop' ? <hr /> : <></>}
            </Link>
            <Link to='/men'>
              <li
                onClick={() => {
                  setMenu('mens')
                }}
              >
                Men
              </li>
              {menu === 'mens' ? <hr /> : <></>}
            </Link>
            <Link to='women'>
              <li
                onClick={() => {
                  setMenu('womens')
                }}
              >
                Women
              </li>
              {menu === 'womens' ? <hr /> : <></>}
            </Link>
            <Link to='kid'>
              <li
                onClick={() => {
                  setMenu('kids')
                }}
              >
                Kids
              </li>
              {menu === 'kids' ? <hr /> : <></>}
            </Link>
          </ul>
          <div className='navbar-right'>
            <div className='button'>
              <Link to='/login/signUp'>
                <button
                  onClick={() => {
                    setMenu('login')
                  }}
                >
                  Login
                </button>
                {menu === 'login' ? <></> : <></>}
              </Link>
            </div>
            <div className='cart'>
              <Link to='/cart'>
                <img
                  src={CartIcon}
                  alt='cart-icon'
                  onClick={() => {
                    setMenu('cart')
                  }}
                />
                {menu === 'cart' ? <></> : <></>}
              </Link>
              <p>{getTotalCartitems()}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
