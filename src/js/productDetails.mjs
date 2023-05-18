import { findProductById } from './productData.mjs';
import { setLocalStorage } from './utils.mjs';

export async function productDetails(productID, selector) {
    // use findProductById to get the details for the current product. findProductById will return a promise! use await or .then() to process it
    var product = await findProductById(productID);
    console.log(product);
    if (product === undefined) {
        let section = document.querySelector('.product-detail');
        section.innerHTML = '<h2>This product does not exist</h2>';
    } else {
        // once we have the product details we can render out the HTML
        document.querySelector('#productName').innerHTML = product.Name;
        document.querySelector('#productNameWithoutBrand').innerHTML = product.NameWithoutBrand;
        document.querySelector('#productImage').setAttribute('src', product.Image);
        document.querySelector('#productFinalPrice').innerHTML = product.FinalPrice;
        document.querySelector('#productDescriptionHtmlSimple').innerHTML = product.DescriptionHtmlSimple;
        document.querySelector('#addToCart').setAttribute('data-id', productID);
    }

    // add a listener to Add to Cart button
}
export function addProductToCart(product) {
    setLocalStorage('so-cart', product);
    document.querySelector('.cart').classList.add('wiggle');
    
    document.querySelector('.cart').addEventListener('animationend', (e) => {e.target.classList.remove('wiggle')});
}
export function productDetailsTemplate(product) {
    return `${product.Name}`;
}