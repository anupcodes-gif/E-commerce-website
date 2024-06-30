import '../Breadcrums/breadcrums.css'
import arrowIcon from '../../assets/breadcrum_arrow.png'
import PropTypes from 'prop-types'
function BreadCrums(props) {
  const { product } = props
  if (!product) {
    return console.log('no items')
  }
  return (
    <div className='breadcrums'>
      HOME
      <img src={arrowIcon} alt='' className='arrow-icon' />
      SHOP
      <img src={arrowIcon} alt='' className='arrow-icon' />
      {product.category}
      <img src={arrowIcon} alt='' className='arrow-icon' />
      {product.name}
    </div>
  )
}
BreadCrums.propTypes = {
  product: PropTypes.any,
  category: PropTypes.string,
  name: PropTypes.string,
}

export default BreadCrums
