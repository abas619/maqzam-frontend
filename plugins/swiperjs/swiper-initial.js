const swiperIndexWidth = new Swiper('.swiper-comments', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: false,
    autoHeight: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
    },
    breakpoints: {
        450: {
            slidesPerView: 1,
        },
        575: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 1,
        },
        992: {
            slidesPerView: 2,
        },
        1200: {
            slidesPerView: 2,
        }
    }
});