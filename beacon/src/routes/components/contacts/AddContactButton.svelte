<script lang="ts">
	import plusIcon from '$lib/icons/plus.svg';
</script>

<button class="btn bg-secondary-700 h-12 w-12 p-0">
	<img class="w-5" src={plusIcon} alt="Contacts" />
</button>

<style>
	.btn {
		align-items: center;
		justify-content: center;
	}

	img {
		filter: invert(1);
	}
</style>
