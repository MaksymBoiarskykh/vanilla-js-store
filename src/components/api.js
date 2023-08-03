const fakeLink = `https://fakestoreapi.com/products/category/`;

const request = async (type) => {
  const response = await fetch(`${fakeLink}${type}`);
  const data = await response.json();
  return data;
};

export { request };
