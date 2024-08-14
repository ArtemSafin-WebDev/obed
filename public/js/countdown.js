document.addEventListener("DOMContentLoaded", () => {
  function getTimeRemaining(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date());
    let seconds = Math.floor((t / 1000) % 60);
    let minutes = Math.floor((t / 1000 / 60) % 60);
    let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    let days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
      total: t,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  }

  const elements = Array.from(document.querySelectorAll(".js-countdown-timer"));

  elements.forEach((element) => {
    const deadline = element.getAttribute("data-deadline");
    const hours = element.querySelector(".js-hours");
    const minutes = element.querySelector(".js-minutes");
    const seconds = element.querySelector(".js-seconds");
    let timeinterval = setInterval(() => {
      const t = getTimeRemaining(deadline);
      hours.textContent = t.hours.toString().padStart(2, "0");
      minutes.textContent = t.minutes.toString().padStart(2, "0");
      seconds.textContent = t.seconds.toString().padStart(2, "0");

      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }, 1000);
  });
});
