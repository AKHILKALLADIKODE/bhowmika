function Product() {
  const products = [
    { id: 1, name: 'Premium Product 1', description: 'High-quality products designed for excellence', price: '$99.99' },
    { id: 2, name: 'Premium Product 2', description: 'Durable and reliable performance', price: '$149.99' },
    { id: 3, name: 'Premium Product 3', description: 'Best-in-class features and design', price: '$199.99' },
  ]

  return (
    <>
      
      <main>
        {/* Sub Banner */}
        <section className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-cinzel font-bold">PRODUCTS</h1>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold font-cinzel text-center mb-4">Browse Our Collection</h2>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Discover our carefully curated collection of premium products designed to exceed your expectations.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {products.map(product => (
                <div key={product.id} className="product-card">
                  <div className="bg-gray-100 h-48 rounded-lg mb-4 flex items-center justify-center">
                    <i className="fas fa-box text-6xl text-gray-300"></i>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-blue-600">{product.price}</span>
                    <button className="btn-primary">View Details</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold font-cinzel text-center mb-12">Why Our Products?</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <i className="fas fa-check-circle text-5xl text-blue-600 mb-4"></i>
                <h3 className="text-xl font-bold mb-2">Certified Quality</h3>
                <p className="text-gray-600">All products are certified and tested</p>
              </div>
              <div className="text-center">
                <i className="fas fa-leaf text-5xl text-green-600 mb-4"></i>
                <h3 className="text-xl font-bold mb-2">Eco-Friendly</h3>
                <p className="text-gray-600">Sustainable and environment-conscious</p>
              </div>
              <div className="text-center">
                <i className="fas fa-dollar-sign text-5xl text-yellow-600 mb-4"></i>
                <h3 className="text-xl font-bold mb-2">Affordable</h3>
                <p className="text-gray-600">Best prices without compromising quality</p>
              </div>
              <div className="text-center">
                <i className="fas fa-undo text-5xl text-purple-600 mb-4"></i>
                <h3 className="text-xl font-bold mb-2">Easy Returns</h3>
                <p className="text-gray-600">Hassle-free return policy</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Product
