import '../Hero/hero.css'
import heroImage from '../../assets/hero_image.png'
import handIcon from '../../assets/hand_icon.png'
import arrowIcon from '../../assets/arrow.png'
import { Link } from 'react-scroll'
function Hero() {
  return (
    <>
      <div className='hero-container'>
        <div className='hero'>
          <div className='hero-left-side'>
            <div className='hero-left-side-text'>
              <p>New Arrivals Only</p>
              <h1>
                New <img src={handIcon} alt='' className='hand-icon' />
                <br />
                Collections <br />
                for everyone
              </h1>
            </div>
            <div className='hero-left-side-button'>
              <Link
                to='newCollection'
                smooth={true}
                duration={500}
                offset={-100}
              >
                <button>
                  Latest Collection <img src={arrowIcon} alt='' />
                </button>
              </Link>
            </div>
          </div>
          <div className='hero-right-side'>
            <img src={heroImage} alt='heroImage' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
