import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import '../styles/shopcategory.css'
import Item from '../Components/Item/Item'
import PropTypes from 'prop-types'
import dropDownIcon from '../assets/dropdown_icon.png'

function ShopCategory(props) {
  const { allProductData } = useContext(ShopContext)
  return (
    <div className='shopCategory'>
      <div className='shopCategory-banner'>
        <img src={props.banner} alt='' />
      </div>
      <div className='shopCategory-index-sort'>
        <div className='shopCategory-index-sort-text'>
          <p>Showing 1-12</p>
          <span> Out of 36 products</span>
        </div>
        <div className='shopCategory-sort'>
          <p className='sort-text'>Sortby</p>
          <img src={dropDownIcon} alt='' />
        </div>
      </div>
      <div className='shopCatgory-products'>
        {allProductData.map((item, index) => {
          if (props.category === item.category) {
            return (
              <Item
                key={index}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_pric={item.oldprice}
              />
            )
          } else {
            return null
          }
        })}
      </div>
    </div>
  )
}
ShopCategory.propTypes = {
  banner: PropTypes.any,
  category: PropTypes.any,
}
export default ShopCategory
