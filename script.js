const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", ()=>{
    document.body.classList.toggle("show-mobile-menu");
    // Body te show-mobile-menu class thakle → toggle() remove kore dibe
    // Body te show-mobile-menu class na thakle → toggle() add kore dibe
})

// menuCloseButton e click korle menuOpenButton function call hobe 
menuCloseButton.addEventListener("click", ()=> menuOpenButton.click());


// Initialize swiper
const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  spaceBetween:25,
  grabCursor:true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable:true,
    dynamicBullets:true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // Responsive Breakpoints
  breakpoints:{
  0:{
    slidesPerView: 1
  },
  768:{
    slidesPerView: 2
  },
  1024:{
    slidesPerView: 3
  },
  }
});
