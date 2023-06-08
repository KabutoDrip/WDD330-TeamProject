<script>
    import { productDetails } from "../productDetails.mjs";
    import { onMount } from "svelte";
    export let productId;

    onMount(() => productDetails(productId, ".stuff"));
</script>

<div class="stuff">
	
</div>
<button on:click on:keydown>
	Close
</button>