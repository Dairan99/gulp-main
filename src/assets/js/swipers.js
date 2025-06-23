
/* Swipers */

// about
const aboutSwiper = new Swiper(".aboutSwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
        nextEl: ".about-treatment__swiper-button-next",
        prevEl: ".about-treatment__swiper-button-prev",
    },
    pagination: {
        el: ".about-treatment__swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        600: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
    },
});

const aboutClinickSwiper = new Swiper(".aboutClinickSwiper", {
    slidesPerView: 1,
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
        600: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
    },
});

const doctorsClinicSwiper = new Swiper(".doctorsSwiper", {
    slidesPerView: 1,
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

const serviceSwiper = new Swiper(".serviceSwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    grid: {
        rows: 2,
    },
    navigation: {
        nextEl: ".service__swiper-button-next",
        prevEl: ".service__swiper-button-prev",
    },
    pagination: {
        el: ".service__swiper-pagination",
        clickable: true,
    },

    breakpoints: {
        1200: {
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
    slidesPerView: 1,
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

const doctorSwiper = new Swiper(".doctorSwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
        nextEl: ".doctor__swiper-button-next",
        prevEl: ".doctor__swiper-button-prev",
    },
    pagination: {
        el: ".doctor__swiper-pagination",
        clickable: true,
    },

    breakpoints: {
        1100: {
            slidesPerView: 3,
            spaceBetween: 26,
        },
        850: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        600: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
    },
});


const reviewsSwiper = new Swiper(".reviewsSwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
        nextEl: ".reviews__swiper-button-next",
        prevEl: ".reviews__swiper-button-prev",
    },
    pagination: {
        el: ".reviews__swiper-pagination",
        clickable: true,
    },

    breakpoints: {
        1100: {
            slidesPerView: 3,
            spaceBetween: 26,
        },
        850: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        600: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
    },
});

const usefulInformationSwiper = new Swiper(".usefulInformationSwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
        nextEl: ".useful-information__swiper-button-next",
        prevEl: ".useful-information__swiper-button-prev",
    },
    pagination: {
        el: ".useful-information__swiper-pagination",
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
    slidesPerView: 1,
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



const stocksSwiper = new Swiper(".stocksSwiper", {
    slidesPerView: 1,
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
        1000: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 1.5,
            spaceBetween: 10,
        },
    },
});


/* End swipers */