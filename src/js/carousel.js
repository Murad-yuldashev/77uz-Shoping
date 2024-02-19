import { carouselData } from "../data/carousel-data";
const carouselBoxHead = document.querySelector(".carousel-box-head");
const carouselBoxBody = document.querySelector(".carousel-box-body");

let swiper = new Swiper(".mySwiper", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});

let swiper2 = new Swiper(".mySwiper2", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});

carouselData.forEach((carousel) => {
  let carouselHead = `<div class="swiper-slide lg:!h-[481px] md:!h-[320px] !h-[266px]">
                      <img src=${carousel.img} />
                    </div>`;
                  
  carouselBoxHead.insertAdjacentHTML('beforeend', carouselHead);
});

carouselData.forEach((carousel) => {
  let carouselBody = `<div class="swiper-slide">
                        <img src=${carousel.img} />
                      </div>`;

  carouselBoxBody.insertAdjacentHTML(carouselBody);
});
console.log(carouselData);
