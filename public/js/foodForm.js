document.addEventListener("DOMContentLoaded", () => {
  const elements = Array.from(document.querySelectorAll(".food__form"));

  elements.forEach((element) => {
    const input = element.querySelector(".counter__amount-input");

    console.log("Form input", input);
    element.addEventListener("submit", (event) => {
      event.preventDefault();
      if ($(element).parsley().isValid()) {
        element.classList.add("added");
      }
    });

    input.addEventListener("change", () => {
      element.classList.remove("added");
    });
  });
});
