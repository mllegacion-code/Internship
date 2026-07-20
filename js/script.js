/*==================================================
                MOBILE NAVIGATION
==================================================*/

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        menuBtn.classList.toggle("open");

    });

    document.querySelectorAll(".nav-links a").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

            menuBtn.classList.remove("open");

        });

    });

}


/*==================================================
                STICKY NAVBAR
==================================================*/

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (navbar) {

        if (window.scrollY > 50) {

            navbar.classList.add("sticky");

        } else {

            navbar.classList.remove("sticky");

        }

    }

});


/*==================================================
                ACTIVE NAVIGATION
==================================================*/

const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll(".nav-links a").forEach(link => {

    link.classList.remove("active");

    if (link.getAttribute("href") === currentPage) {

        link.classList.add("active");

    }

});


/*==================================================
                SCROLL TO TOP BUTTON
==================================================*/

const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {

    if (!scrollBtn) return;

    if (window.scrollY > 250) {

        scrollBtn.style.display = "flex";

    } else {

        scrollBtn.style.display = "none";

    }

});

if (scrollBtn) {

    scrollBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}


/*==================================================
                SCROLL ANIMATIONS
==================================================*/

const hiddenElements = document.querySelectorAll(

    ".hidden, .fade-in, .slide-left, .slide-right, .zoom-in"

);

if (hiddenElements.length > 0) {

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {

        threshold: 0.15

    });

    hiddenElements.forEach(el => observer.observe(el));

}


/*==================================================
                SMOOTH PAGE LOAD
==================================================*/

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});


/*==================================================
                OPTIONAL:
          CLOSE MENU WHEN CLICKING OUTSIDE
==================================================*/

document.addEventListener("click", (e) => {

    if (!menuBtn || !navLinks) return;

    if (
        !menuBtn.contains(e.target) &&
        !navLinks.contains(e.target)
    ) {

        navLinks.classList.remove("active");

        menuBtn.classList.remove("open");

    }

});

const flipCards = document.querySelectorAll(".flip-card");

flipCards.forEach(card => {

    card.addEventListener("click", () => {

        flipCards.forEach(other => {

            if(other !== card){

                other.classList.remove("flipped");

            }

        });

        card.classList.toggle("flipped");

    });

});