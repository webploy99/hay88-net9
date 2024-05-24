// Show and hide menu
function OpenNav(){
    document.getElementById("Nav").style.width = "100%";
    }
    function CloseNav(){
    document.getElementById("Nav").style.width = "0%";
    }

    // url

    function url() {
        location.href="https://www.hay8833.com/?inviteCode=3128320";
    }

    // ==========================================
    window.onscroll = function () { scrollFunction() };

        function scrollFunction() {
            if (document.documentElement.scrollTop > 80) {
                document.getElementById("navbar").style.top = "0";
            } else {
                document.getElementById("navbar").style.top = "-128px";
            }
        }

    // When the user clicks on the button, scroll to the top of the document
    function topScroll() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    }

    // splide slide show
    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        centeredSlides: true,
        slidesPerView: 3,
        // effect: "cube",
        grabCursor: true,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        breakpoints: {
            320: {
            slidesPerView: 1,
            },
            480: {
            slidesPerView: 3,
            },
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        cubeEffect: {
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
        },
        on: {
            autoplayTimeLeft(s, time, progress) {
                const currentSlide = s.slides[s.activeIndex];
                const progressBar = currentSlide.querySelector(".progressBar");
                if (progressBar) {
                    const widthPercentage = parseFloat(progress) * 100;
                    progressBar.style.width = widthPercentage + "%";
                }
            },
        },
    });