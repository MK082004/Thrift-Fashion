// header slider
let slides = document.querySelectorAll('.slider-container');
let index = 0;

function next() {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev() {
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}

function startSlider() {
    setInterval(next, 100000);
}
startSlider();

//navbar active class
var menuItems = document.querySelectorAll(".Header-navbar ul li");
const DesktopSidebarMenu = document.querySelector('.sidebarMenu');
const MainSidebarMenuMobileDesktopCover = document.querySelector('.main-sidebar-menu_mobile-Desktop');
const CloseSidebarMenubtn = document.getElementById('close_sidebarmenu_btn');
const TopRowNav = document.querySelector('.top-row-nav');
const TopRowSlider = document.querySelector('.top-row-slider');
const MiddleSearchItems = document.querySelector('.middle-search-items');

menuItems.forEach(function (item) {
    item.addEventListener("click", function () {
        menuItems.forEach(function (item) {
            item.classList.remove("active");
        });
        this.classList.add("active");
        MainSidebarMenuMobileDesktopCover.style.display = 'block';
        DesktopSidebarMenu.style.display = 'block';
        TopRowNav.style.zIndex = '1';
        MiddleSearchItems.style.zIndex = '1';
    });
});

function CloseSidebar() {
    DesktopSidebarMenu.style.animation = 'slideUp 0.2s ease-in-out forwards';
    setTimeout(function () {
        MainSidebarMenuMobileDesktopCover.style.display = 'none';
        DesktopSidebarMenu.style.display = 'none';
        TopRowNav.style.zIndex = '105';
        MiddleSearchItems.style.zIndex = '105';
        DesktopSidebarMenu.style.animation = ''; 
    }, 200); 
    menuItems.forEach(function (item) {
        item.classList.remove("active");
    });
};

CloseSidebarMenubtn.addEventListener('click', CloseSidebar);
MainSidebarMenuMobileDesktopCover.addEventListener('click', CloseSidebar);

//filteration cards
const filterButtons = document.querySelectorAll('.filter__controls li');
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('active');

        filterButtons.forEach(btn => {
            if (btn !== button) {
                btn.classList.remove('active');
            }
        });

        const filterType = button.getAttribute('data-filter');
        filterCards(filterType);
    });
});


function filterCards(filterType) {
    const cardElements = document.querySelectorAll('.product-card-main');

    cardElements.forEach(card => {
        const dataFilter = card.getAttribute('data-filter');

        if (filterType === 'All' || filterType === dataFilter) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}
filterCards('All');

// function discounted popup onload
// window.onload=function openPopup() {
//     const openPopup = document.getElementById('discount-popup');
//     setTimeout(function() {
//         openPopup.style.display = "flex";
//     }, 10000); 
// }

// function closePopup() {
//     const popup = document.getElementById('discount-popup');
//     popup.style.display = 'none';
// }

// function subscribe() {
//     const emailInput = document.getElementById('emailInput').value;
//     if (emailInput.trim() !== '') {
//         closePopup();
//         const congratulationsPopup = document.getElementById('congratulations-popup');
//         congratulationsPopup.style.display = 'flex';
//         setTimeout(function() {
//                 congratulationsPopup.style.display = 'none';
//         }, 3000); 
//     }
//     closePopup();
// }

// function closeCongratulationsPopup() {
//     const congratulationsPopup = document.getElementById('congratulations-popup');
//     congratulationsPopup.style.display = 'none';
//     closePopup();
// }

// banner countdown
var countDownDate = new Date("Nov 12, 2023 00:00:00").getTime();
var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = `
      <div class="cd-item"><span>${days}</span> <p>Days</p></div>
      <div class="cd-item"><span>${hours}</span> <p>Hours</p></div>
      <div class="cd-item"><span>${minutes}</span> <p>Minutes</p></div>
      <div class="cd-item"><span>${seconds}</span> <p>Seconds</p></div>
    `;

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "Deal Expired!";
    }
}, 1000);


