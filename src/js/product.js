import { renderHeaderFooter } from './utils.mjs';
import { getParam } from './utils.mjs';
import { productDetails, addProductToCart, } from './productDetails.mjs';
import { findProductById } from './externalServices.mjs';
import { setSuperScript } from './utils.mjs';
import Breadcrumb from './components/Breadcrumb.svelte';
renderHeaderFooter();

const productId = getParam('product');
const producttype = getParam('producttype');

new Breadcrumb({
  target: document.querySelector('.breadcrumbs'),
  props: { category: producttype, page: 'Single'},
});

productDetails(productId);
// add to cart button event handler
async function addToCartHandler(e) {
  console.log(e);
  const product = await findProductById(e.target.dataset.id);
  addProductToCart(product);
  setSuperScript();
}


// add listener to Add to Cart button
document
  .getElementById('addToCart')
  .addEventListener('click', addToCartHandler);

