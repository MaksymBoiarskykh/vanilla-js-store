import { createInfoContent } from "./createInfoContent.js";

const createInfo = () => {
  const mainBlock = document.querySelector("main");
  const blockInfoContainer = document.createElement("div");

  return (list, productName) => {
    let num = null;
    list.forEach((el, index) => {
      if (el.title === productName) {
        num = index;
      }
    });

    blockInfoContainer.innerHTML = "";
    blockInfoContainer.classList.add("container__modal");
    mainBlock.append(blockInfoContainer);

    return createInfoContent(list, num, blockInfoContainer);
  };
};

export { createInfo };