// sticky header
const mainDiv = document.getElementById('main-div');
const scrollThreshold = window.innerHeight * 0.1;
window.addEventListener('scroll', function () {
    const scrollY = window.scrollY || window.pageYOffset;
    if (scrollY > scrollThreshold) {
        mainDiv.style.backgroundColor = '#ffffff';
        mainDiv.style.boxShadow = "2px 3px 5px rgba(0,0,0,0.2)";
    } else {
        mainDiv.style.backgroundColor = 'transparent';
        mainDiv.style.boxShadow = "none";
    }
});

// serachbar logics here
const headerSearch = document.querySelector('.header-search-coverup');
const headerSearchSection = document.querySelector('.header-search-section');
const searchInput = document.getElementById('search-input');
const searchIcon = document.getElementById('search-icon');
const closeIcon = document.getElementById('Cross-icon-search');
const MoveSearchInputToMob = document.getElementById('Move_Search_InputToMob');
const navbar = document.querySelectorAll('.Header-navbar');

function showCloseIcon() {
    if (window.innerWidth >= 1087) {
        closeIcon.style.display = 'flex';
        MoveSearchInputToMob.style.left = '-10px';
    }
};

function hideCloseIcon() {
    closeIcon.style.display = 'none';
    MoveSearchInputToMob.style.left = '0';
};

function hidenavbar() {
    navbar.forEach((element) => {
        element.style.display = 'none';
    });
};

function shownavbar() {
    navbar.forEach((element) => {
        element.style.display = 'inline-block';
    });
};

function ShowSearchbar() {
    headerSearch.style.display = 'block';
    headerSearchSection.style.display = 'block';
    headerSearchSection.style.opacity = '1';
    TopRowNav.style.zIndex = '105';
    TopRowSlider.style.zIndex = '105';
    MiddleSearchItems.style.zIndex = '105';
    hidenavbar();
    showCloseIcon();
};

searchInput.addEventListener('focus', function(e) {
    e.preventDefault();
    ShowSearchbar();
});

searchIcon.addEventListener('click', function(e) {
    e.preventDefault();
    ShowSearchbar();
});

function CloseHeaderSerachBar() {
    TopRowNav.style.zIndex = '1';
    headerSearchSection.style.animation = 'slideUpFull 0.3s ease-in-out forwards';
    setTimeout(function () {
        headerSearch.style.display = 'none';
        headerSearchSection.style.display = 'none';
        TopRowSlider.style.zIndex = '1';
        MiddleSearchItems.style.zIndex = '1';
        headerSearchSection.style.animation = ''; 
    }, 300); 
    shownavbar();
    hideCloseIcon();
};
closeIcon.addEventListener('click', CloseHeaderSerachBar);
headerSearch.addEventListener('click', CloseHeaderSerachBar);

// Slider For cards
const initSlider = () => {
    const imageList = document.querySelector(".slider-inner-wrapper-2 .slider-2")
    const slideButtons = document.querySelectorAll(".slider-inner-wrapper-2 .slide-2-button");
    const slideScrollbar = document.querySelector(".slider-inner-wrapper-2 .slider-scrollbar");
    const SliderScrollbarthumb = slideScrollbar.querySelector(".scrollbar-thumb");
    const maxscrollLeft = imageList.scrollWidth - imageList.clientWidth;

    SliderScrollbarthumb.addEventListener("mousedown", (e) => {
        const startX = e.clientX;
        const ThumbPosition = SliderScrollbarthumb.offsetLeft;

        const handleMouseMove = (e) => {
            const deltaX = e.clientX - startX;
            const newThumbPosition = ThumbPosition + deltaX;
            const maxthumbPosition = slideScrollbar.getBoundingClientRect().width - SliderScrollbarthumb.offsetWidth;
            const boundedPostion = Math.max(0, Math.min(maxthumbPosition, newThumbPosition));
            const scrollPosition = (boundedPostion / maxthumbPosition) * maxscrollLeft;
            SliderScrollbarthumb.style.left = `${boundedPostion}px`;
            imageList.scrollLeft = scrollPosition;
        }

        const handleMouseUp = () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        }

        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
    });

    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slide-2" ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });
    });

    const handleSlideButtons = () => {
        slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "block";
        slideButtons[1].style.display = imageList.scrollLeft >= maxscrollLeft ? "none" : "block";
    }

    //update scrollbar thumb position based on a product card scroll
    const updateScrollThumbPosition = () => {
        const scrollPosition = imageList.scrollLeft;
        const Thumbposition = (scrollPosition / maxscrollLeft) * (slideScrollbar.clientWidth - SliderScrollbarthumb.offsetWidth);
        SliderScrollbarthumb.style.left = `${Thumbposition}px`;
    }

    imageList.addEventListener("scroll", () => {
        handleSlideButtons();
        updateScrollThumbPosition();
    });
}
window.addEventListener("load", initSlider);

