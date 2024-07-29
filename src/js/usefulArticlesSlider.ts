import Swiper from "swiper";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { SwiperOptions } from "swiper/types";

export default function usefulArticlesSlider() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".js-useful-articles-slider")
  );

  const mql = window.matchMedia("(max-width: 640px)");

  elements.forEach((element) => {
    const container = element.querySelector<HTMLElement>(".swiper");
    if (!container) return;

    const options: SwiperOptions = {
      slidesPerView: 1,
      speed: 600,
      modules: [Navigation],
      autoHeight: true,
      spaceBetween: 10,
      navigation: {
        prevEl: element.querySelector<HTMLButtonElement>(
          ".useful-articles__slider-arrow--prev"
        ),
        nextEl: element.querySelector<HTMLButtonElement>(
          ".useful-articles__slider-arrow--next"
        ),
      },
    };

    let instance: Swiper | null = null;

    const handleWidthChange = (e: MediaQueryListEvent | MediaQueryList) => {
      if (e.matches) {
        if (instance) instance.destroy();
        instance = new Swiper(container, options);
      } else {
        if (instance) instance.destroy();
        instance = null;
      }
    };

    mql.addEventListener("change", handleWidthChange);

    handleWidthChange(mql);
  });
}
