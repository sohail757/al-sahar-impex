// Navbar Scroll Effect
window.addEventListener("scroll", function () {

    const nav = document.querySelector("nav");

    if (window.scrollY > 50) {
        nav.style.background = "rgba(0,0,0,0.75)";
        nav.style.boxShadow = "0 10px 30px rgba(0,0,0,0.4)";
    } else {
        nav.style.background = "rgba(0,0,0,0.45)";
        nav.style.boxShadow = "none";
    }

});

function changeImage(image){
    document.getElementById("mainImage").src = image;
}

function openImage(image){
    document.getElementById("imagePopup").style.display = "flex";
    document.getElementById("popupImage").src = image;
}

function closeImage(){

document.getElementById("imagePopup").style.display="none";

}

const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll(".fade-up").forEach(el=>{
    observer.observe(el);
});

window.addEventListener("scroll",()=>{

const nav=document.querySelector("nav");

if(window.scrollY>50){

nav.style.background="rgba(0,0,0,.85)";
nav.style.boxShadow="0 15px 40px rgba(0,0,0,.5)";

}else{

nav.style.background="rgba(10,10,10,.45)";
nav.style.boxShadow="none";

}

});

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateY = (x - rect.width / 2) / 18;
        const rotateX = (rect.height / 2 - y) / 18;

        card.style.transform =
            `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";

    });

});

const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove",(e)=>{

glow.style.left = e.clientX + "px";

glow.style.top = e.clientY + "px";

});

window.addEventListener("load",()=>{

setTimeout(()=>{

document
.getElementById("preloader")
.classList.add("hide");

},1800);

});

window.addEventListener("scroll",()=>{

const winScroll=document.documentElement.scrollTop;

const height=
document.documentElement.scrollHeight-
document.documentElement.clientHeight;

const scrolled=(winScroll/height)*100;

document.getElementById("progress-bar").style.width=scrolled+"%";

});

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;

        const increment = Math.ceil(target / 100);

        if(count < target){

            counter.innerText = count + increment;

            setTimeout(updateCounter,20);

        }else{

            counter.innerText = target + "+";

        }

    };

    updateCounter();

});

// Hide Preloader
window.addEventListener("load", function () {

    const preloader = document.getElementById("preloader");

    if (preloader) {
        preloader.style.opacity = "0";

        setTimeout(() => {
            preloader.style.display = "none";
        }, 500);
    }

});

// Hide Preloader
window.addEventListener("load", function () {

    const preloader = document.getElementById("preloader");

    if (preloader) {

        preloader.style.opacity = "0";

        setTimeout(function () {

            preloader.style.display = "none";

        }, 500);

    }

});

document.querySelectorAll(".card").forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

card.style.setProperty("--x",(e.clientX-rect.left)+"px");
card.style.setProperty("--y",(e.clientY-rect.top)+"px");

});

});

function toggleMenu(){

document.querySelector("nav ul").classList.toggle("active");

}

const slides=document.querySelectorAll(".hero-slider img");

let currentSlide=0;

setInterval(()=>{

slides[currentSlide].classList.remove("active");

currentSlide=(currentSlide+1)%slides.length;

slides[currentSlide].classList.add("active");

},5000);