<footer class="cmmt">
  <div class="cmpad container-fluid">
    <div>
      <div class="row">
        <div class="col-lg-3 col-md-12 col-12">
          <div class="footer-logo">
            <a href="<?php echo $DOC_ROOT; ?>">
              <img src="<?php echo $DOC_ROOT; ?>assets/img/logo/logo-white.svg" alt="Logo">
            </a>
          </div>
          <nav class="footer-nav mt-4">
            <a href="<?php echo $DOC_ROOT; ?>" target="_blank" class="social-icon">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="<?php echo $DOC_ROOT; ?>" target="_blank" class="social-icon">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="https://wa.me/+918086859458?text=I'm%20interested%20in%20your%20vehicle%20inspection" target="_blank" class="social-icon">
              <i class="fab fa-whatsapp"></i>
            </a>
            <a href="<?php echo $DOC_ROOT; ?>" target="_blank" class="social-icon">
              <i class="fa-brands fa-youtube"></i>
            </a>
          </nav>
        </div>
        <div class="col-lg-9 col-md-12 col-12">
          <nav class="footer-nav">
            <a href="<?php echo $DOC_ROOT; ?>">
              HOME
            </a>
            <a href="<?php echo $DOC_ROOT; ?>">
              ABOUTN US
            </a>
            <a href="<?php echo $DOC_ROOT; ?>">
              SERVICE
            </a>
            <a href="<?php echo $DOC_ROOT; ?>">
              PRODUCT
            </a>
            <a href="<?php echo $DOC_ROOT; ?>">
              GALLERY
            </a>
            <a href="<?php echo $DOC_ROOT; ?>" target="_blank">
              CONTACT US
            </a>
          </nav>
          <div class="gradient-line"></div>
          <div class="footer-main-content">

            <div class="contact-grid">

              <div class="contact-item">
                <div class="icon-title">
                  <i class="fas fa-map-marker-alt"></i>
                  <span>Location</span>
                </div>
                <p class="contact-text">
                  Panjami, Meppadi, Kottappadi part, wayanad, Kerala 673577
                </p>
              </div>

              <div class="contact-item">
                <div class="icon-title">
                  <i class="fa-solid fa-envelope"></i>
                  <span>Contact Mail</span>
                </div>
                <a class="contact-link" href="mailto:info@auto-assure.com">akhilkalladikode774@gmail.com</a>
              </div>

              <div class="contact-item">
                <div class="icon-title">
                  <i class="fa-solid fa-phone-volume"></i>
                  <span>Contact Number</span>
                </div>
                <a class="contact-link" href="tel:+918086859458"> +91 8086 8594 58 </a><br>
                <a class="contact-link" href="tel:+916282070804"> +91 6282 0708 04</a>
                <span class="text-white">-</span>
                <a class="contact-link" href="tel:+919562794522"> +91 9562 7945 22</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="footer-bottom-section">
      <div class="copyright">
        <p class="contact-text text-center">
          ©<span id="year"></span> BHOWMIKA SPICES. All Rights Reserved. Powered by
          <a class="contact-link" target="_blank" href="https://www.instagram.com/akhiil.kr?igsh=c2k5OTFnbXVodnNz">AKHIL KR</a>
        </p>
      </div>
    </div>
  </div>
</footer>
<!--============================ SCRIPTS================================== -->
<!-- ===================bootstrap@5.3.3=================== -->
<script src="<?php echo $DOC_ROOT; ?>assets/js/bootstrap.min.js"></script>
<script src="<?php echo $DOC_ROOT; ?>assets/js/popper.min.js"></script>
<!-- =================== font-awesome.min=================== -->
<script src="<?php echo $DOC_ROOT; ?>assets/js/font-awesome.min.js"></script>
<!-- ===================swiper slider=================== -->
<script src="<?php echo $DOC_ROOT; ?>assets/js/swiper-bundle.min.js"></script>
<!-- ===================fancybox=================== -->
<script src="<?php echo $DOC_ROOT; ?>assets/js/fancybox.umd.js"></script>
<!-- ===================jquery=================== -->
<script src="<?php echo $DOC_ROOT; ?>assets/js/jquery.js"></script>
<!-- =================== script =================== -->
<script src="<?php echo $DOC_ROOT; ?>assets/js/script.js"></script>
<script>
  Fancybox.bind('[data-fancybox="gallery"]', {});
</script>
<script>
  document.getElementById("year").textContent = new Date().getFullYear();
</script>
<!-- =================== owl-carousel =================== -->