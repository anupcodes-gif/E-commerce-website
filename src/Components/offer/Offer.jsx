import '../offer/offer.css'
import exclusiveImage from '../../assets/exclusive_image.png'
function Offer() {
  return (
    <>
      <div className='offer-contaner'>
        <div className='offer'>
          <div className='offer-left'>
            <div className='offer-left-text'>
              <h1>
                Exclusive <br /> offers for you
              </h1>
              <p>Only on best sellers products</p>
            </div>
            <div className='offer-left-button'>
              <button>Check Now</button>
            </div>
          </div>
          <div className='offer-right'>
            <img src={exclusiveImage} alt='' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Offer
