    var swiper = new Swiper(".mySwiper-two", {
      slidesPerView: 3.2,
      spaceBetween: 30,
            navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });



     var swiper = new Swiper (".mySwiper-one", {
      loop:true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      autoplay: {
        delay: 6000,
        disableOnInteraction: false,
      },
      
      
   on: {
    slideChangeTransitionEnd: function () {
      const activeSlide = this.slides[this.activeIndex];
      const animatedEls = activeSlide.querySelectorAll('.animate__animated');

      animatedEls.forEach((el) => {
       
        const animClass = Array.from(el.classList).find(cls =>
          cls === 'animate__slideInLeft' || cls === 'animate__slideInRight'
        );

        if (animClass) {
          el.classList.remove(animClass);
          void el.offsetWidth; 
          el.classList.add(animClass);
        }
      });
    }
  }
  
      
    });