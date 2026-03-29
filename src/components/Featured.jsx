import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

function Featured() {
  const masterImages = [
    '/src/assets/img/banner/banner2.webp',
    '/src/assets/img/banner/banner3.webp',
    '/src/assets/img/banner/banner4.webp',
    '/src/assets/img/banner/banner5.webp',
  ]

  return (
    <section className="cmmt">
      <div className="master-box">
        <div className="container-fluid cmpad">
          <div className="row">
            <div className="col-lg-7 col-md-12 col-12 mt-3">
              <div className="d-flex flex-column justify-content-center h-100">
                <h2 className="main-heading text-white">Bhowmika Spices – Masters of Authentic Wayanad Coffee Powder</h2>
                <p className="text text-white">
                  Finely crafted coffee powder made from handpicked Wayanad beans, offering rich aroma, deep flavor, and a truly fresh, authentic experience.
                </p>
                <a href="/product" className="main-btn">
                  <div>View More</div>
                  <div className="main-btn-icon">
                    <i className="fa-solid fa-arrow-right"></i>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-lg-5 col-md-12 col-12 mt-3">
              <div className="master-slider swiper">
                <Swiper
                  modules={[Pagination]}
                  pagination={{ clickable: true }}
                  loop={true}
                  className="swiper-wrapper"
                >
                  {masterImages.map((image, index) => (
                    <SwiperSlide key={index}>
                      <div className="master-img-box">
                        <img src={image} alt={`Master ${index + 1}`} />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                {/* Dots Pagination */}
                <div className="swiper-pagination"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Featured
