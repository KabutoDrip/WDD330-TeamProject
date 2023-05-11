import { findProductById } from './productData.mjs';
import { getLocalStorage, setLocalStorage } from './utils.mjs';

export async function productDetails(productID, selector) {
    // use findProductById to get the details for the current product. findProductById will return a promise! use await or .then() to process it
    var product = await findProductById(productID);
    // once we have the product details we can render out the HTML
    console.log(product);
    document.querySelector('#productName').innerHTML = product.Name;
    document.querySelector('#productNameWithoutBrand').innerHTML = product.NameWithoutBrand;
    document.querySelector('#productImage').setAttribute('src', product.Image);
    document.querySelector('#productFinalPrice').innerHTML = product.FinalPrice;
    document.querySelector('#productDescriptionHtmlSimple').innerHTML = product.DescriptionHtmlSimple;
    document.querySelector('#addToCart').setAttribute('data-id', productID);
    

    // add a listener to Add to Cart button
}
export function addProductToCart(product) {
    setLocalStorage('so-cart', product);
}
export function removeProductFromCart(productID){
    var ls = getLocalStorage('so-cart');
    console.log(ls[0].Id);
    for (var i = 0; i < ls.length; i++) { 
        //console.log(ls[i]);  

        if (ls[i].Id == productID);
        var newv = ls.splice(i,1);
        console.log(newv);
        break;
    }
    
    //setLocalStorage('so-cart', new);
}

export function productDetailsTemplate(product) {
    return `${product.Name}`;
}