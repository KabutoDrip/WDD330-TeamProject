<script>
    export let messages = [];
    // console.log("in alert :)")
    // console.log(messages)
    function deleteAlert(e) {
        let li = e.target.parentElement;
        li.remove();
        // console.log(this.dataset.message);
        // this.dataset.message.remove()
    }
</script>

<ul>
    {#each messages as message}
        <li>{message}<button on:click={deleteAlert}>X</button></li>
    {/each}
</ul>

<style>
    li {
        background-color: rgb(234, 167, 42);
        margin: 10px;
        /* padding: 5px; */
        display: inline-block;
        vertical-align: middle;
        padding: 10px;
        border-radius: 5px;
    }
    button {
        display: inline;
        background-color: rgb(234, 167, 42);
        color: black;
        float: right;
        padding:0;
    }
</style>