import ProductList from './components/ProductList.svelte';
import Breadcrumb from './components/Breadcrumb.svelte';
import { getParam } from './utils.mjs';

const producttype = getParam('producttype');

new ProductList({
    target: document.querySelector('.products'),
    props: { category: producttype },
});

new Breadcrumb({
    target: document.querySelector('.breadcrumbs'),
    props: { category: producttype, page: 'List'},
});

