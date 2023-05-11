import { getParam } from './utils.mjs';
import { productDetails, addProductToCart, } from './productDetails.mjs';
import { findProductById } from './productData.mjs';

const productId = getParam('product');
productDetails(productId, '.product-detail');
// add to cart button event handler
async function addToCartHandler(e) {
  console.log(e);
  const product = await findProductById(e.target.dataset.id);
  addProductToCart(product);
}


// add listener to Add to Cart button
document
  .getElementById('addToCart')
  .addEventListener('click', addToCartHandler);

