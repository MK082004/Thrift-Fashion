const MenMenu = document.getElementById('Men_Menu');
MenMenu.addEventListener('click', function(e) {
    e.preventDefault();
    DesktopMenMenu();
});
function DesktopMenMenu() {
    fetch("assets/JSON/desktopmenmenu.json")
    .then(response => response.json())
    .then(function (res) {
    
        const hambuler = document.getElementById("Desktop-Sidebar_menu");
        let html = "";
    
        for (let row of res) {
            html += `
            <div class="overlay-wrapper">
            <div class="row">
                <div class="wrapper-menus">
                    <div class="row">
                        <div class="col-12">
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
                        <div class="col-12">
                            <div class="col-3">
                                <nav>
                                    <h6>${row.ProductName1}</h6>
                                    <ul>
                                        <li>
                                            <a href="">${row.Products1J}</a>
                                        </li>
                                        <li>
                                            <a href="">${row.Products2J}</a>
                                        </li>
                                        <li>
                                            <a href="">${row.Products3J}</a>
                                        </li>
                                        <li>
                                            <a href="">${row.Products4J}</a>
                                        </li>
                                        <li>
                                            <a href="">${row.Products5J}</a>
                                        </li>
                                        <li>
                                            <a href="">${row.Products6J}</a>
                                        </li>
                                        <li>
                                            <a href="">${row.Products7J}</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div class="col-3">
                                <nav>
                                    <h6>${row.ProductName2}</h6>
                                    <ul>
                                        <li>
                                            <a href="">${row.Products1C}</a>
                                        </li>
                                        <li>
                                            <a href="">${row.Products2C}</a>
                                        </li>
                                        <li>
                                            <a href="">${row.Products3C}</a>
                                        </li>
                                        <li>
                                            <a href="">${row.Products4C}</a>
                                        </li>
                                        <li>
                                            <a href="">${row.Products5C}</a>
                                        </li>
                                        <li>
                                            <a href="">${row.Products6C}</a>
                                        </li>
                                        <li>
                                            <a href="">${row.Products7C}</a>
                                        </li>
                                        <li>
                                            <a href="">${row.Products8C}</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div class="col-3">
                                <nav>
                                    <h6>${row.ProductName3}</h6>
                                    <ul>
                                        <li>
                                            <a href="">${row.Products1F}</a>
                                        </li>
                                        <li>
                                            <a href="">${row.Products2F}</a>
                                        </li>
                                        <li>
                                            <a href="">${row.Products3F}</a>
                                        </li>
                                        <li>
                                            <a href="">${row.Products4F}</a>
                                        </li>
                                        <li>
                                            <a href=""></a>
                                        </li>
                                        <li>
                                            <a href=""></a>
                                        </li>
                                    </ul>
                                </nav>
        
                                <nav>
                                    <li>
                                        <a href="">
                                            <button>${row.Products5F}</button>
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                                    viewBox="0 0 24 24">
                                                    <path fill="#000"
                                                        d="M14 5a1 1 0 1 1 0-2h6a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V6.414l-9.293 9.293a1 1 0 0 1-1.414-1.414L17.586 5H14zM3 7a2 2 0 0 1 2-2h5a1 1 0 1 1 0 2H5v12h12v-5a1 1 0 1 1 2 0v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z">
                                                    </path>
                                                </svg>
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <button>${row.Products6F}</button>
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                                    viewBox="0 0 24 24">
                                                    <path fill="#000"
                                                        d="M14 5a1 1 0 1 1 0-2h6a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V6.414l-9.293 9.293a1 1 0 0 1-1.414-1.414L17.586 5H14zM3 7a2 2 0 0 1 2-2h5a1 1 0 1 1 0 2H5v12h12v-5a1 1 0 1 1 2 0v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z">
                                                    </path>
                                                </svg>
                                            </span>
                                        </a>
                                    </li>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div class="col-12">
                        <a href="#">30% OFF $125. AUTO APPLIED AT CHECKOUT.<span>(click here)</span></a>
                    </div>
                </div>
            </div>
        </div>`
        }
    
        hambuler.innerHTML = html;
    });
}

