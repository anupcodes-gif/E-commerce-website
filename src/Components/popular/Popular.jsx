import popularData from '../../assets/data'
import Item from '../Item/Item'
import '../popular/popular.css'
function Popular() {
  return (
    <>
      <div className='popular'>
        <div className='popular-container'>
          <div className='popular-title'>
            <h1>Popular In Women</h1>
            <hr />
          </div>
          <div className='popular-product'>
            {popularData.map((item, index) => {
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
          </div>
        </div>
      </div>
    </>
  )
}

export default Popular
