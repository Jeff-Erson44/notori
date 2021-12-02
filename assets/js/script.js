window.addEventListener('load', () => {

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
        header.classList.toggle('sticky', window.scrollY > 50)
    });

    /***************** Animation Toggle FAQ *****************/
        const faqs = document.querySelectorAll(".faq");

        faqs.forEach((faq) => {
            faq.addEventListener("click", () => {
                faq.classList.toggle("active");
            });
        });
    /***************** Fin Animation Toggle FAQ *****************/

    /*********     google analytic Tag   *******/
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-JH053D7RZL');

}); //fin du load