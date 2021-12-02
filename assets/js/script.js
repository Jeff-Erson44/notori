window.addEventListener('load', () => {

/***************** Animation Toggle FAQ *****************/
    const faqs = document.querySelectorAll(".faq");

    faqs.forEach((faq) => {
        faq.addEventListener("click", () => {
            faq.classList.toggle("active");
        });
    });
/***************** Fin Animation Toggle FAQ *****************/

}); //fin du load