window.addEventListener('load', () => {

    /******************** Curseur ********************/
    document.addEventListener('mousemove', function(e){
    document.querySelector('.pointer2').style.cssText = document.querySelector('.pointer').style.cssText = "left: " + e.pageX + "px; top:" + e.pageY + "px;"; //détermine la position exacte du curseur
    });
    /**************** Scroll bar de progression *******************/
        window.addEventListener("scroll", () => {
            let hauteur = document.documentElement.scrollHeight - window.innerHeight; //détermine la hauteur de la page
            let position = window.scrollY;
            let largeur = document.documentElement.clientWidth;
    
            let bar = (position / hauteur) * largeur; //calcule la hauteur et largeur
            document.getElementById("bar").style.width = bar + "px";
        });
    /********************** Responsive navbar *********************/
    document.body.classList.remove("loading-anim");

        const primaryNav = document.querySelector('.primary-navigation');
        const navToggle = document.querySelector(".mobile__nav--toggle");

        navToggle.addEventListener('click', () => {
        const visibility = primaryNav.getAttribute('data-visible');

        if ( visibility === "false"){
            primaryNav.setAttribute('data-visible', true);
            navToggle.setAttribute('aria-expanded',true);
        }else if (visibility === "true") {
            primaryNav.setAttribute('data-visible', false);
            navToggle.setAttribute('aria-expanded', false);
        }
    });

    /*********     Animation Navbar  *******/
    window.addEventListener( "scroll", () => {
        var header = document.getElementById('navbar');
        header.classList.toggle('sticky', window.scrollY > 50) //on rajoute une classe au header .toggle qui actionne la sticky navbar lorsqu'on atteint un endroit précis avec le scroll
    });

    /***************** Animation Toggle FAQ *****************/
        const faqs = document.querySelectorAll(".faq");

        faqs.forEach((faq) => {
            faq.addEventListener("click", () => {
                faq.classList.toggle("active");
            });
        });
    /***************** Fin Animation Toggle FAQ *****************/


    /*********     Animation Counter  *******/

const launch = (id)=>{ 
    console.log(id)
    const counters = document.querySelector(`#${id}`);
    const counter = document.querySelector('.counter');
    counter.innerText = '0'; //on reset le num à 0

    const updateCounter = () =>{
        const target = +counter.getAttribute('data-target');
        const c = +counter.innerText;

        if(c < target){
            counter.innerText = c + 1;
            setTimeout(updateCounter,0.001)
        }
    };
    updateCounter();
}

const observer =  new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting ) {
            console.log(entry.target.id)
            launch(entry.target.id); 
        }
    })
})

let containCounter =  document.querySelectorAll("[data-observe]")

containCounter.forEach((contain) => {
    observer.observe(contain)
})


    /*********     Slider   *******/
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 20,
        pagination: {
            clickable: true
        }
    });


    /*********     ScrollTo top      ******/

    const links = document.querySelectorAll(".scroll_to");
    console.log(links)
    links.forEach((item) =>{ //pour chaque lien, lorsqu'on clique dessus, on va chercher l'attribut data-link et on lui donne un comportement de smooth scroll
        item.addEventListener("click", ()=>{
            const el = document.getElementById(item.getAttribute("data-link"));
            el.scrollIntoView({behavior:"smooth", block:"center"})
        })
    })


    /*********     google analytic Tag   *******/
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-JH053D7RZL');



/*********     AXEPTIO  *******/
window.axeptioSettings = {
    clientId: "61a25d09df10d77dd30a4e2a",
    };

    (function(d, s) {
        var t = d.getElementsByTagName(s)[0], e = d.createElement(s);
        e.async = true; e.src = "//static.axept.io/sdk.js";
        t.parentNode.insertBefore(e, t);
    })(document, "script");


}); //fin du load