const WomenMenu = document.getElementById('Women_Menu');
WomenMenu.addEventListener('click',function(e) {
    e.preventDefault();
    DesktopWomenMenu();
});
function DesktopWomenMenu() {
    document.getElementById("Desktop-Sidebar_menu").innerHTML = " ";
    fetch("assets/JSON/desktopwomenmenu.json")
    .then(response => response.json())
    .then(function (res) {
    
        const hambuler = document.getElementById("Desktop-Sidebar_menu");
        let html = "";
    
        for (let row of res) {
            html += `
            <div class="overlay-wrapper">
            <div class="row">
                <div class="wrapper-menus">
                    <div class="row">
                        <div class="col-12">
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
                        <div class="col-12">
                            <div class="col-3">
                                <nav>
                                    <h6>${row.ProductName1}</h6>
                                    <ul>
                                        <li>
                                            <a href="">${row.Products1J}</a>
                                        </li>
                                        <li>
                                            <a href="">${row.Products2J}</a>
                                        </li>
                                        <li>
                                            <a href="">${row.Products3J}</a>
                                        </li>
                                        <li>
                                            <a href="">${row.Products4J}</a>
                                        </li>
                                        <li>
                                            <a href="">${row.Products5J}</a>
                                        </li>
                                        <li>
                                            <a href="">${row.Products6J}</a>
                                        </li>
                                        <li>
                                            <a href="">${row.Products7J}</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div class="col-3">
                                <nav>
                                    <h6>${row.ProductName2}</h6>
                                    <ul>
                                        <li>
                                            <a href="">${row.Products1C}</a>
                                        </li>
                                        <li>
                                            <a href="">${row.Products2C}</a>
                                        </li>
                                        <li>
                                            <a href="">${row.Products3C}</a>
                                        </li>
                                        <li>
                                            <a href="">${row.Products4C}</a>
                                        </li>
                                        <li>
                                            <a href="">${row.Products5C}</a>
                                        </li>
                                        <li>
                                            <a href="">${row.Products6C}</a>
                                        </li>
                                        <li>
                                            <a href="">${row.Products7C}</a>
                                        </li>
                                        <li>
                                            <a href="">${row.Products8C}</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div class="col-3">
                                <nav>
                                    <h6>${row.ProductName3}</h6>
                                    <ul>
                                        <li>
                                            <a href="">${row.Products1F}</a>
                                        </li>
                                        <li>
                                            <a href="">${row.Products2F}</a>
                                        </li>
                                        <li>
                                            <a href="">${row.Products3F}</a>
                                        </li>
                                        <li>
                                            <a href="">${row.Products4F}</a>
                                        </li>
                                        <li>
                                            <a href=""></a>
                                        </li>
                                        <li>
                                            <a href=""></a>
                                        </li>
                                    </ul>
                                </nav>
        
                                <nav>
                                    <li>
                                        <a href="">
                                            <button>${row.Products5F}</button>
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                                    viewBox="0 0 24 24">
                                                    <path fill="#000"
                                                        d="M14 5a1 1 0 1 1 0-2h6a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V6.414l-9.293 9.293a1 1 0 0 1-1.414-1.414L17.586 5H14zM3 7a2 2 0 0 1 2-2h5a1 1 0 1 1 0 2H5v12h12v-5a1 1 0 1 1 2 0v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z">
                                                    </path>
                                                </svg>
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <button>${row.Products6F}</button>
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                                    viewBox="0 0 24 24">
                                                    <path fill="#000"
                                                        d="M14 5a1 1 0 1 1 0-2h6a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V6.414l-9.293 9.293a1 1 0 0 1-1.414-1.414L17.586 5H14zM3 7a2 2 0 0 1 2-2h5a1 1 0 1 1 0 2H5v12h12v-5a1 1 0 1 1 2 0v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z">
                                                    </path>
                                                </svg>
                                            </span>
                                        </a>
                                    </li>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div class="col-12">
                        <a href="#">30% OFF $125. AUTO APPLIED AT CHECKOUT.<span>(click here)</span></a>
                    </div>
                </div>
            </div>
        </div>`
        }
    
        hambuler.innerHTML = html;
    });
}

const KidsMenu = document.getElementById('Kids_Menu');
KidsMenu.addEventListener('click', function(e) {
    e.preventDefault();
    DesktopKidsMenu();
});
function DesktopKidsMenu() {
    document.getElementById("Desktop-Sidebar_menu").innerHTML = " ";
    fetch("assets/JSON/desktopkidsmenu.json")
    .then(response => response.json())
    .then(function (res) {
    
        const hambuler = document.getElementById("Desktop-Sidebar_menu");
        let html = "";
    
        for (let row of res) {
            html += `
            <div class="overlay-wrapper">
            <div class="row">
                <div class="wrapper-menus">
                    <div class="row">
                        <div class="col-12">
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
                            </ul>
                        </div>
                        <div class="col-12">
                            <div class="col-3">
                                <nav>
                                    <h6>${row.ProductName1}</h6>
                                    <ul>
                                        <li>
                                            <a href="">${row.Products1C}</a>
                                        </li>
                                        <li>
                                            <a href="">${row.Products2C}</a>
                                        </li>
                                        <li>
                                            <a href="">${row.Products3C}</a>
                                        </li>
                                        <li>
                                            <a href="">${row.Products4C}</a>
                                        </li>
                                        <li>
                                            <a href="">${row.Products5C}</a>
                                        </li>
                                        <li>
                                            <a href="">${row.Products6C}</a>
                                        </li>
                                        <li>
                                            <a href="">${row.Products7C}</a>
                                        </li>
                                        <li>
                                            <a href="">${row.Products8C}</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div class="col-3">
                                <nav>
                                    <h6>${row.ProductName2}</h6>
                                    <ul>
                                        <li>
                                            <a href="">${row.Products1F}</a>
                                        </li>
                                        <li>
                                            <a href="">${row.Products2F}</a>
                                        </li>
                                        <li>
                                            <a href="">${row.Products3F}</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div class="col-3">
                                <nav>
                                    <h6 class="d-inline-block">${row.ProductName3}</h6>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" style="margin-top: -3px;">
                                            <path fill="#000" d="M14 5a1 1 0 1 1 0-2h6a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V6.414l-9.293 9.293a1 1 0 0 1-1.414-1.414L17.586 5H14zM3 7a2 2 0 0 1 2-2h5a1 1 0 1 1 0 2H5v12h12v-5a1 1 0 1 1 2 0v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z">
                                            </path>
                                        </svg>
                                    </span>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div class="col-12">
                        <a href="#">30% OFF $60. AUTO APPLIED AT CHECKOUT.<span>(click here)</span></a>
                    </div>
                </div>
            </div>
        </div>`
        }
    
        hambuler.innerHTML = html;
    });
}

