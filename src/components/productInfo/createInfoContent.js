import { createForm } from "../form/createForm.js";
import { createCloseButton } from "../createCloseButton.js";

const createInfoContent = (list, num, blockInfoContainer) => {
  blockInfoContainer.innerHTML = `
       <div class="info_block">
           <div class="info_block__picture">
               <img src="${list[num].image}">
           </div>
           <h3 class="info_block__title">${list[num].title}</h3>
           <div class="info_block__description">description: ${list[num].description}</div>
           <h3 class="info_block__price">${list[num].price}$</h3>
           <a class="btn" id="buyBtn">Buy</a>
       <div>
       `;
  const infoBlock = document.querySelector(".info_block");
  createCloseButton(infoBlock, blockInfoContainer);

  const buyBtn = document.getElementById("buyBtn");
  buyBtn.addEventListener("click", () =>
    createForm(list[num].title, blockInfoContainer)
  );
};

export { createInfoContent };
