import { createInfoContent } from "./createInfoContent.js";

const createInfo = () => {
  const mainBlock = document.querySelector("main");
  const blockInfo = document.createElement("div");

  return (list, productName) => {
    let num = null;
    list.forEach((el, index) => {
      if (el.title === productName) {
        num = index;
      }
    });

    blockInfo.innerHTML = "";
    blockInfo.classList.add("info_block");
    mainBlock.append(blockInfo);

    return createInfoContent(list, num, blockInfo);
  };
};

export { createInfo };
