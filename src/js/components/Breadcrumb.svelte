<script>
    import { getProductsByCategory } from "../externalServices.mjs";
    export let category;
    export let page;
    let promise
    if (page=='List') {
        promise = getProductsByCategory(category);
    }
    let prettycategory;
    if (category == "sleeping-bags") {
        prettycategory = "Sleeping Bags";
    }
    else {
        prettycategory = category.charAt(0).toUpperCase() + category.slice(1);
    }
</script>


{#if page == 'List'}
    {#await promise}
        Loading
    {:then products} 
        <p>{products.length} {prettycategory}</p>
    {/await}
{:else}
    <p>{prettycategory}</p>
{/if}
