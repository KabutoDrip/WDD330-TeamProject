import ProductList from './components/ProductList.svelte';
import { setSuperScript } from './utils.mjs';

new ProductList({
    target: document.querySelector('.products'),
    props: { category: 'tents' },
});

setSuperScript();
