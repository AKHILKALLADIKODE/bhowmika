import Banner from '../components/Banner'
import ProductCategory from '../components/ProductCategory'
import OurProducts from '../components/OurProducts'
import Featured from '../components/Featured'
import Features from '../components/Features'

function Home() {
  return (
    <>
      <main>
        {/* Banner Component */}
        <Banner />

        {/* Product Category Section */}
        <ProductCategory />

        {/* Our Products Section */}
        <OurProducts />

        {/* Featured Section */}
        <Featured />

        {/* Features Section */}
        <Features />
      </main>
    </>
  )
}

export default Home
