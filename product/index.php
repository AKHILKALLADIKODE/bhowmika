<?php
$DOC_ROOT = "../";
$title = "BHOWMIKA";
$description = "";
$keywords = "";
$page = "PRODUCTS";
$ogimg = "";
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <?php include $DOC_ROOT . 'includes/header-slider.php'; ?>
    <?php include $DOC_ROOT . 'includes/header-inner.php'; ?>
    <?php include $DOC_ROOT . 'includes/header-meta.php'; ?>
    <?php include $DOC_ROOT . 'includes/header-fancy.php'; ?>
</head>

<body>
    <?php include $DOC_ROOT . 'includes/header.php'; ?>
    <!-- ===========================Sub Banner start============================== -->
    <section class=" container-fluid cmpad">
        <div class="sub-banner">
            <div class="sub-banner-content">
                <h1 class="banner-title">PRODUCTS</h1>
            </div>
            <img src="<?php echo $DOC_ROOT; ?>assets/img/icons/main-pattern1.svg" class="sub-banner-pattern" alt="Banner Pattern">
        </div>
    </section>
    <!-- ===========================Sub Banner end============================== -->
    <section class="cmmt">
        <div class="container-fluid cmpad">
            <div class="search-box text-center mb-4">
                <input type="text" id="productSearch" placeholder="Search product..." onkeyup="searchProduct()" class="form-control w-50 m-auto">
            </div>
            <div class="row">
                <div class="col-lg-3 col-md-4 col-sm-6 col-12 d-flex justify-content-center product-item">
                    <div class="product-box"
                        onclick="sendWhatsAppMessage(
            'Coffee Powder',
            'BHOWMIKA SPICES',
            '250gm',
            'Premium organic coffee powder sourced from the lush hills of Wayanad for a rich, authentic aroma.'
        )">

                        <div class="product-box-img">
                            <img src="<?php echo $DOC_ROOT; ?>assets/img/banner/banner1.webp"
                                class="product-box-image"
                                alt="Banner Images">
                        </div>

                        <div>
                            <p class="product-box-brand">BHOWMIKA SPICES - 250gm</p>
                            <p class="product-box-name">Coffee Powder</p>
                            <p class="product-box-text">
                                Premium organic coffee powder sourced from the lush hills of Wayanad for a rich, authentic aroma.
                            </p>

                            <div class="product-shap">
                                <img src="<?php echo $DOC_ROOT; ?>assets/img/icons/w-app.svg"
                                    alt=""
                                    class="w-app-img">
                            </div>
                        </div>

                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 col-sm-6 col-12  d-flex justify-content-center product-item">
                    <div class="product-box"
                        onclick="sendWhatsAppMessage(
            'Chilly Powder',
            'BHOWMIKA SPICES',
            '100gm',
            'Fiery, pure, and aromatic red chilly powder made from premium sun-dried chillies for rich color and bold flavor.' )">

                        <div class="product-box-img">
                            <img src="<?php echo $DOC_ROOT; ?>assets/img/banner/banner2.webp"
                                class="product-box-image"
                                alt="Banner Images">
                        </div>

                        <div>
                            <p class="product-box-brand">BHOWMIKA SPICES - 100gm</p>
                            <p class="product-box-name">Chilly Powder</p>
                            <p class="product-box-text">
                                Fiery, pure, and aromatic red chilly powder made from premium sun-dried chillies for rich color and bold flavor.
                            </p>

                            <div class="product-shap">
                                <img src="<?php echo $DOC_ROOT; ?>assets/img/icons/w-app.svg"
                                    alt=""
                                    class="w-app-img">
                            </div>
                        </div>

                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 col-12 d-flex justify-content-center product-item">
                    <div class="product-box"
                        onclick="sendWhatsAppMessage(
            'Turmeric Powder',
            'BHOWMIKA SPICES',
            '250gm',
            '  Pure, golden turmeric powder with rich color, earthy aroma, and natural goodness — fresh and authentic.' )">

                        <div class="product-box-img">
                            <img src="<?php echo $DOC_ROOT; ?>assets/img/banner/banner3.webp"
                                class="product-box-image"
                                alt="Banner Images">
                        </div>

                        <div>
                            <p class="product-box-brand">BHOWMIKA SPICES - 250gm</p>
                            <p class="product-box-name">Turmeric Powder</p>
                            <p class="product-box-text">
                                Pure, golden turmeric powder with rich color, earthy aroma, and natural
                                goodness — fresh and authentic.
                            </p>
                            <div class="product-shap">
                                <img src="<?php echo $DOC_ROOT; ?>assets/img/icons/w-app.svg"
                                    alt=""
                                    class="w-app-img">
                            </div>
                        </div>

                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 col-12 d-flex justify-content-center product-item">
                    <div class="product-box"
                        onclick="sendWhatsAppMessage(
        'Coriander Powder',
        'BHOWMIKA SPICES',
        '100gm',
        'Fresh, aromatic coriander powder made from premium sun-dried coriander seeds for rich flavor and natural aroma.' )">

                        <div class="product-box-img">
                            <img src="<?php echo $DOC_ROOT; ?>assets/img/banner/banner4.webp"
                                class="product-box-image"
                                alt="Product Image">
                        </div>

                        <div>
                            <p class="product-box-brand">BHOWMIKA SPICES - 100gm</p>
                            <p class="product-box-name">Coriander Powder</p>
                            <p class="product-box-text">
                                Fresh, aromatic coriander powder made from premium sun-dried coriander seeds for rich flavor and natural aroma.
                            </p>

                            <div class="product-shap">
                                <img src="<?php echo $DOC_ROOT; ?>assets/img/icons/w-app.svg"
                                    alt=""
                                    class="w-app-img">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <script>
        function sendWhatsAppMessage(productName, brandName, quantity, description) {
            let message = `*${brandName}* 
Product: ${productName}

Quantity: ${quantity}

${description}`;

            let phone = "+919562794522";
            let whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, "_blank");
        }
    </script>
    <script>
        function searchProduct() {

            let input = document.getElementById("productSearch").value.toLowerCase();
            let products = document.querySelectorAll(".product-item");

            products.forEach(function(product) {

                let name = product.querySelector(".product-box-name").innerText.toLowerCase();

                if (name.includes(input)) {
                    product.style.display = "flex";
                } else {
                    product.style.display = "none";
                }

            });

        }
    </script>
    <?php include $DOC_ROOT . 'includes/footer.php'; ?>

</body>

</html>