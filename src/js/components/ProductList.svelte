<script>
import { getData } from "../productData.mjs";
import ProductSummary from "./ProductSummary.svelte";
// this is how we make a prop in svelte
export let category;
// if you are looking at this thinking that's strange to just stop with a promise
// you would be right.  This will make more sense in a bit...stay tuned.
let promise = getData(category);
let prettycategory;
if (category == "sleeping-bags") {
    prettycategory = "Sleeping Bags";
}
else {
    prettycategory = category.charAt(0).toUpperCase() + category.slice(1);
}

</script>
<head>
<title>Sleep Outside | {prettycategory}</title>
</head>
<p>Top products: {prettycategory}</p>

{#await promise}
    Loading
{:then products}
    <ul class="product-list">
        {#each products as product}
            {#if product.Id != "989CG" && product.Id != "880RT"}
            <ProductSummary {product}/>
            {/if}
        {/each}
    </ul>
{/await}
