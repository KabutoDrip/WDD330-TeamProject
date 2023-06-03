<script>
	export let modalContent;
</script>

<div on:click|self class='modal'>
	<div class='content'>
		<svelte:component on:click this={modalContent}/>
	</div>
</div>

<style>
	.modal {
		background-color: rgba(0, 0, 0, 0.047);
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	
	.content {
        border-radius: 10px;
		background-color: white;
		width: 20em;
		height: 20em;
        padding: 10px;
	}
</style>