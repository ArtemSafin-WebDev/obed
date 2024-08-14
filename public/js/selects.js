document.addEventListener("DOMContentLoaded", () => {
  const elements = Array.from(document.querySelectorAll(".js-select"));

  console.log("Selects", elements);
  function initSelect(element) {
    const button = element.querySelector("button");
    const selectTextElement = element.querySelector(".js-select-text");
    const options = Array.from(element.querySelectorAll('input[type="radio"]'));

    const toggle = () => {
      element.classList.toggle("active");
    };

    const setSelected = (value) => {
      const checkedOption = options.find((option) => option.checked);
      if (checkedOption) {
        const value = checkedOption.value;
        const optionText = checkedOption.nextElementSibling?.textContent;
        console.log({ value, optionText });
        selectTextElement.textContent = optionText;
      }

      element.classList.remove("active");
    };

    button.addEventListener("click", (event) => {
      event.preventDefault();
      toggle();
    });

    options.forEach((option) => option.addEventListener("change", setSelected));

    document.addEventListener("click", (event) => {
      if (element.contains(event.target)) return;

      element.classList.remove("active");
    });

    setSelected();
  }

  elements.forEach((element) => initSelect(element));
});
