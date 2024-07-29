import Swiper from "swiper";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { SwiperOptions } from "swiper/types";

export default function partnersSlider() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".js-partners-slider")
  );

  elements.forEach((element) => {
    const container = element.querySelector<HTMLElement>(".swiper");
    if (!container) return;

    const options: SwiperOptions = {
      slidesPerView: 2,
      speed: 600,
      modules: [Navigation],
      autoHeight: true,
      spaceBetween: 10,
      loop: true,
      navigation: {
        prevEl: element.querySelector<HTMLButtonElement>(
          ".partners__slider-arrow--prev"
        ),
        nextEl: element.querySelector<HTMLButtonElement>(
          ".partners__slider-arrow--next"
        ),
      },
      breakpoints: {
        641: {
          slidesPerView: 4,
          spaceBetween: 12,
        },
        769: {
          slidesPerView: 6,
          spaceBetween: 50,
          autoHeight: false,
        },
      },
    };

    new Swiper(container, options);
  });
}
