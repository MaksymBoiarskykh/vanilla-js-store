import { validationForm } from "./validationForm.js";

export const getResultForm = (formBlock, product) => {
  event.preventDefault();

  const formData = new FormData(formBlock);
  const container = document.querySelector(".product-block .container");
  container.classList.add("container_massage");
  container.innerHTML = `<div class="massage">you have bought - ${product}</div>`;

  const validationData = validationForm();
  for (const [name, value] of formData) {
    if (!value) validationData.addErrorItem(name);
    container.innerHTML += `<div class="massage__item">${name}: ${value}</div>`;
  }

  validationData.isValid(container);
  return container;
};
