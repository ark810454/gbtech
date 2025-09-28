  // var swiper1 = new Swiper(".mySwiper", {
            //   slidesPerView: 3,
            //   centeredSlides: true,
            //   spaceBetween: 30,
            //   pagination: {
            //     el: ".swiper-pagination",
            //     type: "fraction",
            //   },
            //   navigation: {
            //     nextEl: ".swiper-button-next",
            //     prevEl: ".swiper-button-prev",
            //   },
            //   breakpoints: {
            //     640: {
            //       slidesPerView: 2,
            //       spaceBetween: 20,
            //     },
            //     768: {
            //       slidesPerView: 4,
            //       spaceBetween: 40,
            //     },
            //     1024: {
            //       slidesPerView: 5,
            //       spaceBetween: 50,
            //     },
            //   },
            // });
            var swiper = new Swiper(".mySwiper", {
                slidesPerView: 2,
                spaceBetween: 30,
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                    type: "fraction"
                },
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
                breakpoints: {
                    0: {
                        slidesPerView: 1, 
                       },
                         991: {
                         slidesPerView: 2, 
                        },
                      },
            });
            var swiper2 = new Swiper(".mySwiper2", {
                slidesPerView: 3,
                spaceBetween: 30,
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                    type: "fraction"
                },
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
                breakpoints: {
                    0: {
                        slidesPerView: 1, 
                        spaceBetween: 50
                       },
                         600: {
                         slidesPerView: 2, 
                         spaceBetween: 50
                        },
                        1060:{
                            slidesPerView: 3
                        }
                      },
            });
       