//Trasnfer login and signup btn mobile screen
const desktopMenu = document.getElementById('desktop-menu');
const mobileMenu = document.getElementById('mobile-menu');
let originalDesktopMenuItems = [];

if (window.innerWidth <= 1055) {
    moveElementsToMobileMenu();
} else {
    originalDesktopMenuItems = Array.from(desktopMenu.querySelectorAll('li'));
}

window.addEventListener('resize', () => {
    if (window.innerWidth <= 1055) {
        moveElementsToMobileMenu();
    } else {
        moveElementsToDesktopMenu();
    }
});

function moveElementsToMobileMenu() {
    const elementsToMove = desktopMenu.querySelectorAll('li');
    const elementsArray = Array.from(elementsToMove);
    elementsArray.reverse();

    elementsArray.forEach((element) => {
        mobileMenu.insertBefore(element, mobileMenu.firstChild);
    });
}

function moveElementsToDesktopMenu() {
    desktopMenu.innerHTML = '';
    originalDesktopMenuItems.forEach((element) => {
        desktopMenu.appendChild(element);
    });
}


//toggle sidemenu for mobile
var sidemenuToggleBTN = document.getElementById("open-sidemenu-mob");
var sidemenuToggle = document.getElementById("mob-main-menu");
var sidemenuMainCover = document.getElementById("main-sidebar-menu_mobile");

sidemenuToggleBTN.addEventListener('click', function (event) {
    event.preventDefault();
    sidemenuMainCover.style.display = 'block';
    sidemenuToggle.style.display = 'block';
    document.body.classList.add('hidden');
});

// Search input empty btn logics
const searchInputEmpty = document.getElementById("search-input");
const clearIcon = document.getElementById("clear-icon");
clearIcon.addEventListener("click", function(e) {
    e.preventDefault();
    if(window.innerWidth <= 1086) {
        searchInputEmpty.value = ""; 
        clearIcon.style.display = "none";
    }
});

searchInputEmpty.addEventListener("input", () => {
    if (window.innerWidth <= 1086) {
        if (searchInputEmpty.value.length > 0) {
            clearIcon.style.display = "block";
        } else {
            clearIcon.style.display = "none";
        }
    }
});

// Search input move desktop to mob
const originalPositions = [];
function moveDivOnScreenSize() {
    const screenWidth = window.innerWidth;
    const searchInputDiv = document.getElementById("Move_Search_InputToMob");
    const collectInputDiv = document.getElementById("Collect_Input_Search_Con");
    const originalParent = document.getElementById("search-section-Form");

    if (originalPositions.length === 0) {
        originalPositions.push(searchInputDiv, originalParent);
    }

    if (screenWidth <= 1086) {
        if (searchInputDiv && collectInputDiv) {
            collectInputDiv.appendChild(searchInputDiv);
        }
    } else {
        if (originalPositions.length === 2) {
            const originalSearchInputDiv = originalPositions[0];
            const originalParentDiv = originalPositions[1];
            originalParentDiv.appendChild(originalSearchInputDiv);
        }
    }
}
moveDivOnScreenSize();
window.addEventListener("resize", moveDivOnScreenSize);
