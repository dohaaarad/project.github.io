// // Change Styles Nav Bar On Scroll
// const navBar = document.getElementById("nav");
// window.addEventListener("scroll", () => {
//     navBar.classList.toggle("change-background", window.scrollY > 0);
// });

const navBar = document.getElementById("nav");

const buttonScrollToTop = document.getElementById("button-scroll-to-top");

window.onscroll = function() {
    if (window.scrollY > 0) {
        navBar.classList.add("change-background");
    } else {
        navBar.classList.remove("change-background");
    }
};

window.addEventListener("scroll", () => {
    if (window.scrollY >= 300) {
        buttonScrollToTop.style = "visibility: visible !important;";
    } else {
        buttonScrollToTop.style = "visibility: hidden !important;";
    }
});

buttonScrollToTop.onclick = function () {
    window.scrollTo({
        left: 0,
        top: 0,
        behavior: "smooth",
    });
};

const openResponse = document.querySelectorAll(".box-questions");

openResponse.forEach(function(openthis) {
    openthis.addEventListener("click", function() {
        this.classList.toggle("open-response");

        // Change Icon :
        const iconChange = openthis.querySelector("i");
        if (iconChange.className === "uil uil-plus-circle") {
            iconChange.className = "uil uil-minus-circle";
        } else {
            iconChange.className = "uil uil-plus-circle";
        }
    });
});

// Nav Bar :
const menu = document.getElementById("menu");
const buttonOpen = document.getElementById("button-open");
const buttonClose = document.getElementById("button-close");

buttonOpen.addEventListener('click', () => {
    menu.className = "links display-flex";
    buttonOpen.className = "uil uil-bars icon display-none";
    buttonClose.className = "uil uil-multiply icon display-block";

    document.onclick = function(e){
        if (e.target.id !== "menu" && e.target.id !== "button-open") {
            buttonClose.className = "uil uil-multiply icon display-none";
            buttonOpen.className = "uil uil-bars icon display-block";
            menu.className = "links display-none";
        } else {
            menu.className = "links display-flex";
            buttonClose.className = "uil uil-multiply icon display-block";
            buttonOpen.className = "uil uil-bars icon display-none";
        }
    };
    
});

const closeMenu = () => {
    buttonClose.className = "uil uil-multiply icon display-none";
    menu.className = "links display-none";
    buttonOpen.className = "uil uil-bars icon display-block";
}

buttonClose.addEventListener('click', closeMenu);

