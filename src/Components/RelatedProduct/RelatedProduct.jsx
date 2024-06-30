import '../RelatedProduct/relatedproduct.css'
import productData from '../../assets/data'
import Item from '../Item/Item'

function RelatedProduct() {
  return (
    <>
      <div className='relatedProduct'>
        <div className='related-product-title'>
          <h1>Related Product</h1>
          <hr />
        </div>

        <div className='realtedProduct-items'>
          {productData.map((item, index) => {
            return (
              <Item
                key={index}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_pric={item.old}
              />
            )
          })}
        </div>
      </div>
    </>
  )
}

export default RelatedProduct
