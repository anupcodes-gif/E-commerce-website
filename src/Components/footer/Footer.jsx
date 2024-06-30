import '../footer/footer.css'
import Logo from '../../assets/logo_big.png'
import instaIcon from '../../assets/instagram_icon.png'
import pintrestIcon from '../../assets/pintester_icon.png'
import whatsAppIcon from '../../assets/whatsapp_icon.png'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer'>
      <div className='logo'>
        <img src={Logo} alt='' />
        <h1>Hamro pasal</h1>
      </div>
      <ul className='footer-links'>
        <Link>
          <li
            onClick={() => {
              scrollTo(0, 0)
            }}
          >
            Company
          </li>
        </Link>
        <Link>
          <li
            onClick={() => {
              scrollTo(0, 0)
            }}
          >
            Products
          </li>
        </Link>
        <Link>
          <li
            onClick={() => {
              scrollTo(0, 0)
            }}
          >
            Offices
          </li>
        </Link>
        <Link>
          <li
            onClick={() => {
              scrollTo(0, 0)
            }}
          >
            About
          </li>
        </Link>
        <Link>
          <li
            onClick={() => {
              scrollTo(0, 0)
            }}
          >
            Contact
          </li>
        </Link>
      </ul>
      <div className='footer-socialLinks'>
        <div>
          <Link to='https://www.instagram.com/anup_cheetri/' target='_blank'>
            <img src={instaIcon} alt='' />
          </Link>
        </div>
        <div>
          <Link to='https://www.pinterest.com/' target='_blank'>
            <img src={pintrestIcon} alt='' />
          </Link>
        </div>
        <div>
          <Link to='https://www.whatsapp.com/' target='_blank'>
            <img src={whatsAppIcon} alt='' />
          </Link>
        </div>
      </div>
      <hr />
      <div className='footer-copyright'>
        <p>Copyright @2024 - All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
