import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="cmmt">
      <div className="cmpad container-fluid">
        <div>
          <div className="row">
            <div className="col-lg-3 col-md-12 col-12">
              <div className="footer-logo">
                <Link to="/">
                  <img src="/src/assets/img/logo/logo-white.svg" alt="Logo" />
                </Link>
              </div>
              <nav className="footer-nav mt-4">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://wa.me/+918086859458" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <i className="fab fa-whatsapp"></i>
                </a>
                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <i className="fa-brands fa-youtube"></i>
                </a>
              </nav>
            </div>
            <div className="col-lg-9 col-md-12 col-12">
              <nav className="footer-nav">
                <Link to="/">HOME</Link>
                <Link to="/about">ABOUT US</Link>
                <Link to="/service">SERVICE</Link>
                <Link to="/product">PRODUCT</Link>
                <Link to="/gallery">GALLERY</Link>
                <Link to="/contact">CONTACT US</Link>
              </nav>
              <div className="gradient-line"></div>
              <div className="footer-main-content">
                <div className="contact-grid">
                  <div className="contact-item">
                    <div className="icon-title">
                      <i className="fas fa-map-marker-alt"></i>
                      <span>Location</span>
                    </div>
                    <p className="contact-text">
                      Punjami, Meppadi, Kottappadi part, wayanad, Kerala 673577
                    </p>
                  </div>

                  <div className="contact-item">
                    <div className="icon-title">
                      <i className="fa-solid fa-envelope"></i>
                      <span>Contact Mail</span>
                    </div>
                    <a className="contact-link" href="mailto:akhilkalladikode774@gmail.com">
                      akhilkalladikode774@gmail.com
                    </a>
                  </div>

                  <div className="contact-item">
                    <div className="icon-title">
                      <i className="fa-solid fa-phone-volume"></i>
                      <span>Contact Number</span>
                    </div>
                    <a className="contact-link" href="tel:+918086859458">
                      +91 8086 8594 58
                    </a>
                    <br />
                    <a className="contact-link" href="tel:+916282070804">
                      +91 6282 0708 04
                    </a>
                    <span className="text-white">-</span>
                    <a className="contact-link" href="tel:+919562794522">
                      +91 9562 7945 22
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom-section">
          <div className="copyright">
            <p className="contact-text text-center">
              ©<span id="year"></span> BHOWMIKA SPICES. All Rights Reserved. Powered by
              <a 
                className="contact-link" 
                target="_blank" 
                href="https://www.instagram.com/akhiil.kr?igsh=c2k5OTFnbXVodnNz"
                rel="noopener noreferrer"
              >
                AKHIL KR
              </a>
            </p>
          </div>
        </div>
      </div>

      <script>
        {`document.getElementById("year").textContent = new Date().getFullYear()`}
      </script>
    </footer>
  )
}

export default Footer
