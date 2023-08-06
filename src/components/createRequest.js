import { request } from "./api.js";
import { createList } from "./productList/createList.js";

const createRequest = (item) => {
  const selectCase = async (typeProduct) => {
    const value = localStorage.getItem(typeProduct);
    // check if localStorage includes data
    if (value) {
      return createList(JSON.parse(value));
    }

    try {
      const res = await request(typeProduct);
      // add data to localStorage
      localStorage.setItem(typeProduct, JSON.stringify(res));
      return createList(res);
    } catch (err) {
      console.error(err);
    }
  };

  // event for creating a list of products
  return item.addEventListener("click", async () => {
    return await selectCase(event.target.textContent);
  });
};

export { createRequest };
