function OurProducts() {
  const products = [
    {
      id: 1,
      name: 'Coffee Powder',
      brand: 'BHOWMIKA SPICES - 250gm',
      weight: '250gm',
      image: '/src/assets/img/banner/banner1.webp',
      description: 'Premium organic coffee powder sourced from the lush hills of Wayanad for a rich, authentic aroma.',
      whatsapp: 'Coffee Powder'
    },
    {
      id: 2,
      name: 'Chilly Powder',
      brand: 'BHOWMIKA SPICES - 100gm',
      weight: '100gm',
      image: '/src/assets/img/banner/banner2.webp',
      description: 'Fiery, pure, and aromatic red chilly powder made from premium sun-dried chillies for rich color and bold flavor.',
      whatsapp: 'Chilly Powder'
    },
    {
      id: 3,
      name: 'Turmeric Powder',
      brand: 'BHOWMIKA SPICES - 250gm',
      weight: '250gm',
      image: '/src/assets/img/banner/banner3.webp',
      description: 'Pure, golden turmeric powder with rich color, earthy aroma, and natural goodness — fresh and authentic.',
      whatsapp: 'Turmeric Powder'
    },
    {
      id: 4,
      name: 'Coriander Powder',
      brand: 'BHOWMIKA SPICES - 100gm',
      weight: '100gm',
      image: '/src/assets/img/banner/banner4.webp',
      description: 'Fresh, aromatic coriander powder made from premium sun-dried coriander seeds for rich flavor and natural aroma.',
      whatsapp: 'Coriander Powder'
    },
  ]

  const sendWhatsAppMessage = (productName, brandName, quantity, description) => {
    let message = `*${brandName}* \nProduct: ${productName}\n\nQuantity: ${quantity}\n\n${description}`
    let phone = "+919562794522"
    let whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <section className="cmmt">
      <div className="container-fluid cmpad">
        <div className="d-flex justify-content-between align-items-center flex-wrap mb-4">
          <div>
            <h2 className="main-heading">Our Products </h2>
          </div>
          <div className="d-flex gap-3 flex-wrap justify-content-center">
            <a href="/product" className="main-btn">
              <div>View More</div>
              <div className="main-btn-icon">
                <i className="fa-solid fa-arrow-right"></i>
              </div>
            </a>
          </div>
        </div>
        <div className="row">
          {products.map((product) => (
            <div key={product.id} className="col-lg-3 col-md-4 col-sm-6 col-12 d-flex justify-content-center">
              <div 
                className="product-box"
                onClick={() => sendWhatsAppMessage(
                  product.name,
                  product.brand,
                  product.weight,
                  product.description
                )}
              >
                <div className="product-box-img">
                  <img 
                    src={product.image}
                    className="product-box-image"
                    alt={product.name}
                  />
                </div>

                <div>
                  <p className="product-box-brand">{product.brand}</p>
                  <p className="product-box-name">{product.name}</p>
                  <p className="product-box-text">
                    {product.description}
                  </p>

                  <div className="product-shap">
                    <img 
                      src="/src/assets/img/icons/w-app.svg"
                      alt="WhatsApp"
                      className="w-app-img"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurProducts
