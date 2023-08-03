export const validationForm = () => {
  const errorList = [];
  const addErrorItem = (item) => errorList.push(item);

  const isValid = (result) => {
    if (errorList.length > 0) {
      result.innerHTML = `<div class="massage">you haven't answered:<div>`;
      errorList.forEach(
        (item) =>
          (result.innerHTML += `<div class="massage__item">${item}<div>`)
      );

      result.innerHTML += `<button class="btn massage__btn" onclick="document.location.reload()">ok</button>`;
    }
    return result;
  };
  return { addErrorItem, isValid };
};
