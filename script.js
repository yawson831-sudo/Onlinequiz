// LOADER
window.addEventListener("load", () => {

    const loader =
    document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
        loader.style.transition =
        "0.8s ease";

    }, 1800);

});

// NAVBAR BACKGROUND ON SCROLL
window.addEventListener("scroll", () => {

    const nav =
    document.querySelector("nav");

    if(window.scrollY > 50){

        nav.style.background =
        "rgba(0,0,0,0.95)";

        nav.style.backdropFilter =
        "blur(10px)";

    } else {

        nav.style.background =
        "linear-gradient(to bottom, rgba(0,0,0,0.9), transparent)";
    }

});

// MOVIE CARD EFFECT
const movieCards =
document.querySelectorAll(".movie-card");

movieCards.forEach(card => {

    card.addEventListener(
    "mouseenter", () => {

        card.style.transform =
        "scale(1.08) translateY(-8px)";

        card.style.boxShadow =
        "0 15px 40px rgba(229,9,20,0.4)";
    });

    card.addEventListener(
    "mouseleave", () => {

        card.style.transform =
        "scale(1)";

        card.style.boxShadow =
        "none";
    });

});

// HERO BUTTONS
const buttons =
document.querySelectorAll(
".watch-btn, .info-btn, .login-btn"
);

buttons.forEach(button => {

    button.addEventListener(
    "click", () => {

        button.style.transform =
        "scale(0.95)";

        setTimeout(() => {

            button.style.transform =
            "scale(1)";

        }, 150);

    });

});

// WATCH BUTTON
const watchBtn =
document.querySelector(".watch-btn");

if(watchBtn){

    watchBtn.addEventListener(
    "click", () => {

        alert(
        "🎬 Welcome to FamousFlix! Movie player coming in Part 4 😏"
        );

    });

}

// INFO BUTTON
const infoBtn =
document.querySelector(".info-btn");

if(infoBtn){

    infoBtn.addEventListener(
    "click", () => {

        window.scrollTo({
            top:
            document.body.scrollHeight / 2,
            behavior:"smooth"
        });

    });

}

// AUTO FADE TEXT EFFECT
const heroText =
document.querySelector(".overlay h1");

const titleText =
"Unlimited Movies, TV Shows & Anime";

let i = 0;

function typingEffect(){

    if(i < titleText.length){

        heroText.textContent +=
        titleText.charAt(i);

        i++;

        setTimeout(
        typingEffect, 50
        );
    }
}

heroText.textContent = "";
typingEffect();
