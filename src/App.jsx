import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ShopCategory from './pages/ShopCategory'
import Login from './pages/Login'
import Cart from './pages/Cart'
import Product from './pages/Product'
import Shop from './pages/Shop'
import Footer from './Components/footer/Footer'
import menBanner from './assets/banner_mens.png'
import womenBanner from './assets/banner_women.png'
import kidBanner from './assets/banner_kids.png'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route
            path='/men'
            element={<ShopCategory category='men' banner={menBanner} />}
          />
          <Route
            path='/women'
            element={<ShopCategory category='women' banner={womenBanner} />}
          />
          <Route
            path='/kid'
            element={<ShopCategory category='kid' banner={kidBanner} />}
          />
          <Route path='/login/signUp' element={<Login />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/product' element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
