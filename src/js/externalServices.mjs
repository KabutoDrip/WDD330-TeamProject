const baseURL = import.meta.env.VITE_SERVER_URL
const checkoutPath = baseURL + 'checkout/';

async function convertToJson(res) {
  let request = await res.json();
  // console.log(`request: ${request}`);
  // console.log(`res: ${res}`);
  // console.log(JSON.stringify(request));
  if (res.ok) {
    return request;
  } else {
    throw { name: 'servicesError', message: request };
  }
}

export async function getProductsByCategory(category) {
  const response = await fetch(baseURL + `products/search/${category}`);
  const data = await convertToJson(response);
  console.log(data.Result);
  return data.Result;
}
// I believe this is where the promise error is taking place

export async function findProductById(id, category) {
  const product = await fetch(baseURL + `product/${id}`);
  const data = await convertToJson(product);
  return data.Result;
}

export async function postCart (json) {
  const options = {
    method: 'POST',
    body: JSON.stringify(json),
    headers: {
      'Content-Type': 'application/json'
    }
};
return (await fetch(checkoutPath, options).then(convertToJson));
}