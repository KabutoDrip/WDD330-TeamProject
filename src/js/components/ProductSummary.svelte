<script>
    import MediaQuery from './MediaQuery.svelte'
    export let product = {};
</script>

<li class="product-card">
    <a href="../product_pages/index.html?product={product.Id}&producttype={product.Category}">
        <MediaQuery query='(min-width: 1281px)' let:matches>
            {#if matches}
            <img src={product.Images.PrimaryExtraLarge} alt="Image of {product.Name}"/>
            {/if}
        </MediaQuery>
        <MediaQuery query='(min-width: 1025px) and (max-width: 1280px)' let:matches>
            {#if matches}
            <img src={product.Images.PrimaryLarge} alt="Image of {product.Name}"/>
            {/if}
        </MediaQuery>
        <MediaQuery query='(min-width: 641px) and (max-width: 1024px)' let:matches>
            {#if matches}
            <img src={product.Images.PrimaryMedium} alt="Image of {product.Name}"/>
            {/if}
        </MediaQuery>
        <MediaQuery query='(max-width: 320px)' let:matches>
            {#if matches}
            <img src={product.Images.PrimarySmall} alt="Image of {product.Name}"/>
            {/if}
        </MediaQuery>
        <h3 class="card__brand">{product.Brand.Name}</h3>
        <h2 class="card__name">{product.Name}</h2>
        <p class="product-card__price">{product.ListPrice}</p>
        <p class="product-card_discount">%{(product.FinalPrice / product.SuggestedRetailPrice).toFixed(2) * 100} Off</p>
    </a>
</li>