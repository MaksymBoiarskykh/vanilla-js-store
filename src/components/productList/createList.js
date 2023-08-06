import { createInfo } from "../productInfo/createInfo.js";
import { createListItem } from "./createListItem.js";

const createList = (data) => {
  const container = document.querySelector(".product-block .container");
  container.innerHTML = "";

  const listProduct = document.createElement("ul");
  listProduct.classList.add("product-block__list");

  // creating a product
  listProduct.innerHTML = createListItem(data);
  const createInfoBlock = createInfo();

  // event for creating information about product
  listProduct.addEventListener("click", () => {
    if (event.target.classList.contains("btn")) {
      const productName = event.target.previousElementSibling;
      createInfoBlock(data, productName.textContent);
    }
  });

  container.append(listProduct);
};

export { createList };
