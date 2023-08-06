import { getResultForm } from "./getResultForm.js";
import { createCloseButton } from "../createCloseButton.js";

function createForm(product, contentBlock) {
  const formBlock = document.createElement("div");
  formBlock.classList.add("container__modal");

  const form = document.createElement("form");
  form.classList.add("form-block");
  form.innerHTML = `
        <div class="form-block__bit">
            <label for="full-name">Full name:</label>
            <input type="text" id="full-name" name="full-name">
        </div>
        <div class="form-block__bit">
            <label for="town">Choose a town:</label>
            <select id="town" name="town">
                <option value="Dnipro">Dnipro</option>
                <option value="Kyiv">Kyiv</option>
                <option value="Lviv">Lviv</option>
            </select>
        </div>
        <div class="form-block__bit">
            <label for="quantity"> Quantity of products purchased:</label>
            <input type="number" id="quantity" name="quantity">
        </div>
        <div class="form-block__bit">
            <input class="btn" type="submit" value="send">
        </div>
    `;

  document.querySelector("main").append(formBlock);
  formBlock.append(form);

  createCloseButton(form, formBlock);

  form.addEventListener("submit", () => {
    getResultForm(form, product);
    contentBlock.remove();
    formBlock.remove();
  });
}

export { createForm };
