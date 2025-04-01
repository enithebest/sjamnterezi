<script>
	import { enhance } from '$app/forms';
	import Warning from '$lib/components/Warning.svelte';
	import { slide } from 'svelte/transition';

	let { data, form } = $props();
	console.log(data);
</script>

<h1 class="text-4xl font-bold text-center text-gray-800 mb-6">Admin Dashboard</h1>
<a href="/admin/category/new" class="block w-fit mx-auto mb-6 px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-md transition-all hover:bg-blue-700">
	+ Create New Event
</a>

{#if form && !form.success}
	<Warning message={form.message} />
{/if}

{#each data.category as category (category.id)}
	<div class="flex justify-between items-center w-4/5 mx-auto p-5 mb-4 bg-white border border-gray-200 rounded-lg shadow-md transition-all hover:shadow-lg" transition:slide>
		<div>
			<p class="text-lg font-semibold text-gray-900">{category.title}</p>
			<p class="text-sm text-gray-600">Event ID: {category.id}</p>
		</div>

		<form action="?/deleteEvent" method="POST" use:enhance>
			<input type="hidden" name="id" value={category.id} />
			<button type="submit" class="px-4 py-2 bg-red-600 text-white font-semibold rounded-lg transition-all hover:bg-red-700">
				Delete
			</button>
		</form>
	</div>
{/each}