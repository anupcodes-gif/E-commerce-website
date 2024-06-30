import { Link } from 'react-router-dom'
import '../Item/item.css'
import PropTypes from 'prop-types'
function Item(props) {
  return (
    <>
      <div className='item'>
        <Link to={`/product/${props.id}`}>
          <img src={props.image} alt='' onClick={window.scrollTo(0, 0)} />
        </Link>
        <p className='name'>{props.name}</p>
        <div className='item-prices'>
          <p className='item-new-price'>${props.new_price}</p>
          <p className='item-old-price'>${props.old_pric}</p>
        </div>
      </div>
    </>
  )
}
Item.propTypes = {
  id: PropTypes.number,
  image: PropTypes.any,
  name: PropTypes.string,
  new_price: PropTypes.number,
  old_pric: PropTypes.number,
}
export default Item
