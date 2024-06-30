import '../newCollections/newcollection.css'
import newCollectionData from '../../assets/new_collections'
import Item from '../Item/Item'
import { Element } from 'react-scroll'
function NewCollection() {
  return (
    <>
      <div className='new-collection'>
        <div className='new-collection-container'>
          <div className='new-collection-title'>
            <h1>New Collections</h1>
            <hr />
          </div>
          <Element name='newCollection' className='new-collection-products'>
            {newCollectionData.map((item, index) => {
              return (
                <Item
                  key={index}
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  new_price={item.new_price}
                  old_pric={item.old_price}
                />
              )
            })}
          </Element>
        </div>
      </div>
    </>
  )
}

export default NewCollection
