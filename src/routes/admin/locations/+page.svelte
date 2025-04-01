<script>
	import { enhance } from '$app/forms';
	import Warning from '$lib/components/Warning.svelte';
	import { slide } from 'svelte/transition';

	let { data, form } = $props();
	console.log(data);
</script>

<h1 class="text-center text-4xl font-bold text-gray-900 my-8">Admin Dashboard</h1>

<a href="/admin/locations/new" class="block mx-auto mb-6 w-fit px-6 py-3 bg-blue-600 text-white font-semibold text-lg rounded-lg shadow-md transition hover:bg-blue-700 hover:shadow-lg">
	+ Create New Event
</a>

{#if form && !form.success}
	<Warning message={form.message} />
{/if}

<div class="space-y-6">
	{#each data.locations as locations (locations.id)}
		<div class="flex justify-between items-center p-6 mx-auto w-4/5 bg-white border border-gray-300 rounded-lg shadow-sm transition hover:shadow-md" transition:slide>
			<div>
				<p class="text-xl font-semibold text-gray-800">{locations.name}</p>
				<p class="text-sm text-gray-500">Event ID: {locations.id}</p>
			</div>

			<form action="?/deleteLocation" method="POST" use:enhance class="m-0">
				<input type="hidden" name="id" value={locations.id} />
				<button type="submit" class="px-4 py-2 bg-red-600 text-white font-semibold rounded-md transition hover:bg-red-700">
					Delete
				</button>
			</form>
		</div>
	{/each}
</div>
