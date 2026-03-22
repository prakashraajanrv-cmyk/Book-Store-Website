var swiper = new Swiper(".heroSwiper", {
  spaceBetween: 30,
  centerSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,
  speed: 300
});

var swiper2 = new Swiper(".heroSwiper2", {
  spaceBetween: 30,
  centerSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  loop: true,
  speed: 300
});

var swiper3 = new Swiper(".BookOnSalesSwiper", {
  spaceBetween: 20,
  slidesPerView: 4,
  centerSlides: false,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  loop: true,
  breakpoints: {
    "@0.00": {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    "@0.75": {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    "@1.00": {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    "@1.50": {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
  speed: 300

});

var swiper4 = new Swiper(".recommendedSwiper", {
  spaceBetween: 20,
  slidesPerView: 4,
  centerSlides: false,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  loop: true,
  breakpoints: {
    "@0.00": {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    "@0.75": {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    "@1.00": {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    "@1.50": {
      slidesPerView: 5,
      spaceBetween: 20,
    },
  },
  speed: 300

});

var swiper5 = new Swiper(".TestimonialsSwiper", {
  spaceBetween: 20,
  slidesPerView: 4,
  centerSlides: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  loop: true,
  breakpoints: {
    "@0.00": {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    "@0.75": {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    "@1.00": {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    "@1.50": {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  },
  speed: 300

});



var menu = document.getElementById("menu");
var close_btn = document.getElementById("close_btn");
var menu_btn = document.getElementById("menu_btn");
var menulinks = document.querySelectorAll(".menu_container .menu_list li a");
var mainheader = document.getElementById("main-header");
var threshold = 500;


function close() {
  if (window.innerWidth <= 800) {
    menu.style.transform = 'translateX(-100%)';
  }
}

close_btn.addEventListener("click", close);

menulinks.forEach((link) => {
  link.addEventListener("click", close)
})

menu_btn.addEventListener("click", function () {

  menu.style.transform = 'translateX(0%)';
});

window.addEventListener("scroll", function () {
  if (window.pageYOffset > threshold) {
    mainheader.classList.add("fixed-header");
  } else {
    mainheader.classList.remove("fixed-header");
  }
})


window.addEventListener("resize", () => {
  if (window.innerWidth > 800) {
    menu.style.transform = 'translateX(0%)';
  }
});

const sb = ScrollReveal({
  duration: 2500,
  delay: 800,
  mobile: false,
  origin: 'bottom',
  distance: '60px'
})

sb.reveal('.nav_container,.features_container .col .product_card,.featured_book,.books_grid .img_container,.content .client_group_container .img_container,.TestimonialsSwiper,.blog_card,.newsletter_inner,.footer_container .col,.view_more');
sb.reveal('.hero_container .col:nth-child(1),.trending_container .col:nth-child(1),.new_lauch_container .col:nth-child(1)', { origin: 'left' });
sb.reveal('.hero_container .col:nth-child(2),.trending_container .col:nth-child(2),.new_lauch_container .col:nth-child(2)', { origin: 'right' });
sb.reveal('.title_container h4', { delay: 200, origin: 'left' });
sb.reveal('.title_container h1', { delay: 500, origin: 'left' });
sb.reveal('.title_container p', { delay: 800, origin: 'left' });