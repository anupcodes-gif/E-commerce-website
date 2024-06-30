import Hero from '../Components/Hero/Hero'
import NewCollection from '../Components/newCollections/NewCollection'
import NewsLetter from '../Components/newsletter/NewsLetter'
import Offer from '../Components/offer/Offer'
import Popular from '../Components/popular/Popular'

function Shop() {
  return (
    <>
      <Hero />
      <Popular />
      <Offer />
      <NewCollection />
      <NewsLetter />
    </>
  )
}

export default Shop
