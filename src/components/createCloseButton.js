export const createCloseButton = (container, uselessBlock) => {
  const closeBtn = document.createElement("a");
  closeBtn.textContent = "x";
  closeBtn.classList.add("close-btn");
  closeBtn.addEventListener("click", () => uselessBlock.remove());
  container.append(closeBtn);
};