const SaleMenu = document.getElementById('Sale_Menu');
SaleMenu.addEventListener('click', function(e) {
    e.preventDefault();
    DesktopSaleMenu();
});
function DesktopSaleMenu() {
    document.getElementById("Desktop-Sidebar_menu").innerHTML = " ";
    fetch("assets/JSON/desktopsalemenu.json")
    .then(response => response.json())
    .then(function (res) {
    
        const hambuler = document.getElementById("Desktop-Sidebar_menu");
        let html = "";
    
        for (let row of res) {
            html += `
            <div class="overlay-wrapper">
            <div class="row">
                <div class="wrapper-menus">
                    <div class="row">
                        <div class="col-12">
                            <ul>
                                <li>
                                    <a href="">
                                        <img src="${row.DealImage}" alt="">
                                        <span>${row.Deal}</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="col-12">
                            <div class="col-3">
                                <nav>
                                    <h6>${row.ProductName1}</h6>
                                    <ul>
                                        <li>
                                            <a href="">${row.Products1M}</a>
                                        </li>
                                        <li>
                                            <a href="">${row.Products2M}</a>
                                        </li>
                                        <li>
                                            <a href="">${row.Products3M}</a>
                                        </li>
                                        <li>
                                            <a href="">${row.Products4M}</a>
                                        </li>
                                        <li>
                                            <a href="">${row.Products5M}</a>
                                        </li>
                                        <li>
                                            <a href="">${row.Products6M}</a>
                                        </li>
                                        <li>
                                            <a href="">${row.Products7M}</a>
                                        </li>
                                        <li>
                                            <a href="">${row.Products8M}</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div class="col-3">
                                <nav>
                                    <h6>${row.ProductName2}</h6>
                                    <ul>
                                        <li>
                                            <a href="">${row.Products1W}</a>
                                        </li>
                                        <li>
                                            <a href="">${row.Products2W}</a>
                                        </li>
                                        <li>
                                            <a href="">${row.Products3W}</a>
                                        </li>
                                        <li>
                                            <a href="">${row.Products4W}</a>
                                        </li>
                                        <li>
                                            <a href="">${row.Products5W}</a>
                                        </li>
                                        <li>
                                            <a href="">${row.Products6W}</a>
                                        </li>
                                        <li>
                                            <a href="">${row.Products7W}</a>
                                        </li>
                                        <li>
                                            <a href="">${row.Products8W}</a>
                                        </li>
                                        <li>
                                            <a href="">${row.Products9W}</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div class="col-3">
                                <nav>
                                    <h6>${row.ProductName3}</h6>
                                    <ul>
                                        <li>
                                            <a href="">${row.Products1K}</a>
                                        </li>
                                        <li>
                                            <a href="">${row.Products2K}</a>
                                        </li>
                                        <li>
                                            <a href="">${row.Products3K}</a>
                                        </li>
                                        <li>
                                            <a href="">${row.Products4K}</a>
                                        </li>
                                    </ul>
                                </nav>
                                <nav>
                                    <li>
                                        <a href="">
                                            <button>${row.Products1F}</button>
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                                    viewBox="0 0 24 24">
                                                    <path fill="#000"
                                                        d="M14 5a1 1 0 1 1 0-2h6a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V6.414l-9.293 9.293a1 1 0 0 1-1.414-1.414L17.586 5H14zM3 7a2 2 0 0 1 2-2h5a1 1 0 1 1 0 2H5v12h12v-5a1 1 0 1 1 2 0v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z">
                                                    </path>
                                                </svg>
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <button>${row.Products2F}</button>
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                                    viewBox="0 0 24 24">
                                                    <path fill="#000"
                                                        d="M14 5a1 1 0 1 1 0-2h6a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V6.414l-9.293 9.293a1 1 0 0 1-1.414-1.414L17.586 5H14zM3 7a2 2 0 0 1 2-2h5a1 1 0 1 1 0 2H5v12h12v-5a1 1 0 1 1 2 0v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z">
                                                    </path>
                                                </svg>
                                            </span>
                                        </a>
                                    </li>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div class="col-12">
                        <a href="#">EXTRA 50% OFF SALE STYLES. AUTO-APPLIED AT CHECKOUT.<span>(click here)</span></a>
                    </div>
                </div>
            </div>
        </div>`
        }
    
        hambuler.innerHTML = html;
    });
}
