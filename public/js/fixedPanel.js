document.addEventListener("DOMContentLoaded", () => {
  let mm = gsap.matchMedia();

  mm.add("(max-width: 768px)", () => {
    ScrollTrigger.create({
      trigger: ".menu__fixed-panel-wrapper",
      pin: true,
      pinSpacing: false,
      start: "top top",
      markers: false,
      end: 999999999999,
    });
  });

  const btns = Array.from(
    document.querySelectorAll("button.menu__fixed-panel-btn")
  );

  console.log("Btns", btns);
  btns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      event.preventDefault();
      btns.forEach((otherBtn) => {
        if (otherBtn !== btn) {
          otherBtn.parentElement.classList.remove("active");
        }
      });
      btn.parentElement.classList.toggle("active");
    });
  });
});
