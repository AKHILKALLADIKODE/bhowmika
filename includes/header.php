    <header>
        <div class="container-fluid cmpad">
            <nav class="navbar navbar-expand-lg ">
                <a class="navbar-brand" href="<?php echo $DOC_ROOT; ?>">
                    <img src="<?php echo $DOC_ROOT; ?>assets/img/logo/logo.svg" class="logo" alt="Logo">
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item menu-item active">
                            <a class="nav-link " href="<?php echo $DOC_ROOT; ?>">HOME</a>
                        </li>
                        <li class="nav-item menu-item">
                            <a class="nav-link " href="<?php echo $DOC_ROOT; ?>about">ABOUT US </a>
                        </li>
                        <!-- <li class="nav-item menu-item">
                            <a class="nav-link" href="<?php echo $DOC_ROOT; ?>service">SERVICE</a>
                        </li> -->
                        <li class="nav-item menu-item">
                            <a class="nav-link" href="<?php echo $DOC_ROOT; ?>product">PRODUCT</a>
                        </li>
                        <li class="nav-item menu-item">
                            <a class="nav-link" href="<?php echo $DOC_ROOT; ?>gallery">GALLERY</a>
                        </li>
                        <li class="nav-item menu-item">
                            <a class="nav-link" href="<?php echo $DOC_ROOT; ?>contact">CONTACT US</a>
                        </li>
                    </ul>
                    <div>

                    </div>
                </div>
            </nav>
        </div>
    </header>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div class="offcanvas-header">
            <h5 id="offcanvasRightLabel">Offcanvas right</h5>
            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            ...
        </div>
    </div>