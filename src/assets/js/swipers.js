
/* Swipers */

// about
const aboutSwiper = new Swiper(".aboutSwiper", {
    slidesPerView: 1.08,
    spaceBetween: 10,
    navigation: {
        nextEl: ".about-treatment__swiper-button-next",
        prevEl: ".about-treatment__swiper-button-prev",
    },
    pagination: {
        el: ".about__swiper-pagination",
        clickable: true,
    },

    breakpoints: {
        768: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
    },
});

const doctorsClinicSwiper = new Swiper(".doctorsSwiper", {
    slidesPerView: 1.08,
    spaceBetween: 10,
    navigation: {
        nextEl: ".doctors-clinic__swiper-button-next",
        prevEl: ".doctors-clinic__swiper-button-prev",
    },
    pagination: {
        el: ".doctors-clinic__swiper-pagination",
        clickable: true,
    },

    breakpoints: {
        1100: {
            slidesPerView: 4,
            spaceBetween: 26,
        },
        850: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        600: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
    },
});

const modernNarcologySwiper = new Swiper(".modernNarcologySwiper", {
    slidesPerView: 1.08,
    spaceBetween: 10,
    navigation: {
        nextEl: ".modern-narcology__swiper-button-next",
        prevEl: ".modern-narcology__swiper-button-prev",
    },
    pagination: {
        el: ".modern-narcology__swiper-pagination",
        clickable: true,
    },

    breakpoints: {
        1100: {
            slidesPerView: 4,
            spaceBetween: 26,
        },
        850: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        600: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
    },
});

const licensySwiper = new Swiper(".licenseSwiper", {
    slidesPerView: 1.08,
    spaceBetween: 10,
    navigation: {
        nextEl: ".license__swiper-button-next",
        prevEl: ".license__swiper-button-prev",
    },
    pagination: {
        el: ".license__swiper-pagination",
        clickable: true,
    },

    breakpoints: {
        1100: {
            slidesPerView: 4,
            spaceBetween: 26,
        },
        850: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        600: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
    },
});

const aboutCompanySwiper = new Swiper(".aboutSwiper", {
    slidesPerView: 1.08,
    spaceBetween: 10,
    navigation: {
        nextEl: ".about-company__swiper-button-next",
        prevEl: ".about-company__swiper-button-prev",
    },
    pagination: {
        el: ".about-company__swiper-pagination",
        clickable: true,
    },

    breakpoints: {
        768: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
    },
});

const stocksSwiper = new Swiper(".stocksSwiper", {
    slidesPerView: 1.08,
    spaceBetween: 10,
    navigation: {
        nextEl: ".current-promotions__swiper-button-next",
        prevEl: ".current-promotions__swiper-button-prev",
    },
    pagination: {
        el: ".current-promotions__swiper-pagination",
        clickable: true,
    },

    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
    },
});


/* End swipers */