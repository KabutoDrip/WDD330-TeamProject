<script>
    import {getOrders} from '../externalServices.mjs'

    let token = localStorage.getItem('so-token');
    let data = getOrders(token);


</script>

{#await data}
    Orders are loading
{:then orders} 
    <ul>
        {#each orders.slice(1,10) as order}
            <li>
                <h1>{order.fname}</h1>
                <p>Shipped to {order.city} on {order.orderDate.substring(0,9)}</p>
                <p>Number of items: {order.items.length}</p>
                <p>Order total: {order.orderTotal}</p>
            </li>
        {/each}
    </ul>
{/await}

