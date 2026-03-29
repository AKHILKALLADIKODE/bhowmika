import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

function ProductCategory() {
  const categories = [
    { id: 1, name: 'Coffee Powder', image: '/src/assets/img/banner/banner5.webp' },
    { id: 2, name: 'Turmeric Powder', image: '/src/assets/img/banner/banner3.webp' },
    { id: 3, name: 'Chilly Powder', image: '/src/assets/img/banner/banner2.webp' },
    { id: 4, name: 'Coriander Powder', image: '/src/assets/img/banner/banner4.webp' },
    { id: 5, name: 'Coffee Powder', image: '/src/assets/img/banner/banner5.webp' },
    { id: 6, name: 'Turmeric Powder', image: '/src/assets/img/banner/banner3.webp' },
    { id: 7, name: 'Chilly Powder', image: '/src/assets/img/banner/banner2.webp' },
    { id: 8, name: 'Coriander Powder', image: '/src/assets/img/banner/banner4.webp' },
  ]

  return (
    <section className="category-main-box">
      <div className="container-fluid cmpad">
        <h2 className="main-heading text-center mb-4">
          product category
        </h2>
        <div className="product-category-slider swiper">
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            slidesPerView={4}
            spaceBetween={20}
            breakpoints={{
              320: { slidesPerView: 2, spaceBetween: 12 },
              640: { slidesPerView: 3, spaceBetween: 16 },
              1024: { slidesPerView: 4, spaceBetween: 20 },
            }}
            className="swiper-wrapper"
          >
            {categories.map((category) => (
              <SwiperSlide key={category.id}>
                <a href="/">
                  <div className="product-category-box">
                    <img src={category.image} alt={category.name} />
                  </div>
                  <p className="text">
                    {category.name}
                  </p>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Pagination Dots */}
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </section>
  )
}

export default ProductCategory
