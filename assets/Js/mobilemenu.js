document.addEventListener("DOMContentLoaded", function () {
    const sidemenuMainCover = document.getElementById("main-sidebar-menu_mobile");
    const navbarMobileScreen = document.getElementById("side-menu-mob-left-bottom");
    const SearchMainIcon = document.getElementById("searchIcon_Main");
    const sidemenuToggle = document.getElementById("mob-main-menu");
    const BackHomeMenu5 = document.getElementById("Back_Home_Menu-5");
    const innerWrapper = document.getElementById('inner-wrapper-menu-mob-category');
    let headerSearchSection = document.querySelector('.header-search-section');
    const sidemenuMainCloseBTN6 = document.getElementById("close-btn-6");

    function MainMobileMenu() {
        fetch("assets/JSON/Mainmenu.json")
            .then(response => response.json())
            .then(function (res) {

                const hambuler = document.getElementById("inner-wrapper-menu-mob-category");
                let html = "";

                for (let row of res) {
                    html +=
                        `<div class="mob-main-menu-wrapper">
                            <div class="row">
                                <div class="col-10">
                                    <img src="assets/images/logo.png" alt="">
                                    <i class="bx bx-search" id="searchbar-open-btn"></i>
                                </div>
                                <div class="col-2">
                                    <button class="top-nav__close-btn-2" id="close-btn">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                    viewBox="0 0 14 14">
                                    <path fill="currentColor" fill-rule="evenodd"
                                    d="M2.291.877A1 1 0 1 0 .877 2.291L5.586 7 .89 11.695a1 1 0 1 0 1.414 1.414L7 8.414l4.695 4.695a1 1 0 0 0 1.414-1.414L8.414 7l4.709-4.709A1 1 0 0 0 11.709.877L7 5.586 2.291.877z">
                                    </path>
                                    </svg>
                                    </button>
                                </div>
                            </div>
                            <div class="row">
                                <ul>
                                    <li id="mob-menu-men">
                                        <button>${row.Category1}</button>
                                        <i class='bx bx-chevron-right'></i>
                                    </li>
                                    <li id="mob-menu-women">
                                        <button>${row.Category2}</button>
                                        <i class='bx bx-chevron-right'></i>
                                    </li>
                                    <li id="mob-menu-kids">
                                        <button>${row.Category3}</button>
                                        <i class='bx bx-chevron-right'></i>
                                    </li>
                                    <li id="mob-menu-sale">
                                        <button>${row.Category4}</button>
                                        <i class='bx bx-chevron-right'></i>
                                    </li>
                                </ul>
                            </div>
                        <hr>
                </div>`}

                hambuler.innerHTML = html;

                // back searchbar section 
                BackHomeMenu5.addEventListener('click', () => {
                    navbarMobileScreen.style.display = "block";
                    innerWrapper.innerHTML = ''; 
                    MainMobileMenu();
                });

                // switch search bar to mobile screen
                function moveElements() {
                    const screenWidth = window.innerWidth;

                    if (screenWidth <= 1086) {
                        if (headerSearchSection && innerWrapper) {
                            innerWrapper.innerHTML = '';
                            sidemenuToggle.style.paddingBottom = '0';
                            sidemenuToggle.style.display = 'block';
                            sidemenuMainCover.style.display = 'block';
                            headerSearchSection.style.display = 'block';
                            headerSearchSection.style.opacity = '1';
                            innerWrapper.appendChild(headerSearchSection);
                            navbarMobileScreen.style.display = "none";
                        }
                    }
                }

                // open searchbar side menu 
                const openSearchbarBtn = document.getElementById("searchbar-open-btn");
                openSearchbarBtn.addEventListener('click', () => {
                    moveElements();
                });

                // open searchbar main top menu 
                SearchMainIcon.addEventListener('click', () => {
                    moveElements();
                });

                // close searchbar click 
                sidemenuMainCloseBTN6.addEventListener('click', function (e) {
                    e.preventDefault();
                    sidemenuToggle.classList.remove("open");
                    sidemenuMainCover.classList.remove("open");
                    document.body.classList.remove("hidden");
                    navbarMobileScreen.style.display = "block";
                    innerWrapper.innerHTML = ''; 
                    MainMobileMenu();
                });

                const sidemenuMainClose = document.getElementById("close-btn");
                sidemenuMainClose.addEventListener('click', function (e) {
                    e.preventDefault();
                    sidemenuToggle.style.animation = 'SlideRight 0.3s ease-in-out forwards';
                    setTimeout(function () {
                        sidemenuToggle.style.display = 'none';
                        sidemenuMainCover.style.display = 'none';
                        sidemenuToggle.style.animation = ''; 
                    }, 300); 
                });

                const MobMenuMen = document.getElementById("mob-menu-men");
                if (MobMenuMen) {
                    MobMenuMen.addEventListener('click', function () {
                        menCategory();
                    });
                }

                const MobMenuWomen = document.getElementById("mob-menu-women");
                if (MobMenuWomen) {
                    MobMenuWomen.addEventListener('click', function () {
                        womenCategory();
                    });
                }

                const MobMenuKids = document.getElementById("mob-menu-kids");
                if (MobMenuKids) {
                    MobMenuKids.addEventListener('click', function () {
                        KidsCategory();
                    });
                }

                const MobMenuSale = document.getElementById("mob-menu-sale");
                if (MobMenuSale) {
                    MobMenuSale.addEventListener('click', function () {
                        SaleCategory();
                    });
                }
            });
    };

    window.onload = function () {
        MainMobileMenu();
    };

    function menCategory() {
        document.getElementById("inner-wrapper-menu-mob-category").innerHTML = "";
        fetch("assets/JSON/mobilemenuMen.json")
            .then(response => response.json())
            .then(function (res) {

                const hambuler = document.getElementById("inner-wrapper-menu-mob-category");
                let html = "";

                for (let row of res) {
                    html +=
                        `<div class="mob-main-menu-wrapper-2">
                    <div class="row">
                        <div class="col-6">
                            <i class="bx bx-chevron-left" id="Back_Home_Menu-1"></i>
                            <button>${row.GenderMENU}</button>
                        </div>
                        <div class="col-2">
                            <button class="top-nav__close-btn-2" id="close-btn-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                    viewBox="0 0 14 14">
                                    <path fill="currentColor" fill-rule="evenodd"
                                        d="M2.291.877A1 1 0 1 0 .877 2.291L5.586 7 .89 11.695a1 1 0 1 0 1.414 1.414L7 8.414l4.695 4.695a1 1 0 0 0 1.414-1.414L8.414 7l4.709-4.709A1 1 0 0 0 11.709.877L7 5.586 2.291.877z">
                                    </path>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12" id="mob-main-menu-wrapper-2-inner">
                            <div class="row">
                                <ul>
                                    <li>
                                        <a href="">
                                            <img src="${row.Deal1Image}" alt="">
                                            <span>${row.Deal1}</span>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="">
                                            <img src="${row.Deal2Image}" alt="">
                                            <span>${row.Deal2}</span>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="">
                                            <img src="${row.Deal3Image}" alt="">
                                            <span>${row.Deal3}</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div class="row">
                                <div class="col-12">
                                    <ul>
                                        <li>
                                            <button>${row.ProductName1}</button>
                                            <i class="bx bx-chevron-right"></i>
                                        </li>
                                    </ul>
                                </div>
                                <div class="col-12">
                                    <ul>
                                        <li>
                                            <a href="">
                                                <span>${row.Products1C}</span>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="">
                                                <span>${row.Products2C}</span>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="">
                                                <span>${row.Products3C}</span>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="">
                                                <span>${row.Products4C}</span>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="">
                                                <span>${row.Products5C}</span>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="">
                                                <span>${row.Products6C}</span>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="">
                                                <span>${row.Products7C}</span>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="">
                                                <span>${row.Products8C}</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="col-12">
                                    <ul>
                                        <li>
                                            <button>${row.Products1F}</button>
                                            <i class="bx bx-chevron-right"></i>
                                        </li>
                                    </ul>
                                </div>
                                <div class="col-12">
                                    <ul>
                                        <li>
                                            <button>${row.Products2F}</button>
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24">
                                                <path fill="#000"
                                                    d="M14 5a1 1 0 1 1 0-2h6a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V6.414l-9.293 9.293a1 1 0 0 1-1.414-1.414L17.586 5H14zM3 7a2 2 0 0 1 2-2h5a1 1 0 1 1 0 2H5v12h12v-5a1 1 0 1 1 2 0v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z">
                                                </path>
                                            </svg>
                                        </li>
                                    </ul>
                                </div>
                                <div class="col-12">
                                    <ul>
                                        <li>
                                            <button>${row.Products3F}</button>
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24">
                                                <path fill="#000"
                                                    d="M14 5a1 1 0 1 1 0-2h6a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V6.414l-9.293 9.293a1 1 0 0 1-1.414-1.414L17.586 5H14zM3 7a2 2 0 0 1 2-2h5a1 1 0 1 1 0 2H5v12h12v-5a1 1 0 1 1 2 0v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z">
                                                </path>
                                            </svg>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`}

                hambuler.innerHTML = html;

                const sidemenuMainClose2 = document.getElementById("close-btn-2");
                sidemenuMainClose2.addEventListener('click', function (e) {
                    e.preventDefault();
                    sidemenuMainCover.classList.remove("open");
                    sidemenuToggle.classList.remove("open");
                    document.body.classList.remove("hidden");
                    MainMobileMenu();
                });

                const BackHomeBtnMen = document.getElementById("Back_Home_Menu-1");
                BackHomeBtnMen.addEventListener('click', function () {
                    if (BackHomeBtnMen) {
                        MainMobileMenu();
                    }
                });
            });
    };

    function womenCategory() {
        document.getElementById("inner-wrapper-menu-mob-category").innerHTML = " ";
        fetch("assets/JSON/mobilemenuWomen.json")
            .then(response => response.json())
            .then(function (res) {

                const hambuler = document.getElementById("inner-wrapper-menu-mob-category");
                let html = "";

                for (let row of res) {
                    html +=
                        `<div class="mob-main-menu-wrapper-2">
                <div class="row">
                    <div class="col-6">
                        <i class="bx bx-chevron-left" id="Back_Home_Menu-2"></i>
                        <button>${row.GenderMENU}</button>
                    </div>
                    <div class="col-2">
                        <button class="top-nav__close-btn-2" id="close-btn-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 14 14">
                                <path fill="currentColor" fill-rule="evenodd"
                                    d="M2.291.877A1 1 0 1 0 .877 2.291L5.586 7 .89 11.695a1 1 0 1 0 1.414 1.414L7 8.414l4.695 4.695a1 1 0 0 0 1.414-1.414L8.414 7l4.709-4.709A1 1 0 0 0 11.709.877L7 5.586 2.291.877z">
                                </path>
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12" id="mob-main-menu-wrapper-2-inner">
                        <div class="row">
                            <ul>
                                <li>
                                    <a href="">
                                        <img src="${row.Deal1Image}" alt="">
                                        <span>${row.Deal1}</span>
                                    </a>
                                </li>

                                <li>
                                    <a href="">
                                        <img src="${row.Deal2Image}" alt="">
                                        <span>${row.Deal2}</span>
                                    </a>
                                </li>

                                <li>
                                    <a href="">
                                        <img src="${row.Deal3Image}" alt="">
                                        <span>${row.Deal3}</span>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div class="row">
                            <div class="col-12">
                                <ul>
                                    <li>
                                        <button>${row.ProductName1}</button>
                                        <i class="bx bx-chevron-right"></i>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-12">
                                <ul>
                                    <li>
                                        <a href="">
                                            <span>${row.Products1C}</span>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="">
                                            <span>${row.Products2C}</span>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="">
                                            <span>${row.Products3C}</span>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="">
                                            <span>${row.Products4C}</span>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="">
                                            <span>${row.Products5C}</span>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="">
                                            <span>${row.Products6C}</span>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="">
                                            <span>${row.Products7C}</span>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="">
                                            <span>${row.Products8C}</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-12">
                                <ul>
                                    <li>
                                        <button>${row.Products1F}</button>
                                        <i class="bx bx-chevron-right"></i>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-12">
                                <ul>
                                    <li>
                                        <button>${row.Products2F}</button>
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24">
                                            <path fill="#000"
                                                d="M14 5a1 1 0 1 1 0-2h6a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V6.414l-9.293 9.293a1 1 0 0 1-1.414-1.414L17.586 5H14zM3 7a2 2 0 0 1 2-2h5a1 1 0 1 1 0 2H5v12h12v-5a1 1 0 1 1 2 0v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z">
                                            </path>
                                        </svg>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-12">
                                <ul>
                                    <li>
                                        <button>${row.Products3F}</button>
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24">
                                            <path fill="#000"
                                                d="M14 5a1 1 0 1 1 0-2h6a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V6.414l-9.293 9.293a1 1 0 0 1-1.414-1.414L17.586 5H14zM3 7a2 2 0 0 1 2-2h5a1 1 0 1 1 0 2H5v12h12v-5a1 1 0 1 1 2 0v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z">
                                            </path>
                                        </svg>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`}

                hambuler.innerHTML = html;

                const sidemenuMainClose3 = document.getElementById("close-btn-3");
                sidemenuMainClose3.addEventListener('click', function (e) {
                    e.preventDefault();
                    sidemenuMainCover.classList.remove("open");
                    sidemenuToggle.classList.remove("open");
                    document.body.classList.remove("hidden");
                    MainMobileMenu();
                });

                const BackHomeBtnWomen = document.getElementById("Back_Home_Menu-2");
                BackHomeBtnWomen.addEventListener('click', function () {
                    if (BackHomeBtnWomen) {
                        MainMobileMenu();
                    }
                });
            });
    };

    function KidsCategory() {
        document.getElementById("inner-wrapper-menu-mob-category").innerHTML = " ";
        fetch("assets/JSON/mobilemenuKids.json")
            .then(response => response.json())
            .then(function (res) {

                const hambuler = document.getElementById("inner-wrapper-menu-mob-category");
                let html = "";

                for (let row of res) {
                    html +=
                        `<div class="mob-main-menu-wrapper-2">
                <div class="row">
                    <div class="col-6">
                        <i class="bx bx-chevron-left" id="Back_Home_Menu-3"></i>
                        <button>${row.GenderMENU}</button>
                    </div>
                    <div class="col-2">
                        <button class="top-nav__close-btn-2" id="close-btn-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 14 14">
                                <path fill="currentColor" fill-rule="evenodd"
                                    d="M2.291.877A1 1 0 1 0 .877 2.291L5.586 7 .89 11.695a1 1 0 1 0 1.414 1.414L7 8.414l4.695 4.695a1 1 0 0 0 1.414-1.414L8.414 7l4.709-4.709A1 1 0 0 0 11.709.877L7 5.586 2.291.877z">
                                </path>
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12" id="mob-main-menu-wrapper-2-inner">
                        <div class="row">
                            <ul>
                                <li>
                                    <a href="">
                                        <img src="${row.Deal1Image}" alt="">
                                        <span>${row.Deal1}</span>
                                    </a>
                                </li>

                                <li>
                                    <a href="">
                                        <img src="${row.Deal2Image}" alt="">
                                        <span>${row.Deal2}</span>
                                    </a>
                                </li>

                                <li>
                                    <a href="">
                                        <img src="${row.Deal3Image}" alt="">
                                        <span>${row.Deal3}</span>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div class="row">
                            <div class="col-12">
                                <ul>
                                    <li>
                                        <button>${row.ProductName1}</button>
                                        <i class="bx bx-chevron-right"></i>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-12">
                                <ul>
                                    <li>
                                        <a href="">
                                            <span>${row.Products1C}</span>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="">
                                            <span>${row.Products2C}</span>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="">
                                            <span>${row.Products3C}</span>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="">
                                            <span>${row.Products4C}</span>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="">
                                            <span>${row.Products5C}</span>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="">
                                            <span>${row.Products6C}</span>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="">
                                            <span>${row.Products7C}</span>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="">
                                            <span>${row.Products8C}</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-12">
                                <ul>
                                    <li>
                                        <button>${row.Products1F}</button>
                                        <i class="bx bx-chevron-right"></i>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-12">
                                <ul>
                                    <li>
                                        <button>${row.Products2F}</button>
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24">
                                            <path fill="#000"
                                                d="M14 5a1 1 0 1 1 0-2h6a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V6.414l-9.293 9.293a1 1 0 0 1-1.414-1.414L17.586 5H14zM3 7a2 2 0 0 1 2-2h5a1 1 0 1 1 0 2H5v12h12v-5a1 1 0 1 1 2 0v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z">
                                            </path>
                                        </svg>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-12">
                                <ul>
                                    <li>
                                        <button>${row.Products3F}</button>
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24">
                                            <path fill="#000"
                                                d="M14 5a1 1 0 1 1 0-2h6a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V6.414l-9.293 9.293a1 1 0 0 1-1.414-1.414L17.586 5H14zM3 7a2 2 0 0 1 2-2h5a1 1 0 1 1 0 2H5v12h12v-5a1 1 0 1 1 2 0v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z">
                                            </path>
                                        </svg>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`}

                hambuler.innerHTML = html;

                const sidemenuMainClose4 = document.getElementById("close-btn-4");
                sidemenuMainClose4.addEventListener('click', function (e) {
                    e.preventDefault();
                    sidemenuMainCover.classList.remove("open");
                    sidemenuToggle.classList.remove("open");
                    document.body.classList.remove("hidden");
                    MainMobileMenu();
                });

                const BackHomeBtnKids = document.getElementById("Back_Home_Menu-3");
                BackHomeBtnKids.addEventListener('click', function () {
                    if (BackHomeBtnKids) {
                        MainMobileMenu();
                    }
                });
            });
    };

    function SaleCategory() {
        document.getElementById("inner-wrapper-menu-mob-category").innerHTML = " ";
        fetch("assets/JSON/mobilesalemenu.json")
            .then(response => response.json())
            .then(function (res) {

                const hambuler = document.getElementById("inner-wrapper-menu-mob-category");
                let html = "";

                for (let row of res) {
                    html +=
                        `<div class="mob-main-menu-wrapper-2">
                <div class="row">
                    <div class="col-6">
                        <i class="bx bx-chevron-left" id="Back_Home_Menu-4"></i>
                        <button>${row.GenderMENU}</button>
                    </div>
                    <div class="col-2">
                        <button class="top-nav__close-btn-2" id="close-btn-5">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 14 14">
                                <path fill="currentColor" fill-rule="evenodd"
                                    d="M2.291.877A1 1 0 1 0 .877 2.291L5.586 7 .89 11.695a1 1 0 1 0 1.414 1.414L7 8.414l4.695 4.695a1 1 0 0 0 1.414-1.414L8.414 7l4.709-4.709A1 1 0 0 0 11.709.877L7 5.586 2.291.877z">
                                </path>
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12" id="mob-main-menu-wrapper-2-inner">
                        <div class="row">
                            <ul>
                                <li>
                                    <a href="">
                                        <img src="${row.DealImage}" alt="">
                                        <span>${row.Deal}</span>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div class="row">
                            <div class="col-12">
                                <ul>
                                    <li>
                                        <button>${row.Products1C}</button>
                                        <i class="bx bx-chevron-right"></i>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-12 py-1">
                                <ul>
                                    <li>
                                        <button>${row.Products2C}</button>
                                        <i class="bx bx-chevron-right"></i>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-12">
                                <ul>
                                    <li>
                                        <button>${row.Products3C}</button>
                                        <i class="bx bx-chevron-right"></i>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-12">
                                <ul>
                                    <li>
                                        <button>${row.Products4C}</button>
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24">
                                            <path fill="#000"
                                                d="M14 5a1 1 0 1 1 0-2h6a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V6.414l-9.293 9.293a1 1 0 0 1-1.414-1.414L17.586 5H14zM3 7a2 2 0 0 1 2-2h5a1 1 0 1 1 0 2H5v12h12v-5a1 1 0 1 1 2 0v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z">
                                            </path>
                                        </svg>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-12">
                                <ul>
                                    <li>
                                        <button>${row.Products5C}</button>
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24">
                                            <path fill="#000"
                                                d="M14 5a1 1 0 1 1 0-2h6a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V6.414l-9.293 9.293a1 1 0 0 1-1.414-1.414L17.586 5H14zM3 7a2 2 0 0 1 2-2h5a1 1 0 1 1 0 2H5v12h12v-5a1 1 0 1 1 2 0v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z">
                                            </path>
                                        </svg>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`}

                hambuler.innerHTML = html;

                const sidemenuMainClose5 = document.getElementById("close-btn-5");
                sidemenuMainClose5.addEventListener('click', function (e) {
                    e.preventDefault();
                    sidemenuMainCover.classList.remove("open");
                    sidemenuToggle.classList.remove("open");
                    document.body.classList.remove("hidden");
                    MainMobileMenu();
                });

                const BackHomeBtnSale = document.getElementById("Back_Home_Menu-4");
                BackHomeBtnSale.addEventListener('click', function () {
                    if (BackHomeBtnSale) {
                        MainMobileMenu();
                    }
                });
            });
    };
});

