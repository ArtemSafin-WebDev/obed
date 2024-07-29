import Swiper from "swiper";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { SwiperOptions } from "swiper/types";

export default function reviewsSlider() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".js-reviews-slider")
  );

  elements.forEach((element) => {
    const container = element.querySelector<HTMLElement>(".swiper");
    if (!container) return;

    const options: SwiperOptions = {
      slidesPerView: 1,
      speed: 600,
      modules: [Navigation],
      autoHeight: true,
      spaceBetween: 30,
      loop: true,
      navigation: {
        prevEl: element.querySelector<HTMLButtonElement>(
          ".reviews__slider-arrow--prev"
        ),
        nextEl: element.querySelector<HTMLButtonElement>(
          ".reviews__slider-arrow--next"
        ),
      },
      breakpoints: {
        769: {
          slidesPerView: 2,
          spaceBetween: 30,
          autoHeight: false,
        },
      },
    };

    new Swiper(container, options);
  });
}
