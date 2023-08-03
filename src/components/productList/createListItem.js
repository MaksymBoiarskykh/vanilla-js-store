const createListItem = (data) => {
  let result = "";

  data.forEach((item) => {
    result += `
      <li class="product-block__list__item">
        <div class="card">
            <div class="card__picture">
                <img src="${item.image}">
            </div>
            <div class="card__info">
                <h3>${item.title}</h3>
                <a href="#" class="btn">Show information</a>
            </div>
        </div>
      </li>
    `;
  });

  return result;
};

export { createListItem };
