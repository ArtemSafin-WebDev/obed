import Swiper from "swiper";
import "swiper/css";
import { Navigation, Pagination } from "swiper/modules";

export default function gallerySlider() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".js-gallery-slider")
  );

  elements.forEach((element) => {
    const container = element.querySelector<HTMLElement>(".swiper");
    if (!container) return;

    new Swiper(container, {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 12,
      speed: 600,
      modules: [Navigation, Pagination],
      loop: false,
      pagination: {
        el: element.querySelector<HTMLElement>(".gallery-slider__pagination"),
        clickable: true,
      },
      navigation: {
        prevEl: element.querySelector<HTMLButtonElement>(
          ".gallery-slider__arrow--prev"
        ),
        nextEl: element.querySelector<HTMLButtonElement>(
          ".gallery-slider__arrow--next"
        ),
      },
      breakpoints: {
        641: {
          slidesPerView: 3,
          slidesPerGroup: 3,
        },
        769: {
          slidesPerView: 5,
          slidesPerGroup: 5,
        },
      },
    });
  });
}
