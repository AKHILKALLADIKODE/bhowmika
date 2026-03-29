function Gallery() {
  const galleryItems = [
    { id: 1, title: 'Gallery Item 1', category: 'Products' },
    { id: 2, title: 'Gallery Item 2', category: 'Services' },
    { id: 3, title: 'Gallery Item 3', category: 'Projects' },
    { id: 4, title: 'Gallery Item 4', category: 'Products' },
    { id: 5, title: 'Gallery Item 5', category: 'Services' },
    { id: 6, title: 'Gallery Item 6', category: 'Projects' },
  ]

  return (
    <>
      
      <main>
        {/* Sub Banner */}
        <section className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-cinzel font-bold">GALLERY</h1>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold font-cinzel text-center mb-4">Our Gallery</h2>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Explore our portfolio and see the quality of our work.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {galleryItems.map(item => (
                <div key={item.id} className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer">
                  <div className="bg-gradient-to-br from-blue-400 to-purple-600 h-48 flex items-center justify-center relative overflow-hidden">
                    <i className="fas fa-image text-6xl text-white opacity-50"></i>
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                      <i className="fas fa-search-plus text-3xl text-white opacity-0 group-hover:opacity-100 transition-all"></i>
                    </div>
                  </div>
                  <div className="bg-white p-4">
                    <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.category}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="text-5xl font-bold mb-2">500+</h3>
                <p className="text-lg">Projects Completed</p>
              </div>
              <div>
                <h3 className="text-5xl font-bold mb-2">1000+</h3>
                <p className="text-lg">Happy Customers</p>
              </div>
              <div>
                <h3 className="text-5xl font-bold mb-2">50+</h3>
                <p className="text-lg">Years Experience</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Gallery
