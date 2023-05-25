import ProductList from './components/ProductList.svelte';
import { getParam } from './utils.mjs';

const producttype = getParam('producttype');

new ProductList({
    target: document.querySelector('.products'),
    props: { category: producttype },
});

