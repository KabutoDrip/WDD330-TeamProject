import { findProductById } from './productData.mjs';
import { getLocalStorage, setLocalStorage, setListToLocalStorage } from './utils.mjs';

export async function productDetails(productID, selector) {
    // use findProductById to get the details for the current product. findProductById will return a promise! use await or .then() to process it
    var product = await findProductById(productID);
    console.log(product);
    // check if the product exists
    if (product === undefined) {
        // send a error message if the product does not exist
        let section = document.querySelector('.product-detail');
        section.innerHTML = '<h2>This product does not exist</h2>';
    } else {
        // once we have the product details we can render out the HTML
        document.querySelector('#productName').innerHTML = product.Name;
        document.querySelector('#productNameWithoutBrand').innerHTML = product.NameWithoutBrand;
        document.querySelector('#productImage').setAttribute('src', product.Images.PrimaryLarge);
        document.querySelector('#productDiscount').innerHTML = `%${(product.FinalPrice / product.SuggestedRetailPrice).toFixed(2) * 100} Off`;
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
export function removeProductFromCart(e){
    let productID = e.target.id;
    if (e.target.nodeName != 'button'){
        productID = e.target.closest('button').id;
    }
    var ls = getLocalStorage('so-cart');
    const index = ls.findIndex(item => item.Id == productID)
    console.log(index)
    
        if (index >= 0){
            console.log('problem');
            ls.splice(index,1);
            setListToLocalStorage('so-cart', ls);
            //window.location.reload();        
        } 
}
export function increaseProductQuantity(e){

}
export function decreaseProductQuantity(e){
    
}
export function productDetailsTemplate(product) {
    return `${product.Name}`;
}