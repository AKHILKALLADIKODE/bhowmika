import { useRef, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

function Banner() {
  const swiperRef = useRef(null)

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.update()
    }
  }, [])

  const bannerImages = [
    '/src/assets/img/banner/banner1.webp',
    '/src/assets/img/banner/banner2.webp',
    '/src/assets/img/banner/banner3.webp',
    '/src/assets/img/banner/banner4.webp',
    '/src/assets/img/banner/banner5.webp',
    '/src/assets/img/banner/banner6.webp',
    '/src/assets/img/banner/banner7.webp',
    '/src/assets/img/banner/banner8.webp',
  ]

  return (
    <section>
      <div className="container-fluid cmpad">
        <div className="banner-box">
          <div className="row">
            {/* Left Content Column */}
            <div className="col-lg-5 col-md-12 col-12 order-2 order-lg-1 order-md-2">
              <div className="d-flex flex-column justify-content-center h-100">
                <h1>Pure <br /> Taste From <br />Nature's Roots</h1>
                <p className="text text-white">Innovating To Make Cooking Better</p>
                <div>
                  <div id="section10" className="scrollbutton">
                    <a href="#Whats"><span></span></a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Slider Column */}
            <div className="col-lg-7 col-md-12 col-12 order-1 order-lg-2 order-md-1">
              <div className="d-flex flex-column justify-content-center h-100">
                <div className="banner-slider">
                  <Swiper
                    ref={swiperRef}
                    modules={[Pagination, Autoplay]}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    loop={true}
                    className="swiper-wrapper"
                  >
                    {bannerImages.map((image, index) => (
                      <SwiperSlide key={index}>
                        <img src={image} alt={`Banner ${index + 1}`} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  <div className="swiper-pagination"></div>
                </div>
              </div>
            </div>
          </div>
          <img 
            src="/src/assets/img/icons/main-pattern.svg" 
            className="banner-pattern" 
            alt="Banner Pattern"
          />
        </div>
      </div>
    </section>
  )
}

export default Banner
