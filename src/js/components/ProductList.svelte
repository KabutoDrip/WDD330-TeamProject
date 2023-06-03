<script>
import { getData } from "../productData.mjs";
import ProductSummary from "./ProductSummary.svelte";
import Modal from "./Modal.svelte";
import ModalContent from "./ModalContent.svelte";
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

// initialise modal state and content
let showModal = false;
let modalContent;
function toggleModal(component) {
    modalContent = component;
    showModal = !showModal;
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
                <button on:click={() => (toggleModal(ModalContent))} on:keydown={() => (toggleModal(ModalContent))}>
                    Quick Lookup
                </button>
                {#if showModal}
                    <Modal on:click={toggleModal} {modalContent} />
                {/if}
            {/if}
        {/each}
    </ul>
{/await}
