// create close function
export const createCloseButton = (container, uselessBlock) => {
  const closeBtn = document.createElement("a");
  closeBtn.textContent = "x";
  closeBtn.classList.add("close-btn");
  container.append(closeBtn);
  document.body.style.overflow = "hidden";

  closeBtn.addEventListener("click", () => {
    uselessBlock.remove();
    document.body.style.overflow = "";
  });

  uselessBlock.addEventListener("click", () => {
    uselessBlock.remove();
    document.body.style.overflow = "";
  });

  container.addEventListener("click", (e) => e.stopPropagation());
};
