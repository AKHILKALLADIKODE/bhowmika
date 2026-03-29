<?php
$DOC_ROOT = "";
$title = "BHOWMIKA";
$description = "";
$keywords = "";
$page = "home";
$ogimg = "";
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <?php include $DOC_ROOT . 'includes/header-slider.php'; ?>
    <?php include $DOC_ROOT . 'includes/header-meta.php'; ?>
    <?php include $DOC_ROOT . 'includes/header-fancy.php'; ?>
</head>

<body>
    <!-- =================== Includes =================== -->
    <?php include $DOC_ROOT . 'includes/header.php'; ?>
    <?php include $DOC_ROOT . 'includes/banner.php'; ?>
    <?php include $DOC_ROOT . 'includes/product-category.php'; ?>
    <?php include $DOC_ROOT . 'includes/product.php'; ?>
    <?php include $DOC_ROOT . 'includes/master.php'; ?>
    <?php include $DOC_ROOT . 'includes/delivery.php'; ?>
    <?php include $DOC_ROOT . 'includes/footer.php'; ?>
    <!-- =================== Scripts =================== -->
    <!-- =================== Banner Slider =================== -->
    <script>
        var swiper = new Swiper('.banner-slider', {
            loop: true,
            slidesPerView: 1,
            spaceBetween: 0,

            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },

            autoplay: {
                delay: 2000, // change slide every 3 seconds
                disableOnInteraction: false
            },

            pagination: {
                el: '.banner-slider .swiper-pagination',
                clickable: true
            }
        });
    </script>
    <!-- =================== Product Category Slider =================== -->
    <script>
        var swiper = new Swiper('.product-category-slider', {
            loop: true,

            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },

            pagination: {
                el: '.product-category-slider .swiper-pagination',
                clickable: true,
            },

            slidesPerView: 7,
            spaceBetween: 10,
            grabCursor: true, // cursor hover effect (grab)

            breakpoints: {
                1200: {
                    slidesPerView: 7
                },
                992: {
                    slidesPerView: 6
                },
                768: {
                    slidesPerView: 4
                },
                576: {
                    slidesPerView: 3
                },
                0: {
                    slidesPerView: 2
                }
            }
        });

        // Pause on hover
        const slider = document.querySelector('.product-category-slider');

        slider.addEventListener('mouseenter', () => {
            swiper.autoplay.stop();
        });

        slider.addEventListener('mouseleave', () => {
            swiper.autoplay.start();
        });
    </script>
    <!-- =================== MASTER SLIDER =================== -->
    <script>
        var swiper = new Swiper('.master-slider', {
            loop: true,
            slidesPerView: 1,
            spaceBetween: 0,

            effect: 'fade', // Fade effect added
            fadeEffect: {
                crossFade: true
            },

            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },

            pagination: {
                el: '.master-slider .swiper-pagination',
                clickable: true,
            },

            navigation: false // No next/prev
        });
    </script>

</body>

</html>