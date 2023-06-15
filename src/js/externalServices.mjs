const baseURL = import.meta.env.VITE_SERVER_URL
const checkoutPath = baseURL + 'checkout/';

function convertToJson(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error('Bad Response');
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
  return (await fetch(checkoutPath, options)).json();
}

export async function loginRequest(user) {
  const options = {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json'
    }
  };
  return (await fetch(baseURL + 'login', options).then(convertToJson)).accessToken;
}

export async function getOrders(token) {
  const options = {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`
    }
  };
  return await fetch(baseURL + 'orders', options).then(convertToJson);
}