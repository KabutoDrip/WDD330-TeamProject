import { findProductById } from './productData.mjs';
import { getLocalStorage, setLocalStorage, setListToLocalStorage } from './utils.mjs';

export async function productDetails(productID, selector) {
    // use findProductById to get the details for the current product. findProductById will return a promise! use await or .then() to process it
    var product = await findProductById(productID);
    // check if the product exists
    if (product === undefined) {
        // send a error message if the product does not exist
        let section = document.querySelector('.product-detail');
        section.innerHTML = '<h2>This product does not exist</h2>';
    } else {
        // once we have the product details we can render out the HTML
        document.querySelector('#productName').innerHTML = product.Name;
        document.querySelector('#productNameWithoutBrand').innerHTML = product.NameWithoutBrand;
        document.querySelector('#productImage').setAttribute('src', product.Image);
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
var scount = 0
export function removeProductFromCart(e){
    const productID = e.target.id;
    var ls = getLocalStorage('so-cart');
    for (var i = 0; i < ls.length; i++) { 
        //console.log(ls[i].Id);  
        if (ls[i].Id == productID){
            ls.splice(i - scount,1);
            scount = scount++; //count that fixes a bug and only goes up when it hits something
            setListToLocalStorage('so-cart', ls);
            window.location.reload();        

            break;
        }
    }
    
}

export function productDetailsTemplate(product) {
    return `${product.Name}`;
}