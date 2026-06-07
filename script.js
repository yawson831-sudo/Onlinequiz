// LOADING SCREEN
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
    }, 1800);
});

// SMOOTH SCROLL EFFECT
document.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        document.querySelector(
            this.getAttribute("href")
        ).scrollIntoView({
            behavior: "smooth"
        });

    });

});

// CARD HOVER ANIMATION
const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {
        card.style.transform =
        "translateY(-10px) scale(1.03)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform =
        "translateY(0px) scale(1)";
    });

});

// BUTTON CLICK EFFECT
const buttons =
document.querySelectorAll(
".buy-btn, .signup-btn, .btn"
);

buttons.forEach(button => {

    button.addEventListener("click", () => {

        button.style.transform =
        "scale(0.95)";

        setTimeout(() => {

            button.style.transform =
            "scale(1)";

        }, 150);

    });

});

// NAVBAR SHADOW ON SCROLL
window.addEventListener("scroll", () => {

    const nav =
    document.querySelector("nav");

    if(window.scrollY > 50){
        nav.style.boxShadow =
        "0 0 20px rgba(0,255,136,0.2)";
    } else {
        nav.style.boxShadow = "none";
    }

});

// TYPE EFFECT
const heroTitle =
document.querySelector(".overlay h1");

const text =
"Buy Cheap Data Bundles In Ghana";

let index = 0;

function typeWriter(){

    if(index < text.length){

        heroTitle.textContent +=
        text.charAt(index);

        index++;

        setTimeout(typeWriter, 70);
    }
}

heroTitle.textContent = "";
typeWriter();
