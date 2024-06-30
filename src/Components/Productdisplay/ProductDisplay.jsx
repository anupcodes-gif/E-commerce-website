import '../Productdisplay/productdisplay.css'
import starIcon from '../../assets/star_icon.png'
import starHalfIcon from '../../assets/star_dull_icon.png'
import PropTypes from 'prop-types'
import DiscriptionBox from '../discriptionbox/DiscriptionBox'
import RelatedProduct from '../RelatedProduct/RelatedProduct'
import { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext'

function ProductDisplay(props) {
  const { addToCart } = useContext(ShopContext)
  const { product } = props
  return (
    <>
      <div className='productDisplay'>
        <div className='productDisplay-left'>
          <div className='productDisplay-left-imageList'>
            <img src={product.image} alt='' />
            <img src={product.image} alt='' />
            <img src={product.image} alt='' />
          </div>
          <div className='productDisplay-main-image'>
            <img src={product.image} alt='' />
          </div>
        </div>
        <div className='productDisplay-right'>
          <h1>{product.name}</h1>
          <div className='product-display-rating'>
            <div className='star-icon'>
              <img src={starIcon} alt='' />
              <img src={starIcon} alt='' />
              <img src={starIcon} alt='' />
              <img src={starIcon} alt='' />
              <img src={starHalfIcon} alt='' />
            </div>
            <div className='review'>
              <p>(122)</p>
            </div>
          </div>
          <div className='prices'>
            <div className='old-prices'>
              <p>${product.old_price}</p>
            </div>
            <div className='new-prices'>
              <p>${product.new_price}</p>
            </div>
          </div>
          <div className='productDisplay-design'>
            <p>
              A lightweight, usually knitted pullover shirt close-fitting and
              round neckline and short sleeves as an undershirt and outer
              garment.
            </p>
          </div>
          <div className='productDisplay-size'>
            <div className='productDisplay-size-title'>
              <h2>Select Size</h2>
            </div>
            <div className='productDisplay-sizes'>
              <p>S</p>
              <p>M</p>
              <p>L</p>
              <p>XL</p>
              <p>XXL</p>
            </div>
          </div>
          <div className='productDisplay-button'>
            <button
              onClick={() => {
                addToCart(product.id)
              }}
            >
              Add To Cart
            </button>
          </div>
          <div className='productDisplay-category'>
            <p>Category : </p>
            <span>Women,T-shirt, cropTop</span>
          </div>
          <div className='productDisplay-tags'>
            <p>Tags : </p>
            <span>Modern, Latest</span>
          </div>
        </div>
      </div>
      <DiscriptionBox />
      <RelatedProduct />
    </>
  )
}
ProductDisplay.propTypes = {
  product: PropTypes.any,
  image: PropTypes.any,
  name: PropTypes.string,
  old_price: PropTypes.number,
  new_price: PropTypes.number,
}
export default ProductDisplay
