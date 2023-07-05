document.getElementById("header").innerHTML = `
<!--  ******************** ENCABEZADO Y BARRA DE NAVEGACION ********************  -->
<header class="header">
    <div class="container">
        <!-- ******Inicio BURGER MENU****** -->
        <!-- ******Inicio lineas de burger menu****** -->
        <div class="fixed">
            <div class="header__burger burger">
                <span class="burger__line burger__line--first"></span>
                <span class="burger__line burger__line--second"></span>
                <span class="burger__line burger__line--third"></span>
            </div>
        </div>
        <!-- ******Fin lineas de burger menu****** -->
        <nav class="header__nav">
            <ul id="header__list">
                <li class="header__item">
                    <a class="header__link js-scroll" href="../index.html">Inicio</a>
                </li>
                <li class="header__item">
                    <a class="header__link js-scroll" href="../quienes.html">Quienes Somos</a>
                </li>
                <li class="header__item">
                    <a class="header__link js-scroll" href="../templates/carta.html">Carta</a>
                </li>
                <li class="header__item">
                    <a class="header__link js-scroll" href="../contacto.html">Contacto</a>
                </li>
                <li class="header__item">
                    <!-- Falta agregar HTML o link para pedidos -->
                    <a class="header__link js-scroll"
                        href="https://www.pedidosya.com.ar/restaurantes/buenos-aires/esquina-vernet-delivery-menu?sem_tracker=14862314321&pycat=googlesearch&cmp=&ag=&kwd=&mt=&net=g&dev=c&sitelink=&gclid=Cj0KCQjwmtGjBhDhARIsAEqfDEc5qjMYBNLouVneheIdLEeI12izIVQi4GXkXUvDWMapaaFsBjXAf6EaAsyUEALw_wcB"
                        target="_blank">Pedidos</a>
                </li>
            </ul>
            <div class="header__nav-close">
                <span class="header__nav-close-line"></span>
                <span class="header__nav-close-line"> <span>
            </div>
        </nav>
        <!-- ******Fin BURGER MENU****** -->

        <div class="header__top">
            <h1 title="Esquina Vernet" class="header__title">Esquina Vernet</h1>
            <!-- ******Inicio Barra de navegacion inline****** -->
            <nav class="header_nav">
                <ul class="header_list">
                    <li class="header_item">
                        <a class="header_link js-scroll" href="../index.html">Inicio</a>
                    </li>
                    <li class="header_item">
                        <a class="header_link js-scroll" href="../quienes.html">Quienes Somos</a>
                    </li>
                    <li class="header_item">
                        <a class="header_link js-scroll" href="../templates/carta.html">Carta</a>
                    </li>
                    <li class="header_item">
                        <a class="header_link js-scroll" href="../contacto.html">Contacto</a>
                    </li>
                    <li class="header_item">
                        <a class="header_link js-scroll"
                            href="https://www.pedidosya.com.ar/restaurantes/buenos-aires/esquina-vernet-delivery-menu?sem_tracker=14862314321&pycat=googlesearch&cmp=&ag=&kwd=&mt=&net=g&dev=c&sitelink=&gclid=Cj0KCQjwmtGjBhDhARIsAEqfDEc5qjMYBNLouVneheIdLEeI12izIVQi4GXkXUvDWMapaaFsBjXAf6EaAsyUEALw_wcB"
                            target="_blank">Pedidos</a>
                    </li>
                </ul>
            </nav>
            <!-- ******Fin Barra de navegacion inline****** -->
            <!-- ******Inicio Social Links****** -->
            <nav class="social_links">
                <a title="Facebook" href="https://www.facebook.com/EsquinaVernet/?locale=es_LA" target="_blank">
                    <i class="fa-brands fa-facebook"></i>
                </a>
                <a title="Instagram" href="https://www.instagram.com/esquinavernet/?hl=es" target="_blank"><i
                        class="fa-brands fa-instagram"></i>
                </a>
                <a title="Email" href="contacto.html"><i class="fa-regular fa-envelope"></i>
                </a>
            </nav>
            <!-- ******Fin Social Links****** -->

        </div>

</header>
<!-- ******************** FIN ENCABEZADO Y BARRA DE NAVEGACION ******************** --> 
`