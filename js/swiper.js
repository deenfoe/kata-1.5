
const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    pagination: {
        el: '.swiper-pagination',

    },
    breakpoints: {
        320: {
            slidesPerView: 1.3125,
            spaceBetween: 16,

        },
        360: {
            slidesPerView: 1.4,
            spaceBetween: 16,
        },
        440: {
            slidesPerView: 1.5,
            spaceBetween: 16,
        },


    },
});