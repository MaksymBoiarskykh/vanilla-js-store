import { getResultForm } from "./getResultForm.js";
import { createCloseButton } from "../createCloseButton.js";

function createForm(product, contentBlock) {
  const formBlock = document.createElement("form");

  formBlock.classList.add("form-block");
  formBlock.innerHTML = `
     <form action="">
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
    </form>
    `;

  createCloseButton(formBlock, formBlock);
  document.querySelector("main").append(formBlock);

  formBlock.addEventListener("submit", () => {
    getResultForm(formBlock, product);
    contentBlock.remove();
    formBlock.remove();
  });
}

export { createForm };
