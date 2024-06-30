import { useContext } from 'react'
import '../styles/product.css'
import { ShopContext } from '../context/ShopContext'
import { useParams } from 'react-router-dom'
import BreadCrums from '../Components/Breadcrums/BreadCrums'
import ProductDisplay from '../Components/Productdisplay/ProductDisplay'
function Product() {
  const { allProductData } = useContext(ShopContext)
  const { productId } = useParams()
  const product = allProductData.find((e) => {
    return e.id === Number(productId)
  })
  return (
    <div className='product-container'>
      <div className='product'>
        <BreadCrums product={product} />
        <ProductDisplay product={product} />
      </div>
    </div>
  )
}

export default Product
