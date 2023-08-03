import { createForm } from "../form/createForm.js";
import { createCloseButton } from "../createCloseButton.js";

const createInfoContent = (list, num, blockInfo) => {
  const buyBtn = document.createElement("a");
  buyBtn.textContent = "buy";
  buyBtn.classList.add("btn");

  const contentBlock = document.createElement("div");
  contentBlock.classList.add("info_block__content");

  contentBlock.innerHTML = `
       <div class="info_block__content__picture">
          <img src="${list[num].image}">
       </div>
       <h3 class="info_block__content__title">${list[num].title}</h3>
       <div class="info_block__content__description">description: ${list[num].description}</div>
       <h3 class="info_block__content__price">${list[num].price}$</h3>`;

  contentBlock.append(buyBtn);
  buyBtn.addEventListener("click", () =>
    createForm(list[num].title, blockInfo)
  );

  createCloseButton(contentBlock, blockInfo);
  blockInfo.append(contentBlock);
};

export { createInfoContent };
